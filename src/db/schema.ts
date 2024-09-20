import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: serial("id").unique().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  profilePicture: text("profile-picture"),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
