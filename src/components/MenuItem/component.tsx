import Link from 'next/link';
import { IconType } from 'react-icons';

type MenuItemProps = {
  title: string;
  link: string;
  Icon: IconType;
};

export const MenuItem = ({ title, link, Icon }: MenuItemProps) => {
  return (
    <Link href={link} className="hover:text-amber-500">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
};
