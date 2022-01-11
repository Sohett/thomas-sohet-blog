<template>
  <div>
    <img src="../assets/avatar.png" class='avatar' alt="">
    <h3 class="centered">
      {{ author.fields.name }}
    </h3>
    <p class="centered" style="font-size: 16px" v-html="markdown(author.fields.shortBio)"></p>
    <p class="centered">
      <a target="_blank" :href='author.fields.linkedin'>Linkedin</a> - <a target="_blank" :href="author.fields.github">Github</a> - <a target="_blank" :href="author.fields.twitter">Twitter</a>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    author () {
      return this.$store.state.author;
    },
  }
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  margin: 20px 0;
}


.avatar {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  margin-top: 40px;
  text-align: center;
  width: 15vh;
}

.centered {
  text-align: center;
}
</style>
