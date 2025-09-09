'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Mail, Phone, CreditCard, Hash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ProgressIndicators from '@/components/helpers/ProgressIndicators';
import { useActionState, useEffect, useState } from 'react';
import { finalizeOnboarding } from '@/lib/actions/onboarding.actions';
import { FormState } from '@/lib/form.types';

const initialState: FormState = { success: false };

const OnboardingCompanyPage = () => {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(
    finalizeOnboarding,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      router.push('/billing');
    }
  }, [state, router]);

  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950/50 to-emerald-950/30 text-white overflow-x-hidden'>
      <div className='absolute top-20 left-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-br-[5rem]'></div>
      <div className='absolute bottom-20 right-0 w-36 h-36 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-tl-[4.5rem]'></div>

      <div className='container relative py-24 md:py-32'>
        <div className='max-w-4xl mx-auto'>
          <div className='flex flex-col items-center justify-center space-y-6 text-center mb-20'>
            <Badge
              variant='outline'
              className='border-blue-500/30 text-blue-300 bg-blue-900/20 rounded-full px-6 py-3'
            >
              <Building2 className='w-4 h-4 mr-2' />
              Company Setup
            </Badge>
            <h1 className='text-4xl font-black tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-white via-blue-200 to-emerald-200 bg-clip-text text-transparent'>
              Complete Your Company Profile
            </h1>
            <p className='max-w-[600px] text-slate-300 text-xl leading-relaxed font-light'>
              Enter your company details to get started with OrderLink. This
              information will be used to configure your business management
              platform.
            </p>
          </div>

          <div className='relative group'>
            <div className='absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000'></div>
            <Card className='relative transition-all duration-700 border-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden'>
              <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-3xl'></div>

              <CardHeader className='pb-8 relative'>
                <div className='w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-blue-500/25'>
                  <Building2 className='h-8 w-8 text-white' />
                </div>
                <CardTitle className='text-2xl text-white font-bold'>
                  Company Information
                </CardTitle>
                <CardDescription className='text-blue-200 text-lg'>
                  Provide your business details for platform configuration
                </CardDescription>
              </CardHeader>

              <form action={formAction}>
                <CardContent className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
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
            </Card>
          </div>
        </div>
        {/* Progress indicator */}
        <ProgressIndicators step='COMPANY' />
      </div>
    </div>
  );
};

export default OnboardingCompanyPage;
