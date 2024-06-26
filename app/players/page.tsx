import PlayerList from '@/component/PlayerList';
import { getAllPlayers } from '@/server/repo/player';

const Players = async () => {
    const players = await getAllPlayers();

    return (
        <main className="flex min-h-screen w-full flex-col items-center p-3 flex-wrap gap-4 max-w-screen-xl mx-auto">
            <h1 className="text-2xl font-semibold">Jugadors</h1>

            <PlayerList players={players} />
        </main>
    );
};

export default Players;
