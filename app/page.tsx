import TeamList from '@/component/TeamList';
import { getAllTeams } from '@/server/repo/team';
import { Suspense } from 'react';

const Home = async () => {
    const teams = await getAllTeams();

    return (
        <main className="flex min-h-screen w-full flex-col items-center p-3 flex-wrap gap-4 max-w-screen-xl mx-auto">
            <h1 className="text-2xl font-semibold">Equip</h1>

            <Suspense fallback={null}>
                <TeamList teams={teams} />
            </Suspense>
        </main>
    );
};

export default Home;
