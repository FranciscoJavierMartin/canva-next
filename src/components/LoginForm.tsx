'use client';
import { useState } from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';
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
        {/* FIXME: Fix classes */}
        <div className='flex items-center justify-between px-3 py-4'>
          <div className='h-[1px] w-[44%] bg-slate-500'></div>
          <div className='flex w-[6%] px-1 pb-1 text-center text-white'>Or</div>
          <div className='h-[1px] w-[44%] bg-slate-500'></div>
        </div>
        <div className='pb-4'>
          <button className='flex w-full items-center justify-center gap-2 rounded-md bg-red-500 px-3 py-2 text-white outline-none hover:bg-red-600'>
            <span>
              <BiLogoGmail />
            </span>
            <span>Login with Gmail</span>
          </button>
        </div>
        <div className='pb-4'>
          <button className='flex w-full items-center justify-center gap-2 rounded-md bg-blue-500 px-3 py-2 text-white outline-none hover:bg-blue-600'>
            <span>
              <FaFacebook />
            </span>
            <span>Login with Facebook</span>
          </button>
        </div>
      </form>
    </>
  );
}
