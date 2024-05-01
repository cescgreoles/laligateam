'use client';

import { useUrlState } from '@/hook/useUrlState';
import { Player, positionName } from '@/server/database/schema';
import { z } from 'zod';
import Filters from './Filters';
import PlayerRow from './PlayerRow';

interface Props {
    players: Player[];
}

const PlayerList = ({ players }: Props) => {
    const [query, setQuery] = useUrlState('query', '', z.string());

    const filteredPlayers = players.filter(({ name, surname, team, dorsal, position }) =>
        `${name} ${surname} ${dorsal} ${team.name} ${positionName(position)}`
            .toLowerCase()
            .includes(query.toLowerCase())
    );

    return (
        <>
            <Filters query={query} setQuery={setQuery} />

            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 w-full ">
                {filteredPlayers.map((player) => (
                    <PlayerRow key={player.id} player={player} />
                ))}
            </ul>
        </>
    );
};

export default PlayerList;
