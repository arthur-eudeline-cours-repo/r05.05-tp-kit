"use client";

import { Popover as Primitive } from '@base-ui/react/popover';
import { Button } from './button';
import { ReactNode } from 'react';

type Props = {
  trigger: (open: boolean) => ReactNode;
  children?: ReactNode;
}

export default function Popover(props: Props) {
  return (
    <Primitive.Root>
      <div className='flex justify-end items-center'>
        <Primitive.Trigger
          render={(p, s) => (
            <Button {...p} variant={"ghost"} className='rounded-full p-0 size-16 justify-center items-center flex'>
              {props.trigger(s.open)}
            </Button>
          )}
        />
      </div>
      
      <Primitive.Portal>
        <Primitive.Positioner sideOffset={24} alignOffset={0} align="end" className={"z-50"}>
          <Primitive.Popup className="relative flex h-(--popup-height,auto) w-(--popup-width,auto) max-w-125 flex-col gap-1 origin-(--transform-origin) bg-white p-6 rounded-lg border border-gray-100 shadow-xl transition-[scale,opacity] duration-100 ease-out data-ending-style:scale-[0.98] data-ending-style:opacity-0 data-starting-style:scale-[0.98] data-starting-style:opacity-0">
            {props.children}
          </Primitive.Popup>
        </Primitive.Positioner>
      </Primitive.Portal>
    </Primitive.Root>
  );
}
