import { cn } from '@/utils';
import { ReactNode } from 'react';

interface Props {
    label: string;
    icon: ReactNode;
    selected?: boolean;
}

const NavbarItem = ({ label, icon, selected = false }: Props) => {
    return (
        <div
            className={cn(
                'flex h-full w-full flex-col items-center justify-center gap-[0.1rem] opacity-80',
                selected && '!text-green-600 opacity-100'
            )}
        >
            {icon}

            <small className={cn('text-xs font-medium tracking-wide')}>{label}</small>
        </div>
    );
};

export default NavbarItem;
