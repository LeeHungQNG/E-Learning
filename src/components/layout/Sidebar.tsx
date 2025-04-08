import { menuItem } from '@/constants';

import { TMenuItem } from '../../types';
import { ActiveLink } from '../common';
import { UserButton } from '@clerk/nextjs';
import { ModeToggle } from '../common/ModeToggle';

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200 dark:border-opacity-10 bg-white dark:bg-grayDarker flex flex-col">
      <a href="/" className="font-bold text-3xl inline-block mb-5">
        <span className="text-primary">U</span>cademy
      </a>
      <ul className="flex flex-col gap-2">
        {menuItem.map((menu, index) => {
          return <MenuItem key={index} url={menu.url} title={menu.title} icon={menu.icon}></MenuItem>;
        })}
      </ul>
      <div className="mt-auto flex gap-5 justify-between">
        <UserButton />
        <ModeToggle />
      </div>
    </div>
  );
};

function MenuItem({ url = '/', title = '', icon }: TMenuItem) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {title}
      </ActiveLink>
    </li>
  );
}

export default Sidebar;
