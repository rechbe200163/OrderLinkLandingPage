'use client';
import { Menu, Package } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import Link from 'next/link';
const navigationLinks = [
  { href: '#modules', label: 'Modules' },
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
] as const;

const primaryNavigationLink = {
  href: 'onboarding/address',
  label: 'Get Started',
} as const;

const HeaderComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl'>
      <div className='container relative'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='flex items-center justify-center w-10 h-10 bg-primary rounded-xl'>
              <Package className='h-5 w-5 text-primary-foreground' />
            </div>
            <div className='flex flex-col'>
              <span className='text-lg font-bold text-foreground tracking-tight'>
                OrderLink
              </span>
            </div>
          </div>
          <nav className='hidden md:flex items-center gap-8'>
            <Link
              href='#modules'
              className='text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium'
            >
              Modules
            </Link>
            <Link
              href='#features'
              className='text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium'
            >
              Features
            </Link>
            <Link
              href='#pricing'
              className='text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium'
            >
              Pricing
            </Link>
            <Button
              asChild
              className='bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-5 py-2 text-sm font-medium transition-colors duration-200'
            >
              <Link href={primaryNavigationLink.href}>
                {primaryNavigationLink.label}
              </Link>
            </Button>
          </nav>
          <Popover open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <PopoverTrigger asChild>
              <Button
                className='group size-8 md:hidden'
                variant='ghost'
                size='icon'
                aria-label='Toggle navigation'
              >
                <Menu className='h-5 w-5' />
              </Button>
            </PopoverTrigger>
            <PopoverContent align='end' className='w-52 p-3 md:hidden'>
              <div className='grid gap-1'>
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className='flex items-center rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-accent focus:bg-accent focus:outline-none'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className='mt-2 w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-4 py-2 text-sm font-medium'
                >
                  <Link
                    href={primaryNavigationLink.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {primaryNavigationLink.label}
                  </Link>
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
