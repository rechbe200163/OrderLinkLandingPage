'use client';
import { useActionState, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import LocationSelector from '@/components/ui/location-input';
import { withMask } from 'use-mask-input';
import { createAddress } from '@/lib/actions/address.actions';
import {
  ArrowRightIcon,
  Loader2Icon,
  MapPinIcon as MapPinHouse,
} from 'lucide-react';
import React from 'react';
import { Card } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import { useAddressStore } from '@/lib/stores/useAddressStore';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { useRouter } from 'next/navigation';
import { useProgressStore } from '@/lib/stores/useProgressStore';

const formSchema = z.object({
  name_5020537749: z.tuple([z.string(), z.string().optional()]),
});

export default function AddressForm() {
  const router = useRouter();

  const t = useTranslations('Dashboard.Ressource.Address');

  const setProgress = useProgressStore((s) => s.setProgress);

  const setCountry = useAddressStore((s) => s.setCountry);
  const setStateStore = useAddressStore((s) => s.setState);
  const setCity = useAddressStore((s) => s.setCity);
  const setPostCode = useAddressStore((s) => s.setPostCode);
  const setStreetName = useAddressStore((s) => s.setStreetName);
  const setStreetNumber = useAddressStore((s) => s.setStreetNumber);

  const country = useAddressStore((s) => s.address.country);
  const stateStore = useAddressStore((s) => s.address.state);
  const city = useAddressStore((s) => s.address.city);
  const postCode = useAddressStore((s) => s.address.postCode);
  const streetName = useAddressStore((s) => s.address.streetName);
  const streetNumber = useAddressStore((s) => s.address.streetNumber);

  const [_countryName, setCountryName] = useState<string>(country);
  const [stateName, setStateName] = useState<string>(stateStore);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <div className='relative group'>
      <div className='absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>
      <Card className='relative bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/30 rounded-3xl p-8 min-w-full backdrop-blur-sm shadow-2xl shadow-blue-500/10'>
        <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-3xl'></div>
        <div className='absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-tr-2xl'></div>

        <div className='flex items-center gap-4 mb-8'>
          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur-sm'></div>
            <div className='relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 rounded-2xl'>
              <MapPinHouse className='h-6 w-6 text-white' />
            </div>
          </div>
          <div>
            <h2 className='text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-emerald-200 bg-clip-text text-transparent'>
              Address Information
            </h2>
            <p className='text-slate-300 text-sm'>
              Please provide your address details
            </p>
          </div>
        </div>

        <Form {...form}>
          <FormField
            control={form.control}
            name='name_5020537749'
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel className='text-white font-semibold text-base'>
                  {t('Attributes.country')}
                </FormLabel>
                <FormControl>
                  <div className='relative'>
                    <LocationSelector
                      onCountryChange={(country) => {
                        const name = country?.name || '';
                        setCountryName(name);
                        setCountry(name);
                        form.setValue(field.name, [name, stateName || '']);
                      }}
                      onStateChange={(state) => {
                        const name = state?.name || '';
                        setStateName(name);
                        setStateStore(name);
                        form.setValue(field.name, [
                          form.getValues(field.name)[0] || '',
                          name,
                        ]);
                      }}
                      defaultCountry={country}
                      defaultState={stateStore}
                    />
                  </div>
                </FormControl>
                <FormMessage className='text-red-400' />
              </FormItem>
            )}
          />

          <div className='space-y-2'>
            <Label
              htmlFor='city'
              className='text-white font-semibold text-base'
            >
              {t('Attributes.city')}
              <span className='text-red-400 ml-1'>*</span>
            </Label>
            <Input
              id='city'
              name='city'
              placeholder='Stubenberg'
              required
              defaultValue={city}
              onChange={(e) => setCity(e.target.value)}
              className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 rounded-xl px-4 py-3 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300'
            />
          </div>

          <div className='space-y-2'>
            <Label
              htmlFor='postCode'
              className='text-white font-semibold text-base'
            >
              {t('Attributes.postCode')}
              <span className='text-red-400 ml-1'>*</span>
            </Label>
            <Input
              id='postCode'
              name='postCode'
              placeholder='8223'
              required
              defaultValue={postCode}
              onChange={(e) => setPostCode(e.target.value)}
              className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 rounded-xl px-4 py-3 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300'
            />
          </div>

          <div className='space-y-2'>
            <Label
              htmlFor='streetName'
              className='text-white font-semibold text-base'
            >
              {t('Attributes.streetName')}
              <span className='text-red-400 ml-1'>*</span>
            </Label>
            <Input
              id='streetName'
              name='streetName'
              placeholder='Hauptstraße'
              required
              defaultValue={streetName}
              onChange={(e) => setStreetName(e.target.value)}
              className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 rounded-xl px-4 py-3 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300'
            />
          </div>

          <div className='space-y-2'>
            <Label
              htmlFor='streetNumber'
              className='text-white font-semibold text-base'
            >
              {t('Attributes.streetNumber')}
              <span className='text-red-400 ml-1'>*</span>
            </Label>
            <Input
              id='streetNumber'
              name='streetNumber'
              placeholder='123'
              ref={withMask('99999', {
                placeholder: '',
                showMaskOnHover: false,
              })}
              required
              defaultValue={streetNumber}
              onChange={(e) => setStreetNumber(e.target.value)}
              className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 rounded-xl px-4 py-3 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300'
            />
          </div>

          <Button
            type='submit'
            className='group flex items-center overflow-hidden transition-all duration-500 bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 hover:from-blue-700 hover:via-blue-600 hover:to-emerald-600 text-white shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 rounded-2xl px-8 py-4 font-semibold text-lg mt-8 w-full'
            onClick={() => {
              setProgress('ADDRESS');
              router.push('/onboarding/company');
            }}
          >
            <span className='transition-all duration-300'>Next Step</span>
            <ArrowRightIcon className='ml-2 transition-all duration-300 transform group-hover:translate-x-2 h-5 w-5' />
          </Button>
        </Form>
      </Card>
    </div>
  );
}
