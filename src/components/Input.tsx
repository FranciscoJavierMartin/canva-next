'use client';
import { useState } from 'react';

export default function Input() {
  const [value, setValue] = useState('');

  return (
    <div className='w-full relative mt-5 mx-0 mb-7'>
      <input
        type='email'
        name='email'
        id='email'
        placeholder='Email'
        className='w-full border-0 border-b-2 border-solid border-[#cacaca] p-1 absolute focus-within:border-[#3492eb] peer'
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label
        htmlFor='email'
        className={`absolute left-0 top-0 z-10 p-1 peer-focus-within:absolute peer-focus-within:-top-3 peer-focus-within:text-[#3492eb] peer-focus-within:p-0 peer-focus-within:text-xs
        peer-[:not(:placeholder-shown)]:absolute peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[#3492eb] peer-[:not(:placeholder-shown)]:p-0 peer-[:not(:placeholder-shown)]:text-xs

        `}
      >
        Email
      </label>
    </div>
  );
}
