-- ALTER TABLE "topics" ALTER COLUMN "default_value" DROP DEFAULT;--> statement-breakpoint
-- ALTER TABLE "topics" ADD COLUMN "test_cases" text;
ALTER TABLE "topics" ADD COLUMN "default_value" text;
ALTER TABLE "topics" ADD COLUMN "test_cases" text;
