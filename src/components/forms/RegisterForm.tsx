'use client';
import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { BiLogoGmail } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';
import InputForm from '@/components/InputForm';
import { registerUser } from '@/actions/register-user';

const initialState: RegisterFormState<RegisterFormFields> = {
  message: '',
  error: {},
};

export default function RegisterForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(registerUser, initialState);

  return (
    <>
      <h2 className='text-center text-xl text-white'>Sign Up in seconds</h2>
      <form action={formAction} className='flex flex-col gap-2'>
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
        {state.error.name &&
          state.error.name.map((error) => (
            <p key={error} className='ml-2 mt-2 text-sm text-red-400'>
              {error}
            </p>
          ))}
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
        {state.error.email &&
          state.error.email.map((error) => (
            <p key={error} className='ml-2 mt-2 text-sm text-red-400'>
              {error}
            </p>
          ))}
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
        {state.error.password &&
          state.error.password.map((error) => (
            <p key={error} className='ml-2 mt-2 text-sm text-red-400'>
              {error}
            </p>
          ))}
        <button
          type='submit'
          className='mt-6 w-full rounded-md bg-purple-500 px-3 py-2 text-white outline-none hover:bg-purple-600 disabled:bg-purple-300'
          disabled={pending}
        >
          Sign Up
        </button>

        {state.message && (
          <p className='text-sm text-red-400'>{state.message}</p>
        )}

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
