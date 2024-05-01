import NoProfile from '@/public/asset/NoProfile.png';
import { Player, positionColor, positionName } from '@/server/database/schema';
import Image from 'next/image';

interface Props {
    player: Player;
}

const PlayerRow = ({ player }: Props) => {
    const { name, surname, team, dorsal, position, value } = player;

    return (
        <li className="flex justify-between bg-stone-100 dark:bg-stone-900 gap-3 md:gap-4 p-2 sm:p-3 rounded-2xl">
            <Image
                src={NoProfile}
                alt={`Player ${name} ${surname} profile image`}
                width={100}
                height={100}
                className="rounded-lg"
            />

            <div className="col-span-2 flex flex-col gap-2 grow">
                <h3 className="md:text-xl">
                    <strong>{dorsal}</strong> {name} {surname}
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

            <div className="flex items-center justify-center font-semibold tracking-wide">
                <p>{value.toLocaleString('es-ES')}</p>
            </div>
        </li>
    );
};

export default PlayerRow;
