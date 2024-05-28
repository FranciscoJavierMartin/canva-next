'use client';
import { useState } from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';
import InputForm from '@/components/InputForm';
import { registerUser } from '@/actions/register-user';
import { useFormStatus } from 'react-dom';

export default function RegisterForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { pending } = useFormStatus();

  return (
    <>
      <h2 className='text-center text-xl text-white'>Sign Up in seconds</h2>
      <form action={registerUser} className='flex flex-col gap-2'>
        <InputForm
          inputProps={{
            id: 'name',
            name: 'name',
            placeholder: 'Name',
            type: 'text',
          }}
          setValue={setName}
          value={name}
        />
        <InputForm
          inputProps={{
            id: 'email',
            name: 'email',
            placeholder: 'Email',
            type: 'email',
          }}
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
          setValue={setPassword}
          value={password}
        />

        <button
          type='submit'
          className='mt-6 w-full rounded-md bg-purple-500 px-3 py-2 text-white outline-none hover:bg-purple-600 disabled:bg-purple-300'
          disabled={pending}
        >
          Sign Up
        </button>

        <div className='flex items-center justify-between px-1 py-2'>
          <div className='h-[1px] flex-grow bg-slate-500'></div>
          <div className='px-3 text-center text-white'>Or</div>
          <div className='h-[1px] flex-grow bg-slate-500'></div>
        </div>

        <button className='my-1 flex w-full items-center justify-center gap-2 rounded-md bg-red-500 px-3 py-2 text-white outline-none hover:bg-red-600'>
          <span>
            <BiLogoGmail />
          </span>
          <span>Login with Gmail</span>
        </button>

        <button className='my-1 flex w-full items-center justify-center gap-2 rounded-md bg-blue-500 px-3 py-2 text-white outline-none hover:bg-blue-600'>
          <span>
            <FaFacebook />
          </span>
          <span>Login with Facebook</span>
        </button>
      </form>
    </>
  );
}
