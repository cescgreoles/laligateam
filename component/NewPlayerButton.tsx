'use client';

import { createTeam } from '@/server/repo/team';

const NewPlayerButton = () => {
    return (
        <button
            onClick={() =>
                // createPlayer({
                //     name: 'Pau',
                //     surname: 'Cubarsí',
                //     value: 1500,
                //     dorsal: 33,
                //     position: Position.DEFENDER
                // })
                createTeam({
                    name: 'Barça'
                })
            }
        >
            Create Player
        </button>
    );
};

export default NewPlayerButton;
