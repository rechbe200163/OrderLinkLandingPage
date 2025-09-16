import React from 'react';
import {
  Package,
  CheckCircle,
  Settings,
  ShoppingCart,
  LineChart,
  Navigation,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '../ui/badge';

const ModulesSection = () => {
  return (
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
            Four powerful modules that work together seamlessly to handle every
            aspect of your logistics and business operations.
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
                    <span className='text-slate-300'>System configuration</span>
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
                    <span className='text-slate-300'>Payment integration</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-4 h-5 w-5 text-emerald-400 flex-shrink-0' />
                    <span className='text-slate-300'>Customer accounts</span>
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
                    <span className='text-slate-300'>Route optimization</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-4 h-5 w-5 text-blue-400 flex-shrink-0' />
                    <span className='text-slate-300'>Real-time tracking</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-4 h-5 w-5 text-blue-400 flex-shrink-0' />
                    <span className='text-slate-300'>Driver management</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-4 h-5 w-5 text-blue-400 flex-shrink-0' />
                    <span className='text-slate-300'>Delivery scheduling</span>
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
                    <span className='text-slate-300'>Performance metrics</span>
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
                    <span className='text-slate-300'>Data visualization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
