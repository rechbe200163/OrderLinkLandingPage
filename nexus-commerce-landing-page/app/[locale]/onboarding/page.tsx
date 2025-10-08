import Link from 'next/link';
import { ShieldCheck, Sparkles, ArrowLeft, Zap } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import OnboardingForm from '@/components/forms/OnboardingForm';
import { Badge } from '@/components/ui/badge';

const OnboardingPage = async () => {
  const t = await getTranslations('OnboardingPage');
  const highlights = [
    {
      icon: ShieldCheck,
      id: 'secure',
      title: t('highlights.secure.title'),
      description: t('highlights.secure.description'),
      accentClass: 'bg-blue-500/10 text-blue-600',
    },
    {
      icon: Sparkles,
      id: 'tailored',
      title: t('highlights.tailored.title'),
      description: t('highlights.tailored.description'),
      accentClass: 'bg-emerald-500/10 text-emerald-600',
    },
    {
      icon: Zap,
      id: 'launch',
      title: t('highlights.launch.title'),
      description: t('highlights.launch.description'),
      accentClass: 'bg-indigo-500/10 text-indigo-600',
    },
  ];

  return (
    <div className='relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/40 text-slate-900 antialiased'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute -top-40 -right-32 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-blue-400/15 via-indigo-500/10 to-purple-400/10 blur-3xl' />
        <div className='absolute -bottom-32 -left-20 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-emerald-400/15 via-blue-400/10 to-cyan-400/10 blur-3xl' />
        <div className='absolute inset-x-0 top-1/3 h-64 bg-gradient-to-t from-blue-100/30 via-white/20 to-transparent blur-2xl' />
      </div>

      <div className='relative z-10 flex min-h-screen flex-col'>
        <header className='container mx-auto flex w-full items-center justify-between px-4 py-6 sm:px-6 lg:px-8'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900'
          >
            <ArrowLeft className='h-4 w-4' />
            {t('backLink')}
          </Link>
        </header>

        <main className='flex-1 py-12 sm:py-16 lg:py-20'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16'>
              <section className='flex flex-col justify-center gap-8 text-center lg:text-left'>
                <div className='space-y-5'>
                  <Badge
                    variant='secondary'
                    className='mx-auto w-fit rounded-full border border-blue-200/60 bg-white/70 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur lg:mx-0'
                  >
                    {t('badge')}
                  </Badge>
                  <div className='space-y-4'>
                    <h1 className='text-balance text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl'>
                      {t('headline')}
                    </h1>
                    <p className='mx-auto max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg'>
                      {t('description')}
                    </p>
                  </div>
                </div>

                <div className='grid gap-5 text-left sm:grid-cols-2'>
                  {highlights.map(({ icon: Icon, id, title, description, accentClass }, index) => (
                    <div
                      key={id}
                      className={`flex items-start gap-4 rounded-2xl border border-blue-200/60 bg-white/70 p-4 shadow-sm backdrop-blur ${
                        index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
                      }`}
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${accentClass}`}
                      >
                        <Icon className='h-5 w-5' />
                      </div>
                      <div className='space-y-1'>
                        <h2 className='text-sm font-semibold text-slate-900'>
                          {title}
                        </h2>
                        <p className='text-sm text-slate-600'>{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className='relative'>
                <div className='absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/10 via-indigo-400/10 to-emerald-400/10 blur-2xl' />
                <div className='relative'>
                  <OnboardingForm />
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OnboardingPage;
