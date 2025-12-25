const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  // Create demo user
  const hashedPassword = await bcrypt.hash('Demo123!', 12);
  
  try {
    const user = await prisma.user.upsert({
      where: { username: 'demo' },
      update: {},
      create: {
        username: 'demo',
        email: 'demo@omniverity.com',
        password: hashedPassword,
        accountKey: 'DEM-2024-TEST',
        product: 'ehp,oims,paynet,clickconnect,blok'
      }
      /* const adminUser = await prisma.user.upsert({
        where: { username: 'admin' },
        update: {},
        create: {
          username: 'admin',
          email: 'admin@omniverity.com',
          password: await bcrypt.hash('Admin123!', 12),
          accountKey: 'ADM-2024-MAIN',
          product: 'ehp,oims,paynet,clickconnect,blok'
        } **/
    });
    
    console.log('✅ Test user created/updated:', {
      username: user.username,
      email: user.email,
      accountKey: user.accountKey,
      products: user.product
    });
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
