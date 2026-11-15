CREATE TABLE `catalog_audit` (
	`id` text PRIMARY KEY NOT NULL,
	`actor_id` text NOT NULL,
	`action` text NOT NULL,
	`product_id` integer,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `catalog_metadata` (
	`key` text PRIMARY KEY NOT NULL,
	`value` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `catalog_products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`draft` text NOT NULL,
	`published` text,
	`archived` integer DEFAULT 0 NOT NULL,
	`version` integer DEFAULT 1 NOT NULL,
	`updated_at` text DEFAULT '' NOT NULL,
	`updated_by` text DEFAULT '' NOT NULL
);
