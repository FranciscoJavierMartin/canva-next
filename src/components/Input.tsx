'use client';
import { useState } from 'react';

export default function Input() {
  const [value, setValue] = useState('');

  return (
    <div className='relative mx-0 mb-7 mt-5 w-full text-white'>
      <input
        type='email'
        name='email'
        id='email'
        placeholder='Email'
        className='peer absolute w-full rounded-md border-0 border-b-2 border-solid border-[#5c5c5e] bg-transparent px-3 py-2  outline-none focus-within:border-purple-500'
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label
        htmlFor='email'
        className={`
          absolute left-0 top-0 z-10 px-3 py-2 transition-all
          peer-focus-within:-top-3
          peer-focus-within:p-0
          peer-focus-within:text-xs
          peer-focus-within:text-purple-500
          peer-[:not(:placeholder-shown)]:-top-3
          peer-[:not(:placeholder-shown)]:p-0
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:text-purple-500
        `}
      >
        Email
      </label>
    </div>
  );
}
