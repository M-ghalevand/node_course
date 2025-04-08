import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    await prisma.products.deleteMany();
    await prisma.user.deleteMany();

    const users = [
      { name: 'Alice', email: 'alice@example.com', password: 'password123' },
      { name: 'Bob', email: 'bob@example.com', password: 'password123' },
      { name: 'Charlie', email: 'charlie@example.com', password: 'password123' },
      { name: 'David', email: 'david@example.com', password: 'password123' },
      { name: 'Emma', email: 'emma@example.com', password: 'password123' },
      { name: 'Frank', email: 'frank@example.com', password: 'password123' },
      { name: 'Grace', email: 'grace@example.com', password: 'password123' },
      { name: 'Hannah', email: 'hannah@example.com', password: 'password123' },
      { name: 'Isaac', email: 'isaac@example.com', password: 'password123' },
      { name: 'Jack', email: 'jack@example.com', password: 'password123' }
    ];

    const createdUsers = [];
    for (const user of users) {
      const createdUser = await prisma.user.create({
        data: user
      });
      createdUsers.push(createdUser);
    }

    console.log(`${createdUsers.length} users inserted.`); // eslint-disable-line no-console

    const products = [];

    for (let i = 1; i <= 100; i++) {
      const title = `Product ${i}`;

      const price = i * 10;

      const userId = createdUsers[i % createdUsers.length].id;
      products.push({ title, price, user_id: userId });
    }

    console.log('products', products); // eslint-disable-line no-console

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