import db from "#db/client";
import { createEmployee } from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  for (let i = 0; i < 10; i++) {
    const employee = {
      name: "employee" + i,
      birthday: "1994-01-24",
      salary: 120000,
    };
    await createEmployee(employee);
  }
}
