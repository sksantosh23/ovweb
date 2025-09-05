const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const products = [
    { code: 'ehp', name: 'eHP', description: 'Enterprise Health Platform' },
    { code: 'oims', name: 'OIMS', description: 'Operations & Inventory Management System' },
    { code: 'paynet', name: 'PayNet', description: 'Payment Processing Network' },
    { code: 'clickconnect', name: 'ClickConnect', description: 'Customer Engagement Suite' },
    { code: 'blok', name: 'BloK', description: 'Blockchain Operations Kit' }
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { code: product.code },
      update: {},
      create: product
    });
  }
  
  console.log('✅ Products added:', products.map(p => p.name).join(', '));
}

main()
  .catch((e) => console.error('Error:', e))
  .finally(async () => await prisma.$disconnect());
