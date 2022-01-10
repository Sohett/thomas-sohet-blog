<template>
  <div class="blog-article">
    <section class="container">
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
      <div
        class="image"
        :style="`
          background-image: url(https:${post.fields.heroImage.fields.file.url});
        `"
      ></div>
      <article style="margin-top: 40px" v-html="$md.render(post.fields.body)"></article>
    </section>
    <br>
    <about-me style="max-width: 1000px; margin-left: auto; margin-right: auto;"></about-me>
  </div>
</template>

<script>
import AboutMe from "@/components/AboutMe.vue";

export default {
  components: {AboutMe},
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

.back {
  width: 160px;
  padding: 8px;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: -4px;
}

.back:hover {
  background-color: #f4f5f7;
  a:hover {
    color: #5b87ff;
  }
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
  color: #818a9b
}

@media only screen and (max-width: 640px) {
  .blog-article {
    margin: 0px 8px;
  }

  .container {
    margin: 8px auto;
    padding: 10px 25px 50px;
  }
}
</style>
