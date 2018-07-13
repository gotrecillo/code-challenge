import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
} from 'graphql';

import { Types } from 'mongoose';

import db from './db';

const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'This represents a Article',
  fields: () => ({
    author: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    excerpt: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLString,
    },
    published: {
      type: GraphQLBoolean,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    title: {
      type: GraphQLString,
    },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    articles: {
      type: new GraphQLList(articleType),
      resolve() {
        return db.Article.find();
      },
    },
    article: {
      type: articleType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(root, { id }) {
        return Types.ObjectId.isValid(id) ? db.Article.findById(id) : null;
      },
    },
  }),
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'This is a root Mutation',
  fields: () => ({
    deleteArticle: {
      type: articleType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(root, { id }) {
        return Types.ObjectId.isValid(id)
          ? db.Article.findByIdAndRemove(id)
          : null;
      },
    },
    createArticle: {
      type: articleType,
      args: {
        author: { type: new GraphQLNonNull(GraphQLString) },
        content: { type: new GraphQLNonNull(GraphQLString) },
        excerpt: { type: GraphQLString },
        published: { type: new GraphQLNonNull(GraphQLBoolean) },
        tags: { type: new GraphQLList(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(root, args) {
        const article = {
          excerpt: args.content.slice(0, 350),
          ...args,
        };

        return db.Article.create(article);
      },
    },
    updateArticle: {
      type: articleType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        author: { type: GraphQLString },
        content: { type: GraphQLString },
        excerpt: { type: GraphQLString },
        published: { type: GraphQLBoolean },
        tags: { type: GraphQLString },
        title: { type: GraphQLString },
      },
      resolve(root, { id, ...args }) {
        return db.Article.findByIdAndUpdate(id, args, { new: true });
      },
    },
  }),
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
