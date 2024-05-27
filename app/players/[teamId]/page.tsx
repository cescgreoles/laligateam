import PlayerList from '@/component/PlayerList';
import { getAllPlayersForTeam } from '@/server/repo/player';

interface Props {
    params: { teamId: string };
}
const Players = async ({ params: { teamId } }: Props) => {
    const players = await getAllPlayersForTeam(parseInt(teamId));

    return (
        <main className="flex min-h-screen w-full flex-col items-center p-3 flex-wrap gap-4 max-w-screen-xl mx-auto">
            <h1 className="text-2xl font-semibold">Jugadors</h1>

            <PlayerList players={players} />
        </main>
    );
};

export default Players;
