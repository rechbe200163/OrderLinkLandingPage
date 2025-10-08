'use client';
import { Menu, Package } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const navigationItems = [
  { href: '#modules', key: 'modules' },
  { href: '#features', key: 'features' },
  { href: '#pricing', key: 'pricing' },
] as const;

const HeaderComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations('HeaderComponent');

  const navLinks = navigationItems.map((item) => ({
    href: item.href,
    label: t(`navigation.${item.key}`),
  }));

  const primaryNavigationLink = {
    href: '/onboarding',
    label: t('primaryCta'),
  } as const;

  return (
    <header className='sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md shadow-sm'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between sm:h-18'>
          <Link href='/' className='flex items-center gap-3 transition-transform duration-300 hover:scale-105'>
            <span className='flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30'>
              <Package className='h-5 w-5' />
            </span>
            <span className='flex flex-col leading-tight'>
              <span className='text-lg font-bold text-slate-900 sm:text-xl'>
                {t('brand.name')}
              </span>
              <span className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>
                {t('brand.tagline')}
              </span>
            </span>
          </Link>
          <nav className='hidden items-center gap-6 lg:gap-8 xl:flex'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-sm font-semibold text-slate-600 transition-all duration-300 hover:text-blue-600 hover:scale-105'
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className='rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105'
            >
              <Link href={primaryNavigationLink.href}>
                {primaryNavigationLink.label}
              </Link>
            </Button>
          </nav>
          <Popover open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <PopoverTrigger asChild>
              <Button
                className='lg:hidden'
                variant='ghost'
                size='icon'
                aria-label={t('mobileToggleAria')}
              >
                <Menu className='h-5 w-5 text-slate-700' />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align='end'
              className='w-64 p-4 lg:hidden'
              sideOffset={12}
            >
              <div className='grid gap-2'>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className='flex items-center rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className='mt-3 w-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25'
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
