import { Package } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import React from 'react';

const columnConfig = [
  {
    key: 'modules',
    links: [
      { key: 'adminTool', href: '#modules' },
      { key: 'webShop', href: '#modules' },
      { key: 'deliveryNavigation', href: '#modules' },
      { key: 'dataAnalysis', href: '#modules' },
    ],
  },
  {
    key: 'company',
    links: [
      { key: 'about', href: '#' },
      { key: 'careers', href: '#' },
      { key: 'contact', href: '#' },
      { key: 'blog', href: '#' },
    ],
  },
  {
    key: 'support',
    links: [
      { key: 'docs', href: '#' },
      { key: 'helpCenter', href: '#' },
      { key: 'privacy', href: '#' },
      { key: 'terms', href: '#' },
    ],
  },
] as const;

const FooterComponent = async () => {
  const t = await getTranslations('FooterComponent');

  const columns = columnConfig.map((column) => ({
    title: t(`columns.${column.key}.title`),
    links: column.links.map((link) => ({
      href: link.href,
      label: t(`columns.${column.key}.links.${link.key}`),
    })),
  }));

  return (
    <footer className='w-full border-t border-blue-500/20 bg-slate-950/80 backdrop-blur-2xl'>
      <div className='container py-16'>
        <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-4'>
          <div className='space-y-6'>
            <div className='flex items-center gap-4'>
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur-sm'></div>
                <div className='relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 rounded-2xl'>
                  <Package className='h-7 w-7 text-white' />
                </div>
              </div>
              <div className='flex flex-col'>
                <span className='text-2xl font-black bg-gradient-to-r from-white via-blue-200 to-emerald-200 bg-clip-text text-transparent'>
                  {t('brand.name')}
                </span>
                <span className='text-xs text-blue-300 font-medium tracking-wider'>
                  {t('brand.tagline')}
                </span>
              </div>
            </div>
            <p className='text-slate-400 leading-relaxed'>
              {t('brand.description')}
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title} className='space-y-6'>
              <h3 className='text-lg font-semibold text-white'>
                {column.title}
              </h3>
              <ul className='space-y-3'>
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className='text-slate-400 hover:text-blue-300 transition-colors'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='mt-16 pt-8 border-t border-blue-500/20 text-center'>
          <p className='text-slate-400'>{t('bottomNote')}</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
