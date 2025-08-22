'use client';

import { useActionState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createAddress } from '@/lib/actions/address.actions';
import { FormState } from '@/lib/form.types';
import LocationSelector from '@/components/ui/location-input';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Loader2Icon, MapPinIcon as MapPinHouse } from 'lucide-react';
import { Card } from '@/components/ui/card';

const initialState: FormState = { success: false };

export default function AddressForm() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(createAddress, initialState);

  useEffect(() => {
    if (state.success && state.data) {
      localStorage.setItem('addressId', String(state.data));
      router.push('/onboarding/company');
    }
  }, [state, router]);

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
            <p className='text-slate-300 text-sm'>Please provide your address details</p>
          </div>
        </div>

        <form action={formAction} className='space-y-6'>
          <LocationSelector />

          <div className='space-y-2'>
            <Label htmlFor='city' className='text-white font-semibold text-base'>City<span className='text-red-400 ml-1'>*</span></Label>
            <Input id='city' name='city' placeholder='Stubenberg' required className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 rounded-xl px-4 py-3 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300' />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='postCode' className='text-white font-semibold text-base'>Post Code<span className='text-red-400 ml-1'>*</span></Label>
            <Input id='postCode' name='postCode' placeholder='8223' required className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 rounded-xl px-4 py-3 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300' />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='streetName' className='text-white font-semibold text-base'>Street Name<span className='text-red-400 ml-1'>*</span></Label>
            <Input id='streetName' name='streetName' placeholder='Hauptstraße' required className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 rounded-xl px-4 py-3 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300' />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='streetNumber' className='text-white font-semibold text-base'>Street Number<span className='text-red-400 ml-1'>*</span></Label>
            <Input id='streetNumber' name='streetNumber' placeholder='123' required className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 rounded-xl px-4 py-3 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300' />
          </div>

          <Button type='submit' disabled={isPending} className='group flex items-center overflow-hidden transition-all duration-500 bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 hover:from-blue-700 hover:via-blue-600 hover:to-emerald-600 text-white shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 rounded-2xl px-8 py-4 font-semibold text-lg mt-8 w-full'>
            {isPending ? <Loader2Icon className='mr-2 h-5 w-5 animate-spin' /> : <span className='transition-all duration-300'>Next Step</span>}
          </Button>
        </form>
      </Card>
    </div>
  );
}
