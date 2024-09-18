import { db } from "@/db/db";
import { usersTable, InsertUser } from "../schema";

export async function createUser(data: InsertUser) {
  await db.insert(usersTable).values(data);
}
