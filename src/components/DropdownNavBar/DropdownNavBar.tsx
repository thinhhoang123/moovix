import * as React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

export interface IDropdownNavBarProps {
  path?: string;
  page?: string;
  child?: { path: string; page: string }[];
}
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function DropdownNavBar(props: IDropdownNavBarProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <a className="flex w-full justify-center">{props.page}</a>
      </Menu.Button>

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {props.child?.map((route, index) => {
              return (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <Link
                      to={route.path}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      {route.page}
                    </Link>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
