<template>
  <div class="blog-article">
    <client-only>
      <section class="container">
        <toggle-theme></toggle-theme>
        <p class="back">
          <nuxt-link exact to="/">← Back to Home</nuxt-link>
        </p>
        <h1>{{ post.fields.title }}</h1>
        <p class="blog-details">
          <span>Published: {{ humanDate(post.fields.publishDate) }} | </span>
          <span v-for="tag in post.fields.tags" :key="tag" class='hashtag' style="margin: 2px 6px 2px 0px">
            {{ tag }}
          </span>
        </p>
        <img
        style="
          margin-top: 20px;
          width: 100%;
          background-size: cover;
          background-position: center;
          border-radius: 10px;
          box-shadow: none;"
        :src="post.fields.heroImage.fields.file.url" :alt="post.fields.heroImage.fields.title">
        <article style="margin-top: 40px;" v-html="markdown(post.fields.body)"></article>
      </section>
      <br>
      <about-me style="max-width: 1000px; margin-left: auto; margin-right: auto;"></about-me>
    </client-only>
  </div>
</template>

<script>
import AboutMe from "@/components/AboutMe.vue";
import ToggleTheme from '../components/ToggleTheme.vue';

export default {
  components: {AboutMe, ToggleTheme},
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  computed: {
    post() {
      let post = this.$store.state.posts.filter(
        el => el.fields.slug === this.slug
      );
      return post[0];
    }
  },
  methods: {
    humanDate(date) {
      return new Date(date).toDateString();
    }
  },
  head() {
    return {
      title: this.post.fields.title
    };
  }
};
</script>

<style lang="scss" scoped>
.blog-article {
  margin: 0px 20px;
}

.image {
  width: 100%;
  height: 300px;
  margin: 30px 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.blog-details {
  margin: 15px 0;
  font-size: 14px;
}

@media only screen and (max-width: 640px) {
  .blog-article {
    margin: 0px 10px;
  }

  .container {
    margin: 8px auto;
    padding: 10px 20px 50px;
  }
}
</style>
