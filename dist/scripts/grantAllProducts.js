import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import "dotenv/config";
const connectionString = process.env.DATABASE_URL;
const prismaClientSingleton = () => {
    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);
    return new PrismaClient({ adapter });
};
export const prisma = prismaClientSingleton();
async function main() {
    const email = process.argv[2];
    if (!email) {
        console.error("❌ Please provide the email of the user.");
        console.error("Usage: npx tsx src/scripts/grantAllProducts.ts <email>");
        process.exit(1);
    }
    // 1. Find the user
    const user = await prisma.user.findUnique({
        where: { email },
    });
    if (!user) {
        console.error(`❌ User with email ${email} not found.`);
        console.error("Make sure you log in to the frontend first so the user is created in the DB!");
        process.exit(1);
    }
    // 2. Fetch all products
    const allProducts = await prisma.product.findMany();
    if (allProducts.length === 0) {
        console.log("⚠️ No products found in the database. Create some in the admin panel first.");
        process.exit(0);
    }
    console.log(`Found ${allProducts.length} products. Granting access to ${user.email}...`);
    // 3. Create UserProduct (Receipts) for all products
    let grantedCount = 0;
    for (const product of allProducts) {
        // Check if they already own it
        const existing = await prisma.userProduct.findFirst({
            where: { userId: user.id, productId: product.id }
        });
        if (!existing) {
            await prisma.userProduct.create({
                data: {
                    userId: user.id,
                    productId: product.id,
                    transactionId: `dummy_tx_${Date.now()}_${product.id.substring(0, 5)}`
                }
            });
            console.log(`✅ Granted access to product: ${product.title}`);
            grantedCount++;
        }
        else {
            console.log(`⏭️ User already owns product: ${product.title}`);
        }
    }
    console.log(`\n🎉 Success! Granted ${grantedCount} new products to ${user.email}`);
    console.log("You can now log in as this user to test the paid experience.");
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=grantAllProducts.js.map