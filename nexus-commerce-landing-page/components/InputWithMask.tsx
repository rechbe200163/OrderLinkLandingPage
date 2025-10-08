'use client';

import { useEffect, useId, useRef } from 'react';
import { Input } from '@/components/ui/input';

type Props = {
  placeholder: string;
  mask?: string;
  onlyUppercase?: boolean;
  name?: string;
};

export default function GenericInputMaskComponent({
  placeholder,
  mask,
  onlyUppercase = false,
  name = 'maskInput',
}: Props) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (mask && inputRef.current) {
      // Masking is length-bound -- don't use if onlyUppercase without a length constraint is needed
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const masked = require('use-mask-input').withMask(mask, {
        placeholder: '',
        showMaskOnHover: false,
      });
      masked(inputRef.current);
    }
  }, [mask]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onlyUppercase && !mask) {
      e.target.value = e.target.value.replace(/[^A-Z]/g, '').toUpperCase();
    }
  };

  return (
    <Input
      id={id}
      ref={inputRef}
      placeholder={placeholder}
      type='text'
      name={name}
      onInput={handleInput}
      className='h-12 rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20'
    />
  );
}
