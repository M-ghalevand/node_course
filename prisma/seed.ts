import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    await prisma.products.deleteMany();
    await prisma.user.deleteMany();

    const users = [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' },
      { name: 'Charlie', email: 'charlie@example.com' },
      { name: 'David', email: 'david@example.com' },
      { name: 'Emma', email: 'emma@example.com' },
      { name: 'Frank', email: 'frank@example.com' },
      { name: 'Grace', email: 'grace@example.com' },
      { name: 'Hannah', email: 'hannah@example.com' },
      { name: 'Isaac', email: 'isaac@example.com' },
      { name: 'Jack', email: 'jack@example.com' }
    ];

    const createdUsers = await prisma.user.createMany({
      data: users
    });

    console.log(`${createdUsers.count} users inserted.`); // eslint-disable-line no-console

    const products = [];

    for (let i = 1; i <= 100; i++) {
      const title = `Product ${i}`;

      const price = i * 10;

      const userId = (i % 5) + 1;

      products.push({ title, price, user_id: userId });
    }

    console.log('products', products);

    const createdProducts = await prisma.products.createMany({
      data: products
    });

    console.log(`${createdProducts.count} products inserted.`); // eslint-disable-line no-console

    console.log('Seeding complete!'); // eslint-disable-line no-console
  } catch (err) {
    console.error('Error seeding data:', err); // eslint-disable-line no-console
  } finally {
    await prisma.$disconnect();
  }
}

seed();
