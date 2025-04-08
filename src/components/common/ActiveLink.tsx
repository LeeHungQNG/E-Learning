'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TActiveLinkProps } from '../../types';

const ActiveLink = ({ url, children }: TActiveLinkProps) => {
  const pathName = usePathname();
  const isActive = url === pathName;

  return (
    <Link
      href={url}
      className={`p-3 rounded-md flex items-center gap-3 dark:text-grayDark ${
        isActive ? '!text-white bg-primary svg-animate' : 'hover:!text-primary hover:!bg-primary hover:!bg-opacity-10 transition-all'
      } `}
    >
      {children}
    </Link>
  );
};
export default ActiveLink;
