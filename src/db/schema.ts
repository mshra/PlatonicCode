import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: serial("id").unique().primaryKey(),
  name: text("name").notNull(),
  userName: text("username").notNull().unique().default("username"),
  email: text("email").notNull().unique(),
  profilePicture: text("profile-picture"),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
