import { Button } from '../ui/button';
import Link from 'next/link';
import { Rocket } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

const ContactSection = async () => {
  const t = await getTranslations('ContactSection');

  return (
    <section
      id='contact'
      className='relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16 sm:py-20 md:py-24 lg:py-32'
    >
      {/* Background decorative elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-500/20 blur-2xl' />
        <div className='absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-tr from-purple-400/20 to-pink-500/20 blur-2xl' />
      </div>

      <div className='container relative z-10 mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto flex max-w-4xl flex-col items-center gap-8 text-center sm:gap-10 lg:gap-12'>
          <div className='space-y-6'>
            <h2 className='text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl'>
              {t('title')}
            </h2>
            <p className='mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl'>
              {t('description')}
            </p>
          </div>

          <div className='flex flex-col gap-4 sm:flex-row sm:gap-6'>
            <Button
              asChild
              size='lg'
              className='group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-10 py-6 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105'
            >
              <Link href='#pricing'>
                {t('primaryCta')}{' '}
                <Rocket className='ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1' />
              </Link>
            </Button>
            <Button
              asChild
              variant='outline'
              size='lg'
              className='rounded-full border-2 border-slate-300 bg-white/80 px-10 py-6 text-base font-semibold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:bg-slate-100 hover:border-slate-400 hover:text-foreground hover:scale-105'
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
