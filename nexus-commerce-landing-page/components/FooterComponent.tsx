import { Package } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const FooterComponent = () => {
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
                  OrderLink
                </span>
                <span className='text-xs text-blue-300 font-medium tracking-wider'>
                  LOGISTICS PLATFORM
                </span>
              </div>
            </div>
            <p className='text-slate-400 leading-relaxed'>
              Comprehensive business management platform for modern logistics
              operations.
            </p>
          </div>
          <div className='space-y-6'>
            <h3 className='text-lg font-semibold text-white'>Modules</h3>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='#modules'
                  className='text-slate-400 hover:text-blue-300 transition-colors'
                >
                  Admin Tool
                </Link>
              </li>
              <li>
                <Link
                  href='#modules'
                  className='text-slate-400 hover:text-blue-300 transition-colors'
                >
                  Web Shop
                </Link>
              </li>
              <li>
                <Link
                  href='#modules'
                  className='text-slate-400 hover:text-blue-300 transition-colors'
                >
                  Delivery Navigation
                </Link>
              </li>
              <li>
                <Link
                  href='#modules'
                  className='text-slate-400 hover:text-blue-300 transition-colors'
                >
                  Data Analysis
                </Link>
              </li>
            </ul>
          </div>
          <div className='space-y-6'>
            <h3 className='text-lg font-semibold text-white'>Company</h3>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='#'
                  className='text-slate-400 hover:text-blue-300 transition-colors'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-slate-400 hover:text-blue-300 transition-colors'
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-slate-400 hover:text-blue-300 transition-colors'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-slate-400 hover:text-blue-300 transition-colors'
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className='space-y-6'>
            <h3 className='text-lg font-semibold text-white'>Support</h3>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='#'
                  className='text-slate-400 hover:text-blue-300 transition-colors'
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-slate-400 hover:text-blue-300 transition-colors'
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-slate-400 hover:text-blue-300 transition-colors'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-slate-400 hover:text-blue-300 transition-colors'
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-16 pt-8 border-t border-blue-500/20 text-center'>
          <p className='text-slate-400'>
            © 2024 OrderLink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
