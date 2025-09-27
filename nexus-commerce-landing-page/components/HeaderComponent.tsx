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
  href: '/onboarding',
  label: 'Get Started',
} as const;

const HeaderComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 w-full border-b border-blue-500/20 bg-slate-950/80 backdrop-blur-2xl'>
      <div className='absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/30 to-emerald-500/30 rounded-br-[2.5rem] blur-xl'></div>
      <div className='absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-emerald-400/20 to-blue-400/20 rounded-bl-3xl blur-lg'></div>
      <div className='container relative'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex items-center gap-4'>
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur-sm'></div>
              <div className='relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 rounded-2xl'>
                <Package className='h-7 w-7 text-white' />
              </div>
            </div>
            <div className='flex flex-col'>
              <span className='text-2xl font-black bg-gradient-to-r from-white via-blue-200 to-emerald-200 bg-clip-text text-transparent'>
                OrderLink
              </span>
              <span className='text-xs text-blue-300 font-medium tracking-wider'>
                LOGISTICS PLATFORM
              </span>
            </div>
          </div>
          <nav className='hidden md:flex items-center space-x-8'>
            <Link
              href='#modules'
              className='text-slate-300 hover:text-blue-300 transition-all duration-300 font-medium relative group'
            >
              Modules
              <div className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 group-hover:w-full transition-all duration-300'></div>
            </Link>
            <Link
              href='#features'
              className='text-slate-300 hover:text-blue-300 transition-all duration-300 font-medium relative group'
            >
              Features
              <div className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 group-hover:w-full transition-all duration-300'></div>
            </Link>
            <Link
              href='#pricing'
              className='text-slate-300 hover:text-blue-300 transition-all duration-300 font-medium relative group'
            >
              Pricing
              <div className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 group-hover:w-full transition-all duration-300'></div>
            </Link>
            <Button
              asChild
              className='bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 hover:from-blue-700 hover:via-blue-600 hover:to-emerald-600 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 rounded-2xl px-6 py-3 font-semibold'
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
                    className='flex items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/60 focus:bg-slate-800/60 focus:outline-none'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className='mt-2 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 hover:from-blue-700 hover:via-blue-600 hover:to-emerald-600 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 rounded-2xl px-4 py-2 font-semibold'
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


