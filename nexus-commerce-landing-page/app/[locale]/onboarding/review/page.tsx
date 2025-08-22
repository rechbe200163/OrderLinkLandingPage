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
    <div className='min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950/50 to-emerald-950/30 text-white overflow-x-hidden'>
      <div className='container relative py-24 md:py-32'>
        <div className='max-w-4xl mx-auto space-y-12'>
          <Card className='bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/30 rounded-3xl'>
            <CardHeader>
              <CardTitle className='text-2xl font-bold text-white'>Address</CardTitle>
            </CardHeader>
            <CardContent className='text-slate-300 space-y-1'>
              <p>Country: {address.country}</p>
              <p>State: {address.state}</p>
              <p>City: {address.city}</p>
              <p>Post Code: {address.postCode}</p>
              <p>Street: {address.streetName} {address.streetNumber}</p>
              <Button variant='outline' className='mt-4' onClick={() => router.push('/onboarding/address')}>
                Edit Address
              </Button>
            </CardContent>
          </Card>

          <Card className='bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/30 rounded-3xl'>
            <CardHeader>
              <CardTitle className='text-2xl font-bold text-white'>Company</CardTitle>
            </CardHeader>
            <CardContent className='text-slate-300 space-y-1'>
              <p>Name: {company.companyName}</p>
              <p>Email: {company.email}</p>
              <p>Phone: {company.phoneNumber}</p>
              <p>IBAN: {company.iban}</p>
              <p>Company Number: {company.companyNumber}</p>
              <Button variant='outline' className='mt-4' onClick={() => router.push('/onboarding/company')}>
                Edit Company
              </Button>
            </CardContent>
          </Card>

          <Button className='w-full px-8 py-6 text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 hover:from-blue-700 hover:via-blue-600 hover:to-emerald-600' onClick={handleSubmit}>
            Submit
          </Button>

          <ProgressIndicators />
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;

