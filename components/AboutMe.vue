<template>
  <div>
    <img :src="author.fields.image.fields.file.url" class='avatar' alt="">
    <h3 class="centered">
      {{ author.fields.name }}
    </h3>
    <client-only>
      <p class="centered" style="font-size: 16px" v-html="markdown(author.fields.shortBio)"></p>
    </client-only>

    <p class="centered">
      <a target="_blank" :href='author.fields.linkedin'>Linkedin</a> - <a target="_blank" :href="author.fields.github">Github</a> - <a target="_blank" :href="author.fields.twitter">Twitter</a>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    author () {
      return this.$store.state.authors[0];
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  margin: 20px 0;
}

.centered {
  text-align: center;
}
</style>
