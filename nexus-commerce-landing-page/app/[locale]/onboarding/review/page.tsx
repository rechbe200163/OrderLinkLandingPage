'use client';

import { useAddressStore } from '@/lib/stores/useAddressStore';
import { useCompanyStore } from '@/lib/stores/useCompanyStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import ProgressIndicators from '@/components/helpers/ProgressIndicators';
import { useProgressStore } from '@/lib/stores/useProgressStore';
import { useEffect } from 'react';
import { finalizeOnboarding } from '@/lib/actions/onboarding.actions';

const ReviewPage = () => {
  const router = useRouter();

  const address = useAddressStore((s) => s.address);
  const company = useCompanyStore((s) => s.company);

  const setProgress = useProgressStore((s) => s.setProgress);

  useEffect(() => {
    setProgress('REVIEW');
  }, [setProgress]);

  const handleSubmit = async () => {
    await finalizeOnboarding({ address, company });
  };

  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 overflow-x-hidden relative'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none' />

      <div className='container relative py-16 md:py-24 px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h1 className='text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight'>
            Review Your Information
          </h1>
          <p className='text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed'>
            Please review your details below before finalizing your onboarding
            process.
          </p>
        </div>

        <div className='max-w-4xl mx-auto space-y-8'>
          <Card className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl hover:shadow-blue-500/10 hover:border-blue-400/30 transition-all duration-300 group'>
            <CardHeader className='pb-4'>
              <CardTitle className='text-2xl font-semibold text-white flex items-center gap-3'>
                <div className='w-2 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full' />
                Address Information
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-3'>
                  <div className='flex flex-col'>
                    <span className='text-sm font-medium text-slate-400 uppercase tracking-wide'>
                      Country
                    </span>
                    <span className='text-lg text-white font-medium'>
                      {address.country}
                    </span>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-sm font-medium text-slate-400 uppercase tracking-wide'>
                      State
                    </span>
                    <span className='text-lg text-white font-medium'>
                      {address.state}
                    </span>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-sm font-medium text-slate-400 uppercase tracking-wide'>
                      City
                    </span>
                    <span className='text-lg text-white font-medium'>
                      {address.city}
                    </span>
                  </div>
                </div>
                <div className='space-y-3'>
                  <div className='flex flex-col'>
                    <span className='text-sm font-medium text-slate-400 uppercase tracking-wide'>
                      Post Code
                    </span>
                    <span className='text-lg text-white font-medium'>
                      {address.postCode}
                    </span>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-sm font-medium text-slate-400 uppercase tracking-wide'>
                      Street Address
                    </span>
                    <span className='text-lg text-white font-medium'>
                      {address.streetName} {address.streetNumber}
                    </span>
                  </div>
                </div>
              </div>
              <Button
                variant='outline'
                className='mt-6 px-6 py-3 bg-transparent border-2 border-blue-400/50 text-blue-300 hover:bg-blue-400/10 hover:border-blue-400 hover:text-blue-200 transition-all duration-200 font-medium rounded-xl focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900'
                onClick={() => router.push('/onboarding/address')}
              >
                Edit Address
              </Button>
            </CardContent>
          </Card>

          <Card className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-400/30 transition-all duration-300 group'>
            <CardHeader className='pb-4'>
              <CardTitle className='text-2xl font-semibold text-white flex items-center gap-3'>
                <div className='w-2 h-8 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full' />
                Company Information
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-3'>
                  <div className='flex flex-col'>
                    <span className='text-sm font-medium text-slate-400 uppercase tracking-wide'>
                      Company Name
                    </span>
                    <span className='text-lg text-white font-medium'>
                      {company.companyName}
                    </span>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-sm font-medium text-slate-400 uppercase tracking-wide'>
                      Email
                    </span>
                    <span className='text-lg text-white font-medium'>
                      {company.email}
                    </span>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-sm font-medium text-slate-400 uppercase tracking-wide'>
                      Phone
                    </span>
                    <span className='text-lg text-white font-medium'>
                      {company.phoneNumber}
                    </span>
                  </div>
                </div>
                <div className='space-y-3'>
                  <div className='flex flex-col'>
                    <span className='text-sm font-medium text-slate-400 uppercase tracking-wide'>
                      IBAN
                    </span>
                    <span className='text-lg text-white font-medium font-mono'>
                      {company.iban}
                    </span>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-sm font-medium text-slate-400 uppercase tracking-wide'>
                      Company Number
                    </span>
                    <span className='text-lg text-white font-medium'>
                      {company.companyNumber}
                    </span>
                  </div>
                </div>
              </div>
              <Button
                variant='outline'
                className='mt-6 px-6 py-3 bg-transparent border-2 border-emerald-400/50 text-emerald-300 hover:bg-emerald-400/10 hover:border-emerald-400 hover:text-emerald-200 transition-all duration-200 font-medium rounded-xl focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900'
                onClick={() => router.push('/onboarding/company')}
              >
                Edit Company
              </Button>
            </CardContent>
          </Card>

          <div className='pt-8'>
            <Button
              className='w-full px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 hover:from-blue-700 hover:via-blue-600 hover:to-emerald-600 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 rounded-2xl border border-white/10 hover:border-white/20 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 transform hover:scale-[1.02] active:scale-[0.98]'
              onClick={handleSubmit}
            >
              Complete Onboarding
            </Button>
          </div>

          <div className='pt-8'>
            <ProgressIndicators />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
