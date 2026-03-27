const { pgTable, serial, text, integer, timestamp } = require("drizzle-orm/pg-core");

// USERS TABLE
const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});

// FILES TABLE
const files = pgTable("files", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id, {
      onDelete: "cascade",
      onUpdate: "cascade"
    }),

  originalName: text("original_name").notNull(),
  storedName: text("stored_name").notNull(),
  path: text("path").notNull(),
  size: integer("size"),

  createdAt: timestamp("created_at").defaultNow()
});

module.exports = { users, files };