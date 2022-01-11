var md = require('markdown-it')();
var markdownItAttrs = require('markdown-it-attrs');

md.use(markdownItAttrs);

export default {
  methods: {
    markdown(src) {
      // render
      let res = md.render(src);

      return res;
    }
  }
}
