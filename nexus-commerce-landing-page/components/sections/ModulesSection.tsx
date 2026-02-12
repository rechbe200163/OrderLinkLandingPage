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
      className='relative w-full py-24 md:py-32 bg-muted/30'
    >
      <div className='container relative'>
        <div className='flex flex-col items-center justify-center gap-4 text-center mb-16 max-w-3xl mx-auto'>
          <Badge
            variant='outline'
            className='border-primary/20 text-primary bg-primary/5 rounded-full px-4 py-2'
          >
            <Package className='w-4 h-4 mr-2' />
            Core Modules
          </Badge>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground text-balance'>
            Everything you need to manage your business
          </h2>
          <p className='max-w-[700px] text-muted-foreground text-lg leading-relaxed'>
            Four powerful modules that work together seamlessly to handle every
            aspect of your logistics and business operations.
          </p>
        </div>
        <div className='mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {/* Admin Tool */}
          <Card className='group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border bg-card rounded-2xl h-full'>
            <CardHeader className='pb-4'>
              <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300'>
                <Settings className='h-6 w-6 text-primary' />
              </div>
              <CardTitle className='text-xl text-card-foreground font-semibold'>
                Admin Tool
              </CardTitle>
              <CardDescription className='text-muted-foreground'>
                Complete business administration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='space-y-3 text-sm'>
                <li className='flex items-center'>
                  <CheckCircle className='mr-3 h-4 w-4 text-primary flex-shrink-0' />
                  <span className='text-muted-foreground'>User management</span>
                </li>
                <li className='flex items-center'>
                  <CheckCircle className='mr-3 h-4 w-4 text-primary flex-shrink-0' />
                  <span className='text-muted-foreground'>System configuration</span>
                </li>
                <li className='flex items-center'>
                  <CheckCircle className='mr-3 h-4 w-4 text-primary flex-shrink-0' />
                  <span className='text-muted-foreground'>Access control</span>
                </li>
                <li className='flex items-center'>
                  <CheckCircle className='mr-3 h-4 w-4 text-primary flex-shrink-0' />
                  <span className='text-muted-foreground'>Audit logging</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Web Shop */}
          <Card className='group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border bg-card rounded-2xl h-full'>
            <CardHeader className='pb-4'>
              <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300'>
                <ShoppingCart className='h-6 w-6 text-primary' />
              </div>
              <CardTitle className='text-xl text-card-foreground font-semibold'>
                Web Shop
              </CardTitle>
              <CardDescription className='text-muted-foreground'>
                E-commerce platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='space-y-3 text-sm'>
                <li className='flex items-center'>
                  <CheckCircle className='mr-3 h-4 w-4 text-primary flex-shrink-0' />
                  <span className='text-muted-foreground'>Product catalog</span>
                </li>
                <li className='flex items-center'>
                  <CheckCircle className='mr-3 h-4 w-4 text-primary flex-shrink-0' />
                  <span className='text-muted-foreground'>Order processing</span>
                </li>
                <li className='flex items-center'>
                  <CheckCircle className='mr-3 h-4 w-4 text-primary flex-shrink-0' />
                  <span className='text-muted-foreground'>Payment integration</span>
                </li>
                <li className='flex items-center'>
                  <CheckCircle className='mr-3 h-4 w-4 text-primary flex-shrink-0' />
                  <span className='text-muted-foreground'>Customer accounts</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Delivery Navigation */}
          <Card className='group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border bg-card rounded-2xl h-full'>
            <CardHeader className='pb-4'>
              <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300'>
                <Navigation className='h-6 w-6 text-primary' />
              </div>
              <CardTitle className='text-xl text-card-foreground font-semibold'>
                Delivery Navigation
              </CardTitle>
              <CardDescription className='text-muted-foreground'>
                Smart logistics routing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='space-y-3 text-sm'>
                <li className='flex items-center'>
                  <CheckCircle className='mr-3 h-4 w-4 text-primary flex-shrink-0' />
                  <span className='text-muted-foreground'>Route optimization</span>
                </li>
                <li className='flex items-center'>
                  <CheckCircle className='mr-3 h-4 w-4 text-primary flex-shrink-0' />
                  <span className='text-muted-foreground'>Real-time tracking</span>
                </li>
                <li className='flex items-center'>
                  <CheckCircle className='mr-3 h-4 w-4 text-primary flex-shrink-0' />
                  <span className='text-muted-foreground'>Driver management</span>
                </li>
                <li className='flex items-center'>
                  <CheckCircle className='mr-3 h-4 w-4 text-primary flex-shrink-0' />
                  <span className='text-muted-foreground'>Delivery scheduling</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Analysis */}
          <Card className='group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border bg-card rounded-2xl h-full'>
            <CardHeader className='pb-4'>
              <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300'>
                <LineChart className='h-6 w-6 text-primary' />
              </div>
              <CardTitle className='text-xl text-card-foreground font-semibold'>
                Data Analysis
              </CardTitle>
              <CardDescription className='text-muted-foreground'>
                Business intelligence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='space-y-3 text-sm'>
                <li className='flex items-center'>
                  <CheckCircle className='mr-3 h-4 w-4 text-primary flex-shrink-0' />
                  <span className='text-muted-foreground'>Performance metrics</span>
                </li>
                <li className='flex items-center'>
                  <CheckCircle className='mr-3 h-4 w-4 text-primary flex-shrink-0' />
                  <span className='text-muted-foreground'>Custom reports</span>
                </li>
                <li className='flex items-center'>
                  <CheckCircle className='mr-3 h-4 w-4 text-primary flex-shrink-0' />
                  <span className='text-muted-foreground'>Trend analysis</span>
                </li>
                <li className='flex items-center'>
                  <CheckCircle className='mr-3 h-4 w-4 text-primary flex-shrink-0' />
                  <span className='text-muted-foreground'>Data visualization</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
