import { Settings, Rocket, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FlipWords } from '@/components/ui/flip-words';
import { getTranslations } from 'next-intl/server';

const MainSection = async () => {
  const t = await getTranslations('MainSection');
  const words = t.raw('heading.words') as string[];

  return (
    <section className='relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16 sm:py-10 md:py-12 lg:py-16 xl:py-20'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-500/20 blur-3xl' />
        <div className='absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-400/20 to-pink-500/20 blur-3xl' />
      </div>

      <div className='container relative z-10 mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16 xl:gap-20'>
          {/* Content Section */}
          <div className='flex flex-col justify-center space-y-6 text-center lg:space-y-8 lg:text-left'>
            <div className='space-y-6 lg:space-y-8'>
              <Badge
                variant='secondary'
                className='mx-auto w-fit rounded-full border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:shadow-md lg:mx-0'
              >
                <Settings className='mr-2 h-4 w-4 text-blue-600' />
                {t('badge')}
              </Badge>
              <h1 className='text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
                <span>{t('heading.prefix')} </span>
                <br />
                <FlipWords words={words} className='text-indigo-500' />
              </h1>
              <p className='mx-auto max-w-[600px] text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl lg:mx-0'>
                {t('description')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center lg:justify-start'>
              <Button
                asChild
                size='lg'
                className='group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105'
              >
                <Link href='#contact'>
                  {t('primaryCta')}{' '}
                  <Rocket className='ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1' />
                </Link>
              </Button>
              <Button
                asChild
                variant='outline'
                size='lg'
                className='rounded-full border-2 border-slate-300 bg-white/80 px-8 py-6 text-base font-semibold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:bg-slate-100 hover:border-slate-400 hover:scale-105'
              >
                <Link href='#modules'>{t('secondaryCta')}</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className='flex flex-col items-center gap-6 pt-4 sm:flex-row sm:justify-center lg:justify-start lg:gap-12'>
              <div className='flex items-center gap-3'>
                <div className='h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500'></div>
                <span className='text-sm font-medium text-slate-600'>
                  {t('stats.orders')}
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='flex -space-x-1'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='h-5 w-5 text-amber-400 transition-transform duration-300 hover:scale-110'
                      fill='currentColor'
                    />
                  ))}
                </div>
                <span className='text-sm font-medium text-slate-600'>
                  {t('stats.rating')}
                </span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className='flex items-center justify-center lg:justify-end'>
            <div className='relative group'>
              {/* Decorative background */}
              <div className='absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

              {/* Image container */}
              <div className='relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 shadow-2xl backdrop-blur-sm transition-all duration-500 group-hover:shadow-3xl'>
                <Image
                  src='/dashboard-preview-1.png'
                  alt={t('imageAlt')}
                  width={760}
                  height={540}
                  className='h-auto w-full transition-transform duration-500 group-hover:scale-105'
                  priority
                />
                {/* Image overlay gradient */}
                <div className='absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
              </div>

              {/* Floating elements */}
              <div className='absolute -top-6 -right-6 h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110' />
              <div className='absolute -bottom-6 -left-6 h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
