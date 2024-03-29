import React, { Fragment, VFC } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { BookOpenIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

//https://headlessui.dev/


const menus = [
  {
    name: '講座一覧',
    to: '/courses',
    icon: BookOpenIcon,
  },
];



//Popover=healessUI React
export const Header: VFC = () => {
  return (
    <Popover className="relative bg-yell z-50">
      <div className="border-b-2 border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-3">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </a>
            </Link>
            <nav className="hidden md:flex md:items-center ml-10">
              {menus.map((item) => (
                <Link key={item.to} href={item.to}>
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                    {item.name}
                  </a>
                </Link>
              ))}
            </nav>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          {({ close }) => (
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {menus.map((item) => (
                      <Link key={item.to} href={item.to}>
                        <a
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                          onClick={() => close()}
                        >
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};