'use client';

import { Input } from '@/components/ui/input';
import { useId, useRef } from 'react';
import { useEffect } from 'react';

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
      // Masking is length-bound — don't use if onlyUppercase without length constraint is needed
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
      className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12 text-lg'
    />
  );
}
