CREATE TABLE `catalog_administrators` (
	`email` text PRIMARY KEY NOT NULL,
	`user_id` text,
	`active` integer DEFAULT 1 NOT NULL,
	`created_at` text NOT NULL,
	`created_by` text NOT NULL
);
