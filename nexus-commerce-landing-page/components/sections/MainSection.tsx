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
    <section className='relative w-full py-24 md:py-32 lg:py-44 overflow-hidden'>
      <BackgroundBeams />

      <div className='container relative'>
        <div className='grid gap-16 lg:grid-cols-2 lg:gap-24 items-center max-w-7xl mx-auto'>
          <div className='flex flex-col justify-center gap-8 text-center lg:text-left'>
            <div className='flex flex-col gap-6'>
              <Badge
                variant='secondary'
                className='w-fit mx-auto lg:mx-0 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2 text-sm font-medium'
              >
                <Settings className='w-4 h-4 mr-2' />
                Complete Business Management
              </Badge>
              <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground text-balance'>
                Streamline your{' '}
                <span className='inline-block'>
                  <FlipWords
                    words={words}
                    className='inline-block text-primary'
                  />
                </span>
              </h1>
              <p className='max-w-[540px] text-muted-foreground text-lg md:text-xl leading-relaxed mx-auto lg:mx-0'>
                Comprehensive logistics and business management platform.
                OrderLink integrates all your operations from admin tools to
                delivery tracking in one powerful solution.
              </p>
            </div>
            <div className='flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start'>
              <Button
                asChild
                size='lg'
                className='px-8 py-6 text-base bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-200 rounded-xl font-medium'
              >
                <Link href='#contact'>
                  Start Managing <Rocket className='ml-2 h-5 w-5' />
                </Link>
              </Button>
              <Button
                asChild
                variant='outline'
                size='lg'
                className='px-8 py-6 text-base border border-border hover:bg-accent text-foreground transition-colors duration-200 rounded-xl font-medium'
              >
                <Link href='#modules'>View Modules</Link>
              </Button>
            </div>
            <div className='flex items-center gap-8 pt-2 justify-center lg:justify-start'>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-primary rounded-full'></div>
                <span className='text-sm text-muted-foreground'>
                  10K+ Orders Daily
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='flex -space-x-0.5'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='h-4 w-4 text-amber-500 fill-current'
                    />
                  ))}
                </div>
                <span className='text-sm text-muted-foreground'>5.0 Rating</span>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center lg:justify-end'>
            <div className='relative'>
              <Image
                src='/dashboard-preview-1.png'
                alt='OrderLink Dashboard'
                width={800}
                height={600}
                className='relative rounded-2xl shadow-xl border border-border'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
