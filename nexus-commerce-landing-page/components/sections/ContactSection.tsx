import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Rocket } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

const ContactSection = async () => {
  const t = await getTranslations('ContactSection');

  return (
    <section
      id='contact'
      className='relative w-full py-24 md:py-32 bg-gradient-to-br from-slate-950 via-blue-950/30 to-emerald-950/20'
    >
      <div className='absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-br-[5rem]'></div>
      <div className='absolute bottom-0 right-0 w-36 h-36 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-tl-[4.5rem]'></div>

      <div className='container relative'>
        <div className='flex flex-col items-center justify-center space-y-10 text-center max-w-4xl mx-auto'>
          <h2 className='text-4xl font-black tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-white via-blue-200 to-emerald-200 bg-clip-text text-transparent'>
            {t('title')}
          </h2>
          <p className='max-w-[700px] text-slate-300 text-xl md:text-2xl leading-relaxed font-light'>
            {t('description')}
          </p>
          <div className='flex flex-col gap-6 min-[400px]:flex-row'>
            <Button
              asChild
              size='lg'
              className='px-12 py-6 text-xl bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 hover:from-blue-700 hover:via-blue-600 hover:to-emerald-600 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 rounded-2xl text-white font-bold'
            >
              <Link href='#pricing'>
                {t('primaryCta')} <Rocket className='ml-3 h-6 w-6' />
              </Link>
            </Button>
            <Button
              asChild
              variant='outline'
              size='lg'
              className='px-12 py-6 text-xl border-2 border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 bg-slate-950/50 backdrop-blur-sm text-blue-200 hover:text-white rounded-2xl font-semibold'
            >
              <Link href='#modules'>{t('secondaryCta')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
