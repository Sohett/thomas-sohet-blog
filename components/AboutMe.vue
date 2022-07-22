<template>
  <div>
    <img src="https://images.ctfassets.net/ldb7xbbmychj/1Vje7pDtzHVtoTck4scG0C/31328fd76e214c3d67dd3ab07ebe0757/Thomas_Sohet_CV_picture_-_concrete_background_-_low_quality.png" class='avatar' alt="Thomas Sohet Avatar">
    <component :is="responsiveComponent" class="centered restyled-header">
      Thomas Sohet's blog
    </component>
    <p class="centered" style="font-size: 16px">Currently CTO @<a href="https://www.yago.be">Yago</a>, I am passionate about developing well crafted web products with talented people.</p>

    <p class="centered">
      <a target="_blank" href='https://www.linkedin.com/in/thomas-sohet-5291a868/'>Linkedin</a> - <a target="_blank" href="https://github.com/Sohett">Github</a> - <a target="_blank" href="https://twitter.com/thomas_sohet">Twitter</a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    author () {
      return this.$store.state.authors[0];
    },
    responsiveComponent () {
      return this.title ? 'h1' : 'h2'
    },
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

.restyled-header {
  font-size: 22px;
  font-weight: 550;
  margin-top: 30px;
  line-height: 2rem;
  color: var(--text-color);
}
</style>
