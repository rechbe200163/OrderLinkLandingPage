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
  CheckCircle2,
  MailCheck,
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
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const initialState: FormState = { success: false };

export default function OnboardingForm() {
  const [state, formAction, isPending] = useActionState(
    finalizeOnboarding,
    initialState
  );
  const t = useTranslations('OnboardingForm');

  if (state.success) {
    return (
      <div className='relative group'>
        {/* dezenter Indigo-Glow */}
        <div className='absolute -inset-1 rounded-3xl bg-indigo-500/20 blur-3xl opacity-80 transition-all duration-700 group-hover:opacity-90' />
        <Card className='relative overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-2xl dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800'>
          <CardHeader className='relative z-10 pb-8'>
            <div className='flex flex-col items-center gap-5 text-center'>
              <div className='relative flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg'>
                <CheckCircle2 className='h-8 w-8' />
              </div>
              <div className='space-y-2'>
                <CardTitle className='text-3xl font-bold'>
                  {t('success.title')}
                </CardTitle>
                <CardDescription className='text-base text-slate-600 dark:text-slate-400'>
                  {t('success.description')}
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className='relative z-10 pb-12'>
            <div className='space-y-6 text-center text-slate-600 dark:text-slate-300'>
              <div className='mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-900/20 dark:text-emerald-400'>
                <MailCheck className='h-7 w-7' />
              </div>
              <p className='text-lg leading-relaxed'>
                {t('success.instructions')}
              </p>
              {state.message ? (
                <div className='rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-900/20 dark:text-emerald-300'>
                  {state.message}
                </div>
              ) : null}
              <div className='flex flex-col items-center gap-3'>
                {process.env.NEXT_PUBLIC_ADMIN_URL ? (
                  <Button
                    asChild
                    className='group flex items-center justify-center rounded-2xl bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    <Link href={process.env.NEXT_PUBLIC_ADMIN_URL}>
                      {t('success.adminCta')}
                    </Link>
                  </Button>
                ) : null}
                <p className='text-sm text-slate-500 dark:text-slate-400'>
                  {t('success.helpText')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className='relative group'>
      {/* dezenter Indigo-Glow */}
      <div className='absolute -inset-1 rounded-3xl bg-indigo-500/20 blur-3xl opacity-70 transition-all duration-700 group-hover:opacity-90' />
      <Card className='relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl backdrop-blur-sm dark:bg-slate-900 dark:border-slate-800'>
        <CardHeader className='relative z-10 pb-8'>
          <div className='flex flex-col gap-6 text-slate-900 md:flex-row md:items-center md:justify-between dark:text-slate-100'>
            <div className='flex items-center gap-4'>
              <div className='relative flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-md'>
                <Building2 className='h-7 w-7' />
              </div>
              <div className='space-y-1.5'>
                <CardTitle className='text-3xl font-bold'>
                  {t('intro.title')}
                </CardTitle>
                <CardDescription className='text-base text-slate-600 dark:text-slate-400'>
                  {t('intro.description')}
                </CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className='relative z-10 pb-12'>
          <form action={formAction} className='space-y-10'>
            {/* Company Details */}
            <section>
              <header className='mb-6 flex items-center gap-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-2xl border border-indigo-200 bg-indigo-50 text-indigo-600 dark:border-indigo-900/40 dark:bg-indigo-900/20 dark:text-indigo-300'>
                  <PenLine className='h-5 w-5' />
                </div>
                <div>
                  <h2 className='text-xl font-semibold text-slate-900 dark:text-slate-100'>
                    {t('sections.companyDetails.title')}
                  </h2>
                  <p className='text-sm text-slate-600 dark:text-slate-400'>
                    {t('sections.companyDetails.description')}
                  </p>
                </div>
              </header>

              <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8'>
                <div className='space-y-3'>
                  <Label className='text-sm font-medium text-slate-700 dark:text-slate-300'>
                    <span className='inline-flex items-center gap-2'>
                      <PenLine className='h-4 w-4 text-indigo-600' />
                      {t('fields.companyName')}{' '}
                      <span className='ml-1 text-rose-600'>*</span>
                    </span>
                  </Label>
                  <Input
                    name='companyName'
                    required
                    placeholder='ACME'
                    className='h-12 rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20'
                  />
                </div>

                <div className='space-y-3'>
                  <Label className='text-sm font-medium text-slate-700 dark:text-slate-300'>
                    <span className='inline-flex items-center gap-2'>
                      <Mail className='h-4 w-4 text-indigo-600' />
                      {t('fields.companyEmail')}{' '}
                      <span className='ml-1 text-rose-600'>*</span>
                    </span>
                  </Label>
                  <Input
                    name='email'
                    type='email'
                    required
                    placeholder='company@example.com'
                    className='h-12 rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20'
                  />
                </div>

                <div className='md:col-span-2'>
                  <PhoneNumberInputComponent name='phoneNumber' />
                </div>

                <div className='space-y-3'>
                  <Label className='text-sm font-medium text-slate-700 dark:text-slate-300'>
                    <span className='inline-flex items-center gap-2'>
                      <CreditCard className='h-4 w-4 text-slate-500' />
                      {t('fields.iban')}
                    </span>
                  </Label>
                  <GenericInputMaskComponent
                    placeholder='GB29 NWBK 6016 1331 9268 19'
                    mask='AA99 9999 9999 9999 9999'
                    name='iban'
                  />
                </div>

                <div className='space-y-3'>
                  <Label className='text-sm font-medium text-slate-700 dark:text-slate-300'>
                    <span className='inline-flex items-center gap-2'>
                      <Hash className='h-4 w-4 text-slate-500' />
                      {t('fields.companyNumber')}
                    </span>
                  </Label>
                  <Input
                    name='companyNumber'
                    required
                    placeholder='12345678'
                    className='h-12 rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20'
                  />
                </div>
              </div>
            </section>

            {/* Business Address */}
            <section>
              <header className='mb-6 flex items-center gap-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-2xl border border-indigo-200 bg-indigo-50 text-indigo-600 dark:border-indigo-900/40 dark:bg-indigo-900/20 dark:text-indigo-300'>
                  <MapPinHouse className='h-5 w-5' />
                </div>
                <div>
                  <h2 className='text-xl font-semibold text-slate-900 dark:text-slate-100'>
                    {t('sections.businessAddress.title')}
                  </h2>
                  <p className='text-sm text-slate-600 dark:text-slate-400'>
                    {t('sections.businessAddress.description')}
                  </p>
                </div>
              </header>

              <div className='space-y-6'>
                <LocationSelector />

                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8'>
                  <div className='space-y-2'>
                    <Label
                      htmlFor='city'
                      className='text-base font-semibold text-slate-700 dark:text-slate-300'
                    >
                      {t('fields.city')}
                      <span className='ml-1 text-rose-600'>*</span>
                    </Label>
                    <Input
                      id='city'
                      name='city'
                      placeholder='Stubenberg'
                      required
                      className='h-12 rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20'
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label
                      htmlFor='postCode'
                      className='text-base font-semibold text-slate-700 dark:text-slate-300'
                    >
                      {t('fields.postCode')}
                      <span className='ml-1 text-rose-600'>*</span>
                    </Label>
                    <Input
                      id='postCode'
                      name='postCode'
                      placeholder='8223'
                      required
                      className='h-12 rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20'
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label
                      htmlFor='streetName'
                      className='text-base font-semibold text-slate-700 dark:text-slate-300'
                    >
                      {t('fields.streetName')}
                      <span className='ml-1 text-rose-600'>*</span>
                    </Label>
                    <Input
                      id='streetName'
                      name='streetName'
                      placeholder='Hauptstrasse'
                      required
                      className='h-12 rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20'
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label
                      htmlFor='streetNumber'
                      className='text-base font-semibold text-slate-700 dark:text-slate-300'
                    >
                      {t('fields.streetNumber')}
                      <span className='ml-1 text-rose-600'>*</span>
                    </Label>
                    <Input
                      id='streetNumber'
                      name='streetNumber'
                      placeholder='123'
                      required
                      className='h-12 rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20'
                    />
                  </div>
                </div>
              </div>
            </section>

            {state.message && !state.success ? (
              <div className='rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-900/40 dark:bg-rose-900/20 dark:text-rose-300'>
                {state.message}
              </div>
            ) : null}

            <div className='flex flex-col gap-4 pt-4'>
              <Button
                type='submit'
                disabled={isPending}
                className='group flex w-full items-center justify-center rounded-2xl bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-70'
              >
                {isPending ? (
                  <>
                    <Loader2Icon className='mr-2 h-5 w-5 animate-spin' />
                    {t('actions.submitting')}
                  </>
                ) : (
                  <span className='transition-all duration-300'>
                    {t('actions.submit')}
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
