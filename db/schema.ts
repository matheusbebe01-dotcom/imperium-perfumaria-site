import { sqliteTable, integer, text, primaryKey } from 'drizzle-orm/sqlite-core';
export const products=sqliteTable('catalog_products',{
  id:integer('id').primaryKey({autoIncrement:true}),
  draft:text('draft').notNull(),
  published:text('published'),
  archived:integer('archived').notNull().default(0),
  version:integer('version').notNull().default(1),
  updatedAt:text('updated_at').notNull().default(''),
  updatedBy:text('updated_by').notNull().default(''),
});
export const metadata=sqliteTable('catalog_metadata',{
  key:text('key').primaryKey(),value:text('value').notNull(),
});
export const audit=sqliteTable('catalog_audit',{
  id:text('id').primaryKey(),actorId:text('actor_id').notNull(),
  action:text('action').notNull(),productId:integer('product_id'),
  createdAt:text('created_at').notNull(),
});
export const administrators=sqliteTable('catalog_administrators',{
  email:text('email').primaryKey(),userId:text('user_id'),
  active:integer('active').notNull().default(1),
  createdAt:text('created_at').notNull(),createdBy:text('created_by').notNull(),
});
export const adminAccounts=sqliteTable('admin_accounts',{
  id:text('id').primaryKey(),email:text('email').notNull().unique(),
  passwordHash:text('password_hash').notNull(),salt:text('salt').notNull(),
  active:integer('active').notNull().default(1),createdAt:text('created_at').notNull(),
});
export const adminSessions=sqliteTable('admin_sessions',{
  tokenHash:text('token_hash').primaryKey(),
  accountId:text('account_id').notNull().references(()=>adminAccounts.id),
  expiresAt:integer('expires_at').notNull(),
});
export const adminInvitations=sqliteTable('admin_invitations',{
  email:text('email').primaryKey(),tokenHash:text('token_hash').notNull().unique(),
  expiresAt:integer('expires_at').notNull(),
});
export const adminLoginLimits=sqliteTable('admin_login_limits',{
  key:text('key').notNull(),window:integer('window').notNull(),attempts:integer('attempts').notNull(),
},table=>[primaryKey({columns:[table.key,table.window]})]);
