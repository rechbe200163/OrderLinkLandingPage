import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import {
  BarChart3,
  CheckCircle,
  Package,
  Settings,
  Shield,
  Users,
  Workflow,
} from 'lucide-react';
import Link from 'next/link';
import { MODULE_NAMES, UserTier } from '@/lib/types';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const PricingSection = () => {
  return (
    <section
      id='pricing'
      className='relative w-full py-24 md:py-32'
    >
      <div className='container relative'>
        {/* Header Section */}
        <div className='flex flex-col items-center justify-center gap-4 text-center mb-16 max-w-3xl mx-auto'>
          <Badge
            variant='outline'
            className='border-primary/20 text-primary bg-primary/5 rounded-full px-4 py-2'
          >
            <Package className='w-4 h-4 mr-2' />
            Flexible Pricing
          </Badge>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground text-balance'>
            Modular & Transparent
          </h2>
          <p className='max-w-[700px] text-muted-foreground text-lg leading-relaxed'>
            Bezahle nur, was du brauchst -- kombiniere Module & Nutzeranzahl
            individuell.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20'>
          {/* Module Pricing Card */}
          <Card className='rounded-2xl bg-card border border-border p-6 hover:shadow-lg transition-all duration-300'>
            <CardHeader className='pb-4'>
              <div className='flex items-center gap-3 mb-1'>
                <div className='p-2 rounded-lg bg-primary/10'>
                  <Settings className='w-5 h-5 text-primary' />
                </div>
                <CardTitle className='text-xl font-semibold text-card-foreground'>
                  Module
                </CardTitle>
              </div>
              <CardDescription className='text-muted-foreground'>
                Monatliche Preise pro Tenant
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-3'>
              <div className='flex items-center justify-between p-3.5 rounded-xl bg-primary/5 border border-primary/10'>
                <div className='flex items-center gap-3'>
                  <div className='p-1.5 rounded-md bg-primary/10'>
                    <Package className='w-4 h-4 text-primary' />
                  </div>
                  <span className='font-medium text-card-foreground'>Core</span>
                  <span className='text-muted-foreground text-sm'>
                    (AdminTool Basis)
                  </span>
                </div>
                <span className='text-primary font-semibold text-sm'>Inklusive</span>
              </div>

              <div className='flex items-center justify-between p-3.5 rounded-xl hover:bg-muted/50 transition-colors'>
                <div className='flex items-center gap-3'>
                  <div className='p-1.5 rounded-md bg-muted'>
                    <BarChart3 className='w-4 h-4 text-muted-foreground' />
                  </div>
                  <span className='font-medium text-card-foreground'>Insight</span>
                  <span className='text-muted-foreground text-sm'>
                    (Statistiken)
                  </span>
                </div>
                <span className='text-card-foreground font-semibold text-sm'>+10 EUR</span>
              </div>

              <div className='flex items-center justify-between p-3.5 rounded-xl hover:bg-muted/50 transition-colors'>
                <div className='flex items-center gap-3'>
                  <div className='p-1.5 rounded-md bg-muted'>
                    <Workflow className='w-4 h-4 text-muted-foreground' />
                  </div>
                  <span className='font-medium text-card-foreground'>Flow</span>
                  <span className='text-muted-foreground text-sm'>
                    (Lieferplanung & App)
                  </span>
                </div>
                <span className='text-card-foreground font-semibold text-sm'>+15 EUR</span>
              </div>

              <div className='flex items-center justify-between p-3.5 rounded-xl hover:bg-muted/50 transition-colors'>
                <div className='flex items-center gap-3'>
                  <div className='p-1.5 rounded-md bg-muted'>
                    <Shield className='w-4 h-4 text-muted-foreground' />
                  </div>
                  <span className='font-medium text-card-foreground'>Access</span>
                  <span className='text-muted-foreground text-sm'>
                    (Rollen & Rechte)
                  </span>
                </div>
                <span className='text-card-foreground font-semibold text-sm'>+5 EUR</span>
              </div>
            </CardContent>
          </Card>

          {/* User Packages Card */}
          <Card className='rounded-2xl bg-card border border-border p-6 hover:shadow-lg transition-all duration-300'>
            <CardHeader className='pb-4'>
              <div className='flex items-center gap-3 mb-1'>
                <div className='p-2 rounded-lg bg-primary/10'>
                  <Users className='w-5 h-5 text-primary' />
                </div>
                <CardTitle className='text-xl font-semibold text-card-foreground'>
                  Nutzerpakete
                </CardTitle>
              </div>
              <CardDescription className='text-muted-foreground'>
                Monatlich, pro Instanz
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-3'>
              <div className='flex items-center justify-between p-3.5 rounded-xl bg-primary/5 border border-primary/10'>
                <div className='flex items-center gap-3'>
                  <div className='p-1.5 rounded-md bg-primary/10'>
                    <Users className='w-4 h-4 text-primary' />
                  </div>
                  <span className='font-medium text-card-foreground'>Core</span>
                  <span className='text-muted-foreground text-sm'>
                    (bis 3 Nutzer)
                  </span>
                </div>
                <span className='text-primary font-semibold text-sm'>Inklusive</span>
              </div>

              <div className='flex items-center justify-between p-3.5 rounded-xl hover:bg-muted/50 transition-colors'>
                <div className='flex items-center gap-3'>
                  <div className='p-1.5 rounded-md bg-muted'>
                    <Users className='w-4 h-4 text-muted-foreground' />
                  </div>
                  <span className='font-medium text-card-foreground'>Team</span>
                  <span className='text-muted-foreground text-sm'>
                    (bis 5 Nutzer)
                  </span>
                </div>
                <span className='text-card-foreground font-semibold text-sm'>+5 EUR</span>
              </div>

              <div className='flex items-center justify-between p-3.5 rounded-xl hover:bg-muted/50 transition-colors'>
                <div className='flex items-center gap-3'>
                  <div className='p-1.5 rounded-md bg-muted'>
                    <Users className='w-4 h-4 text-muted-foreground' />
                  </div>
                  <span className='font-medium text-card-foreground'>Pro</span>
                  <span className='text-muted-foreground text-sm'>
                    (bis 7 Nutzer)
                  </span>
                </div>
                <span className='text-card-foreground font-semibold text-sm'>+10 EUR</span>
              </div>

              <div className='flex items-center justify-between p-3.5 rounded-xl hover:bg-muted/50 transition-colors'>
                <div className='flex items-center gap-3'>
                  <div className='p-1.5 rounded-md bg-muted'>
                    <Users className='w-4 h-4 text-muted-foreground' />
                  </div>
                  <span className='font-medium text-card-foreground'>Enterprise</span>
                  <span className='text-muted-foreground text-sm'>
                    (ab 10 Nutzer)
                  </span>
                </div>
                <span className='text-primary font-semibold text-sm italic'>
                  individuell
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Setup Fee */}
        <div className='mb-20'>
          <Card className='max-w-3xl mx-auto rounded-2xl bg-card border border-border p-8 text-center'>
            <CardContent className='space-y-3'>
              <h3 className='text-2xl font-semibold text-card-foreground'>
                Einmalige Einrichtung
              </h3>
              <p className='text-muted-foreground'>
                Hosting, Domain, Grundkonfiguration & Infrastruktur
              </p>
              <div className='inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10'>
                <span className='text-primary font-semibold text-lg'>
                  +49 EUR einmalig
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Example Packages */}
        <div>
          <h3 className='text-2xl font-semibold text-foreground text-center mb-10'>
            Beispielpakete
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
            {[
              {
                name: 'Core',
                price: '0 EUR',
                modules: ['AdminTool (bis 3 Nutzer)'],
                moduleNames: [],
                userTiers: UserTier.CORE,
                popular: false,
              },
              {
                name: 'Insight Core',
                price: '10 EUR',
                modules: ['AdminTool', 'Insight', '3 Nutzer'],
                moduleNames: [MODULE_NAMES[0]],
                userTiers: UserTier.CORE,
                popular: true,
              },
              {
                name: 'Full Pro',
                price: '30 EUR',
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
                className={`relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  pkg.popular
                    ? 'bg-card border-2 border-primary shadow-md'
                    : 'bg-card border border-border'
                }`}
              >
                {pkg.popular && (
                  <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                    <Badge className='bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium'>
                      Beliebt
                    </Badge>
                  </div>
                )}
                <CardHeader className='text-center pb-4'>
                  <CardTitle className='text-card-foreground text-xl mb-2'>
                    {pkg.name}
                  </CardTitle>
                  <div className='text-2xl font-bold text-primary mb-1'>
                    {pkg.price}
                  </div>
                  <CardDescription className='text-muted-foreground'>
                    /Monat
                  </CardDescription>
                </CardHeader>
                <CardContent className='pt-4'>
                  <ul className='space-y-3 mb-6'>
                    {pkg.modules.map((m, j) => (
                      <li key={j} className='flex items-center text-sm text-muted-foreground'>
                        <CheckCircle className='h-4 w-4 mr-3 text-primary flex-shrink-0' />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full rounded-lg text-sm font-medium ${
                      pkg.popular
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                        : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border'
                    } transition-colors duration-200`}
                  >
                    <Link href='/onboarding/address'>Paket w&auml;hlen</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
