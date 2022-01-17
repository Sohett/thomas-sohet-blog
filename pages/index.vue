<template>
  <div style="margin: 0 12px;">
    <div class="header">
      <toggle-theme/>
      <about-me/>
      <client-only><p style="text-align: center;" v-html="markdown(author.fields.goal)"></p></client-only>
    </div>
    <div class="blog-posts">
      <section class="blog-post" v-for="post in posts" :key="post.fields.slug">
        <div
          class="image"
          :style="`
            background-image: url(https:${post.fields.heroImage.fields.file.url});
            background-position: center;
            background-size: cover;
            box-shadow: none;
            border-radius: 10px 0 0 10px;
          `"
        ></div>
        <h2 class="title">
          <nuxt-link :to="post.fields.slug">{{ post.fields.title }}</nuxt-link>
        </h2>
        <div class="blog-post-overview">
          <p class="description">
            {{ post.fields.description }}
          </p>
          <p class="blog-details">
            <span>Published: {{ humanDate(post.fields.publishDate) }} | </span>
            <span v-for="tag in post.fields.tags" :key="tag" class='hashtag' style="margin: 2px 6px 2px 0px">
              {{ tag }}
            </span>
          </p>
          <nuxt-link :to="post.fields.slug" class="more">Read more →</nuxt-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import AboutMe from '../components/AboutMe.vue';
import ToggleTheme from '../components/ToggleTheme.vue';

export default {
  components: {AboutMe, ToggleTheme},
  data () {
    return {
      defaultAuthor: {
        fields: {
          goal: '',
          heroImage: { fields: { file: { url: '' } } }
        }
      }
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    author () {
      return this.$store.state.authors[0];
    }
  },
  methods: {
    humanDate(date) {
      return new Date(date).toDateString();
    }
  },
  head: {
    title: "Thomas Sohet | Blog"
  }
};
</script>

<style lang="scss" scoped>
main {
  margin: 0px 20px;
}

section {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  padding: 30px 0;

  h2 {
    font-size: 20px;
    padding-bottom: 0;
    border: none;
  }

  p {
    margin-top: 0;
    font-size: 16px;
  }
}

.image {
  height: 100%;
  grid-area: 1 / 1 / 4 / 3;
  opacity: 0.8;
}
.title {
  margin-top: 10px;
  margin-right: 8px;
  grid-area: 1 / 3 / 2 / 6;
}

.blog-post-overview {
  grid-area: 2 / 3 / 3 / 6;
  height: auto;
  min-height: 100px;
  padding-bottom: 10px;
}

.description {
  margin-right: 10px;
}

.blog-details {
  margin: 10px 0;
  margin-right: 8px;
  font-size: 14px;
}

.header {
  margin-top: 50px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  color: #434750;
  font-size: 16px;
}

.blog-posts {
  margin: 20px auto;
  max-width: 1000px;
}

.blog-post {
  margin: 50px auto;
  padding: 0px;
  border-radius: 10px;
  overflow: hidden;
}

@media only screen and (max-width: 640px) {
  section {
    grid-template-columns: none;
    grid-row-gap: 0;
    grid-column-gap: 10px;
  }

  .description {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 15px;
  }

  .title {
    margin-top: 20px;
    margin-bottom: 0;
  }

  h2 {
    line-height: 1.5rem;
  }

  .image {
    display: none;
  }

  .blog-details {
    margin: 20px 0;
    margin-right: 8px;
  }

  .blog-post-overview {
    padding-bottom: 25px;
  }
}

</style>
