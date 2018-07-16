export const ARTICLES_QUERY = _ => `{
  articles {
    author
    excerpt
    id
    title
  }
}`;

export const ARTICLE_QUERY = id => `{
  article(id: "${id}") {
    id
    author
    content
    tags
    title
    excerpt
    published
  }
}`;
