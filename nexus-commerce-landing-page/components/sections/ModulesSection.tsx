'use client';

import {
  Package,
  CheckCircle,
  Settings,
  ShoppingCart,
  Navigation,
  LineChart,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type ModuleTranslation = {
  name: string;
  subtitle: string;
  features: string[];
};

const moduleIcons = [Settings, ShoppingCart, Navigation, LineChart] as const;

const moduleImages = [
  '/dashboard-preview.png',
  '/dashboard-preview-1.png',
  '/dashboard-preview.png',
  '/dashboard-preview-1.png',
];

const ModulesSectionRedesigned = () => {
  const t = useTranslations('ModulesSection');
  const modules = t.raw('modules') as ModuleTranslation[];

  return (
    <section
      id='modules'
      className='w-full bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 md:py-24 lg:py-32'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='mx-auto mb-12 max-w-4xl text-center sm:mb-16 lg:mb-20'>
          <Badge
            variant='outline'
            className='mb-6 inline-flex items-center rounded-full border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:shadow-md'
          >
            <Package className='mr-2 h-4 w-4 text-blue-600' />
            {t('badge')}
          </Badge>
          <h2 className='mb-6 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl'>
            {t('title')}
          </h2>
          <p className='mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl'>
            {t('description')}
          </p>
        </div>

        {/* Modules Grid */}
        <div className='mx-auto max-w-7xl flex flex-col gap-8 sm:gap-10 lg:gap-12'>
          {modules.map((module, index) => {
            const Icon = moduleIcons[index] ?? Settings;
            const imageSrc = moduleImages[index] ?? '/dashboard-preview.png';
            const isEven = index % 2 === 0;

            return (
              <div
                key={module.name}
                className='group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10'
              >
                {/* Background gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

                {/* Grid layout */}
                <div
                  className={`relative z-10 grid lg:grid-cols-2 ${
                    isEven
                      ? ''
                      : 'lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1'
                  }`}
                >
                  {/* Content Section */}
                  <div className='flex flex-col justify-center p-8 sm:p-10 lg:p-16'>
                    <div className='mb-6'>
                      {/* Blue gradient icon container */}
                      <div className='mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/30'>
                        <Icon className='h-7 w-7 text-white' />
                      </div>
                      {/* Improved typography */}
                      <h3 className='text-balance text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-700 sm:text-3xl'>
                        {module.name}
                      </h3>
                      <p className='mt-2 text-pretty text-base leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700 sm:text-lg'>
                        {module.subtitle}
                      </p>
                    </div>

                    <ul className='space-y-4 text-sm sm:text-base'>
                      {module.features.map((feature) => (
                        <li key={feature} className='flex items-start gap-3'>
                          <CheckCircle className='mt-1 h-4 w-4 flex-shrink-0 text-blue-500' />
                          <span className='leading-relaxed text-slate-600'>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image Section */}
                  <div className='flex items-center justify-center p-8 sm:p-10 lg:p-16'>
                    <div className='relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-2xl'>
                      <Image
                        src={imageSrc || '/placeholder.svg'}
                        alt={`${module.name} module preview`}
                        width={600}
                        height={400}
                        className='h-auto w-full max-w-md transition-transform duration-500 group-hover:scale-105'
                      />
                      {/* Blue gradient image overlay */}
                      <div className='absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
                    </div>
                  </div>
                </div>

                {/* Hover effect border with gradients */}
                <div className='pointer-events-none absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
              </div>
            );
          })}
        </div>

        {/* Blue gradient bottom decorative element */}
        <div className='mt-16 flex justify-center'>
          <div className='h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600' />
        </div>
      </div>
    </section>
  );
};

export default ModulesSectionRedesigned;
