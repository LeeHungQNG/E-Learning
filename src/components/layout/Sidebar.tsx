'use client';
import { menuItem } from '@/constants';
import { TMenuItem } from '../../types';
import { ActiveLink } from '../common';
import { useAuth, UserButton } from '@clerk/nextjs';
import { ModeToggle } from '../common/ModeToggle';
import Link from 'next/link';

const Sidebar = () => {
  const { userId } = useAuth();
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
        {!userId ? (
          <Link href={'/sign-in'} className="size-10 rounded-lg bg-primary text-white flex items-center justify-center p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </Link>
        ) : (
          <UserButton />
        )}
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
