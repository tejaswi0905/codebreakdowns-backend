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
const prisma = prismaClientSingleton();
async function main() {
    const email = process.argv[2];
    const toggle = process.argv[3]?.toLowerCase();
    if (!email) {
        console.error("❌ Please provide the email of the user.");
        console.error("Usage: npx tsx src/scripts/setSuperUser.ts <email> [true/false]");
        console.error("Example: npx tsx src/scripts/setSuperUser.ts john@example.com true");
        process.exit(1);
    }
    const isSuperUser = toggle === "false" ? false : true; // Default to true if not specified as false
    // 1. Find the user
    const user = await prisma.user.findUnique({
        where: { email },
    });
    if (!user) {
        console.error(`❌ User with email "${email}" not found.`);
        console.error("Make sure the user has logged in at least once so their account exists in the database!");
        process.exit(1);
    }
    // 2. Update isSuperUser flag
    const updatedUser = await prisma.user.update({
        where: { email },
        data: { isSuperUser },
    });
    if (isSuperUser) {
        console.log(`\n🎉 Success! User "${updatedUser.email}" (${updatedUser.name}) is now a SUPER USER! 🦸‍♂️`);
        console.log("They automatically own all existing and future published paid courses without needing payment or checkout.");
    }
    else {
        console.log(`\n✅ User "${updatedUser.email}" (${updatedUser.name}) is no longer a Super User.`);
    }
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=setSuperUser.js.map