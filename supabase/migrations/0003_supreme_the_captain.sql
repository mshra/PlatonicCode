CREATE TABLE IF NOT EXISTS "topics" (
	"id" serial PRIMARY KEY NOT NULL,
	"topic_name" text NOT NULL,
	"description" text DEFAULT '',
	CONSTRAINT "topics_id_unique" UNIQUE("id")
);
