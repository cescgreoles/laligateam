'use server';

import { Position } from '../database/schema/player';
import { createPlayer } from '../repo/player';
import { createTeam, deleteAllTeams, getAllTeams } from '../repo/team';

const BASE_URL = 'https://api.sportmonks.com/v3/football';

const getCurrentSeason = async () => {
    const res = await fetch(`${BASE_URL}/leagues/${process.env.LEAGUE_ID}?include=seasons`, {
        headers: { Authorization: process.env.SPORTMONKS_TOKEN! }
    });
    const data = await res.json();

    let newestDate = new Date(0);
    let currentSeason = null;
    for (const season of data.data.seasons) {
        const parsedStartingDate = new Date(season.starting_at);

        if (parsedStartingDate > newestDate) {
            newestDate = parsedStartingDate;
            currentSeason = season;
        }
    }

    return currentSeason;
};

const getTeams = async (seasonId: number) => {
    console.log(`Get teams for season ${seasonId}`);
    const res = await fetch(`${BASE_URL}/teams/seasons/${seasonId}`, {
        headers: { Authorization: process.env.SPORTMONKS_TOKEN! }
    });
    const data = await res.json();

    deleteAllTeams();

    for (const team of data.data) {
        console.log(`Creating team ${team.name}`);
        await createTeam({
            id: team.id,
            name: team.name,
            image: team.image_path
        });
    }

    return await getAllTeams();
};

const getPlayers = async (teamId: number) => {
    const res = await fetch(`${BASE_URL}/squads/teams/${teamId}`, {
        headers: { Authorization: process.env.SPORTMONKS_TOKEN! }
    });
    const data = await res.json();

    for (const player of data.data) {
        const playerRes = await fetch(`${BASE_URL}/players/${player.player_id}`, {
            headers: { Authorization: process.env.SPORTMONKS_TOKEN! }
        });
        const playerData = await playerRes.json();

        console.log(`Creating player ${playerData.data.common_name}`);

        await createPlayer({
            id: player.player_id,
            name: playerData.data.firstname,
            surname: playerData.data.lastname,
            commonName: playerData.data.common_name,
            dorsal: player.jersey_number,
            position: mapPosition(playerData.data.position_id),
            image: playerData.data.image_path,
            birthday: playerData.data.date_of_birth ?? null,
            teamId: teamId
        });
    }
};

const mapPosition = (position: number) => {
    const map: Record<number, Position> = {
        24: Position.GOAL_KEEPER,
        25: Position.DEFENDER,
        26: Position.MIDFIELDER,
        27: Position.FORWARD
    };

    return map[position];
};

export const scrapSportsMonks = async () => {
    const currentSeason = await getCurrentSeason();
    const teams = await getTeams(currentSeason.id);

    for (const team of teams) {
        await getPlayers(team.id);
    }
};
