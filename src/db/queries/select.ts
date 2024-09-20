"use server";
import { db } from "@/db/db";
import { eq } from "drizzle-orm";
import { SelectUser, usersTable } from "../schema";

export async function getUserByEmail(email: SelectUser["email"]): Promise<
  Array<{
    id: number;
    name: string;
    email: string;
    profilePicture: string | null;
  }>
> {
  return db.select().from(usersTable).where(eq(usersTable.email, email));
}
