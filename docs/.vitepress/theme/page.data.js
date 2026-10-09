import { createContentLoader } from "vitepress";
export default createContentLoader('posts/*.md', {
    excerpt: true,
  includeSrc: false,
  transform(raw) {
    return raw
      .map(({ url, frontmatter,excerpt}) => ({
        title: frontmatter.title,
        url,
        date: frontmatter.date,
        description: frontmatter.description,
        excerpt: excerpt
      }))
      .sort((a, b) => (b.date > a.date ? 1 : -1))
  },
})