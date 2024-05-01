'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TbSoccerField, TbUsers } from 'react-icons/tb';
import NavbarItem from './NavbarItem';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <header className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-t border-stone-300 bg-stone-100 px-3 py-2 dark:border-stone-600 dark:bg-stone-900 md:hidden md:px-4 mouse:hidden">
            <nav className="relative grid h-full w-full grid-cols-2 place-items-center justify-around">
                <Link href={'/'} className="relative h-full w-full">
                    <NavbarItem
                        selected={pathname === '/'}
                        label={'Equip'}
                        icon={<TbSoccerField className="h-7 w-7 stoke-[1px]" />}
                    />
                </Link>

                <Link href={'/players'} className="relative h-full w-full">
                    <NavbarItem
                        selected={pathname === '/players'}
                        label={'Jugadors'}
                        icon={<TbUsers className="h-7 w-7 stoke-[1px]" />}
                    />
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;
