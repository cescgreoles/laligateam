'use server';

import { db } from '@/server/database';
import { PlayerSchema, player } from '@/server/database/schema';

type NewPlayer = typeof player.$inferInsert;

export const createPlayer = async (newPlayer: NewPlayer) => {
    const result = await db.insert(player).values(newPlayer).returning();

    return result.length > 0 ? result[0].id : null;
};

export const getPlayer = async (id: number) => {
    const result = await db.query.player.findFirst({
        where: (player, { eq }) => eq(player.id, id)
    });

    if (!result) return null;

    return PlayerSchema.parse(result);
};
