<template>
  <main>
    <header class="header">
      <about-me></about-me>
      <p style="text-align: center">This is just a simple blog about topics that seems important to me like <span class="hashtag">#tech</span> <span class="hashtag">#product mana</span> <span class="hashtag">#management</span> <span class="hashtag">#devOps</span>. I just share some of my thoughts and experiences from my career. Hopefully you can find some interesting pieces for you. Don't hesitate to reach out (through <a href="https://www.linkedin.com/in/thomas-sohet-5291a868/">Linkedin</a>) to discuss more about it.</p>
    </header>
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
            <span>{{ humanDate(post.fields.publishDate) }}</span>
            <span v-for="tag in post.fields.tags" :key="tag" class='hashtag' style="margin: 0px 5px">
              {{ tag }}
            </span>
          </p>
          <nuxt-link :to="post.fields.slug" class="more">Read more →</nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import AboutMe from '../components/AboutMe.vue';

export default {
  components: {AboutMe},
  computed: {
    posts() {
      return this.$store.state.posts;
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
  grid-template-rows: 20px 20px 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding: 30px 0;
  min-height: 260px;

  h2 {
    font-size: 20px;
  }

  p {
    margin-top: 0;
    font-size: 16px;
  }
}

@media only screen and (max-width: 640px) {
  section {
    grid-template-columns: none;
  }
}

@media only screen and (max-width: 640px) {
  .image {
    display: none;
  }
}

.image {
  height: 100%;
  grid-area: 1 / 1 / 4 / 3;
  opacity: 0.8;
}
.title {
  margin: 15px 0;
  grid-area: 1 / 3 / 2 / 6;
}

.blog-post-overview {
  grid-area: 2 / 3 / 3 / 6;
  height: auto;
  min-height: 100px;
}

.description {
  margin: 20px 10px 10px 0;
}

.blog-details {
  margin: 4px 0;
  font-size: 14px;
  color: #818a9b
}

.more {
  margin-bottom: 20px;
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
  background-color: #ffffff;
  margin: 50px auto;
  padding: 0px;
  border-radius: 10px;
  box-shadow: 0px 3px 20px 0px rgba(107, 114, 128, 0.2);
  overflow: hidden;
}
</style>
