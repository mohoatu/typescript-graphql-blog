import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clean the database
  await prisma.post.deleteMany({})
  await prisma.user.deleteMany({})

  console.log('Seeding database...')

  // Create users
  const john = await prisma.user.create({
    data: {
      email: 'john@example.com',
      name: 'John Doe',
      posts: {
        create: [
          {
            title: 'Introduction to GraphQL',
            content: 'GraphQL is a query language for APIs...',
            published: true,
          },
          {
            title: 'Why TypeScript?',
            content: 'TypeScript adds optional static types to JavaScript...',
            published: true,
          },
        ],
      },
    },
  })

  const jane = await prisma.user.create({
    data: {
      email: 'jane@example.com',
      name: 'Jane Smith',
      posts: {
        create: [
          {
            title: 'Getting Started with Prisma',
            content: 'Prisma is a next-generation ORM...',
            published: true,
          },
          {
            title: 'Docker for Beginners',
            content: 'Docker containers make it easy to...',
            published: false,
          },
        ],
      },
    },
  })

  const bob = await prisma.user.create({
    data: {
      email: 'bob@example.com',
      name: 'Bob Wilson',
      posts: {
        create: [
          {
            title: 'PostgreSQL Tips and Tricks',
            content: 'Here are some useful PostgreSQL tips...',
            published: true,
          }
        ],
      },
    },
  })

  console.log({ john, jane, bob })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })