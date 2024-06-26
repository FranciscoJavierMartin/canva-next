'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewDesignForm() {
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const router = useRouter();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const queryParams = new URLSearchParams({
      width: width.toString(),
      height: height.toString(),
    });

    router.push(`/design/create?${queryParams.toString()}`);
  }

  return (
    <div className='group'>
      <button
        type='button'
        className='absolute right-3 top-3 overflow-hidden rounded-md bg-[#32769ead] px-4 py-2 text-center text-base font-medium text-white hover:bg-[#1e830f]'
      >
        Custom Size
      </button>
      <form
        onSubmit={onSubmit}
        className='absolute right-3 top-16 hidden w-[250px] gap-3 bg-[#252627] p-4 text-white transition-all duration-500 group-focus-within:block'
      >
        <div className='grid grid-cols-2 gap-3 pb-4'>
          <div className='flex flex-col items-start justify-center gap-2'>
            <label htmlFor='width'>Width</label>
            <input
              type='number'
              name='width'
              id='width'
              required
              min={1}
              value={width}
              onChange={(e) => setWidth(+e.target.value)}
              className='w-full rounded-md border border-[#404040] bg-[#1b1a1a] px-2 py-1 outline-none'
            />
          </div>
          <div className='flex flex-col items-start justify-center gap-2'>
            <label htmlFor='height'>Height</label>
            <input
              type='number'
              name='height'
              id='height'
              required
              min={1}
              value={height}
              onChange={(e) => setHeight(+e.target.value)}
              className='w-full rounded-md border border-[#404040] bg-[#1b1a1a] px-2 py-1 outline-none'
            />
          </div>
        </div>
        <button
          type='submit'
          className='w-full overflow-hidden rounded-md bg-[#32769ead] px-4 py-2 text-center font-medium text-white hover:bg-[#1e830f]'
          disabled={!(height && width)}
        >
          Create new design
        </button>
      </form>
    </div>
  );
}
