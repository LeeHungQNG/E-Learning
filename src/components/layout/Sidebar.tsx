import { menuItem } from '@/constants';
import ActiveLink from '../common/ActiveLink';
import { TMenuItem } from '../../types';

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200 bg-white">
      <a href="/" className="font-bold text-3xl inline-block mb-5">
        <span className="text-primary">U</span>cademy
      </a>
      <ul className="flex flex-col gap-2">
        {menuItem.map((menu, index) => {
          return <MenuItem key={index} url={menu.url} title={menu.title} icon={menu.icon}></MenuItem>;
        })}
      </ul>
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
