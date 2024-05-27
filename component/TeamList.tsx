'use client';

import { useUrlState } from '@/hook/useUrlState';
import { Team } from '@/server/database/schema';
import { z } from 'zod';
import Filters from './Filters';
import TeamRow from './TeamRow';

interface Props {
    teams: Team[];
}

const TeamList = ({ teams }: Props) => {
    const [query, setQuery] = useUrlState('query', '', z.string());

    const filteredTeams = teams.filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()));

    return (
        <>
            <Filters query={query} setQuery={setQuery} />

            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full mb-16">
                {filteredTeams.map((team) => (
                    <TeamRow key={team.id} team={team} />
                ))}
            </ul>
        </>
    );
};

export default TeamList;
