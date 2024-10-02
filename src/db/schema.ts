import { jsonb, pgTable, serial, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: serial("id").unique().primaryKey(),
  name: text("name").notNull(),
  userName: text("username").notNull().unique().default("username"),
  email: text("email").notNull().unique(),
  profilePicture: text("profile-picture"),
});

export const topicsTable = pgTable("topics", {
  id: serial("id").unique().primaryKey(),
  name: text("topic-name").notNull(),
  description: text("description").default(""),
  defaultValue: text("default_value"),
  testCases: jsonb("test_cases"),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertTopics = typeof topicsTable.$inferInsert;
export type SelectTopics = typeof topicsTable.$inferSelect;
