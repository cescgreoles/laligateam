'use server';

import { InferResultType, db } from '@/server/database';
import { PlayerSchema, player } from '@/server/database/schema';

type NewPlayer = typeof player.$inferInsert;
type SelectedPlayer = InferResultType<'player', { team: true }>;

export const createPlayer = async (newPlayer: NewPlayer) => {
    const result = await db.insert(player).values(newPlayer).returning();

    return result.length > 0 ? result[0].id : null;
};

export const getPlayer = async (id: number) => {
    const result = await db.query.player.findFirst({
        where: (player, { eq }) => eq(player.id, id),
        with: { team: true }
    });

    if (!result) return null;

    return toDomain(result);
};

export const getAllPlayers = async () => {
    const result = await db.query.player.findMany({
        orderBy: (player, { asc }) => asc(player.id),
        with: { team: true }
    });

    return result.map((player) => toDomain(player));
};

export const getAllPlayersForTeam = async (teamId: number) => {
    const result = await db.query.player.findMany({
        where: (player, { eq }) => eq(player.teamId, teamId),
        orderBy: (player, { asc }) => asc(player.id),
        with: { team: true }
    });

    return result.map((player) => toDomain(player));
};

const toDomain = (player: SelectedPlayer) => {
    return PlayerSchema.parse(player);
};
