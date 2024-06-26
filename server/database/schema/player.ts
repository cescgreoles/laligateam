import { relations } from 'drizzle-orm';
import { integer, pgTable, text } from 'drizzle-orm/pg-core';
import { z } from 'zod';
import { TeamSchema, team } from './team';

export enum Position {
    GOAL_KEEPER = 'GOAL_KEEPER',
    DEFENDER = 'DEFENDER',
    MIDFIELDER = 'MIDFIELDER',
    FORWARD = 'FORWARD'
}

export const positionName = (position: Position) => {
    const names: Record<Position, string> = {
        [Position.GOAL_KEEPER]: 'Porter',
        [Position.DEFENDER]: 'Defensa',
        [Position.MIDFIELDER]: 'Migcamp',
        [Position.FORWARD]: 'Davanter'
    };

    return names[position];
};

export const positionColor = (position: Position) => {
    const names: Record<Position, string> = {
        [Position.GOAL_KEEPER]: 'bg-yellow-200 dark:bg-yellow-700',
        [Position.DEFENDER]: 'bg-sky-200 dark:bg-sky-700',
        [Position.MIDFIELDER]: 'bg-green-200 dark:bg-green-700',
        [Position.FORWARD]: 'bg-red-200 dark:bg-red-700'
    };

    return names[position];
};

// Parser
export const PlayerSchema = z.object({
    id: z.number(),
    name: z.string(),
    surname: z.string(),
    commonName: z.string(),
    dorsal: z.number(),
    position: z.nativeEnum(Position),
    image: z.string(),
    birthday: z.string().nullable(),
    team: TeamSchema
});
export type Player = z.infer<typeof PlayerSchema>;

// Database schema
export const player = pgTable('player', {
    id: integer('id').primaryKey().notNull(),
    name: text('name').notNull(),
    surname: text('surname').notNull(),
    commonName: text('commonName').notNull(),
    dorsal: integer('dorsal').notNull(),
    position: text('position').notNull(),
    image: text('image').notNull(),
    birthday: text('birthday'),
    teamId: integer('teamId').references(() => team.id, { onDelete: 'cascade' })
});

export const playerRelations = relations(player, ({ one }) => ({
    team: one(team, {
        fields: [player.teamId],
        references: [team.id]
    })
}));
