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
  Star,
  Users,
  Zap,
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
import { Badge } from '@/components/ui/badge';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='flex min-h-screen flex-col items-center'>
      <header className='sticky top-0 z-50 w-full border-b bg-foreground/95 backdrop-blur supports-backdrop-filter:bg-foreground/60 shadow-sm'>
        <div className='container flex h-16 items-center justify-between bg-foreground/20 backdrop-blur-md rounded-lg mx-4 px-6 border border-white/30 shadow-lg'>
          <div className='flex items-center gap-2'>
            <div className='flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-lg'>
              <Globe className='h-5 w-5 text-foreground' />
            </div>
            <span className='text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 bg-clip-text text-transparent'>
              LogiTech
            </span>
          </div>
          <nav className='hidden md:flex items-center gap-8'>
            <Link
              href='#features'
              className='text-sm font-medium text-muted-foreground hover:text-primary transition-colors'
            >
              Features
            </Link>
            <Link
              href='#benefits'
              className='text-sm font-medium text-muted-foreground hover:text-primary transition-colors'
            >
              Benefits
            </Link>
            <Link
              href='#pricing'
              className='text-sm font-medium text-muted-foreground hover:text-primary transition-colors'
            >
              Pricing
            </Link>
            <Link
              href='#contact'
              className='text-sm font-medium text-muted-foreground hover:text-primary transition-colors'
            >
              Contact
            </Link>
          </nav>
          <div className='flex items-center gap-4'>
            <Button
              asChild
              className='hidden md:flex bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300'
            >
              <Link href='#contact'>Get Started</Link>
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant='outline'
                  size='icon'
                  className='md:hidden bg-transparent'
                >
                  <Menu className='h-6 w-6' />
                  <span className='sr-only'>Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
                <nav className='flex flex-col gap-4 mt-8'>
                  <Link
                    href='#features'
                    className='text-lg font-medium hover:text-primary transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Features
                  </Link>
                  <Link
                    href='#benefits'
                    className='text-lg font-medium hover:text-primary transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Benefits
                  </Link>
                  <Link
                    href='#pricing'
                    className='text-lg font-medium hover:text-primary transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href='#contact'
                    className='text-lg font-medium hover:text-primary transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Button
                    asChild
                    className='mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300'
                  >
                    <Link
                      href='#contact'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className='flex-1 w-full flex flex-col items-center'>
        {/* Hero Section */}
        <section className='relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950 overflow-hidden'>
          <div className='absolute inset-0 bg-grid-pattern opacity-5'></div>
          <div className='container px-4 md:px-6 relative'>
            <div className='grid gap-12 lg:grid-cols-2 lg:gap-16 xl:grid-cols-2 items-center'>
              <div className='flex flex-col justify-center space-y-8'>
                <div className='space-y-6'>
                  <Badge
                    variant='secondary'
                    className='w-fit bg-blue-100 text-blue-700 hover:bg-blue-200'
                  >
                    <Star className='w-3 h-3 mr-1' />
                    Complete Business Solution
                  </Badge>
                  <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent'>
                    Transform Your Logistics Operations
                  </h1>
                  <p className='max-w-[600px] text-muted-foreground text-lg md:text-xl leading-relaxed'>
                    Streamline your entire business with our comprehensive
                    platform featuring admin tools, e-commerce, delivery
                    navigation, and powerful analytics.
                  </p>
                </div>
                <div className='flex flex-col gap-4 min-[400px]:flex-row'>
                  <Button
                    asChild
                    size='lg'
                    className='px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105'
                  >
                    <Link href='#contact'>
                      Start Free Trial <ArrowRight className='ml-2 h-5 w-5' />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant='outline'
                    size='lg'
                    className='px-8 py-6 text-lg border-2 hover:bg-blue-50 transition-all duration-300 bg-transparent'
                  >
                    <Link href='#features'>Learn More</Link>
                  </Button>
                </div>
                <div className='flex items-center gap-8 pt-4'>
                  <div className='flex items-center gap-2'>
                    <Users className='h-5 w-5 text-primary' />
                    <span className='text-sm text-muted-foreground'>
                      500+ Companies
                    </span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Star className='h-5 w-5 text-yellow-500' />
                    <span className='text-sm text-muted-foreground'>
                      4.9/5 Rating
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center lg:justify-end'>
                <div className='relative'>
                  <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur-3xl opacity-20 transform rotate-6'></div>
                  <Image
                    src='/placeholder.svg?height=600&width=600'
                    width={600}
                    height={600}
                    alt='Dashboard Preview'
                    className='relative rounded-2xl object-cover shadow-2xl border border-white/20'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id='features' className='w-full py-20 md:py-32 bg-foreground'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center mb-16'>
              <Badge variant='outline' className='mb-4'>
                <Zap className='w-3 h-3 mr-1' />
                Powerful Features
              </Badge>
              <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'>
                Everything You Need in One Platform
              </h2>
              <p className='max-w-[900px] text-muted-foreground text-lg md:text-xl leading-relaxed'>
                Our comprehensive suite of tools covers every aspect of your
                logistics and e-commerce operations.
              </p>
            </div>
            <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
              <Card className='group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg bg-background'>
                <CardHeader className='pb-4'>
                  <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                    <ShieldCheck className='h-8 w-8 text-foreground' />
                  </div>
                  <CardTitle className='text-xl'>Admin Tool</CardTitle>
                  <CardDescription className='text-muted-foreground'>
                    Comprehensive management dashboard
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-3 text-sm'>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-3 h-4 w-4 text-primary flex-shrink-0' />
                      <span>User management for all customer types</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-3 h-4 w-4 text-primary flex-shrink-0' />
                      <span>Role-based access control</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-3 h-4 w-4 text-primary flex-shrink-0' />
                      <span>Product and inventory management</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-3 h-4 w-4 text-primary flex-shrink-0' />
                      <span>Route creation and management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className='group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg bg-background'>
                <CardHeader className='pb-4'>
                  <div className='w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-600 dark:from-sky-400 dark:to-sky-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                    <Package className='h-8 w-8 text-foreground' />
                  </div>
                  <CardTitle className='text-xl'>Web Shop</CardTitle>
                  <CardDescription className='text-muted-foreground'>
                    Complete e-commerce solution
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-3 text-sm'>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-3 h-4 w-4 text-sky-600 flex-shrink-0' />
                      <span>Order management system</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-3 h-4 w-4 text-sky-600 flex-shrink-0' />
                      <span>Secure online payment processing</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-3 h-4 w-4 text-sky-600 flex-shrink-0' />
                      <span>Order history and tracking</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-3 h-4 w-4 text-sky-600 flex-shrink-0' />
                      <span>Customer account management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className='group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg bg-background'>
                <CardHeader className='pb-4'>
                  <div className='w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 dark:from-cyan-400 dark:to-cyan-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                    <Truck className='h-8 w-8 text-foreground' />
                  </div>
                  <CardTitle className='text-xl'>Delivery Navigation</CardTitle>
                  <CardDescription className='text-muted-foreground'>
                    Optimized delivery management
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-3 text-sm'>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-3 h-4 w-4 text-cyan-600 flex-shrink-0' />
                      <span>Intelligent route generation</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-3 h-4 w-4 text-cyan-600 flex-shrink-0' />
                      <span>Real-time navigation</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-3 h-4 w-4 text-cyan-600 flex-shrink-0' />
                      <span>Order completion tracking</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-3 h-4 w-4 text-cyan-600 flex-shrink-0' />
                      <span>Contactless payment options</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className='group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg bg-background'>
                <CardHeader className='pb-4'>
                  <div className='w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                    <BarChart3 className='h-8 w-8 text-foreground' />
                  </div>
                  <CardTitle className='text-xl'>Data Analysis</CardTitle>
                  <CardDescription className='text-muted-foreground'>
                    Powerful business intelligence
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-3 text-sm'>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-3 h-4 w-4 text-indigo-600 flex-shrink-0' />
                      <span>Comprehensive data integration</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-3 h-4 w-4 text-indigo-600 flex-shrink-0' />
                      <span>Real-time business analytics</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-3 h-4 w-4 text-indigo-600 flex-shrink-0' />
                      <span>Predictive trend analysis</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-3 h-4 w-4 text-indigo-600 flex-shrink-0' />
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
          className='w-full py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900'
        >
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center mb-16'>
              <Badge variant='outline' className='mb-4'>
                <CheckCircle className='w-3 h-3 mr-1' />
                Key Benefits
              </Badge>
              <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'>
                Why Choose LogiTech?
              </h2>
              <p className='max-w-[900px] text-muted-foreground text-lg md:text-xl leading-relaxed'>
                Transform your business operations with measurable results and
                improved efficiency.
              </p>
            </div>
            <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
              <div className='group flex flex-col items-center space-y-4 rounded-2xl border-0 p-8 shadow-lg bg-foreground hover:shadow-xl transition-all duration-300 hover:-translate-y-2'>
                <div className='rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 p-4 group-hover:scale-110 transition-transform duration-300'>
                  <CheckCircle className='h-8 w-8 text-foreground' />
                </div>
                <h3 className='text-xl font-bold text-center'>
                  Increased Efficiency
                </h3>
                <p className='text-center text-muted-foreground leading-relaxed'>
                  Streamline operations and reduce manual tasks with our
                  integrated tools, boosting productivity by up to 40%.
                </p>
              </div>

              <div className='group flex flex-col items-center space-y-4 rounded-2xl border-0 p-8 shadow-lg bg-foreground hover:shadow-xl transition-all duration-300 hover:-translate-y-2'>
                <div className='rounded-full bg-gradient-to-br from-sky-500 to-sky-600 dark:from-sky-400 dark:to-sky-500 p-4 group-hover:scale-110 transition-transform duration-300'>
                  <CheckCircle className='h-8 w-8 text-foreground' />
                </div>
                <h3 className='text-xl font-bold text-center'>
                  Cost Reduction
                </h3>
                <p className='text-center text-muted-foreground leading-relaxed'>
                  Optimize resources and reduce operational costs with
                  data-driven insights, saving up to 30% annually.
                </p>
              </div>

              <div className='group flex flex-col items-center space-y-4 rounded-2xl border-0 p-8 shadow-lg bg-foreground hover:shadow-xl transition-all duration-300 hover:-translate-y-2'>
                <div className='rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 dark:from-cyan-400 dark:to-cyan-500 p-4 group-hover:scale-110 transition-transform duration-300'>
                  <CheckCircle className='h-8 w-8 text-foreground' />
                </div>
                <h3 className='text-xl font-bold text-center'>
                  Enhanced Customer Experience
                </h3>
                <p className='text-center text-muted-foreground leading-relaxed'>
                  Provide seamless service from order to delivery with our
                  integrated platform, improving satisfaction rates.
                </p>
              </div>

              <div className='group flex flex-col items-center space-y-4 rounded-2xl border-0 p-8 shadow-lg bg-foreground hover:shadow-xl transition-all duration-300 hover:-translate-y-2'>
                <div className='rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500 p-4 group-hover:scale-110 transition-transform duration-300'>
                  <CheckCircle className='h-8 w-8 text-foreground' />
                </div>
                <h3 className='text-xl font-bold text-center'>
                  Data-Driven Decisions
                </h3>
                <p className='text-center text-muted-foreground leading-relaxed'>
                  Make informed business decisions based on comprehensive
                  analytics and real-time insights.
                </p>
              </div>

              <div className='group flex flex-col items-center space-y-4 rounded-2xl border-0 p-8 shadow-lg bg-foreground hover:shadow-xl transition-all duration-300 hover:-translate-y-2'>
                <div className='rounded-full bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 p-4 group-hover:scale-110 transition-transform duration-300'>
                  <CheckCircle className='h-8 w-8 text-foreground' />
                </div>
                <h3 className='text-xl font-bold text-center'>
                  Scalable Solution
                </h3>
                <p className='text-center text-muted-foreground leading-relaxed'>
                  Grow your business with a platform that scales with your
                  needs, from startup to enterprise.
                </p>
              </div>

              <div className='group flex flex-col items-center space-y-4 rounded-2xl border-0 p-8 shadow-lg bg-foreground hover:shadow-xl transition-all duration-300 hover:-translate-y-2'>
                <div className='rounded-full bg-gradient-to-br from-indigo-600 to-indigo-700 dark:from-indigo-500 dark:to-indigo-600 p-4 group-hover:scale-110 transition-transform duration-300'>
                  <CheckCircle className='h-8 w-8 text-foreground' />
                </div>
                <h3 className='text-xl font-bold text-center'>
                  Secure Infrastructure
                </h3>
                <p className='text-center text-muted-foreground leading-relaxed'>
                  Protect your data and transactions with enterprise-grade
                  security and compliance standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id='pricing' className='w-full py-20 md:py-32 bg-foreground'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center mb-16'>
              <Badge variant='outline' className='mb-4'>
                <Star className='w-3 h-3 mr-1' />
                Flexible Pricing
              </Badge>
              <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'>
                Choose Your Perfect Plan
              </h2>
              <p className='max-w-3xl text-muted-foreground text-lg md:text-xl leading-relaxed'>
                Modular pricing that grows with your business. Mix and match
                features to create the perfect solution for your team.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
              <Card className='relative overflow-hidden border-0 shadow-xl bg-bg-background'>
                <CardHeader className='pb-6'>
                  <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-xl flex items-center justify-center mb-4'>
                    <Package className='h-6 w-6 text-foreground' />
                  </div>
                  <CardTitle className='text-2xl'>Core Modules</CardTitle>
                  <CardDescription className='text-muted-foreground'>
                    Essential features for every business
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='space-y-3'>
                    <div className='flex justify-between items-center'>
                      <span className='font-medium'>AdminTool</span>
                      <Badge variant='secondary'>Included</Badge>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span>Insight (Analytics)</span>
                      <span className='font-semibold'>+€10/month</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span>Flow (Navigation)</span>
                      <span className='font-semibold'>+€15/month</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span>Access (Rights Management)</span>
                      <span className='font-semibold'>+€5/month</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className='relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900'>
                <CardHeader className='pb-6'>
                  <div className='w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4'>
                    <Users className='h-6 w-6 text-foreground' />
                  </div>
                  <CardTitle className='text-2xl'>User Tiers</CardTitle>
                  <CardDescription className='text-muted-foreground'>
                    Scalable team sizes
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='space-y-3'>
                    <div className='flex justify-between items-center'>
                      <span className='font-medium'>Core (up to 3 users)</span>
                      <Badge variant='secondary'>Included</Badge>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span>Team (up to 5 users)</span>
                      <span className='font-semibold'>+€5/month</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span>Pro (up to 7 users)</span>
                      <span className='font-semibold'>+€10/month</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span>Enterprise (11+ users)</span>
                      <span className='font-semibold'>Custom</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className='relative overflow-hidden border-2 border-blue-200 shadow-xl bg-bg-background'>
                <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400'></div>
                <CardHeader className='pb-6'>
                  <Badge className='w-fit mb-2 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400'>
                    Most Popular
                  </Badge>
                  <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 rounded-xl flex items-center justify-center mb-4'>
                    <Star className='h-6 w-6 text-foreground' />
                  </div>
                  <CardTitle className='text-2xl'>Starter Package</CardTitle>
                  <CardDescription className='text-muted-foreground'>
                    Perfect for growing teams
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-6'>
                  <div className='space-y-3'>
                    <div className='flex items-center gap-2'>
                      <CheckCircle className='h-4 w-4 text-primary' />
                      <span>AdminTool included</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <CheckCircle className='h-4 w-4 text-primary' />
                      <span>Insight Analytics module</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <CheckCircle className='h-4 w-4 text-primary' />
                      <span>Up to 3 users</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <CheckCircle className='h-4 w-4 text-primary' />
                      <span>24/7 support</span>
                    </div>
                  </div>
                  <div className='pt-4 border-t'>
                    <div className='text-3xl font-bold text-primary'>€10</div>
                    <div className='text-sm text-muted-foreground'>
                      per month + setup fee
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className='text-center mt-12'>
              <Button
                size='lg'
                className='px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl hover:shadow-2xl transition-all duration-300'
              >
                <Link href='#contact'>Configure Your Package</Link>
              </Button>
              <p className='text-sm text-gray-500 mt-4'>
                One-time setup fee of €49. No hidden costs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id='contact'
          className='w-full py-20 md:py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-800 dark:via-indigo-800 dark:to-purple-800 text-foreground'
        >
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-8 text-center'>
              <div className='space-y-6'>
                <Badge
                  variant='secondary'
                  className='bg-foreground/20 text-foreground hover:bg-foreground/30'
                >
                  <ArrowRight className='w-3 h-3 mr-1' />
                  Get Started Today
                </Badge>
                <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
                  Ready to Transform Your Business?
                </h2>
                <p className='max-w-[900px] text-blue-100 text-lg md:text-xl leading-relaxed'>
                  Join hundreds of companies already using LogiTech to
                  streamline their operations and boost efficiency.
                </p>
              </div>
              <div className='flex flex-col sm:flex-row gap-4 w-full max-w-md'>
                <Button
                  size='lg'
                  className='flex-1 bg-foreground text-primary hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105'
                >
                  Start Free Trial
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  className='flex-1 border-white/50 text-foreground bg-foreground/10 backdrop-blur-sm hover:bg-foreground/20 hover:border-white/70 transition-all duration-300 font-medium'
                >
                  Schedule Demo
                </Button>
              </div>
              <p className='text-sm text-blue-200'>
                Get a response within 24 hours • No credit card required
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className='w-full border-t py-12 bg-gray-50'>
        <div className='container px-4 md:px-6'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div className='space-y-4'>
              <div className='flex items-center gap-2'>
                <div className='flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-lg'>
                  <Globe className='h-5 w-5 text-foreground' />
                </div>
                <span className='text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 bg-clip-text text-transparent'>
                  LogiTech
                </span>
              </div>
              <p className='text-sm text-muted-foreground max-w-xs'>
                Transforming logistics operations with comprehensive business
                solutions.
              </p>
            </div>
            <div className='space-y-4'>
              <h4 className='font-semibold text-gray-900'>Product</h4>
              <div className='space-y-2'>
                <Link
                  href='#features'
                  className='block text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  Features
                </Link>
                <Link
                  href='#pricing'
                  className='block text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  Pricing
                </Link>
                <Link
                  href='#'
                  className='block text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  Integrations
                </Link>
              </div>
            </div>
            <div className='space-y-4'>
              <h4 className='font-semibold text-gray-900'>Company</h4>
              <div className='space-y-2'>
                <Link
                  href='#'
                  className='block text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  About Us
                </Link>
                <Link
                  href='#'
                  className='block text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  Careers
                </Link>
                <Link
                  href='#contact'
                  className='block text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className='space-y-4'>
              <h4 className='font-semibold text-gray-900'>Legal</h4>
              <div className='space-y-2'>
                <Link
                  href='#'
                  className='block text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  Privacy Policy
                </Link>
                <Link
                  href='#'
                  className='block text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  Terms of Service
                </Link>
                <Link
                  href='#'
                  className='block text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
          <div className='border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center'>
            <p className='text-sm text-muted-foreground'>
              © 2024 LogiTech. All rights reserved.
            </p>
            <div className='flex gap-4 mt-4 sm:mt-0'>
              <Link
                href='#'
                className='text-gray-400 hover:text-primary transition-colors'
              >
                <span className='sr-only'>Twitter</span>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
                </svg>
              </Link>
              <Link
                href='#'
                className='text-gray-400 hover:text-primary transition-colors'
              >
                <span className='sr-only'>LinkedIn</span>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                    clipRule='evenodd'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
