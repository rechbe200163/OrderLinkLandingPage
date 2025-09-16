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
                  <span className='text-emerald-400 font-bold'>Inklusive</span>
                </div>

                <div className='flex items-center justify-between p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-colors'>
                  <div className='flex items-center gap-3'>
                    <div className='p-1.5 rounded-md bg-blue-500/20'>
                      <BarChart3 className='w-4 h-4 text-blue-400' />
                    </div>
                    <span className='font-semibold text-white'>Insight</span>
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
                  <span className='text-emerald-400 font-bold'>Inklusive</span>
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
                    <span className='font-semibold text-white'>Enterprise</span>
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
                      <li key={j} className='flex items-center text-slate-300'>
                        <CheckCircle className='h-5 w-5 mr-3 text-emerald-400 flex-shrink-0' />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full ${
                      pkg.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-slate-700 hover:bg-slate-600 text-white border border-blue-500/30'
                    } transition-all duration-300`}
                  >
                    <Link href='/onboarding/address'>Paket wählen</Link>
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
