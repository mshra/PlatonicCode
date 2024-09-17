import { eq } from "drizzle-orm";
import { db } from "@/db/db";
import { usersTable, SelectUser } from "@/db/schema/schema";

export async function getUserByEmail(email: SelectUser["email"]): Promise<
  Array<{
    id: number;
    name: string;
    email: string;
  }>
> {
  return db.select().from(usersTable).where(eq(usersTable.email, email));
}
