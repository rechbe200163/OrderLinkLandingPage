'use client';

import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { submitOnboarding } from '@/lib/actions/onboarding.actions';
import { useAddressStore } from '@/lib/stores/useAddressStore';
import { useCompanyStore } from '@/lib/stores/useCompanyStore';
import { useProgressStore } from '@/lib/stores/useProgressStore';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import ProgressIndicators from '@/components/helpers/ProgressIndicators';

const initialState = { success: false };

const ReviewPage = () => {
  const {
    address: { country, state, city, postCode, streetName, streetNumber },
    setCountry,
    setState: setStateStore,
    setCity,
    setPostCode,
    setStreetName,
    setStreetNumber,
  } = useAddressStore();

  const {
    company: { companyName, email, phoneNumber, iban, companyNumber },
    setCompanyName,
    setEmail,
    setPhoneNumber,
    setIban,
    setCompanyNumber,
  } = useCompanyStore();

  const setProgress = useProgressStore((s) => s.setProgress);

  const [state, formAction] = useFormState(submitOnboarding, initialState);

  useEffect(() => {
    setProgress('REVIEW');
  }, [setProgress]);

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/50 to-emerald-950/30 text-white'>
      <div className='container mx-auto py-24 max-w-3xl'>
        <h1 className='text-4xl font-bold text-center mb-10'>Review Your Data</h1>
        <form action={formAction} className='space-y-8'>
          <section className='space-y-4'>
            <h2 className='text-2xl font-semibold'>Company Information</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <Label htmlFor='companyName'>Company Name</Label>
                <Input
                  id='companyName'
                  name='companyName'
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='phoneNumber'>Phone Number</Label>
                <Input
                  id='phoneNumber'
                  name='phoneNumber'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='iban'>IBAN</Label>
                <Input
                  id='iban'
                  name='iban'
                  value={iban}
                  onChange={(e) => setIban(e.target.value)}
                />
              </div>
              <div className='space-y-2 md:col-span-2'>
                <Label htmlFor='companyNumber'>Company Number</Label>
                <Input
                  id='companyNumber'
                  name='companyNumber'
                  value={companyNumber}
                  onChange={(e) => setCompanyNumber(e.target.value)}
                />
              </div>
            </div>
          </section>

          <section className='space-y-4'>
            <h2 className='text-2xl font-semibold'>Address Information</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <Label htmlFor='country'>Country</Label>
                <Input
                  id='country'
                  name='country'
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='state'>State</Label>
                <Input
                  id='state'
                  name='state'
                  value={state}
                  onChange={(e) => setStateStore(e.target.value)}
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='city'>City</Label>
                <Input
                  id='city'
                  name='city'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='postCode'>Post Code</Label>
                <Input
                  id='postCode'
                  name='postCode'
                  value={postCode}
                  onChange={(e) => setPostCode(e.target.value)}
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='streetName'>Street Name</Label>
                <Input
                  id='streetName'
                  name='streetName'
                  value={streetName}
                  onChange={(e) => setStreetName(e.target.value)}
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='streetNumber'>Street Number</Label>
                <Input
                  id='streetNumber'
                  name='streetNumber'
                  value={streetNumber}
                  onChange={(e) => setStreetNumber(e.target.value)}
                />
              </div>
            </div>
          </section>

          {state.success && (
            <p className='text-emerald-400'>Data submitted successfully!</p>
          )}

          <Button
            type='submit'
            onClick={() => setProgress('REVIEW')}
            className='w-full px-8 py-4 text-lg'
          >
            Submit
          </Button>
        </form>
        <ProgressIndicators />
      </div>
    </div>
  );
};

export default ReviewPage;
