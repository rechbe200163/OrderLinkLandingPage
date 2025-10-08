'use client';

import React, { useId, useMemo, useState } from 'react';
import { ChevronDownIcon, Phone, PhoneIcon } from 'lucide-react';
import * as RPNInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import enLabels from 'react-phone-number-input/locale/en.json';
import deLabels from 'react-phone-number-input/locale/de.json';
import esLabels from 'react-phone-number-input/locale/es.json';
import frLabels from 'react-phone-number-input/locale/fr.json';
import nlLabels from 'react-phone-number-input/locale/nl.json';
import skLabels from 'react-phone-number-input/locale/sk.json';

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLocale, useTranslations } from 'next-intl';

type PhoneNumberInputProps = {
  name?: string;
};

export default function PhoneNumberInputComponent({
  name = 'phoneNumber',
}: PhoneNumberInputProps) {
  const id = useId();
  const [value, setValue] = useState('');
  const t = useTranslations('PhoneNumberInput');
  const locale = useLocale();

  const labels = useMemo(() => {
    const normalizedLocale = locale.toLowerCase();
    const baseLocale = normalizedLocale.split('-')[0];

    const LABEL_MAP: Record<string, Record<string, string>> = {
      en: enLabels as Record<string, string>,
      de: deLabels as Record<string, string>,
      es: esLabels as Record<string, string>,
      fr: frLabels as Record<string, string>,
      nl: nlLabels as Record<string, string>,
      sk: skLabels as Record<string, string>,
    };

    return (
      LABEL_MAP[normalizedLocale] ??
      LABEL_MAP[baseLocale] ??
      LABEL_MAP.en
    );
  }, [locale]);

  return (
    <div className='*:not-first:mt-2' dir='ltr'>
      <Label
        htmlFor={id}
        className='flex items-center text-sm font-medium text-slate-600'
      >
        <Phone className='mr-2 h-4 w-4 text-blue-500' />
        {t('label')} <span className='ml-1 text-red-500'>*</span>
      </Label>
      <RPNInput.default
        className='flex shadow-xs'
        international
        name={name}
        flagComponent={FlagComponent}
        countrySelectComponent={CountrySelect}
        inputComponent={PhoneInput}
        id={id}
        required
        placeholder={t('placeholder')}
        value={value}
        labels={labels}
        onChange={(newValue) => setValue(newValue ?? '')}
      />
      <input type='hidden' name={name} value={value} />
    </div>
  );
}

const PhoneInput = ({ className, ...props }: React.ComponentProps<'input'>) => {
  return (
    <Input
      data-slot='phone-input'
      className={cn(
        '-ms-px rounded-s-none shadow-none focus-visible:z-10',
        'h-12 rounded-r-xl border border-slate-300 bg-white px-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20'
      )}
      required
      {...props}
    />
  );
};

PhoneInput.displayName = 'PhoneInput';

type CountrySelectProps = {
  disabled?: boolean;
  value: RPNInput.Country;
  onChange: (value: RPNInput.Country) => void;
  options: { label: string; value: RPNInput.Country | undefined }[];
};

const CountrySelect = ({
  disabled,
  value,
  onChange,
  options,
}: CountrySelectProps) => {
  const t = useTranslations('PhoneNumberInput');
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as RPNInput.Country);
  };

  return (
    <div className='rounded-s-xl border-input bg-background text-muted-foreground focus-within:border-ring focus-within:ring-ring/50 hover:bg-accent hover:text-foreground has-aria-invalid:border-destructive/60 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 relative inline-flex items-center self-stretch border py-2 ps-3 pe-2 transition-[color,box-shadow] outline-none focus-within:z-10 focus-within:ring-[3px] has-disabled:pointer-events-none has-disabled:opacity-50'>
      <div className='inline-flex items-center gap-1' aria-hidden='true'>
        <FlagComponent country={value} countryName={value} aria-hidden='true' />
        <span className='text-muted-foreground/80'>
          <ChevronDownIcon size={16} aria-hidden='true' />
        </span>
      </div>
      <select
        disabled={disabled}
        value={value}
        onChange={handleSelect}
        className='absolute inset-0 text-sm opacity-0'
        aria-label='Select country'
      >
        <option key='default' value=''>
          Select a country
        </option>
        {options
          .filter((x) => x.value)
          .map((option, i) => (
            <option key={option.value ?? `empty-${i}`} value={option.value}>
              {option.label}{' '}
              {option.value &&
                `+${RPNInput.getCountryCallingCode(option.value)}`}
            </option>
          ))}
      </select>
    </div>
  );
};
const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span className='w-5 overflow-hidden rounded-sm '>
      {Flag ? (
        <Flag title={countryName} />
      ) : (
        <PhoneIcon size={16} aria-hidden='true' />
      )}
    </span>
  );
};
