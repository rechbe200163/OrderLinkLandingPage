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
import { useCompanyStore } from '@/lib/stores/useCompanyStore';
import {
  Building2,
  Mail,
  Phone,
  CreditCard,
  Hash,
  ArrowRight,
} from 'lucide-react';
import { useProgressStore } from '@/lib/stores/useProgressStore';
import { useRouter } from 'next/navigation';
import ProgressIndicators from '@/components/helpers/ProgressIndicators';
import { useEffect } from 'react';

const OnboardingCompanyPage = () => {
  const router = useRouter();

  const setProgress = useProgressStore((state) => state.setProgress);

  useEffect(() => {
    setProgress('COMPANY');
  }, [setProgress]);

  const setEmail = useCompanyStore((state) => state.setEmail);
  const setPhoneNumber = useCompanyStore((state) => state.setPhoneNumber);
  const setIban = useCompanyStore((state) => state.setIban);
  const setCompanyNumber = useCompanyStore((state) => state.setCompanyNumber);
  const resetCompany = useCompanyStore((state) => state.resetCompany);

  const email = useCompanyStore((state) => state.company.email);
  const phoneNumber = useCompanyStore((state) => state.company.phoneNumber);
  const iban = useCompanyStore((state) => state.company.iban);
  const companyNumber = useCompanyStore((state) => state.company.companyNumber);

  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950/50 to-emerald-950/30 text-white overflow-x-hidden'>
      {/* Background decorative elements */}
      <div className='absolute top-20 left-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-br-[5rem]'></div>
      <div className='absolute bottom-20 right-0 w-36 h-36 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-tl-[4.5rem]'></div>

      <div className='container relative py-24 md:py-32'>
        <div className='max-w-4xl mx-auto'>
          {/* Header Section */}
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

          {/* Main Form Card */}
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

              <CardContent className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
                {/* Email Field */}
                <div className='space-y-3'>
                  <label className='flex items-center text-sm font-medium text-slate-300'>
                    <Mail className='w-4 h-4 mr-2 text-blue-400' />
                    Company Email
                  </label>
                  <Input
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='company@example.com'
                    className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12 text-lg'
                  />
                </div>

                {/* Phone Number Field */}
                <div className='space-y-3'>
                  <label className='flex items-center text-sm font-medium text-slate-300'>
                    <Phone className='w-4 h-4 mr-2 text-emerald-400' />
                    Phone Number
                  </label>
                  <Input
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder='+1 (555) 123-4567'
                    className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-emerald-400 focus:ring-emerald-400/20 rounded-xl h-12 text-lg'
                  />
                </div>

                {/* IBAN Field */}
                <div className='space-y-3'>
                  <label className='flex items-center text-sm font-medium text-slate-300'>
                    <CreditCard className='w-4 h-4 mr-2 text-blue-400' />
                    IBAN
                  </label>
                  <Input
                    required
                    value={iban}
                    onChange={(e) => setIban(e.target.value)}
                    placeholder='GB29 NWBK 6016 1331 9268 19'
                    className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12 text-lg'
                  />
                </div>

                {/* Company Number Field */}
                <div className='space-y-3'>
                  <label className='flex items-center text-sm font-medium text-slate-300'>
                    <Hash className='w-4 h-4 mr-2 text-emerald-400' />
                    Company Registration Number
                  </label>
                  <Input
                    required
                    value={companyNumber}
                    onChange={(e) => setCompanyNumber(e.target.value)}
                    placeholder='12345678'
                    className='bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-emerald-400 focus:ring-emerald-400/20 rounded-xl h-12 text-lg'
                  />
                </div>

                {/* Action Buttons */}
                <div className='flex flex-col gap-4 pt-8 md:col-span-2'>
                  <Button
                    size='lg'
                    onClick={() => {
                      router.push('/onboarding/review');
                    }}
                    className='w-full px-8 py-6 text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 hover:from-blue-700 hover:via-blue-600 hover:to-emerald-600 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-[1.02] rounded-xl text-white font-bold'
                  >
                    Continue Setup <ArrowRight className='ml-3 h-5 w-5' />
                  </Button>

                  <Button
                    variant='outline'
                    size='lg'
                    onClick={resetCompany}
                    className='w-full px-8 py-6 text-lg border-2 border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 bg-slate-950/50 backdrop-blur-sm text-blue-200 hover:text-white rounded-xl font-semibold'
                  >
                    Reset Form
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Progress indicator */}
        <ProgressIndicators />
      </div>
    </div>
  );
};

export default OnboardingCompanyPage;
