<template>
  <main>
    <header class="header">
      <about-me></about-me>
      <p style="text-align: center">This is just a simple blog about <span class="hashtag">#tech</span> <span class="hashtag">#product mana</span> <span class="hashtag">#managing engineers</span> <span class="hashtag">#devOps</span>. I just share some of my thoughts and experiences from my career. Hopefully you can find some interesting pieces for you. Don't hesitate to reach out to discuss more about it.</p>
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
        <p class="description">
          {{ post.fields.description }}
          <br><br>
          <nuxt-link :to="post.fields.slug" class="more">Read more ⟶</nuxt-link>
        </p>
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
  head: {
    title: "Thomas Sohet, Blog posts"
  }
};
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 20px 20px 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding: 30px 0;
  min-height: 250px;

  h2 {
    font-size: 20px;
  }

  p {
    margin-top: 0;
    font-size: 16px;
  }
}

@media only screen and (max-width: 600px) {
  section {
    grid-template-rows: 40px 20px 1fr;
  }
}

.image {
  grid-area: 1 / 1 / 4 / 3;
  opacity: 0.8;
}
.title {
  margin: 20px 0;
  grid-area: 1 / 3 / 2 / 6;
}
.description {
  grid-area: 2 / 3 / 3 / 6;
}
// .description {
//   grid-area: 3 / 3 / 4 / 6;
// }

.more {
  color: #5b87ff;
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
  border: #f4f5f7;
  border-width: 1px;
  border-style: solid;
}
</style>
