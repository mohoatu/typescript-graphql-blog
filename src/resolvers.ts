import { Context } from './context';

export const resolvers = {
  Query: {
    users: async (_parent: any, _args: any, ctx: Context) => {
      return ctx.prisma.user.findMany({
        include: { posts: true }
      });
    },
    user: async (_parent: any, { id }: { id: string }, ctx: Context) => {
      return ctx.prisma.user.findUnique({
        where: { id: parseInt(id) },
        include: { posts: true }
      });
    },
    posts: async (_parent: any, _args: any, ctx: Context) => {
      return ctx.prisma.post.findMany({
        include: { author: true }
      });
    },
    post: async (_parent: any, { id }: { id: string }, ctx: Context) => {
      return ctx.prisma.post.findUnique({
        where: { id: parseInt(id) },
        include: { author: true }
      });
    },
  },
  Mutation: {
    createUser: async (_parent: any, { name, email }: { name: string, email: string }, ctx: Context) => {
      return ctx.prisma.user.create({
        data: { name, email },
      });
    },
    createPost: async (_parent: any, 
      { title, content, authorId }: { title: string, content?: string, authorId: string }, 
      ctx: Context) => {
      return ctx.prisma.post.create({
        data: {
          title,
          content,
          published: false,
          author: { connect: { id: parseInt(authorId) } }
        },
      });
    },
    publishPost: async (_parent: any, { id }: { id: string }, ctx: Context) => {
      return ctx.prisma.post.update({
        where: { id: parseInt(id) },
        data: { published: true }
      });
    },
  },
};