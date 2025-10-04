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
import { getTranslations } from 'next-intl/server';

type ModuleTranslation = {
  name: string;
  subtitle: string;
  features: string[];
};

const moduleConfigs = [
  {
    icon: Settings,
    glowGradient: 'from-blue-600 to-emerald-600',
    cardHoverShadow: 'hover:shadow-blue-500/25',
    iconWrapperGradient: 'from-blue-600 to-blue-700',
    iconWrapperHover: 'group-hover:rotate-6',
    iconShadow: 'shadow-blue-500/25',
    accentClassName:
      'absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-3xl',
    featureIconColor: 'text-blue-400',
    descriptionColor: 'text-blue-200',
  },
  {
    icon: ShoppingCart,
    glowGradient: 'from-emerald-600 to-blue-600',
    cardHoverShadow: 'hover:shadow-emerald-500/25',
    iconWrapperGradient: 'from-emerald-600 to-emerald-700',
    iconWrapperHover: 'group-hover:-rotate-6',
    iconShadow: 'shadow-emerald-500/25',
    accentClassName:
      'absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-tr-3xl',
    featureIconColor: 'text-emerald-400',
    descriptionColor: 'text-emerald-200',
  },
  {
    icon: Navigation,
    glowGradient: 'from-blue-600 to-slate-600',
    cardHoverShadow: 'hover:shadow-blue-500/25',
    iconWrapperGradient: 'from-blue-600 to-slate-700',
    iconWrapperHover: 'group-hover:rotate-12',
    iconShadow: 'shadow-blue-500/25',
    accentClassName:
      'absolute top-0 left-0 w-18 h-18 bg-gradient-to-br from-blue-500/20 to-transparent rounded-br-3xl',
    featureIconColor: 'text-blue-400',
    descriptionColor: 'text-blue-200',
  },
  {
    icon: LineChart,
    glowGradient: 'from-emerald-600 to-slate-600',
    cardHoverShadow: 'hover:shadow-emerald-500/25',
    iconWrapperGradient: 'from-emerald-600 to-slate-700',
    iconWrapperHover: 'group-hover:-rotate-12',
    iconShadow: 'shadow-emerald-500/25',
    accentClassName:
      'absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-emerald-500/20 to-transparent rounded-tl-3xl',
    featureIconColor: 'text-emerald-400',
    descriptionColor: 'text-emerald-200',
  },
] as const;

const ModulesSection = async () => {
  const t = await getTranslations('ModulesSection');
  const modules = t.raw('modules') as ModuleTranslation[];

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
            {t('badge')}
          </Badge>
          <h2 className='text-4xl font-black tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-white via-blue-200 to-emerald-200 bg-clip-text text-transparent'>
            {t('title')}
          </h2>
          <p className='max-w-[900px] text-slate-300 text-xl md:text-2xl leading-relaxed font-light'>
            {t('description')}
          </p>
        </div>
        <div className='mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {modules.map((module, index) => {
            const config = moduleConfigs[index];
            const Icon = config.icon;
            return (
              <div key={module.name} className='relative group'>
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${config.glowGradient} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}
                ></div>
                <Card
                  className={`relative group transition-all duration-700 hover:shadow-2xl ${config.cardHoverShadow} hover:-translate-y-4 border-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl h-full overflow-hidden backdrop-blur-sm`}
                >
                  <div className={config.accentClassName}></div>
                  <CardHeader className='pb-6 relative'>
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${config.iconWrapperGradient} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 ${config.iconWrapperHover} transition-transform duration-500 shadow-2xl ${config.iconShadow}`}
                    >
                      <Icon className='h-10 w-10 text-white' />
                    </div>
                    <CardTitle className='text-2xl text-white font-bold'>
                      {module.name}
                    </CardTitle>
                    <CardDescription
                      className={`${config.descriptionColor} text-lg`}
                    >
                      {module.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-4 text-base'>
                      {module.features.map((feature) => (
                        <li key={feature} className='flex items-center'>
                          <CheckCircle
                            className={`mr-4 h-5 w-5 ${config.featureIconColor} flex-shrink-0`}
                          />
                          <span className='text-slate-300'>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
