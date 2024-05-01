import PlayerRow from '@/component/PlayerRow';
import { getAllPlayers } from '@/server/repo/player';

const Players = async () => {
    const players = await getAllPlayers();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-3 flex-wrap">
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 w-full ">
                {players.map((player) => (
                    <PlayerRow key={player.id} player={player} />
                ))}
            </ul>
        </main>
    );
};

export default Players;
