'use client';

import { Team } from '@/server/database/schema';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
    team: Team;
}

const TeamRow = ({ team }: Props) => {
    const { push } = useRouter();

    const { name, image, id } = team;

    return (
        <li className="relative rounded-2xl">
            <button
                className="w-full h-full flex flex-col justify-between items-center gap-3 md:gap-4 p-2 sm:p-3"
                onClick={() => push(`/players/${id}`)}
            >
                <Image
                    src={image}
                    alt={`Team ${name} crest`}
                    width={128}
                    height={128}
                    className="bg-white rounded-full object-cover aspect-square"
                />

                <h3 className="md:text-xl">{name}</h3>
            </button>
        </li>
    );
};

export default TeamRow;
