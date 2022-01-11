export default async ({ store }) => {
  await store.dispatch("getAuthor");
};
