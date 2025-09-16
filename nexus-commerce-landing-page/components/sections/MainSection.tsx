import React from 'react';
import { Settings, Rocket, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { FlipWords } from '@/components/ui/flip-words';
const words = [
  'operations',
  'logistics',
  'business',
  'delivery',
  'growth',
  'success',
];

const MainSection = () => {
  return (
    <section className='relative w-full py-24 md:py-32 lg:py-48 overflow-hidden'>
      <BackgroundBeams />
      <div className='absolute top-20 left-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-br-[5rem]'></div>
      <div className='absolute bottom-20 right-0 w-36 h-36 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-tl-[4.5rem]'></div>

      <div className='container relative'>
        <div className='grid gap-20 lg:grid-cols-2 lg:gap-32 items-center max-w-7xl mx-auto'>
          <div className='flex flex-col justify-center space-y-10 text-center lg:text-left'>
            <div className='space-y-8'>
              <Badge
                variant='secondary'
                className='w-fit mx-auto lg:mx-0 bg-gradient-to-r from-blue-900/50 to-emerald-900/50 text-blue-200 border-blue-500/30 rounded-full px-6 py-3 text-sm font-medium'
              >
                <Settings className='w-4 h-4 mr-2' />
                Complete Business Management
              </Badge>
              <h1 className='text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-none'>
                <span className='bg-gradient-to-r from-white via-blue-200 to-emerald-200 bg-clip-text text-transparent'>
                  Streamline your{' '}
                </span>
                <br />
                <span className='inline-block'>
                  <FlipWords
                    words={words}
                    className='inline-block bg-gradient-to-r from-blue-400 via-blue-300 to-emerald-300 bg-clip-text text-transparent'
                  />
                </span>
              </h1>
              <p className='max-w-[600px] text-slate-300 text-xl md:text-2xl leading-relaxed mx-auto lg:mx-0 font-light'>
                Comprehensive logistics and business management platform.
                OrderLink integrates all your operations from admin tools to
                delivery tracking in one powerful solution.
              </p>
            </div>
            <div className='flex flex-col gap-6 min-[400px]:flex-row justify-center lg:justify-start'>
              <Button
                asChild
                size='lg'
                className='px-10 py-6 text-xl bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 hover:from-blue-700 hover:via-blue-600 hover:to-emerald-600 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 rounded-2xl text-white font-bold'
              >
                <Link href='#contact'>
                  Start Managing <Rocket className='ml-3 h-6 w-6' />
                </Link>
              </Button>
              <Button
                asChild
                variant='outline'
                size='lg'
                className='px-10 py-6 text-xl border-2 border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 bg-slate-950/50 backdrop-blur-sm text-blue-200 hover:text-white rounded-2xl font-semibold'
              >
                <Link href='#modules'>View Modules</Link>
              </Button>
            </div>
            <div className='flex items-center gap-12 pt-6 justify-center lg:justify-start'>
              <div className='flex items-center gap-3'>
                <div className='w-3 h-3 bg-emerald-400 rounded-full animate-pulse'></div>
                <span className='text-slate-400 font-medium'>
                  10K+ Orders Daily
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='flex -space-x-1'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='h-5 w-5 text-yellow-400 fill-current'
                    />
                  ))}
                </div>
                <span className='text-slate-400 font-medium'>5.0 Rating</span>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center lg:justify-end'>
            <div className='relative scale-90 sm:scale-100 md:scale-110 lg:scale-125 xl:scale-150'>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-3xl blur-3xl transform rotate-6 animate-pulse'></div>
              <div className='absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-emerald-500 rounded-2xl opacity-80 animate-pulse'></div>
              <div className='absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl opacity-70 animate-pulse'></div>
              <Image
                src='/dashboard-preview-1.png'
                alt='OrderLink Dashboard'
                width={800}
                height={600}
                className='relative rounded-md shadow-2xl border border-slate-700/50 backdrop-blur-sm'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
