import dotenv from "dotenv";
dotenv.config();

const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN
});

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      },
      { property: "og:title", content: "Thomas Sohet's blog" },
      { property: "og:site_name", content: "Thomas Sohet | Blog" },
      { property: "og:url", content: "https://www.thomas-sohet.com" },
      { property: "og:description", content: "This is just a simple blog about topics that are important to me, such as #tech, #product_mana, #management, #devOps. I share some of my thougths and experiences from my career." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://images.ctfassets.net/ldb7xbbmychj/6cyHtnmbpVjp2VzNZz9gfz/fb7f5c41b53a0b9221887ed4a3c70d46/Thomas_Sohet_CV_picture_-_concrete_background_-_low_quality.png" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/css/main.scss"],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type);
      }
    }
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/contentful", "~/plugins/posts", "~/plugins/authors"],
  /*
   ** Environment variables
   */
  env: {
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_ACCESSTOKEN: process.env.CONTENTFUL_ACCESSTOKEN,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT
  },
  generate: {
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: "blogPost"
        })
      ]).then(([blogEntries]) => {
        return [...blogEntries.items.map(entry => entry.fields.slug)];
      });
    }
  }
};
