import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import {
  BarChart3,
  CheckCircle,
  Package,
  Settings,
  Shield,
  Users,
  Workflow,
} from 'lucide-react';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { getTranslations } from 'next-intl/server';

type PricingItem = {
  name: string;
  note: string;
  price: string;
};

type PackageTranslation = {
  name: string;
  price: string;
  features: string[];
};

const moduleIconConfig = [
  {
    icon: Package,
    accentClass: 'p-1.5 rounded-md bg-emerald-500/20',
    iconClass: 'w-4 h-4 text-emerald-400',
  },
  {
    icon: BarChart3,
    accentClass: 'p-1.5 rounded-md bg-blue-500/20',
    iconClass: 'w-4 h-4 text-blue-400',
  },
  {
    icon: Workflow,
    accentClass: 'p-1.5 rounded-md bg-blue-500/20',
    iconClass: 'w-4 h-4 text-blue-400',
  },
  {
    icon: Shield,
    accentClass: 'p-1.5 rounded-md bg-blue-500/20',
    iconClass: 'w-4 h-4 text-blue-400',
  },
] as const;

const userIconConfig = [
  {
    accentClass: 'p-1.5 rounded-md bg-emerald-500/20',
    iconClass: 'w-4 h-4 text-emerald-400',
  },
  {
    accentClass: 'p-1.5 rounded-md bg-blue-500/20',
    iconClass: 'w-4 h-4 text-blue-400',
  },
  {
    accentClass: 'p-1.5 rounded-md bg-blue-500/20',
    iconClass: 'w-4 h-4 text-blue-400',
  },
  {
    accentClass: 'p-1.5 rounded-md bg-blue-500/20',
    iconClass: 'w-4 h-4 text-blue-400',
  },
] as const;

const packageMeta = [
  { popular: false },
  { popular: true },
  { popular: false },
] as const;

const PricingSection = async () => {
  const t = await getTranslations('PricingSection');
  const moduleItems = t.raw('modulesCard.items') as PricingItem[];
  const userItems = t.raw('usersCard.items') as PricingItem[];
  const packages = t.raw('packages.items') as PackageTranslation[];

  return (
    <section
      id='pricing'
      className='relative w-full py-24 md:py-32 bg-gradient-to-b from-slate-900 to-slate-950'
    >
      <div className='container relative'>
        <div className='flex flex-col items-center justify-center space-y-6 text-center mb-20 max-w-4xl mx-auto'>
          <Badge
            variant='outline'
            className='border-blue-500/30 text-blue-300 bg-blue-900/20 rounded-full px-6 py-3'
          >
            <Package className='w-4 h-4 mr-2' />
            {t('badge')}
          </Badge>
          <h2 className='text-4xl font-black tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-white via-blue-200 to-emerald-200 bg-clip-text text-transparent'>
            {t('title')}
          </h2>
          <p className='max-w-[900px] text-slate-300 text-xl md:text-2xl leading-relaxed font-light'>
            {t('description')}
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-24'>
          <Card className='rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/20 p-8 hover:border-blue-500/40 transition-all duration-300'>
            <CardHeader className='pb-6'>
              <div className='flex items-center gap-3 mb-2'>
                <div className='p-2 rounded-lg bg-blue-500/20'>
                  <Settings className='w-5 h-5 text-blue-400' />
                </div>
                <CardTitle className='text-2xl font-bold text-white'>
                  {t('modulesCard.title')}
                </CardTitle>
              </div>
              <CardDescription className='text-blue-200 text-lg'>
                {t('modulesCard.subtitle')}
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='space-y-4'>
                {moduleItems.map((item, index) => {
                  const config = moduleIconConfig[index];
                  const Icon = moduleIconConfig[index]?.icon ?? Package;
                  return (
                    <div
                      key={item.name}
                      className='flex items-center justify-between p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-colors border border-transparent first:bg-slate-800/50 first:border-emerald-500/20'
                    >
                      <div className='flex items-center gap-3'>
                        <div
                          className={
                            config?.accentClass ??
                            'p-1.5 rounded-md bg-blue-500/20'
                          }
                        >
                          <Icon
                            className={
                              config?.iconClass ?? 'w-4 h-4 text-blue-400'
                            }
                          />
                        </div>
                        <span className='font-semibold text-white'>
                          {item.name}
                        </span>
                        <span className='text-slate-400 text-sm'>
                          {item.note}
                        </span>
                      </div>
                      <span
                        className={`font-bold ${
                          index === 0 ? 'text-emerald-400' : 'text-white'
                        }`}
                      >
                        {item.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className='rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/20 p-8 hover:border-blue-500/40 transition-all duration-300'>
            <CardHeader className='pb-6'>
              <div className='flex items-center gap-3 mb-2'>
                <div className='p-2 rounded-lg bg-blue-500/20'>
                  <Users className='w-5 h-5 text-blue-400' />
                </div>
                <CardTitle className='text-2xl font-bold text-white'>
                  {t('usersCard.title')}
                </CardTitle>
              </div>
              <CardDescription className='text-blue-200 text-lg'>
                {t('usersCard.subtitle')}
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='space-y-4'>
                {userItems.map((item, index) => {
                  const config = userIconConfig[index] ?? userIconConfig[0];
                  const isIncluded = index === 0;
                  return (
                    <div
                      key={item.name}
                      className='flex items-center justify-between p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-colors border border-transparent'
                    >
                      <div className='flex items-center gap-3'>
                        <div className={config.accentClass}>
                          <Users className={config.iconClass} />
                        </div>
                        <span className='font-semibold text-white'>
                          {item.name}
                        </span>
                        <span className='text-slate-400 text-sm'>
                          {item.note}
                        </span>
                      </div>
                      <span
                        className={`font-bold ${
                          isIncluded ? 'text-emerald-400' : 'text-white'
                        } ${
                          index === userItems.length - 1
                            ? 'italic text-blue-300'
                            : ''
                        }`}
                      >
                        {item.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className='mb-24'>
          <Card className='max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-emerald-500/30 p-8 text-center backdrop-blur-sm'>
            <CardContent className='space-y-4'>
              <h3 className='text-3xl font-bold text-white mb-2'>
                {t('setup.title')}
              </h3>
              <p className='text-slate-300 text-lg mb-4'>
                {t('setup.description')}
              </p>
              <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-500/30'>
                <span className='text-emerald-400 font-bold text-2xl'>
                  {t('setup.price')}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className='text-3xl font-bold text-white text-center mb-12'>
            {t('packages.title')}
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {packages.map((pkg, index) => {
              const meta =
                packageMeta[index] ?? packageMeta[packageMeta.length - 1];
              return (
                <Card
                  key={pkg.name}
                  className={`relative rounded-3xl p-6 transition-all duration-300 hover:scale-105 ${
                    meta.popular
                      ? 'bg-gradient-to-br from-blue-900/40 to-slate-800/80 border-2 border-blue-500/50 shadow-lg shadow-blue-500/20'
                      : 'bg-slate-800/80 border border-blue-500/20'
                  } backdrop-blur-md`}
                >
                  {meta.popular && (
                    <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                      <Badge className='bg-blue-500 text-white px-4 py-1 rounded-full'>
                        {t('packages.popularBadge')}
                      </Badge>
                    </div>
                  )}
                  <CardHeader className='text-center pb-4'>
                    <CardTitle className='text-white text-2xl mb-2'>
                      {pkg.name}
                    </CardTitle>
                    <div className='text-3xl font-bold text-emerald-400 mb-1'>
                      {pkg.price}
                    </div>
                    <CardDescription className='text-slate-400'>
                      {t('packages.billingPeriod')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='pt-4'>
                    <ul className='space-y-3 mb-6'>
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className='flex items-center text-slate-300'
                        >
                          <CheckCircle className='h-5 w-5 mr-3 text-emerald-400 flex-shrink-0' />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`w-full ${
                        meta.popular
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-slate-700 hover:bg-slate-600 text-white border border-blue-500/30'
                      } transition-all duration-300`}
                    >
                      <Link href='/onboarding'>{t('packages.cta')}</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
