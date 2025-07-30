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
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Meteors } from '@/components/ui/meteors';
import { FlipWords } from '@/components/ui/flip-words';
import { cn } from '@/lib/utils';

export default function LandingPage() {
  const words = [
    'Workflows',
    'Logistics',
    'Inventory',
    'Deliveries',
    'Insights',
    'Growth',
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='min-h-screen w-full'>
      <header className='sticky top-0 z-50 w-full border-b bg-background/40 backdrop-blur  shadow-sm'>
        <div className='container'>
          <div className='flex h-16 items-center justify-between bg-background/40 backdrop-blur-md rounded-lg mx-4 px-6 border border-border/30 shadow-lg'>
            <div className='flex items-center gap-2'>
              <div className='flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg'>
                <Globe className='h-5 w-5 text-white' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                OrderLink
              </span>
            </div>
            <nav className='hidden md:flex items-center gap-8'>
              <Link
                href='#features'
                className='text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors'
              >
                Features
              </Link>
              <Link
                href='#benefits'
                className='text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors'
              >
                Benefits
              </Link>
              <Link
                href='#pricing'
                className='text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors'
              >
                Pricing
              </Link>
              <Link
                href='#contact'
                className='text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors'
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
                      className='text-lg font-medium hover:text-blue-600 transition-colors'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Features
                    </Link>
                    <Link
                      href='#benefits'
                      className='text-lg font-medium hover:text-blue-600 transition-colors'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Benefits
                    </Link>
                    <Link
                      href='#pricing'
                      className='text-lg font-medium hover:text-blue-600 transition-colors'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Pricing
                    </Link>
                    <Link
                      href='#contact'
                      className='text-lg font-medium hover:text-blue-600 transition-colors'
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
        </div>
      </header>
      <main className='w-full'>
        {/* Hero Section */}
        <section className='relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-background dark:via-blue-900/10 dark:to-indigo-900/10 overflow-hidden'>
          <div className='absolute inset-0 bg-grid-pattern opacity-30'></div>
          <div className='container relative'>
            <div className='grid gap-16 lg:grid-cols-2 lg:gap-24 xl:gap-32 items-center max-w-7xl mx-auto'>
              <div className='flex flex-col justify-center space-y-8 text-center lg:text-left lg:pr-8'>
                <div className='space-y-6'>
                  <Badge
                    variant='secondary'
                    className='w-fit mx-auto lg:mx-0 bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-300'
                  >
                    <Star className='w-3 h-3 mr-1' />
                    Complete Business Solution
                  </Badge>
                  <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-foreground via-blue-600 to-indigo-600'>
                    Transform Your{' '}
                    <span className='inline-block'>
                      <FlipWords words={words} className='inline-block' />
                    </span>{' '}
                    Operations
                  </h1>
                  <p className='max-w-[600px] text-muted-foreground text-lg md:text-xl leading-relaxed mx-auto lg:mx-0'>
                    Streamline your entire business with our comprehensive
                    platform featuring admin tools, e-commerce, delivery
                    navigation, and powerful analytics.
                  </p>
                </div>
                <div className='flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start'>
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
                    className='px-8 py-6 text-lg border-2 hover:bg-muted transition-all duration-300 bg-transparent'
                  >
                    <Link href='#features'>Learn More</Link>
                  </Button>
                </div>
                <div className='flex items-center gap-8 pt-4 justify-center lg:justify-start'>
                  <div className='flex items-center gap-2'>
                    <Users className='h-5 w-5 text-blue-600' />
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
              <div className='flex items-center justify-center lg:justify-end lg:pl-8'>
                <div className='relative scale-90 sm:scale-100 md:scale-110 lg:scale-125 xl:scale-150 transition-transform duration-300'>
                  <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur-3xl opacity-20 transform rotate-6'></div>
                  <Image
                    src='/dashboard-preview-1.png'
                    width={1000}
                    height={1000}
                    alt='Dashboard Preview'
                    className='relative rounded-lg object-cover shadow-lg border border-border'
                  />
                </div>
              </div>
            </div>
          </div>
          <BackgroundBeams className='realtive inset-0 -z-10' />
        </section>

        <section id='features' className='w-full py-20 md:py-32 bg-background'>
          {/* Features Section */}
          <div className='relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black'>
            <div
              className={cn(
                'absolute inset-0',
                '[background-size:30px_30px]',
                '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
                'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
              )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black'></div>

            <div className='container relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl'>
              <div className='flex flex-col items-center justify-center space-y-4 text-center mb-16 max-w-4xl mx-auto'>
                <Badge variant='outline' className='mb-4'>
                  <Zap className='w-3 h-3 mr-1' />
                  Powerful Features
                </Badge>
                <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent'>
                  Everything You Need in One Platform
                </h2>
                <p className='max-w-[900px] text-muted-foreground text-lg md:text-xl leading-relaxed'>
                  Our comprehensive suite of tools covers every aspect of your
                  logistics and e-commerce operations.
                </p>
              </div>
              <div className='mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
                <div className='p-[1px] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-xl'>
                  <Card className='group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg bg-card rounded-xl h-full'>
                    <CardHeader className='pb-4'>
                      <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                        <ShieldCheck className='h-8 w-8 text-white' />
                      </div>
                      <CardTitle className='text-xl'>Admin Tool</CardTitle>
                      <CardDescription>
                        Comprehensive management dashboard
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className='space-y-3 text-sm'>
                        <li className='flex items-center'>
                          <CheckCircle className='mr-3 h-4 w-4 text-blue-600 flex-shrink-0' />
                          <span className='text-muted-foreground'>
                            User management for all customer types
                          </span>
                        </li>
                        <li className='flex items-center'>
                          <CheckCircle className='mr-3 h-4 w-4 text-blue-600 flex-shrink-0' />
                          <span className='text-muted-foreground'>
                            Role-based access control
                          </span>
                        </li>
                        <li className='flex items-center'>
                          <CheckCircle className='mr-3 h-4 w-4 text-blue-600 flex-shrink-0' />
                          <span className='text-muted-foreground'>
                            Product and inventory management
                          </span>
                        </li>
                        <li className='flex items-center'>
                          <CheckCircle className='mr-3 h-4 w-4 text-blue-600 flex-shrink-0' />
                          <span className='text-muted-foreground'>
                            Route creation and management
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className='p-[1px] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-xl'>
                  <Card className='group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg bg-card rounded-xl h-full'>
                    <CardHeader className='pb-4'>
                      <div className='w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                        <Package className='h-8 w-8 text-white' />
                      </div>
                      <CardTitle className='text-xl'>Web Shop</CardTitle>
                      <CardDescription>
                        Complete e-commerce solution
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className='space-y-3 text-sm'>
                        <li className='flex items-center'>
                          <CheckCircle className='mr-3 h-4 w-4 text-sky-600 flex-shrink-0' />
                          <span className='text-muted-foreground'>
                            Order management system
                          </span>
                        </li>
                        <li className='flex items-center'>
                          <CheckCircle className='mr-3 h-4 w-4 text-sky-600 flex-shrink-0' />
                          <span className='text-muted-foreground'>
                            Secure online payment processing
                          </span>
                        </li>
                        <li className='flex items-center'>
                          <CheckCircle className='mr-3 h-4 w-4 text-sky-600 flex-shrink-0' />
                          <span className='text-muted-foreground'>
                            Order history and tracking
                          </span>
                        </li>
                        <li className='flex items-center'>
                          <CheckCircle className='mr-3 h-4 w-4 text-sky-600 flex-shrink-0' />
                          <span className='text-muted-foreground'>
                            Customer account management
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className='p-[1px] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-xl'>
                  <Card className='group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg bg-card rounded-xl h-full'>
                    <CardHeader className='pb-4'>
                      <div className='w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                        <Truck className='h-8 w-8 text-white' />
                      </div>
                      <CardTitle className='text-xl'>
                        Delivery Navigation
                      </CardTitle>
                      <CardDescription>
                        Optimized delivery management
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className='space-y-3 text-sm'>
                        <li className='flex items-center'>
                          <CheckCircle className='mr-3 h-4 w-4 text-cyan-600 flex-shrink-0' />
                          <span className='text-muted-foreground'>
                            Intelligent route generation
                          </span>
                        </li>
                        <li className='flex items-center'>
                          <CheckCircle className='mr-3 h-4 w-4 text-cyan-600 flex-shrink-0' />
                          <span className='text-muted-foreground'>
                            Real-time navigation
                          </span>
                        </li>
                        <li className='flex items-center'>
                          <CheckCircle className='mr-3 h-4 w-4 text-cyan-600 flex-shrink-0' />
                          <span className='text-muted-foreground'>
                            Order completion tracking
                          </span>
                        </li>
                        <li className='flex items-center'>
                          <CheckCircle className='mr-3 h-4 w-4 text-cyan-600 flex-shrink-0' />
                          <span className='text-muted-foreground'>
                            Contactless payment options
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className='p-[1px] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-xl'>
                  <Card className='group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg bg-card rounded-xl h-full'>
                    <CardHeader className='pb-4'>
                      <div className='w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                        <BarChart3 className='h-8 w-8 text-white' />
                      </div>
                      <CardTitle className='text-xl'>Data Analysis</CardTitle>
                      <CardDescription>
                        Powerful business intelligence
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className='space-y-3 text-sm'>
                        <li className='flex items-center'>
                          <CheckCircle className='mr-3 h-4 w-4 text-indigo-600 flex-shrink-0' />
                          <span className='text-muted-foreground'>
                            Comprehensive data integration
                          </span>
                        </li>
                        <li className='flex items-center'>
                          <CheckCircle className='mr-3 h-4 w-4 text-indigo-600 flex-shrink-0' />
                          <span className='text-muted-foreground'>
                            Real-time business analytics
                          </span>
                        </li>
                        <li className='flex items-center'>
                          <CheckCircle className='mr-3 h-4 w-4 text-indigo-600 flex-shrink-0' />
                          <span className='text-muted-foreground'>
                            Predictive trend analysis
                          </span>
                        </li>
                        <li className='flex items-center'>
                          <CheckCircle className='mr-3 h-4 w-4 text-indigo-600 flex-shrink-0' />
                          <span className='text-muted-foreground'>
                            Customizable reporting
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id='benefits' className='w-full py-20 md:py-32 bg-muted/30'>
          <div className='container'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center mb-16 max-w-4xl mx-auto'>
              <Badge variant='outline' className='mb-4'>
                <CheckCircle className='w-3 h-3 mr-1' />
                Key Benefits
              </Badge>
              <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent'>
                Why Choose OrderLink?
              </h2>
              <p className='max-w-[900px] text-muted-foreground text-lg md:text-xl leading-relaxed'>
                Transform your business operations with measurable results and
                improved efficiency.
              </p>
            </div>
            <div className='mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {[
                {
                  icon: CheckCircle,
                  title: 'Increased Efficiency',
                  description:
                    'Streamline operations and reduce manual tasks with our integrated tools, boosting productivity by up to 40%.',
                  color: 'from-blue-500 to-blue-600',
                },
                {
                  icon: CheckCircle,
                  title: 'Cost Reduction',
                  description:
                    'Optimize resources and reduce operational costs with data-driven insights, saving up to 30% annually.',
                  color: 'from-sky-500 to-sky-600',
                },
                {
                  icon: CheckCircle,
                  title: 'Enhanced Customer Experience',
                  description:
                    'Provide seamless service from order to delivery with our integrated platform, improving satisfaction rates.',
                  color: 'from-cyan-500 to-cyan-600',
                },
                {
                  icon: CheckCircle,
                  title: 'Data-Driven Decisions',
                  description:
                    'Make informed business decisions based on comprehensive analytics and real-time insights.',
                  color: 'from-indigo-500 to-indigo-600',
                },
                {
                  icon: CheckCircle,
                  title: 'Scalable Solution',
                  description:
                    'Grow your business with a platform that scales with your needs, from startup to enterprise.',
                  color: 'from-blue-600 to-blue-700',
                },
                {
                  icon: CheckCircle,
                  title: 'Secure Infrastructure',
                  description:
                    'Protect your data and transactions with enterprise-grade security and compliance standards.',
                  color: 'from-indigo-600 to-indigo-700',
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className='p-[1px] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-2xl'
                >
                  <div className='group flex flex-col items-center space-y-4 rounded-2xl border-0 p-8 shadow-lg bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full'>
                    <div
                      className={`rounded-full bg-gradient-to-br ${benefit.color} p-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <benefit.icon className='h-8 w-8 text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-center'>
                      {benefit.title}
                    </h3>
                    <p className='text-center text-muted-foreground leading-relaxed'>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id='pricing' className='w-full py-20 md:py-32 bg-background'>
          <div className='container'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center mb-16 max-w-4xl mx-auto'>
              <Badge variant='outline' className='mb-4'>
                <Star className='w-3 h-3 mr-1' />
                Flexible Pricing
              </Badge>
              <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent'>
                Choose Your Perfect Plan
              </h2>
              <p className='max-w-3xl text-muted-foreground text-lg md:text-xl leading-relaxed'>
                Modular pricing that grows with your business. Mix and match
                features to create the perfect solution for your team.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
              <div className='p-[1px] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-xl'>
                <Card className='relative overflow-hidden border-0 shadow-xl bg-card rounded-xl h-full'>
                  <CardHeader className='pb-6'>
                    <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4'>
                      <Package className='h-6 w-6 text-white' />
                    </div>
                    <CardTitle className='text-2xl'>Core Modules</CardTitle>
                    <CardDescription>
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
                        <span className='text-muted-foreground'>
                          Insight (Analytics)
                        </span>
                        <span className='font-semibold'>+€10/month</span>
                      </div>
                      <div className='flex justify-between items-center'>
                        <span className='text-muted-foreground'>
                          Flow (Navigation)
                        </span>
                        <span className='font-semibold'>+€15/month</span>
                      </div>
                      <div className='flex justify-between items-center'>
                        <span className='text-muted-foreground'>
                          Access (Rights Management)
                        </span>
                        <span className='font-semibold'>+€5/month</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className='p-[1px] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-xl'>
                <Card className='relative overflow-hidden border-0 shadow-xl bg-card rounded-xl h-full'>
                  <CardHeader className='pb-6'>
                    <div className='w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4'>
                      <Users className='h-6 w-6 text-white' />
                    </div>
                    <CardTitle className='text-2xl'>User Tiers</CardTitle>
                    <CardDescription>Scalable team sizes</CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <div className='space-y-3'>
                      <div className='flex justify-between items-center'>
                        <span className='font-medium'>
                          Core (up to 3 users)
                        </span>
                        <Badge variant='secondary'>Included</Badge>
                      </div>
                      <div className='flex justify-between items-center'>
                        <span className='text-muted-foreground'>
                          Team (up to 5 users)
                        </span>
                        <span className='font-semibold'>+€5/month</span>
                      </div>
                      <div className='flex justify-between items-center'>
                        <span className='text-muted-foreground'>
                          Pro (up to 7 users)
                        </span>
                        <span className='font-semibold'>+€10/month</span>
                      </div>
                      <div className='flex justify-between items-center'>
                        <span className='text-muted-foreground'>
                          Enterprise (11+ users)
                        </span>
                        <span className='font-semibold'>Custom</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className='relative overflow-hidden border-2 border-blue-200 dark:border-blue-800 shadow-xl bg-card rounded-xl'>
                <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500'></div>
                <CardHeader className='pb-6'>
                  <Badge className='w-fit mb-2 bg-gradient-to-r from-blue-500 to-indigo-500'>
                    Most Popular
                  </Badge>
                  <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4'>
                    <Star className='h-6 w-6 text-white' />
                  </div>
                  <CardTitle className='text-2xl'>Starter Package</CardTitle>
                  <CardDescription>Perfect for growing teams</CardDescription>
                </CardHeader>
                <CardContent className='space-y-6'>
                  <div className='space-y-3'>
                    <div className='flex items-center gap-2'>
                      <CheckCircle className='h-4 w-4 text-blue-600' />
                      <span className='text-muted-foreground'>
                        AdminTool included
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <CheckCircle className='h-4 w-4 text-blue-600' />
                      <span className='text-muted-foreground'>
                        Insight Analytics module
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <CheckCircle className='h-4 w-4 text-blue-600' />
                      <span className='text-muted-foreground'>
                        Up to 3 users
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <CheckCircle className='h-4 w-4 text-blue-600' />
                      <span className='text-muted-foreground'>
                        24/7 support
                      </span>
                    </div>
                  </div>
                  <div className='pt-4 border-t border-border'>
                    <div className='text-3xl font-bold text-blue-600'>€10</div>
                    <div className='text-sm text-muted-foreground'>
                      per month + setup fee
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
            <div className='text-center mt-12'>
              <Button
                size='lg'
                className='px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl hover:shadow-2xl transition-all duration-300'
              >
                <Link href='#contact'>Configure Your Package</Link>
              </Button>
              <p className='text-sm text-muted-foreground mt-4'>
                One-time setup fee of €49. No hidden costs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id='contact'
          className='w-full py-20 md:py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white'
        >
          <div className='container'>
            <div className='flex flex-col items-center justify-center space-y-8 text-center max-w-4xl mx-auto'>
              <div className='space-y-6'>
                <Badge
                  variant='secondary'
                  className='bg-white/20 text-white hover:bg-white/30'
                >
                  <ArrowRight className='w-3 h-3 mr-1' />
                  Get Started Today
                </Badge>
                <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
                  Ready to Transform Your Business?
                </h2>
                <p className='max-w-[900px] text-blue-100 text-lg md:text-xl leading-relaxed'>
                  Join hundreds of companies already using OrderLink to
                  streamline their operations and boost efficiency.
                </p>
              </div>
              <div className='flex flex-col sm:flex-row gap-4 w-full max-w-md'>
                <Button
                  size='lg'
                  className='flex-1 bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105'
                >
                  Start Free Trial
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  className='flex-1 border-white/50 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/70 transition-all duration-300 font-medium'
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
      <footer className='w-full border-t py-12 bg-muted/30 border-border'>
        <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto'>
            <div className='space-y-4'>
              <div className='flex items-center gap-2'>
                <div className='flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg'>
                  <Globe className='h-5 w-5 text-white' />
                </div>
                <span className='text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                  OrderLink
                </span>
              </div>
              <p className='text-sm text-muted-foreground max-w-xs'>
                Transforming logistics operations with comprehensive business
                solutions.
              </p>
            </div>
            <div className='space-y-4'>
              <h4 className='font-semibold'>Product</h4>
              <div className='space-y-2'>
                <Link
                  href='#features'
                  className='block text-sm text-muted-foreground hover:text-blue-600 transition-colors'
                >
                  Features
                </Link>
                <Link
                  href='#pricing'
                  className='block text-sm text-muted-foreground hover:text-blue-600 transition-colors'
                >
                  Pricing
                </Link>
                <Link
                  href='#'
                  className='block text-sm text-muted-foreground hover:text-blue-600 transition-colors'
                >
                  Integrations
                </Link>
              </div>
            </div>
            <div className='space-y-4'>
              <h4 className='font-semibold'>Company</h4>
              <div className='space-y-2'>
                <Link
                  href='#'
                  className='block text-sm text-muted-foreground hover:text-blue-600 transition-colors'
                >
                  About Us
                </Link>
                <Link
                  href='#'
                  className='block text-sm text-muted-foreground hover:text-blue-600 transition-colors'
                >
                  Careers
                </Link>
                <Link
                  href='#contact'
                  className='block text-sm text-muted-foreground hover:text-blue-600 transition-colors'
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className='space-y-4'>
              <h4 className='font-semibold'>Legal</h4>
              <div className='space-y-2'>
                <Link
                  href='#'
                  className='block text-sm text-muted-foreground hover:text-blue-600 transition-colors'
                >
                  Privacy Policy
                </Link>
                <Link
                  href='#'
                  className='block text-sm text-muted-foreground hover:text-blue-600 transition-colors'
                >
                  Terms of Service
                </Link>
                <Link
                  href='#'
                  className='block text-sm text-muted-foreground hover:text-blue-600 transition-colors'
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
          <div className='border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto'>
            <p className='text-sm text-muted-foreground'>
              © 2024 OrderLink. All rights reserved.
            </p>
            <div className='flex gap-4 mt-4 sm:mt-0'>
              <Link
                href='#'
                className='text-muted-foreground hover:text-blue-600 transition-colors'
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
                className='text-muted-foreground hover:text-blue-600 transition-colors'
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
