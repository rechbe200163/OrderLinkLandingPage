'use client';

import {
  Shield,
  Lock,
  Server,
  CheckCircle,
  FileCheck,
  Eye,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from 'next-intl';

const trustIcons = [Server, Lock, Shield, FileCheck, Eye] as const;

type TrustFeature = { title: string; description: string };
type Certification = { name: string; description: string };

const TrustSection = () => {
  const t = useTranslations('TrustSection');
  const trustFeatures = t.raw('trustFeatures') as TrustFeature[];
  const certifications = t.raw('certifications.items') as Certification[];
  const euCard = {
    title: t('euCard.title'),
    subtitle: t('euCard.subtitle'),
    points: t.raw('euCard.points') as { title: string; description: string }[],
  };
  return (
    <section
      id='trust'
      className='relative w-full overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-16 sm:py-20 md:py-24 lg:py-32'
    >
      {/* Background decorative elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 -right-20 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-400/10 to-teal-500/10 blur-3xl' />
        <div className='absolute bottom-1/4 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr from-blue-400/10 to-indigo-500/10 blur-3xl' />
      </div>

      <div className='container relative z-10 mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='mx-auto mb-12 max-w-4xl text-center sm:mb-16 lg:mb-20'>
          <Badge
            variant='outline'
            className='mb-6 inline-flex items-center rounded-full border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition-all duration-300 hover:shadow-md'
          >
            <Shield className='mr-2 h-4 w-4 text-emerald-600' />
            {t('badge')}
          </Badge>
          <h2 className='mb-6 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl'>
            {t('title')}
          </h2>
          <p className='mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl'>
            {t('description')}
          </p>
        </div>

        {/* EU Server Highlight Card */}
        <Card className='group relative mx-auto mb-12 max-w-5xl overflow-hidden rounded-3xl border-2 border-emerald-200/60 bg-gradient-to-br from-emerald-50 via-white to-teal-50/30 shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 sm:mb-16 lg:mb-20'>
          <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

          <CardContent className='relative z-10 p-8 sm:p-10 lg:p-12'>
            <div className='grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-12'>
              {/* Icon Section */}
              <div className='flex flex-col items-center justify-center text-center lg:items-start lg:text-left'>
                <div className='mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-2xl shadow-emerald-500/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-emerald-500/40'>
                  <Server className='h-10 w-10 text-white' />
                </div>
                <h3 className='mb-3 text-2xl font-bold text-slate-900 sm:text-3xl'>
                  {euCard.title}
                </h3>
                <p className='text-base text-slate-600 sm:text-lg'>
                  {euCard.subtitle}
                </p>
              </div>

              {/* Features List */}
              <div className='space-y-4'>
                {euCard.points.map((point) => (
                  <div
                    key={point.title}
                    className='flex items-start gap-3 rounded-xl bg-white/60 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/80'
                  >
                    <CheckCircle className='mt-1 h-5 w-5 flex-shrink-0 text-emerald-600' />
                    <div>
                      <p className='font-semibold text-slate-900'>
                        {point.title}
                      </p>
                      <p className='text-sm text-slate-600'>
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trust Features Grid */}
        <div className='mx-auto mb-12 max-w-7xl sm:mb-16 lg:mb-20'>
          <div className='grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {trustFeatures.map((feature, index) => {
              const Icon = trustIcons[index] ?? Shield;
              return (
                <div
                  key={feature.title}
                  className='group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10'
                >
                  {/* Background gradient overlay */}
                  <div className='absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-teal-50/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

                  {/* Icon container */}
                  <div className='relative mb-6'>
                    <div className='inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-emerald-500/30'>
                      <Icon className='h-7 w-7 text-white' />
                    </div>
                  </div>

                  {/* Content */}
                  <div className='relative space-y-3'>
                    <h3 className='text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-emerald-700 sm:text-xl'>
                      {feature.title}
                    </h3>
                    <p className='text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications Bar */}
        <div className='mx-auto max-w-5xl'>
          <div className='rounded-3xl border border-slate-200/60 bg-white/80 p-8 shadow-lg backdrop-blur-sm sm:p-10'>
            <h3 className='mb-8 text-center text-xl font-bold text-slate-900 sm:text-2xl'>
              {t('certifications.title')}
            </h3>
            <div className='grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4'>
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className='flex flex-col items-center justify-center rounded-2xl border border-slate-200/60 bg-gradient-to-br from-slate-50 to-white p-6 text-center transition-all duration-300 hover:border-emerald-200 hover:shadow-lg'
                >
                  <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-teal-100'>
                    <CheckCircle className='h-6 w-6 text-emerald-600' />
                  </div>
                  <p className='mb-1 text-lg font-bold text-slate-900'>
                    {cert.name}
                  </p>
                  <p className='text-sm text-slate-600'>{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className='mt-16 flex justify-center'>
          <div className='h-1 w-24 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600' />
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
