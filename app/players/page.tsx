import NewPlayerButton from '@/component/NewPlayerButton';
import { getAllPlayers } from '@/server/repo/player';

const Players = async () => {
    const player = await getAllPlayers();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <NewPlayerButton />
        </main>
    );
};

export default Players;
