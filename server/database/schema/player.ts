import { numeric, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { z } from 'zod';

export const PlayerSchema = z.object({
    id: z.number(),
    name: z.string(),
    surname: z.string(),
    value: z.number(),
    dorsal: z.number(),
    position: z.string()
});

export type Player = z.infer<typeof PlayerSchema>;

export const player = pgTable('player', {
    id: serial('id').primaryKey().notNull(),
    name: text('name').notNull(),
    surname: text('surname').notNull(),
    value: numeric('value').notNull(),
    dorsal: numeric('dorsal').notNull(),
    position: text('position').notNull()
});
