'use client';
import { useState } from 'react';
import InputForm from './InputForm';

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <>
      <h2 className='pb-4 text-center text-xl text-white'>
        Login and Sign up in seconds
      </h2>
      <form className='flex flex-col gap-2'>
        <InputForm
          inputProps={{
            id: 'email',
            name: 'email',
            placeholder: 'Email',
            type: 'email',
          }}
          labelText='Email'
          setValue={setEmail}
          value={email}
        />
        <InputForm
          inputProps={{
            id: 'password',
            name: 'password',
            placeholder: 'Password',
            type: 'password',
          }}
          labelText='Password'
          setValue={setPassword}
          value={password}
        />
        <div>
          <button className='w-full rounded-md bg-purple-500 px-3 py-2 text-white outline-none hover:bg-purple-600'>
            Sign In
          </button>
        </div>
        <div className='flex items-center justify-between px-3 py-4'>
          <div></div>
          <div>Or</div>
          <div></div>
        </div>
      </form>
    </>
  );
}
