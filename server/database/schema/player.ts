import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { z } from 'zod';

export enum Position {
    GOAL_KEEPER = 'GOAL_KEEPER',
    DEFENDER = 'DEFENDER',
    MIDFIELDER = 'MIDFIELDER',
    FORWARD = 'FORWARD'
}

// Parser
export const PlayerSchema = z.object({
    id: z.number(),
    name: z.string(),
    surname: z.string(),
    value: z.number(),
    dorsal: z.number(),
    position: z.nativeEnum(Position)
});
export type Player = z.infer<typeof PlayerSchema>;

// Database schema
export const player = pgTable('player', {
    id: serial('id').primaryKey().notNull(),
    name: text('name').notNull(),
    surname: text('surname').notNull(),
    value: integer('value').notNull(),
    dorsal: integer('dorsal').notNull(),
    position: text('position').notNull()
});
