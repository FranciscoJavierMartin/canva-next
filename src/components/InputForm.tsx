'use client';
import { Dispatch, SetStateAction } from 'react';

interface InputFormProps {
  inputProps: Pick<HTMLInputElement, 'type' | 'name' | 'placeholder' | 'id'>;
  labelText: string;
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
}

export default function InputForm({
  inputProps,
  labelText,
  setValue,
  value,
}: InputFormProps) {
  return (
    <div className='relative mx-0 mb-7 mt-5 w-full text-white'>
      <input
        {...inputProps}
        className='peer absolute w-full rounded-md border-0 border-b-2 border-solid border-[#5c5c5e] bg-transparent px-3 py-2  outline-none focus-within:border-purple-500'
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label
        htmlFor={inputProps.id}
        className={`
          absolute left-0 top-0 px-3 py-2 transition-all
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
        {labelText}
      </label>
    </div>
  );
}
