import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const sgsg9447 = await prisma.user.upsert({
    where: { email: 'sgsg9447@prisma.io' },
    update: {},
    create: {
      email: 'sgsg9447@github.com',
      name: '김슬기',
      reviewPosts: {
        create: {
          title: 'Check out Prisma with Next.js',
          content: 'https://www.prisma.io/nextjs',
        },
      },
    },
  });
  const jyhisgood = await prisma.user.upsert({
    where: { email: 'jyhisgood@prisma.io' },
    update: {},
    create: {
      email: 'jyhisgood@prisma.io',
      name: '조영훈',
      reviewPosts: {
        create: [
          {
            title: 'Follow Prisma on Twitter',
            content: 'https://twitter.com/prisma',
          },
          {
            title: 'Follow Nexus on Twitter',
            content: 'https://twitter.com/nexusgql',
          },
        ],
      },
    },
  });
  console.log({ sgsg9447, jyhisgood });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
