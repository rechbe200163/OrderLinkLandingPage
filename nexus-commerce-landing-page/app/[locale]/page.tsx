'use client';
import { useState } from 'react';

import {
  Package,
  CheckCircle,
  Zap,
  Menu,
  Settings,
  Rocket,
  Star,
  TrendingUp,
  Shield,
  Workflow,
  ShoppingCart,
  LineChart,
  Navigation,
  Users,
  Target,
  BarChart3,
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
import { FlipWords } from '@/components/ui/flip-words';
import {
  MODULE_NAMES,
  ModuleName,
  ModulePackageName,
  UserTier,
} from '@/lib/types';
import { useModuleStore } from '@/lib/stores/useModuleStore';
import { useUserTierStore } from '@/lib/stores/useUserGroupStore';
import { useRouter } from 'next/navigation';
import Module from 'module';

export default function LandingPage() {
  const router = useRouter();
  const words = [
    'operations',
    'logistics',
    'business',
    'delivery',
    'growth',
    'success',
  ];

  const setModules = useModuleStore((state) => state.addModule);
  const setUserTier = useUserTierStore((state) => state.addUserTier);

  const modules = useModuleStore((state) => state.modules);
  const userTier = useUserTierStore((state) => state.userTier);

  const resetModules = useModuleStore((state) => state.resetModules);
  const resetUserTier = useUserTierStore((state) => state.resetUserTier);

  const handleOnclick = (moduleNames: ModuleName[], userTiers: UserTier) => {
    if (modules.length > 0 || userTier) {
      resetModules();
      resetUserTier();
    }
    moduleNames.forEach((moduleName) => {
      setModules(moduleName);
    });
    setUserTier(userTiers);
    router.push('onboarding/address');
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950/50 to-emerald-950/30 text-white overflow-x-hidden'>
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
              <Button className='bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 hover:from-blue-700 hover:via-blue-600 hover:to-emerald-600 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 rounded-2xl px-6 py-3 font-semibold'>
                Get Started
              </Button>
            </nav>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className='md:hidden'>
                <Button variant='ghost' size='icon' className='text-slate-300'>
                  <Menu className='h-6 w-6' />
                </Button>
              </SheetTrigger>
              <SheetContent
                side='right'
                className='w-[300px] sm:w-[400px] bg-slate-950 border-blue-500/20'
              >
                <nav className='flex flex-col space-y-6 mt-8'>
                  <Link
                    href='#modules'
                    className='text-lg font-medium text-slate-300 hover:text-blue-300 transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Modules
                  </Link>
                  <Link
                    href='#features'
                    className='text-lg font-medium text-slate-300 hover:text-blue-300 transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Features
                  </Link>
                  <Link
                    href='#pricing'
                    className='text-lg font-medium text-slate-300 hover:text-blue-300 transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className='w-full'>
        <section className='relative w-full py-24 md:py-32 lg:py-48 overflow-hidden'>
          <BackgroundBeams />
          <div className='absolute top-20 left-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-br-[5rem]'></div>
          <div className='absolute bottom-20 right-0 w-36 h-36 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-tl-[4.5rem]'></div>

          <div className='container relative'>
            <div className='grid gap-20 lg:grid-cols-2 lg:gap-32 items-center max-w-7xl mx-auto'>
              <div className='flex flex-col justify-center space-y-10 text-center lg:text-left'>
                <div className='space-y-8'>
                  <Badge
                    variant='secondary'
                    className='w-fit mx-auto lg:mx-0 bg-gradient-to-r from-blue-900/50 to-emerald-900/50 text-blue-200 border-blue-500/30 rounded-full px-6 py-3 text-sm font-medium'
                  >
                    <Settings className='w-4 h-4 mr-2' />
                    Complete Business Management
                  </Badge>
                  <h1 className='text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-none'>
                    <span className='bg-gradient-to-r from-white via-blue-200 to-emerald-200 bg-clip-text text-transparent'>
                      Streamline your{' '}
                    </span>
                    <br />
                    <span className='inline-block'>
                      <FlipWords
                        words={words}
                        className='inline-block bg-gradient-to-r from-blue-400 via-blue-300 to-emerald-300 bg-clip-text text-transparent'
                      />
                    </span>
                  </h1>
                  <p className='max-w-[600px] text-slate-300 text-xl md:text-2xl leading-relaxed mx-auto lg:mx-0 font-light'>
                    Comprehensive logistics and business management platform.
                    OrderLink integrates all your operations from admin tools to
                    delivery tracking in one powerful solution.
                  </p>
                </div>
                <div className='flex flex-col gap-6 min-[400px]:flex-row justify-center lg:justify-start'>
                  <Button
                    asChild
                    size='lg'
                    className='px-10 py-6 text-xl bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 hover:from-blue-700 hover:via-blue-600 hover:to-emerald-600 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 rounded-2xl text-white font-bold'
                  >
                    <Link href='#contact'>
                      Start Managing <Rocket className='ml-3 h-6 w-6' />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant='outline'
                    size='lg'
                    className='px-10 py-6 text-xl border-2 border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 bg-slate-950/50 backdrop-blur-sm text-blue-200 hover:text-white rounded-2xl font-semibold'
                  >
                    <Link href='#modules'>View Modules</Link>
                  </Button>
                </div>
                <div className='flex items-center gap-12 pt-6 justify-center lg:justify-start'>
                  <div className='flex items-center gap-3'>
                    <div className='w-3 h-3 bg-emerald-400 rounded-full animate-pulse'></div>
                    <span className='text-slate-400 font-medium'>
                      10K+ Orders Daily
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='flex -space-x-1'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className='h-5 w-5 text-yellow-400 fill-current'
                        />
                      ))}
                    </div>
                    <span className='text-slate-400 font-medium'>
                      5.0 Rating
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center lg:justify-end'>
                <div className='relative scale-90 sm:scale-100 md:scale-110 lg:scale-125 xl:scale-150'>
                  <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-3xl blur-3xl transform rotate-6 animate-pulse'></div>
                  <div className='absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-emerald-500 rounded-2xl opacity-80 animate-bounce'></div>
                  <div className='absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl opacity-70 animate-pulse'></div>
                  <div className='absolute top-1/2 -right-8 w-6 h-6 bg-emerald-400 rounded-full opacity-60 animate-ping'></div>
                  <Image
                    src='/dashboard-preview-1.png'
                    alt='OrderLink Dashboard'
                    width={800}
                    height={600}
                    className='relative rounded-3xl shadow-2xl border border-slate-700/50 backdrop-blur-sm'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id='modules'
          className='relative w-full py-24 md:py-32 bg-gradient-to-b from-slate-950 to-slate-900'
        >
          <div className='absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-br-[4rem]'></div>
          <div className='absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-tl-[3.5rem]'></div>

          <div className='container relative'>
            <div className='flex flex-col items-center justify-center space-y-6 text-center mb-20 max-w-4xl mx-auto'>
              <Badge
                variant='outline'
                className='border-blue-500/30 text-blue-300 bg-blue-900/20 rounded-full px-6 py-3'
              >
                <Package className='w-4 h-4 mr-2' />
                Core Modules
              </Badge>
              <h2 className='text-4xl font-black tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-white via-blue-200 to-emerald-200 bg-clip-text text-transparent'>
                Everything you need to manage your business
              </h2>
              <p className='max-w-[900px] text-slate-300 text-xl md:text-2xl leading-relaxed font-light'>
                Four powerful modules that work together seamlessly to handle
                every aspect of your logistics and business operations.
              </p>
            </div>
            <div className='mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
              {/* Admin Tool */}
              <div className='relative group'>
                <div className='absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>
                <Card className='relative group transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-4 border-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl h-full overflow-hidden'>
                  <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-3xl'></div>
                  <CardHeader className='pb-6 relative'>
                    <div className='w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-2xl shadow-blue-500/25'>
                      <Settings className='h-10 w-10 text-white' />
                    </div>
                    <CardTitle className='text-2xl text-white font-bold'>
                      Admin Tool
                    </CardTitle>
                    <CardDescription className='text-blue-200 text-lg'>
                      Complete business administration
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-4 text-base'>
                      <li className='flex items-center'>
                        <CheckCircle className='mr-4 h-5 w-5 text-blue-400 flex-shrink-0' />
                        <span className='text-slate-300'>User management</span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='mr-4 h-5 w-5 text-blue-400 flex-shrink-0' />
                        <span className='text-slate-300'>
                          System configuration
                        </span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='mr-4 h-5 w-5 text-blue-400 flex-shrink-0' />
                        <span className='text-slate-300'>Access control</span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='mr-4 h-5 w-5 text-blue-400 flex-shrink-0' />
                        <span className='text-slate-300'>Audit logging</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Web Shop */}
              <div className='relative group'>
                <div className='absolute -inset-1 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>
                <Card className='relative group transition-all duration-700 hover:shadow-2xl hover:shadow-emerald-500/25 hover:-translate-y-4 border-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl h-full overflow-hidden'>
                  <div className='absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-tr-3xl'></div>
                  <CardHeader className='pb-6 relative'>
                    <div className='w-20 h-20 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 shadow-2xl shadow-emerald-500/25'>
                      <ShoppingCart className='h-10 w-10 text-white' />
                    </div>
                    <CardTitle className='text-2xl text-white font-bold'>
                      Web Shop
                    </CardTitle>
                    <CardDescription className='text-emerald-200 text-lg'>
                      E-commerce platform
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-4 text-base'>
                      <li className='flex items-center'>
                        <CheckCircle className='mr-4 h-5 w-5 text-emerald-400 flex-shrink-0' />
                        <span className='text-slate-300'>Product catalog</span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='mr-4 h-5 w-5 text-emerald-400 flex-shrink-0' />
                        <span className='text-slate-300'>Order processing</span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='mr-4 h-5 w-5 text-emerald-400 flex-shrink-0' />
                        <span className='text-slate-300'>
                          Payment integration
                        </span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='mr-4 h-5 w-5 text-emerald-400 flex-shrink-0' />
                        <span className='text-slate-300'>
                          Customer accounts
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Delivery Navigation */}
              <div className='relative group'>
                <div className='absolute -inset-1 bg-gradient-to-r from-blue-600 to-slate-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>
                <Card className='relative group transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-4 border-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl h-full overflow-hidden'>
                  <div className='absolute top-0 left-0 w-18 h-18 bg-gradient-to-br from-blue-500/20 to-transparent rounded-br-3xl'></div>
                  <CardHeader className='pb-6 relative'>
                    <div className='w-20 h-20 bg-gradient-to-br from-blue-600 to-slate-700 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-2xl shadow-blue-500/25'>
                      <Navigation className='h-10 w-10 text-white' />
                    </div>
                    <CardTitle className='text-2xl text-white font-bold'>
                      Delivery Navigation
                    </CardTitle>
                    <CardDescription className='text-blue-200 text-lg'>
                      Smart logistics routing
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-4 text-base'>
                      <li className='flex items-center'>
                        <CheckCircle className='mr-4 h-5 w-5 text-blue-400 flex-shrink-0' />
                        <span className='text-slate-300'>
                          Route optimization
                        </span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='mr-4 h-5 w-5 text-blue-400 flex-shrink-0' />
                        <span className='text-slate-300'>
                          Real-time tracking
                        </span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='mr-4 h-5 w-5 text-blue-400 flex-shrink-0' />
                        <span className='text-slate-300'>
                          Driver management
                        </span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='mr-4 h-5 w-5 text-blue-400 flex-shrink-0' />
                        <span className='text-slate-300'>
                          Delivery scheduling
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Data Analysis */}
              <div className='relative group'>
                <div className='absolute -inset-1 bg-gradient-to-r from-emerald-600 to-slate-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>
                <Card className='relative group transition-all duration-700 hover:shadow-2xl hover:shadow-emerald-500/25 hover:-translate-y-4 border-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl h-full overflow-hidden'>
                  <div className='absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-emerald-500/20 to-transparent rounded-tl-3xl'></div>
                  <CardHeader className='pb-6 relative'>
                    <div className='w-20 h-20 bg-gradient-to-br from-emerald-600 to-slate-700 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500 shadow-2xl shadow-emerald-500/25'>
                      <LineChart className='h-10 w-10 text-white' />
                    </div>
                    <CardTitle className='text-2xl text-white font-bold'>
                      Data Analysis
                    </CardTitle>
                    <CardDescription className='text-emerald-200 text-lg'>
                      Business intelligence
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-4 text-base'>
                      <li className='flex items-center'>
                        <CheckCircle className='mr-4 h-5 w-5 text-emerald-400 flex-shrink-0' />
                        <span className='text-slate-300'>
                          Performance metrics
                        </span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='mr-4 h-5 w-5 text-emerald-400 flex-shrink-0' />
                        <span className='text-slate-300'>Custom reports</span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='mr-4 h-5 w-5 text-emerald-400 flex-shrink-0' />
                        <span className='text-slate-300'>Trend analysis</span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='mr-4 h-5 w-5 text-emerald-400 flex-shrink-0' />
                        <span className='text-slate-300'>
                          Data visualization
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section
          id='features'
          className='relative w-full py-24 md:py-32 bg-slate-950'
        >
          <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-[3rem]'></div>
          <div className='absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-[2.5rem]'></div>

          <div className='container relative'>
            <div className='flex flex-col items-center justify-center space-y-6 text-center mb-20 max-w-4xl mx-auto'>
              <Badge
                variant='outline'
                className='border-emerald-500/30 text-emerald-300 bg-emerald-900/20 rounded-full px-6 py-3'
              >
                <Zap className='w-4 h-4 mr-2' />
                Key Benefits
              </Badge>
              <h2 className='text-4xl font-black tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-white via-emerald-200 to-blue-200 bg-clip-text text-transparent'>
                Why businesses choose OrderLink
              </h2>
              <p className='max-w-[900px] text-slate-300 text-xl md:text-2xl leading-relaxed font-light'>
                Streamline operations, reduce costs, and scale your business
                with our comprehensive logistics platform.
              </p>
            </div>
            <div className='mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
              {[
                {
                  icon: Target,
                  title: 'Operational Efficiency',
                  description:
                    'Streamline all business processes with integrated modules that eliminate redundancy and boost productivity across your organization.',
                  gradient: 'from-blue-600 to-blue-700',
                  bgGradient: 'from-blue-900/20 to-blue-800/20',
                  iconColor: 'text-blue-400',
                },
                {
                  icon: TrendingUp,
                  title: 'Scalable Growth',
                  description:
                    'Grow your business confidently with a platform that scales seamlessly from startup to enterprise level operations.',
                  gradient: 'from-emerald-600 to-emerald-700',
                  bgGradient: 'from-emerald-900/20 to-emerald-800/20',
                  iconColor: 'text-emerald-400',
                },
                {
                  icon: Zap,
                  title: 'Real-time Insights',
                  description:
                    'Make informed decisions with comprehensive analytics and reporting that provide instant visibility into your operations.',
                  gradient: 'from-blue-600 to-emerald-600',
                  bgGradient: 'from-blue-900/20 to-emerald-900/20',
                  iconColor: 'text-blue-400',
                },
                {
                  icon: Shield,
                  title: 'Secure & Reliable',
                  description:
                    'Trust your business data with enterprise-grade security, regular backups, and 99.9% uptime guarantee.',
                  gradient: 'from-slate-600 to-slate-700',
                  bgGradient: 'from-slate-800/50 to-slate-700/50',
                  iconColor: 'text-slate-400',
                },
                {
                  icon: Users,
                  title: 'Team Collaboration',
                  description:
                    'Enable seamless collaboration across departments with role-based access and integrated communication tools.',
                  gradient: 'from-emerald-600 to-blue-600',
                  bgGradient: 'from-emerald-900/20 to-blue-900/20',
                  iconColor: 'text-emerald-400',
                },
                {
                  icon: Workflow,
                  title: 'Process Automation',
                  description:
                    'Automate repetitive tasks and workflows to reduce manual errors and free up your team for strategic work.',
                  gradient: 'from-blue-600 to-slate-600',
                  bgGradient: 'from-blue-900/20 to-slate-900/20',
                  iconColor: 'text-blue-400',
                },
              ].map((capability, index) => (
                <div
                  key={index}
                  className={`group flex flex-col items-center space-y-6 rounded-3xl border border-slate-700/50 p-10 shadow-2xl bg-gradient-to-br ${capability.bgGradient} hover:shadow-blue-500/10 transition-all duration-700 hover:-translate-y-4 h-full relative overflow-hidden backdrop-blur-sm`}
                >
                  <div className='absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-3xl'></div>

                  <div
                    className={`rounded-3xl bg-gradient-to-br ${capability.gradient} p-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-2xl`}
                  >
                    <capability.icon className='h-10 w-10 text-white' />
                  </div>
                  <h3 className='text-2xl font-bold text-center text-white'>
                    {capability.title}
                  </h3>
                  <p className='text-center text-slate-300 leading-relaxed text-lg'>
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id='pricing'
          className='relative w-full py-24 md:py-32 bg-gradient-to-b from-slate-900 to-slate-950'
        >
          <div className='container relative'>
            {/* Header Section */}
            <div className='flex flex-col items-center justify-center space-y-6 text-center mb-20 max-w-4xl mx-auto'>
              <Badge
                variant='outline'
                className='border-blue-500/30 text-blue-300 bg-blue-900/20 rounded-full px-6 py-3'
              >
                <Package className='w-4 h-4 mr-2' />
                Flexible Pricing
              </Badge>
              <h2 className='text-4xl font-black tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-white via-blue-200 to-emerald-200 bg-clip-text text-transparent'>
                Modular & Transparent
              </h2>
              <p className='max-w-[900px] text-slate-300 text-xl md:text-2xl leading-relaxed font-light'>
                Bezahle nur, was du brauchst – kombiniere Module & Nutzeranzahl
                individuell.
              </p>
            </div>

            {/* Pricing Cards - Enhanced Layout */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-24'>
              {/* Module Pricing Card */}
              <Card className='rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/20 p-8 hover:border-blue-500/40 transition-all duration-300'>
                <CardHeader className='pb-6'>
                  <div className='flex items-center gap-3 mb-2'>
                    <div className='p-2 rounded-lg bg-blue-500/20'>
                      <Settings className='w-5 h-5 text-blue-400' />
                    </div>
                    <CardTitle className='text-2xl font-bold text-white'>
                      Module
                    </CardTitle>
                  </div>
                  <CardDescription className='text-blue-200 text-lg'>
                    Monatliche Preise pro Tenant
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-6'>
                  <div className='space-y-4'>
                    <div className='flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-emerald-500/20'>
                      <div className='flex items-center gap-3'>
                        <div className='p-1.5 rounded-md bg-emerald-500/20'>
                          <Package className='w-4 h-4 text-emerald-400' />
                        </div>
                        <span className='font-semibold text-white'>Core</span>
                        <span className='text-slate-400 text-sm'>
                          (AdminTool Basis)
                        </span>
                      </div>
                      <span className='text-emerald-400 font-bold'>
                        Inklusive
                      </span>
                    </div>

                    <div className='flex items-center justify-between p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-colors'>
                      <div className='flex items-center gap-3'>
                        <div className='p-1.5 rounded-md bg-blue-500/20'>
                          <BarChart3 className='w-4 h-4 text-blue-400' />
                        </div>
                        <span className='font-semibold text-white'>
                          Insight
                        </span>
                        <span className='text-slate-400 text-sm'>
                          (Statistiken)
                        </span>
                      </div>
                      <span className='text-white font-bold'>+10 €</span>
                    </div>

                    <div className='flex items-center justify-between p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-colors'>
                      <div className='flex items-center gap-3'>
                        <div className='p-1.5 rounded-md bg-blue-500/20'>
                          <Workflow className='w-4 h-4 text-blue-400' />
                        </div>
                        <span className='font-semibold text-white'>Flow</span>
                        <span className='text-slate-400 text-sm'>
                          (Lieferplanung & App)
                        </span>
                      </div>
                      <span className='text-white font-bold'>+15 €</span>
                    </div>

                    <div className='flex items-center justify-between p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-colors'>
                      <div className='flex items-center gap-3'>
                        <div className='p-1.5 rounded-md bg-blue-500/20'>
                          <Shield className='w-4 h-4 text-blue-400' />
                        </div>
                        <span className='font-semibold text-white'>Access</span>
                        <span className='text-slate-400 text-sm'>
                          (Rollen & Rechte)
                        </span>
                      </div>
                      <span className='text-white font-bold'>+5 €</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* User Packages Card */}
              <Card className='rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/20 p-8 hover:border-blue-500/40 transition-all duration-300'>
                <CardHeader className='pb-6'>
                  <div className='flex items-center gap-3 mb-2'>
                    <div className='p-2 rounded-lg bg-blue-500/20'>
                      <Users className='w-5 h-5 text-blue-400' />
                    </div>
                    <CardTitle className='text-2xl font-bold text-white'>
                      Nutzerpakete
                    </CardTitle>
                  </div>
                  <CardDescription className='text-blue-200 text-lg'>
                    Monatlich, pro Instanz
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-6'>
                  <div className='space-y-4'>
                    <div className='flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-emerald-500/20'>
                      <div className='flex items-center gap-3'>
                        <div className='p-1.5 rounded-md bg-emerald-500/20'>
                          <Users className='w-4 h-4 text-emerald-400' />
                        </div>
                        <span className='font-semibold text-white'>Core</span>
                        <span className='text-slate-400 text-sm'>
                          (bis 3 Nutzer)
                        </span>
                      </div>
                      <span className='text-emerald-400 font-bold'>
                        Inklusive
                      </span>
                    </div>

                    <div className='flex items-center justify-between p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-colors'>
                      <div className='flex items-center gap-3'>
                        <div className='p-1.5 rounded-md bg-blue-500/20'>
                          <Users className='w-4 h-4 text-blue-400' />
                        </div>
                        <span className='font-semibold text-white'>Team</span>
                        <span className='text-slate-400 text-sm'>
                          (bis 5 Nutzer)
                        </span>
                      </div>
                      <span className='text-white font-bold'>+5 €</span>
                    </div>

                    <div className='flex items-center justify-between p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-colors'>
                      <div className='flex items-center gap-3'>
                        <div className='p-1.5 rounded-md bg-blue-500/20'>
                          <Users className='w-4 h-4 text-blue-400' />
                        </div>
                        <span className='font-semibold text-white'>Pro</span>
                        <span className='text-slate-400 text-sm'>
                          (bis 7 Nutzer)
                        </span>
                      </div>
                      <span className='text-white font-bold'>+10 €</span>
                    </div>

                    <div className='flex items-center justify-between p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-colors'>
                      <div className='flex items-center gap-3'>
                        <div className='p-1.5 rounded-md bg-blue-500/20'>
                          <Users className='w-4 h-4 text-blue-400' />
                        </div>
                        <span className='font-semibold text-white'>
                          Enterprise
                        </span>
                        <span className='text-slate-400 text-sm'>
                          (ab 10 Nutzer)
                        </span>
                      </div>
                      <span className='text-blue-300 font-bold italic'>
                        individuell
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Setup Fee - Enhanced Design */}
            <div className='mb-24'>
              <Card className='max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-emerald-500/30 p-8 text-center backdrop-blur-sm'>
                <CardContent className='space-y-4'>
                  <h3 className='text-3xl font-bold text-white mb-2'>
                    Einmalige Einrichtung
                  </h3>
                  <p className='text-slate-300 text-lg mb-4'>
                    Für Hosting, Domain, Grundkonfiguration & Infrastruktur
                  </p>
                  <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-500/30'>
                    <span className='text-emerald-400 font-bold text-2xl'>
                      +49 € einmalig
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Example Packages - Enhanced Grid */}
            <div>
              <h3 className='text-3xl font-bold text-white text-center mb-12'>
                Beispielpakete
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                {[
                  {
                    name: 'Core',
                    price: '0 €',
                    modules: ['AdminTool (bis 3 Nutzer)'],
                    moduleNames: [],
                    userTiers: UserTier.CORE,
                    popular: false,
                  },
                  {
                    name: 'Insight Core',
                    price: '10 €',
                    modules: ['AdminTool', 'Insight', '3 Nutzer'],
                    moduleNames: [MODULE_NAMES[0]],
                    userTiers: UserTier.CORE,
                    popular: true,
                  },
                  {
                    name: 'Full Pro',
                    price: '30 €',
                    modules: ['Alle Module', 'bis 7 Nutzer'],
                    moduleNames: [
                      MODULE_NAMES[0],
                      MODULE_NAMES[1],
                      MODULE_NAMES[2],
                    ],
                    userTiers: UserTier.ENTERPRISE,
                    popular: false,
                  },
                ].map((pkg, i) => (
                  <Card
                    key={i}
                    className={`relative rounded-3xl p-6 transition-all duration-300 hover:scale-105 ${
                      pkg.popular
                        ? 'bg-gradient-to-br from-blue-900/40 to-slate-800/80 border-2 border-blue-500/50 shadow-lg shadow-blue-500/20'
                        : 'bg-slate-800/80 border border-blue-500/20'
                    } backdrop-blur-md`}
                  >
                    {pkg.popular && (
                      <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                        <Badge className='bg-blue-500 text-white px-4 py-1 rounded-full'>
                          Beliebt
                        </Badge>
                      </div>
                    )}
                    <CardHeader className='text-center pb-4'>
                      <CardTitle className='text-white text-2xl mb-2'>
                        {pkg.name}
                      </CardTitle>
                      <div className='text-3xl font-bold text-emerald-400 mb-1'>
                        {pkg.price}
                      </div>
                      <CardDescription className='text-slate-400'>
                        /Monat
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='pt-4'>
                      <ul className='space-y-3 mb-6'>
                        {pkg.modules.map((m, j) => (
                          <li
                            key={j}
                            className='flex items-center text-slate-300'
                          >
                            <CheckCircle className='h-5 w-5 mr-3 text-emerald-400 flex-shrink-0' />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        onClick={() =>
                          handleOnclick(pkg.moduleNames, pkg.userTiers)
                        }
                        className={`w-full ${
                          pkg.popular
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-slate-700 hover:bg-slate-600 text-white border border-blue-500/30'
                        } transition-all duration-300`}
                      >
                        Paket wählen
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id='contact'
          className='relative w-full py-24 md:py-32 bg-gradient-to-br from-slate-950 via-blue-950/30 to-emerald-950/20'
        >
          <div className='absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-br-[5rem]'></div>
          <div className='absolute bottom-0 right-0 w-36 h-36 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-tl-[4.5rem]'></div>

          <div className='container relative'>
            <div className='flex flex-col items-center justify-center space-y-10 text-center max-w-4xl mx-auto'>
              <h2 className='text-4xl font-black tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-white via-blue-200 to-emerald-200 bg-clip-text text-transparent'>
                Ready to streamline your business?
              </h2>
              <p className='max-w-[700px] text-slate-300 text-xl md:text-2xl leading-relaxed font-light'>
                Join thousands of businesses already using OrderLink to manage
                their operations more efficiently.
              </p>
              <div className='flex flex-col gap-6 min-[400px]:flex-row'>
                <Button
                  asChild
                  size='lg'
                  className='px-12 py-6 text-xl bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 hover:from-blue-700 hover:via-blue-600 hover:to-emerald-600 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 rounded-2xl text-white font-bold'
                >
                  <Link href='#pricing'>
                    Start Your Free Trial <Rocket className='ml-3 h-6 w-6' />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant='outline'
                  size='lg'
                  className='px-12 py-6 text-xl border-2 border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 bg-slate-950/50 backdrop-blur-sm text-blue-200 hover:text-white rounded-2xl font-semibold'
                >
                  <Link href='#modules'>Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
}
