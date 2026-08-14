import { getActiveProductsDb } from "./src/modules/products/products.dbService.js";
import { getPurchasedCoursesDb } from "./src/modules/courses/courses.dbService.js";
import { prisma } from "./src/config/prisma.js";

async function run() {
  console.log("=== Active Products ===");
  const products = await getActiveProductsDb();
  console.log(JSON.stringify(products, null, 2));

  const user = await prisma.user.findFirst({
    where: { role: "STUDENT" }
  });

  if (user) {
    console.log("\n=== Purchased Courses for User ===");
    const courses = await getPurchasedCoursesDb(user.id);
    console.log(JSON.stringify(courses, null, 2));
  } else {
    console.log("No student found");
  }

  process.exit(0);
}
run().catch(console.error);
