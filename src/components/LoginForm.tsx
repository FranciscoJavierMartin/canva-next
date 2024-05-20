'use client';
import { useState } from 'react';
import InputForm from './InputForm';

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');

  return (
    <>
      <h2 className='pb-4 text-center text-xl text-white'>
        Login and Sign up in seconds
      </h2>
      <form>
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
      </form>
    </>
  );
}
