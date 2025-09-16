'use client';
import { finalizeOnboarding } from '@/lib/actions/onboarding.actions';
import { FormState } from '@/lib/form.types';
import { useRouter } from 'next/navigation';
import React, { useActionState, useEffect } from 'react';
import { CardContent } from './ui/card';
import { CreditCard, Hash, Mail, Phone } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
const initialState: FormState = { success: false };

interface CompanyFormProps {
  addressId: string;
}

function CompanyForm({ addressId }: CompanyFormProps) {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(
    finalizeOnboarding,
    initialState
  );

  useEffect(() => {
    if (state.success && state.data) {
      router.push(`/progress/${state.data}`);
    }
  }, [state, router]);
  return (
    <form action={formAction}>
      <CardContent className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
        <input type='hidden' name='addressId' value={addressId} />

        <div className='space-y-3'>
          <label className='flex items-center text-sm font-medium text-slate-300'>
            <Mail className='w-4 h-4 mr-2 text-blue-400' />
            Company Name
          </label>
          <Input
            name='companyName'
            required
            placeholder='ACME'
            className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12 text-lg'
          />
        </div>
        <div className='space-y-3'>
          <label className='flex items-center text-sm font-medium text-slate-300'>
            <Mail className='w-4 h-4 mr-2 text-blue-400' />
            Company Email
          </label>
          <Input
            name='email'
            type='email'
            required
            placeholder='company@example.com'
            className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12 text-lg'
          />
        </div>

        <div className='space-y-3'>
          <label className='flex items-center text-sm font-medium text-slate-300'>
            <Phone className='w-4 h-4 mr-2 text-emerald-400' />
            Phone Number
          </label>
          <Input
            name='phoneNumber'
            required
            placeholder='+1 (555) 123-4567'
            className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-emerald-400 focus:ring-emerald-400/20 rounded-xl h-12 text-lg'
          />
        </div>

        <div className='space-y-3'>
          <label className='flex items-center text-sm font-medium text-slate-300'>
            <CreditCard className='w-4 h-4 mr-2 text-blue-400' />
            IBAN
          </label>
          <Input
            name='iban'
            required
            placeholder='GB29 NWBK 6016 1331 9268 19'
            className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12 text-lg'
          />
        </div>

        <div className='space-y-3'>
          <label className='flex items-center text-sm font-medium text-slate-300'>
            <Hash className='w-4 h-4 mr-2 text-emerald-400' />
            Company Registration Number
          </label>
          <Input
            name='companyNumber'
            required
            placeholder='12345678'
            className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-emerald-400 focus:ring-emerald-400/20 rounded-xl h-12 text-lg'
          />
        </div>

        <div className='flex flex-col gap-4 pt-8 md:col-span-2'>
          <Button
            type='submit'
            disabled={isPending}
            size='lg'
            className='w-full px-8 py-6 text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 hover:from-blue-700 hover:via-blue-600 hover:to-emerald-600 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-[1.02] rounded-xl text-white font-bold'
          >
            {isPending ? 'Saving...' : 'Continue Setup'}
          </Button>
        </div>
      </CardContent>
    </form>
  );
}

export default CompanyForm;
