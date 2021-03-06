import client from "~/plugins/contentful";

export const state = () => ({
  posts: null,
  authors: null,
});

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts;
  },
  updateAuthors: (state, authors) => {
    state.authors = authors;
  }
};

export const actions = {
  async getPosts({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: "blogPost"
      });
      if (response.items.length > 0) {
        const posts = process.env.NODE_ENV == 'development' ? response.items : response.items.filter(item => !item.fields.workInProgress)
        commit("updatePosts", posts);
      }
    } catch (err) {
      console.error(err);
    }
  },
  async getAuthors({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: "author"
      });
      if (response.items.length > 0) commit("updateAuthors", response.items);
    } catch (err) {
      console.error(err);
    }
  }
};
