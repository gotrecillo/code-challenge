export const DELETE_ARTICLE_MUTATION = id => `
  mutation {
    deleteArticle(id: "${id}") {
      id
    }
  }
`;

export const CREATE_ARTICLE_MUTATION = ({ title, excerpt, content, author, published, tags}) => `
  mutation {
    createArticle(
      title: "${title}"
      content: "${content}"
      excerpt: "${excerpt ? excerpt : content.slice(0, 350)}"
      author: "${author}"
      published: ${published ? 'true': 'false'}
      tags: [${tags.split(',').map(tag => `"${tag}"`).join(', ')}]
    ) {
      id
    }
  }
`;

export const UPDATE_ARTICLE_MUTATION = ({ id, title, excerpt, content, author, published, tags}) => `
  mutation {
    updateArticle(
      id: "${id}"
      title: "${title}"
      content: "${content}"
      excerpt: "${excerpt ? excerpt : content.slice(0, 350)}"
      author: "${author}"
      published: ${published ? 'true': 'false'}
      tags: [${tags.split(',').map(tag => `"${tag}"`).join(', ')}]
    ) {
      id
    }
  }
`;
