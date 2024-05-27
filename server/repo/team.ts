'use server';

import { db } from '@/server/database';
import { TeamSchema, team } from '@/server/database/schema';

type NewTeam = typeof team.$inferInsert;
type SelectedTeam = typeof team.$inferSelect;

export const createTeam = async (newTeam: NewTeam) => {
    const result = await db.insert(team).values(newTeam).returning();

    return result.length > 0 ? result[0].id : null;
};

export const getTeam = async (id: number) => {
    const result = await db.query.team.findFirst({
        where: (team, { eq }) => eq(team.id, id)
    });

    if (!result) return null;

    return toDomain(result);
};

export const getAllTeams = async () => {
    const result = await db.query.team.findMany({
        orderBy: (team, { asc }) => asc(team.id)
    });

    return result.map((team) => toDomain(team));
};

export const deleteAllTeams = async () => {
    await db.delete(team);
};

const toDomain = (team: SelectedTeam) => {
    return TeamSchema.parse(team);
};
