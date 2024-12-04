import Link from 'next/link';
import { MenuItem } from '@components/MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { DarkModeSwitch } from '@/components/DarkModeSwitch';

export const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="home" link="/" Icon={AiFillHome} />
        <MenuItem title="about" link="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex gap-4 items-center">
        <DarkModeSwitch />
        <Link href={'/'} className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            IMDB
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </div>
  );
};
