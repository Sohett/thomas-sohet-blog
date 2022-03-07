<template>
  <div class="blog-article">
    <modal name="imageModal" :adaptative="true" width="80%" height="auto">
      <img :src="modalImgSrc" class="image-modal">
    </modal>
    <section class="container">
      <toggle-theme></toggle-theme>
      <p class="back">
        <nuxt-link exact to="/">← Back to Home</nuxt-link>
      </p>
      <div v-if="post">
        <h1>{{ post.fields.title }}</h1>
        <p class="blog-details">
          <span>Published: {{ humanDate(post.fields.publishDate) }} | </span>
          <span><img style="width: 18px; height: 18px; margin-bottom: -3px; margin-right: 4px" src="../assets/reading-icon.svg"/>{{ post.fields.readingTime }} min read | </span>
          <span v-for="tag in post.fields.tags" :key="tag" class='hashtag' style="margin: 2px 6px 2px 0px">
            {{ tag }}
          </span>
        </p>
        <img class="image" :src="post.fields.heroImage.fields.file.url" :alt="post.fields.heroImage.fields.title">
        <article v-html="markdown(post.fields.body)"></article>
      </div>
      <div v-else>
        This post seems to be still a work in progress. Come a little later to see if it has been published.
      </div>
    </section>
    <br>
    <about-me style="max-width: 1000px; margin-left: auto; margin-right: auto;"></about-me>
  </div>
</template>

<script>
import AboutMe from "@/components/AboutMe.vue";
import ToggleTheme from '../components/ToggleTheme.vue';

export default {
  components: {AboutMe, ToggleTheme},
  data() {
    return {
      slug: this.$route.params.slug,
      modalImgSrc: null
    };
  },
  mounted () {
    const article = document.querySelector("article");
    article.querySelectorAll('img').forEach(link => {
      link.addEventListener('click', this.toggleModal);
    });
  },
  destroyed() {
    this.$el.removeEventListener('click', this.toggleModal);
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
    },
    toggleModal (el) {
      this.modalImgSrc = el.srcElement.currentSrc;
      this.$modal.show('imageModal');
    }
  },
  head() {
    return {
      title: this.post ? this.post.fields.title : '',
      meta: [
        { property: "og:title", content: this.post.fields.title },
        { property: "og:site_name", content: "Thomas Sohet | Blog" },
        { property: "og:url", content: this.post.fields.slug },
        { property: "og:description", content: this.post.fields.description },
        { property: "og:type", content: "article" },
        { property: "og:image", content: `https:${this.post.fields.heroImage.fields.file.url}` }
      ]
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
  height: 100%;
  margin: 8px 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: none;
}

.image-modal {
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: none;
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
    padding: 10px 18px 50px;
  }
}
</style>
