<template>
  <div class="theme-toggle">
    <button class="theme-toggle-button" @click="toggleTheme" aria-label="Toggle themes">
      <span v-show="this.theme == 'darkMode'"><img src="../assets/bright-icon.svg" alt="Light Theme icon"/></span>
      <span v-show="this.theme != 'darkMode'"><img src="../assets/moon-icon.svg" alt="Dark Theme icon"/></span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: '',
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme == 'darkMode' ? '' : 'darkMode'; //toggles theme value
      document.documentElement.setAttribute('data-theme', this.theme); // sets the data-theme attribute
      localStorage.setItem('theme', this.theme); // stores theme value on local storage
    }
  },
  create () {
    let osTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'darkMode' : '';
    localStorage.setItem('theme', osTheme);
  },
  mounted () {
    let theme = localStorage.getItem('theme');
    this.theme = theme;
    document.documentElement.setAttribute('data-theme', theme); // updates the data-theme attribute
  }
}
</script>
