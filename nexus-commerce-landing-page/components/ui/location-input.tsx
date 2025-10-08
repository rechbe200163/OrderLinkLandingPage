'use client';

import React, { useMemo, useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  Command,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useLocale, useTranslations } from 'next-intl';

// Import JSON data directly
import countries from '@/lib/data/countries.json';
import states from '@/lib/data/states.json';

interface Timezone {
  zoneName: string;
  gmtOffset: number;
  gmtOffsetName: string;
  abbreviation: string;
  tzName: string;
}

interface CountryProps {
  id: number;
  name: string;
  iso3: string;
  iso2: string;
  numeric_code: string;
  phone_code: string;
  capital: string;
  currency: string;
  currency_name: string;
  currency_symbol: string;
  tld: string;
  native: string;
  region: string;
  region_id: string;
  subregion: string;
  subregion_id: string;
  nationality: string;
  timezones: Timezone[];
  translations: Record<string, string>;
  latitude: string;
  longitude: string;
  emoji: string;
  emojiU: string;
}

interface StateProps {
  id: number;
  name: string;
  country_id: number;
  country_code: string;
  country_name: string;
  state_code: string;
  type: string | null;
  latitude: string;
  longitude: string;
}

interface LocationSelectorProps {
  disabled?: boolean;
  defaultCountry?: string;
  defaultState?: string;
  onCountryChange?: (country: CountryProps | null) => void;
  onStateChange?: (state: StateProps | null) => void;
}

const LocationSelector = ({
  disabled,
  defaultCountry,
  defaultState,
  onCountryChange,
  onStateChange,
}: LocationSelectorProps) => {
  const countriesData = countries as CountryProps[];
  const statesData = states as StateProps[];
  const t = useTranslations('LocationSelector');
  const locale = useLocale();

  // Find the country object that matches the default value
  const initialCountry =
    countriesData.find(
      (c) => c.name.toLowerCase() === defaultCountry?.toLowerCase()
    ) || null;

  // Find the state object that matches the default value (if a country is selected)
  const initialState =
    statesData.find(
      (s) =>
        s.name.toLowerCase() === defaultState?.toLowerCase() &&
        s.country_id === initialCountry?.id
    ) || null;

  const [selectedCountry, setSelectedCountry] = useState<CountryProps | null>(
    initialCountry
  );
  const [selectedState, setSelectedState] = useState<StateProps | null>(
    initialState
  );

  const [openCountryDropdown, setOpenCountryDropdown] = useState(false);
  const [openStateDropdown, setOpenStateDropdown] = useState(false);

  const availableStates = statesData.filter(
    (state) => state.country_id === selectedCountry?.id
  );

  React.useEffect(() => {
    if (defaultCountry) {
      setSelectedCountry(initialCountry);
    }
    if (defaultState) {
      setSelectedState(initialState);
    }
  }, [defaultCountry, defaultState, initialCountry, initialState]);

  const handleCountrySelect = (country: CountryProps | null) => {
    setSelectedCountry(country);
    setSelectedState(null);
    onCountryChange?.(country);
    onStateChange?.(null);
  };

  const handleStateSelect = (state: StateProps | null) => {
    setSelectedState(state);
    onStateChange?.(state);
  };

  const getCountryDisplayName = React.useCallback(
    (country: CountryProps) => {
      const translations = country.translations as Record<string, string> | undefined;
      if (!translations) {
        return country.name;
      }

      const normalizedLocale = locale.toLowerCase();
      const translationEntries = Object.entries(translations);

      const exactMatch = translationEntries.find(
        ([translationKey]) => translationKey.toLowerCase() === normalizedLocale
      );
      if (exactMatch) {
        return exactMatch[1] || country.name;
      }

      const baseLocale = normalizedLocale.split('-')[0];
      const baseMatch = translationEntries.find(
        ([translationKey]) => translationKey.toLowerCase() === baseLocale
      );
      if (baseMatch) {
        return baseMatch[1] || country.name;
      }

      return country.name;
    },
    [locale]
  );

  const countryOptions = useMemo(
    () =>
      countriesData.map((country) => ({
        country,
        displayName: getCountryDisplayName(country),
      })),
    [countriesData, getCountryDisplayName]
  );

  return (
    <div className='grid grid-cols-2 gap-6'>
      <input type='hidden' name='country' value={selectedCountry?.name || ''} />
      <input type='hidden' name='state' value={selectedState?.name || ''} />

      <Popover open={openCountryDropdown} onOpenChange={setOpenCountryDropdown}>
        <PopoverTrigger asChild>
          <Button
            type='button'
            variant='outline'
            role='combobox'
            aria-expanded={openCountryDropdown}
            disabled={disabled}
            className={cn(
              'h-12 w-full justify-between rounded-xl border border-slate-500 bg-background text-left text-lg font-normal text-slate-700 transition hover:bg-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100',
              !selectedCountry && 'text-slate-400'
            )}
          >
            {selectedCountry ? (
              <div className='flex items-center gap-2'>
                <span>{selectedCountry.emoji}</span>
                <span>{getCountryDisplayName(selectedCountry)}</span>
              </div>
            ) : (
              <span>{t('countryPlaceholder')}</span>
            )}
            <ChevronsUpDown className='h-4 w-4 shrink-0 opacity-50' />
          </Button>
        </PopoverTrigger>
        <PopoverContent align='start' className='w-[300px] p-0'>
          <Command>
            <CommandInput placeholder={t('searchCountry')} />
            <CommandList>
              <CommandEmpty>{t('noCountry')}</CommandEmpty>
              <CommandGroup>
                <ScrollArea className='h-[300px]'>
                  {countryOptions.map(({ country, displayName }) => (
                    <CommandItem
                      key={country.id}
                      value={`${displayName} ${country.name}`}
                      onSelect={() => {
                        handleCountrySelect(country);
                        setOpenCountryDropdown(false);
                      }}
                      className='flex cursor-pointer items-center justify-between text-sm'
                    >
                      <div className='flex items-center gap-2'>
                        <span>{country.emoji}</span>
                        <span>{displayName}</span>
                      </div>
                      <Check
                        className={cn(
                          'h-4 w-4',
                          selectedCountry?.id === country.id
                            ? 'opacity-100'
                            : 'opacity-0'
                        )}
                      />
                    </CommandItem>
                  ))}
                  <ScrollBar orientation='vertical' />
                </ScrollArea>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {availableStates.length > 0 && (
        <Popover open={openStateDropdown} onOpenChange={setOpenStateDropdown}>
          <PopoverTrigger asChild>
            <Button
              type='button'
              variant='outline'
              role='combobox'
              aria-expanded={openStateDropdown}
              disabled={!selectedCountry}
              className={cn(
                'h-12 w-full justify-between rounded-xl border border-slate-500 bg-background text-left text-lg font-normal text-slate-700 transition hover:bg-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100',
                !selectedState && 'text-slate-400'
              )}
            >
              {selectedState ? (
                <span>{selectedState.name}</span>
              ) : (
                <span>{t('statePlaceholder')}</span>
              )}
              <ChevronsUpDown className='h-4 w-4 shrink-0 opacity-50' />
            </Button>
          </PopoverTrigger>
          <PopoverContent align='start' className='w-[300px] p-0'>
            <Command>
              <CommandInput placeholder={t('searchState')} />
              <CommandList>
                <CommandEmpty>{t('noState')}</CommandEmpty>
                <CommandGroup>
                  <ScrollArea className='h-[300px]'>
                    {availableStates.map((state) => (
                      <CommandItem
                        key={state.id}
                        value={state.name}
                        onSelect={() => {
                          handleStateSelect(state);
                          setOpenStateDropdown(false);
                        }}
                        className='flex cursor-pointer items-center justify-between text-sm'
                      >
                        <span>{state.name}</span>
                        <Check
                          className={cn(
                            'h-4 w-4',
                            selectedState?.id === state.id
                              ? 'opacity-100'
                              : 'opacity-0'
                          )}
                        />
                      </CommandItem>
                    ))}
                    <ScrollBar orientation='vertical' />
                  </ScrollArea>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
};

export default LocationSelector;
