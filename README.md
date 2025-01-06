# TypeScript GraphQL Blog API

A GraphQL API built with TypeScript, Apollo Server, Prisma, and PostgreSQL.

## Technologies Used

- TypeScript
- Node.js
- GraphQL (Apollo Server)
- Prisma ORM
- PostgreSQL
- Docker

## Prerequisites

- Node.js (v14 or higher)
- Docker and Docker Compose
- npm or yarn
Installation and Setup

Clone the repository:

bashCopygit clone https://github.com/your-username/typescript-graphql-blog.git
cd typescript-graphql-blog

Install dependencies:

npm install

Copy environment file:

.env.example .env

Start Docker services:

 run docker:up

Set up database:

bashCopynpx prisma generate
npx prisma migrate dev
npx prisma db seed

Start development server:

bashCopynpm run dev
Access the GraphQL playground at: http://localhost:4000/graphql
Available Scripts

npm run dev - Start development server
npm run build - Build for production
npm start - Run production server
npm run docker:up - Start Docker containers
npm run docker:down - Stop Docker containers
npm run prisma:generate - Generate Prisma client
npm run prisma:studio - Open Prisma database GUI

Environment Variables
DATABASE_URL="postgresql://bloguser:blogpass@localhost:5432/blog_db?schema=public"
PORT=4000
Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f
GraphQL Examples
Query users:
graphqlCopyquery {
  users {
    id
    name
    email
    posts {
      title
      content
    }
  }
}
Create post:
graphqlCopymutation {
  createPost(
    title: "Hello World"
    content: "This is my first post"
    authorId: "1"
  ) {
    id
    title
    author {
      name
    }
  }
}