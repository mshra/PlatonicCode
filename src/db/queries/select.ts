"use server";
import { db } from "@/db/db";
import { topicsTable } from "@/db/schema";
import { Topic } from "@/types/types";
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

export async function getTopicsList(): Promise<Topic[]> {
  return db.select().from(topicsTable) as unknown as Promise<Topic[]>;
}

export async function getTopic(topicName: string): Promise<Topic | undefined> {
  const topicsList = await getTopicsList();
  return topicsList.find((topic) => topic.name === topicName);
}
