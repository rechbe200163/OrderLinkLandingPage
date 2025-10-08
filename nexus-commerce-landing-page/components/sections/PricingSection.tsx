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
import { getTranslations } from 'next-intl/server';
import { Badge } from '../ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';

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

const moduleIcons = [Package, BarChart3, Workflow, Shield] as const;
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
      className='relative w-full overflow-hidden bg-gradient-to-b from-white to-slate-50 py-16 sm:py-20 md:py-24 lg:py-32'
    >
      {/* Background decorative elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-blue-400/10 to-indigo-500/10 blur-2xl' />
        <div className='absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-tr from-purple-400/10 to-pink-500/10 blur-2xl' />
      </div>

      <div className='container relative z-10 mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 flex max-w-4xl flex-col items-center text-center sm:mb-16 lg:mb-20'>
          <Badge
            variant='outline'
            className='mb-6 inline-flex items-center rounded-full border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:shadow-md'
          >
            <Package className='mr-2 h-4 w-4 text-blue-600' />
            {t('badge')}
          </Badge>
          <h2 className='mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl'>
            {t('title')}
          </h2>
          <p className='mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl'>
            {t('description')}
          </p>
        </div>

        <div className='mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:mb-20'>
          <Card className='group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 sm:p-8'>
            <CardHeader className='gap-3 pb-4'>
              <span className='inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/30'>
                <Settings className='h-6 w-6 text-white' />
              </span>
              <CardTitle className='text-xl font-bold text-slate-900 sm:text-2xl'>
                {t('modulesCard.title')}
              </CardTitle>
              <CardDescription className='text-base text-slate-600 sm:text-lg'>
                {t('modulesCard.subtitle')}
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              {moduleItems.map((item, index) => {
                const Icon = moduleIcons[index] ?? Package;
                return (
                  <div
                    key={item.name}
                    className='flex items-center justify-between rounded-xl border border-transparent bg-slate-50/50 px-4 py-3 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50/50'
                  >
                    <div className='flex items-center gap-3'>
                      <span className='inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700'>
                        <Icon className='h-4 w-4' />
                      </span>
                      <div className='flex flex-col'>
                        <span className='text-sm font-semibold text-slate-900'>
                          {item.name}
                        </span>
                        <span className='text-xs text-slate-500'>
                          {item.note}
                        </span>
                      </div>
                    </div>
                    <span className='text-sm font-bold text-slate-900'>
                      {item.price}
                    </span>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card className='group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 sm:p-8'>
            <CardHeader className='gap-3 pb-4'>
              <span className='inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-emerald-500/30'>
                <Users className='h-6 w-6 text-white' />
              </span>
              <CardTitle className='text-xl font-bold text-slate-900 sm:text-2xl'>
                {t('usersCard.title')}
              </CardTitle>
              <CardDescription className='text-base text-slate-600 sm:text-lg'>
                {t('usersCard.subtitle')}
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              {userItems.map((item, index) => {
                const isIncluded = index === 0;
                return (
                  <div
                    key={item.name}
                    className='flex items-center justify-between rounded-xl border border-transparent bg-slate-50/50 px-4 py-3 transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-50/50'
                  >
                    <div className='flex items-center gap-3'>
                      <span className='inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-700'>
                        <Users className='h-4 w-4' />
                      </span>
                      <div className='flex flex-col'>
                        <span className='text-sm font-semibold text-slate-900'>
                          {item.name}
                        </span>
                        <span className='text-xs text-slate-500'>
                          {item.note}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`text-sm font-bold ${
                        isIncluded ? 'text-emerald-600' : 'text-slate-900'
                      }`}
                    >
                      {item.price}
                    </span>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        <Card className='group relative mx-auto mb-12 max-w-4xl overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-slate-50 to-white p-8 text-center shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 sm:mb-16 lg:mb-20 sm:p-10'>
          <CardContent className='space-y-6'>
            <h3 className='text-2xl font-bold text-slate-900 sm:text-3xl'>
              {t('setup.title')}
            </h3>
            <p className='mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl'>
              {t('setup.description')}
            </p>
            <span className='inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105'>
              {t('setup.price')}
            </span>
          </CardContent>
        </Card>

        <div className='mx-auto max-w-7xl'>
          <h3 className='text-center text-3xl font-bold text-slate-900 sm:text-4xl'>
            {t('packages.title')}
          </h3>
          <div className='mt-8 grid grid-cols-1 gap-6 pt-10 sm:mt-10 sm:gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {packages.map((pkg, index) => {
              const meta =
                packageMeta[index] ?? packageMeta[packageMeta.length - 1];
              return (
                <Card
                  key={pkg.name}
                  className={`group relative flex h-full flex-col rounded-3xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                    meta.popular
                      ? 'border-blue-200 bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-500/25'
                      : 'border-slate-200/60 bg-white/80 shadow-lg backdrop-blur-sm hover:shadow-blue-500/10'
                  } p-6 sm:p-8`}
                >
                  {meta.popular && (
                    <Badge className='absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold text-blue-600 shadow-lg'>
                      {t('packages.popularBadge')}
                    </Badge>
                  )}
                  <CardHeader className='items-start space-y-3 pb-4'>
                    <CardTitle
                      className={`text-xl font-bold sm:text-2xl ${
                        meta.popular ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {pkg.name}
                    </CardTitle>
                    <span
                      className={`text-3xl font-bold sm:text-4xl ${
                        meta.popular ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {pkg.price}
                    </span>
                    <CardDescription
                      className={`text-sm ${
                        meta.popular ? 'text-blue-100' : 'text-slate-500'
                      }`}
                    >
                      {t('packages.billingPeriod')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='flex flex-1 flex-col justify-between gap-6 pt-2'>
                    <ul className='space-y-3 text-sm'>
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className={`flex items-center gap-3 ${
                            meta.popular ? 'text-blue-100' : 'text-slate-600'
                          }`}
                        >
                          <CheckCircle
                            className={`h-4 w-4 flex-shrink-0 ${
                              meta.popular ? 'text-blue-200' : 'text-blue-500'
                            }`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`w-full rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 hover:scale-105 ${
                        meta.popular
                          ? 'bg-white text-blue-600 hover:bg-blue-50 hover:shadow-lg'
                          : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl hover:shadow-blue-500/25'
                      }`}
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
