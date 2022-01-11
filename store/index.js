import client from "~/plugins/contentful";

export const state = () => ({
  posts: null,
  author: null,
});

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts;
  },
  updateAuthor: (state, author) => {
    state.author = author;
  }
};

export const actions = {
  async getPosts({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: "blogPost"
      });
      if (response.items.length > 0) commit("updatePosts", response.items);
    } catch (err) {
      console.error(err);
    }
  },
  async getAuthor({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: "author"
      });
      if (response.items.length > 0) commit("updateAuthor", response.items[0]);
    } catch (err) {
      console.error(err);
    }
  }
};
