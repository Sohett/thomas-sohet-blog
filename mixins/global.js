import { marked } from 'marked';

export default {
  methods: {
    markdown(src) {
      return marked(src);
    }
  }
}
