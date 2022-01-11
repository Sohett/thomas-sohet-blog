var md = require('markdown-it')();
var markdownItAttrs = require('markdown-it-attrs');

md.use(markdownItAttrs);

export default {
  methods: {
    markdown(src) {
      // render
      let res = md.render(src);

      // pretty print

      // res = res.replace(/\>\n/g, '>\n\n');
      // res = res.replace(/\>\</g, '>\n<');
      // res = res.replace(/\</g, '&lt;');
      // res = res.replace(/\>/g, '&gt;');

      return res;
    }
  }
}
