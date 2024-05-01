'use client';

import { Position } from '@/server/database/schema';
import { createPlayer } from '@/server/repo/player';

const NewPlayerButton = () => {
    return (
        <button
            onClick={() =>
                createPlayer({
                    name: 'Pau',
                    surname: 'Cubarsí',
                    value: 1500,
                    dorsal: 33,
                    position: Position.DEFENDER
                })
            }
        >
            Create Player
        </button>
    );
};

export default NewPlayerButton;
