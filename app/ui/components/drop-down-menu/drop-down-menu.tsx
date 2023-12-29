'use client';
import React from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { DropDownMenuProps } from './drop-down-menu.types';
import { DirectionDown } from 'react-huge-icons/solid';

export const DropDownMenu: React.FC<DropDownMenuProps> = ({ title, url, className, items }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <div
      onMouseEnter={(): void => setOpen(true)}
      onMouseLeave={(): void => setOpen(false)}>
      <Popover className='relative'>
        <Popover.Button className={className}>
          {!!url ? (
            <Link href={url}>{title}</Link>
          ) : (
            <span onClick={(): void => setOpen(true)}>{title}</span>
          )}
          <DirectionDown
            className={`${
              open ? 'text-orange-300' : 'text-orange-300/70'
            } size-3 transition duration-150 ease-in-out`}
          />
        </Popover.Button>
        <Transition
          as={React.Fragment}
          show={open}
          enter='transition ease-out duration-200'
          enterFrom='opacity-0 translate-y-1'
          enterTo='opacity-100 translate-y-0'
          leave='transition ease-in duration-150'
          leaveFrom='opacity-100 translate-y-0'
          leaveTo='opacity-0 translate-y-1'>
          <Popover.Panel className='absolute left-1/2 z-10 w-max max-w-sm -translate-x-1/2 transform p-2'>
            <div className='overflow-hidden rounded-md shadow-lg ring-1 ring-black/5 flex flex-col gap-3 bg-white p-2'>
              {!!items &&
                items.map(({ title, href }, index) => (
                  <Link
                    key={index}
                    href={href}>
                    {title}
                  </Link>
                ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};
