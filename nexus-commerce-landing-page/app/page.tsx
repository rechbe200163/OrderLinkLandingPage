'use client';

import { useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Globe,
  Menu,
  Package,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <header className='sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60'>
        <div className='container flex h-16 items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Globe className='h-6 w-6 text-blue-600' />
            <span className='text-xl font-bold'>LogiTech</span>
          </div>
          <nav className='hidden md:flex items-center gap-6'>
            <Link
              href='#features'
              className='text-sm font-medium hover:text-blue-600'
            >
              Features
            </Link>
            <Link
              href='#benefits'
              className='text-sm font-medium hover:text-blue-600'
            >
              Benefits
            </Link>
            <Link
              href='#testimonials'
              className='text-sm font-medium hover:text-blue-600'
            >
              Testimonials
            </Link>
            <Link
              href='#contact'
              className='text-sm font-medium hover:text-blue-600'
            >
              Contact
            </Link>
          </nav>
          <div className='flex items-center gap-4'>
            <Button
              asChild
              className='hidden md:flex bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-700 hover:via-blue-600 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all'
            >
              <Link href='#contact'>Contact Sales</Link>
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant='outline' size='icon' className='md:hidden'>
                  <Menu className='h-6 w-6' />
                  <span className='sr-only'>Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
                <nav className='flex flex-col gap-4 mt-8'>
                  <Link
                    href='#features'
                    className='text-lg font-medium hover:text-blue-600'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Features
                  </Link>
                  <Link
                    href='#benefits'
                    className='text-lg font-medium hover:text-blue-600'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Benefits
                  </Link>
                  <Link
                    href='#testimonials'
                    className='text-lg font-medium hover:text-blue-600'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                  <Link
                    href='#contact'
                    className='text-lg font-medium hover:text-blue-600'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Button
                    asChild
                    className='mt-4 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-700 hover:via-blue-600 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all'
                  >
                    <Link
                      href='#contact'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact Sales
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className='flex-1'>
        {/* Hero Section */}
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50'>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'>
                    Complete Business Management Solution
                  </h1>
                  <p className='max-w-[600px] text-slate-500 md:text-xl'>
                    Streamline your operations with our integrated suite of
                    tools for administration, e-commerce, delivery, and data
                    analysis.
                  </p>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Button
                    asChild
                    size='lg'
                    className='px-8 bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 hover:from-blue-800 hover:via-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all'
                  >
                    <Link href='#contact'>
                      Contact Sales <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <Image
                  src='/placeholder.svg?height=550&width=550'
                  width={550}
                  height={550}
                  alt='Dashboard Preview'
                  className='rounded-lg object-cover shadow-xl'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id='features' className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  Comprehensive Suite of Tools
                </h2>
                <p className='max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Our integrated platform provides everything you need to manage
                  your business efficiently.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12'>
              <Card className='transition-all hover:shadow-lg border-t-4 border-t-blue-600'>
                <CardHeader className='pb-2'>
                  <ShieldCheck className='h-12 w-12 text-blue-600 mb-2' />
                  <CardTitle>Admin Tool</CardTitle>
                  <CardDescription>
                    Comprehensive user and product management
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2 text-sm'>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-blue-600' />
                      <span>User management for all customer types</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-blue-600' />
                      <span>Role-based access control</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-blue-600' />
                      <span>Product and inventory management</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-blue-600' />
                      <span>Route creation and management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className='transition-all hover:shadow-lg border-t-4 border-t-sky-500'>
                <CardHeader className='pb-2'>
                  <Package className='h-12 w-12 text-sky-500 mb-2' />
                  <CardTitle>Web Shop</CardTitle>
                  <CardDescription>
                    Complete e-commerce solution
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2 text-sm'>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-sky-500' />
                      <span>Order management system</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-sky-500' />
                      <span>Secure online payment processing</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-sky-500' />
                      <span>Order history and tracking</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-sky-500' />
                      <span>Customer account management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className='transition-all hover:shadow-lg border-t-4 border-t-cyan-600'>
                <CardHeader className='pb-2'>
                  <Truck className='h-12 w-12 text-cyan-600 mb-2' />
                  <CardTitle>Delivery Navigation</CardTitle>
                  <CardDescription>
                    Optimized delivery management
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2 text-sm'>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-cyan-600' />
                      <span>Intelligent route generation</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-cyan-600' />
                      <span>Real-time navigation</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-cyan-600' />
                      <span>Order completion tracking</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-cyan-600' />
                      <span>Contactless payment options</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className='transition-all hover:shadow-lg border-t-4 border-t-indigo-600'>
                <CardHeader className='pb-2'>
                  <BarChart3 className='h-12 w-12 text-indigo-600 mb-2' />
                  <CardTitle>Data Analysis</CardTitle>
                  <CardDescription>
                    Powerful business intelligence
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2 text-sm'>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-indigo-600' />
                      <span>Comprehensive data integration</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-indigo-600' />
                      <span>Real-time business analytics</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-indigo-600' />
                      <span>Predictive trend analysis</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-indigo-600' />
                      <span>Customizable reporting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          id='benefits'
          className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-tr from-blue-50 via-slate-50 to-indigo-50'
        >
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  Why Choose Our Solution
                </h2>
                <p className='max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Our integrated platform delivers tangible benefits across your
                  entire operation.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12'>
              <div className='flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white hover:shadow-md transition-all'>
                <div className='rounded-full bg-blue-100 p-3'>
                  <CheckCircle className='h-6 w-6 text-blue-600' />
                </div>
                <h3 className='text-xl font-bold'>Increased Efficiency</h3>
                <p className='text-center text-slate-500'>
                  Streamline operations and reduce manual tasks with our
                  integrated tools.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white hover:shadow-md transition-all'>
                <div className='rounded-full bg-sky-100 p-3'>
                  <CheckCircle className='h-6 w-6 text-sky-500' />
                </div>
                <h3 className='text-xl font-bold'>Cost Reduction</h3>
                <p className='text-center text-slate-500'>
                  Optimize resources and reduce operational costs with
                  data-driven insights.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white hover:shadow-md transition-all'>
                <div className='rounded-full bg-cyan-100 p-3'>
                  <CheckCircle className='h-6 w-6 text-cyan-600' />
                </div>
                <h3 className='text-xl font-bold'>
                  Enhanced Customer Experience
                </h3>
                <p className='text-center text-slate-500'>
                  Provide seamless service from order to delivery with our
                  integrated platform.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white hover:shadow-md transition-all'>
                <div className='rounded-full bg-indigo-100 p-3'>
                  <CheckCircle className='h-6 w-6 text-indigo-600' />
                </div>
                <h3 className='text-xl font-bold'>Data-Driven Decisions</h3>
                <p className='text-center text-slate-500'>
                  Make informed business decisions based on comprehensive
                  analytics.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white hover:shadow-md transition-all'>
                <div className='rounded-full bg-blue-100 p-3'>
                  <CheckCircle className='h-6 w-6 text-blue-700' />
                </div>
                <h3 className='text-xl font-bold'>Scalable Solution</h3>
                <p className='text-center text-slate-500'>
                  Grow your business with a platform that scales with your
                  needs.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white hover:shadow-md transition-all'>
                <div className='rounded-full bg-indigo-100 p-3'>
                  <CheckCircle className='h-6 w-6 text-indigo-700' />
                </div>
                <h3 className='text-xl font-bold'>Secure Infrastructure</h3>
                <p className='text-center text-slate-500'>
                  Protect your data and transactions with enterprise-grade
                  security.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section id='testimonials' className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  Trusted by Industry Leaders
                </h2>
                <p className='max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  See what our customers say about our comprehensive business
                  solution.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12'>
              <Card className='transition-all hover:shadow-lg border-l-4 border-l-blue-600'>
                <CardContent className='pt-6'>
                  <div className='flex items-start gap-4'>
                    <Image
                      src='/placeholder.svg?height=60&width=60'
                      width={60}
                      height={60}
                      alt='Customer'
                      className='rounded-full'
                    />
                    <div>
                      <p className='font-semibold'>Sarah Johnson</p>
                      <p className='text-sm text-slate-500'>
                        Operations Director, Global Logistics
                      </p>
                    </div>
                  </div>
                  <p className='mt-4 text-slate-500'>
                    "This platform has transformed our logistics operations. The
                    delivery navigation tool alone has reduced our delivery
                    times by 30%."
                  </p>
                </CardContent>
              </Card>
              <Card className='transition-all hover:shadow-lg border-l-4 border-l-sky-500'>
                <CardContent className='pt-6'>
                  <div className='flex items-start gap-4'>
                    <Image
                      src='/placeholder.svg?height=60&width=60'
                      width={60}
                      height={60}
                      alt='Customer'
                      className='rounded-full'
                    />
                    <div>
                      <p className='font-semibold'>Michael Chen</p>
                      <p className='text-sm text-slate-500'>
                        CEO, TechRetail Solutions
                      </p>
                    </div>
                  </div>
                  <p className='mt-4 text-slate-500'>
                    "The data analysis capabilities have given us insights we
                    never had before. We've been able to optimize our inventory
                    and increase profits by 25%."
                  </p>
                </CardContent>
              </Card>
              <Card className='transition-all hover:shadow-lg border-l-4 border-l-indigo-600'>
                <CardContent className='pt-6'>
                  <div className='flex items-start gap-4'>
                    <Image
                      src='/placeholder.svg?height=60&width=60'
                      width={60}
                      height={60}
                      alt='Customer'
                      className='rounded-full'
                    />
                    <div>
                      <p className='font-semibold'>Emma Rodriguez</p>
                      <p className='text-sm text-slate-500'>
                        E-commerce Manager, Urban Goods
                      </p>
                    </div>
                  </div>
                  <p className='mt-4 text-slate-500'>
                    "The web shop integration with the admin tool has
                    streamlined our entire operation. Customer satisfaction is
                    up and returns are down."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
        <section
          id='contact'
          className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-bl from-blue-50 via-slate-50 to-indigo-50'
        >
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  Ready to Transform Your Business?
                </h2>
                <p className='max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Contact our sales team for a personalized demonstration of our
                  platform.
                </p>
              </div>
              <div className='mx-auto w-full max-w-sm space-y-2'>
                <Button
                  size='lg'
                  className='w-full bg-gradient-to-br from-indigo-600 via-blue-600 to-sky-500 hover:from-indigo-700 hover:via-blue-700 hover:to-sky-600 shadow-md hover:shadow-lg transition-all'
                >
                  Contact Sales
                </Button>
                <p className='text-xs text-slate-500'>
                  Our team will respond within 24 hours to schedule your demo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='w-full border-t py-6 md:py-0 bg-blue-50'>
        <div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
          <div className='flex items-center gap-2'>
            <Globe className='h-6 w-6 text-blue-600' />
            <p className='text-sm text-slate-500'>
              © 2023 LogiTech. All rights reserved.
            </p>
          </div>
          <div className='flex gap-4'>
            <Link
              href='#'
              className='text-sm text-slate-500 hover:text-blue-600'
            >
              Privacy Policy
            </Link>
            <Link
              href='#'
              className='text-sm text-slate-500 hover:text-blue-600'
            >
              Terms of Service
            </Link>
            <Link
              href='#'
              className='text-sm text-slate-500 hover:text-blue-600'
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
