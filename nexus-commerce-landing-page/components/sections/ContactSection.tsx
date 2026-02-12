import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Rocket } from 'lucide-react';

const ContactSection = () => {
  return (
    <section
      id='contact'
      className='relative w-full py-24 md:py-32 bg-muted/30'
    >
      <div className='container relative'>
        <div className='flex flex-col items-center justify-center gap-8 text-center max-w-3xl mx-auto'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground text-balance'>
            Ready to streamline your business?
          </h2>
          <p className='max-w-[600px] text-muted-foreground text-lg leading-relaxed'>
            Join thousands of businesses already using OrderLink to manage their
            operations more efficiently.
          </p>
          <div className='flex flex-col gap-4 min-[400px]:flex-row'>
            <Button
              asChild
              size='lg'
              className='px-8 py-6 text-base bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-200 rounded-xl font-medium'
            >
              <Link href='#pricing'>
                Start Your Free Trial <Rocket className='ml-2 h-5 w-5' />
              </Link>
            </Button>
            <Button
              asChild
              variant='outline'
              size='lg'
              className='px-8 py-6 text-base border border-border hover:bg-accent text-foreground transition-colors duration-200 rounded-xl font-medium'
            >
              <Link href='#modules'>Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
