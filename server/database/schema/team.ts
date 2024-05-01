import { relations } from 'drizzle-orm';
import { pgTable, serial, text } from 'drizzle-orm/pg-core';
import { z } from 'zod';
import { player } from './player';

// Parser
export const TeamSchema = z.object({
    id: z.number(),
    name: z.string()
});
export type Team = z.infer<typeof TeamSchema>;

// Database schema
export const team = pgTable('team', {
    id: serial('id').primaryKey().notNull(),
    name: text('name').notNull()
});

export const teamRelations = relations(team, ({ many }) => ({
    players: many(player)
}));
