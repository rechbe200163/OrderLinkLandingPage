import { Package } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const FooterComponent = () => {
  return (
    <footer className='w-full border-t border-border bg-muted/50'>
      <div className='container py-16'>
        <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-4'>
          <div className='space-y-4'>
            <div className='flex items-center gap-3'>
              <div className='flex items-center justify-center w-10 h-10 bg-primary rounded-xl'>
                <Package className='h-5 w-5 text-primary-foreground' />
              </div>
              <span className='text-lg font-bold text-foreground tracking-tight'>
                OrderLink
              </span>
            </div>
            <p className='text-muted-foreground leading-relaxed text-sm'>
              Built to simplify daily business operations.
            </p>
          </div>
          <div className='space-y-4'>
            <h3 className='text-sm font-semibold text-foreground'>Modules</h3>
            <ul className='space-y-2.5'>
              <li>
                <Link
                  href='#modules'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Admin Tool
                </Link>
              </li>
              <li>
                <Link
                  href='#modules'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Web Shop
                </Link>
              </li>
              <li>
                <Link
                  href='#modules'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Delivery Navigation
                </Link>
              </li>
              <li>
                <Link
                  href='#modules'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Data Analysis
                </Link>
              </li>
            </ul>
          </div>
          <div className='space-y-4'>
            <h3 className='text-sm font-semibold text-foreground'>Company</h3>
            <ul className='space-y-2.5'>
              <li>
                <Link
                  href='#'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className='space-y-4'>
            <h3 className='text-sm font-semibold text-foreground'>Support</h3>
            <ul className='space-y-2.5'>
              <li>
                <Link
                  href='#'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-12 pt-8 border-t border-border text-center'>
          <p className='text-sm text-muted-foreground'>
            &copy; 2024 OrderLink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
