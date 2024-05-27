import NoProfile from '@/public/asset/NoProfile.png';
import { Player, positionColor, positionName } from '@/server/database/schema';
import Image from 'next/image';

interface Props {
    player: Player;
}

const PlayerRow = ({ player }: Props) => {
    const { name, surname, team, dorsal, position, image, commonName } = player;

    const fakeImages = [
        'https://cdn.sportmonks.com/images/soccer/players/30/25438.png',
        'https://cdn.sportmonks.com/images/soccer/placeholder.png',
        'https://cdn.sportmonks.com/images/soccer/players/17/73585.png',
        'https://cdn.sportmonks.com/images/soccer/players/23/83799.png',
        'https://cdn.sportmonks.com/images/soccer/players/31/84031.png'
    ];

    return (
        <li className="flex justify-between bg-stone-100 dark:bg-stone-900 gap-3 md:gap-4 p-2 sm:p-3 rounded-2xl">
            <Image
                src={fakeImages.includes(image) ? NoProfile : image}
                alt={`Player ${name} ${surname} profile image`}
                width={128}
                height={128}
                className="bg-white rounded-full object-cover aspect-square"
            />

            <div className="col-span-2 flex flex-col gap-2 grow">
                <h3 className="md:text-xl">
                    <strong>{dorsal}</strong> {commonName}
                </h3>

                <div className="flex gap-2">
                    <p className="uppercase text-xs md:text-sm font-medium tracking-wide px-2 md:px-3 py-1 bg-stone-200 dark:bg-stone-700 rounded-md">
                        {team.name}
                    </p>
                    <p
                        className={`uppercase text-xs md:text-sm font-medium tracking-wide px-2  md:px-3 py-1 ${positionColor(
                            position
                        )} rounded-md`}
                    >
                        {positionName(position)}
                    </p>
                </div>
            </div>
        </li>
    );
};

export default PlayerRow;
