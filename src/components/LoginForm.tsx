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
      </form>
    </>
  );
}
