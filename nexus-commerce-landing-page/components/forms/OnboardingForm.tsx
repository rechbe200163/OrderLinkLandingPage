'use client';

import { useActionState } from 'react';
import {
  Loader2Icon,
  Building2,
  MapPinIcon as MapPinHouse,
  Mail,
  PenLine,
  Hash,
  CreditCard,
} from 'lucide-react';

import { finalizeOnboarding } from '@/lib/actions/onboarding.actions';
import { FormState } from '@/lib/form.types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import LocationSelector from '@/components/ui/location-input';
import PhoneNumberInputComponent from '@/components/PhoneNumberInputComponent';
import GenericInputMaskComponent from '@/components/InputWithMask';

const initialState: FormState = { success: false };

export default function OnboardingForm() {
  const [state, formAction, isPending] = useActionState(
    finalizeOnboarding,
    initialState
  );

  return (
    <div className='relative group'>
      <div className='absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>
      <Card className='relative bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/30 rounded-3xl overflow-hidden'>
        <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-3xl'></div>
        <div className='absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-tr-2xl'></div>

        <CardHeader className='pb-8 relative z-10'>
          <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-white'>
            <div className='flex items-center gap-4'>
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur-sm'></div>
                <div className='relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 rounded-2xl'>
                  <Building2 className='h-7 w-7 text-white' />
                </div>
              </div>
              <div>
                <CardTitle className='text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-emerald-200 bg-clip-text text-transparent'>
                  Company Onboarding
                </CardTitle>
                <CardDescription className='text-slate-200 text-base mt-2'>
                  Submit your company profile and business address to finish
                  setting up OrderLink.
                </CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className='relative z-10 pb-12'>
          <form action={formAction} className='space-y-10'>
            <section>
              <header className='flex items-center gap-3 mb-6'>
                <div className='h-10 w-10 rounded-2xl bg-blue-600/20 border border-blue-400/40 flex items-center justify-center'>
                  <PenLine className='h-5 w-5 text-blue-200' />
                </div>
                <div>
                  <h2 className='text-xl font-semibold text-white'>
                    Company Details
                  </h2>
                  <p className='text-sm text-slate-300'>
                    Basic information we will use to configure your workspace.
                  </p>
                </div>
              </header>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
                <div className='space-y-3'>
                  <Label className='flex items-center text-sm font-medium text-slate-300'>
                    <PenLine className='w-4 h-4 mr-2 text-blue-400' />
                    Company Name <span className='text-red-400 ml-1'>*</span>
                  </Label>
                  <Input
                    name='companyName'
                    required
                    placeholder='ACME'
                    className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12 text-lg'
                  />
                </div>

                <div className='space-y-3'>
                  <Label className='flex items-center text-sm font-medium text-slate-300'>
                    <Mail className='w-4 h-4 mr-2 text-blue-400' />
                    Company Email <span className='text-red-400 ml-1'>*</span>
                  </Label>
                  <Input
                    name='email'
                    type='email'
                    required
                    placeholder='company@example.com'
                    className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12 text-lg'
                  />
                </div>

                <div className='space-y-3 md:col-span-2'>
                  <PhoneNumberInputComponent name='phoneNumber' />
                </div>

                <div className='space-y-3'>
                  <Label className='flex items-center text-sm font-medium text-slate-300'>
                    <CreditCard className='w-4 h-4 mr-2 text-blue-400' />
                    IBAN
                  </Label>
                  <GenericInputMaskComponent
                    placeholder='GB29 NWBK 6016 1331 9268 19'
                    mask='AA99 9999 9999 9999 9999'
                    name='iban'
                  />
                </div>

                <div className='space-y-3'>
                  <Label className='flex items-center text-sm font-medium text-slate-300'>
                    <Hash className='w-4 h-4 mr-2 text-blue-400' />
                    Company Registration Number
                  </Label>
                  <Input
                    name='companyNumber'
                    required
                    placeholder='12345678'
                    className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-emerald-400 focus:ring-emerald-400/20 rounded-xl h-12 text-lg'
                  />
                </div>
              </div>
            </section>

            <section>
              <header className='flex items-center gap-3 mb-6'>
                <div className='h-10 w-10 rounded-2xl bg-emerald-600/20 border border-emerald-400/40 flex items-center justify-center'>
                  <MapPinHouse className='h-5 w-5 text-emerald-200' />
                </div>
                <div>
                  <h2 className='text-xl font-semibold text-white'>
                    Business Address
                  </h2>
                  <p className='text-sm text-slate-300'>
                    Let us know where your company is registered.
                  </p>
                </div>
              </header>

              <div className='space-y-6'>
                <LocationSelector />

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
                  <div className='space-y-2'>
                    <Label
                      htmlFor='city'
                      className='text-white font-semibold text-base'
                    >
                      City<span className='text-red-400 ml-1'>*</span>
                    </Label>
                    <Input
                      id='city'
                      name='city'
                      placeholder='Stubenberg'
                      required
                      className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12 text-lg'
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label
                      htmlFor='postCode'
                      className='text-white font-semibold text-base'
                    >
                      Post Code<span className='text-red-400 ml-1'>*</span>
                    </Label>
                    <Input
                      id='postCode'
                      name='postCode'
                      placeholder='8223'
                      required
                      className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12 text-lg'
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label
                      htmlFor='streetName'
                      className='text-white font-semibold text-base'
                    >
                      Street Name<span className='text-red-400 ml-1'>*</span>
                    </Label>
                    <Input
                      id='streetName'
                      name='streetName'
                      placeholder='Hauptstrasse'
                      required
                      className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12 text-lg'
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label
                      htmlFor='streetNumber'
                      className='text-white font-semibold text-base'
                    >
                      Street Number<span className='text-red-400 ml-1'>*</span>
                    </Label>
                    <Input
                      id='streetNumber'
                      name='streetNumber'
                      placeholder='123'
                      required
                      className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12 text-lg'
                    />
                  </div>
                </div>
              </div>
            </section>

            {state.message && !state.success ? (
              <div className='rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200'>
                {state.message}
              </div>
            ) : null}

            <div className='flex flex-col gap-4 pt-4'>
              <Button
                type='submit'
                disabled={isPending}
                className='group flex items-center justify-center overflow-hidden transition-all duration-500 bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 hover:from-blue-700 hover:via-blue-600 hover:to-emerald-600 text-white shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 rounded-2xl px-8 py-4 font-semibold text-lg w-full'
              >
                {isPending ? (
                  <>
                    <Loader2Icon className='mr-2 h-5 w-5 animate-spin' />
                    Submitting...
                  </>
                ) : (
                  <span className='transition-all duration-300'>
                    Complete Setup
                  </span>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
