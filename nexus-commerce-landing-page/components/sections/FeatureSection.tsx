import { Shield, Target, TrendingUp, Users, Workflow, Zap } from 'lucide-react';
import React from 'react';
import { Badge } from '../ui/badge';
import { getTranslations } from 'next-intl/server';

type FeatureTranslation = {
  title: string;
  description: string;
};

const featureConfigs = [
  {
    icon: Target,
    gradient: 'from-blue-600 to-blue-700',
    bgGradient: 'from-blue-900/20 to-blue-800/20',
  },
  {
    icon: TrendingUp,
    gradient: 'from-emerald-600 to-emerald-700',
    bgGradient: 'from-emerald-900/20 to-emerald-800/20',
  },
  {
    icon: Zap,
    gradient: 'from-blue-600 to-emerald-600',
    bgGradient: 'from-blue-900/20 to-emerald-900/20',
  },
  {
    icon: Shield,
    gradient: 'from-slate-600 to-slate-700',
    bgGradient: 'from-slate-800/50 to-slate-700/50',
  },
  {
    icon: Users,
    gradient: 'from-emerald-600 to-blue-600',
    bgGradient: 'from-emerald-900/20 to-blue-900/20',
  },
  {
    icon: Workflow,
    gradient: 'from-blue-600 to-slate-600',
    bgGradient: 'from-blue-900/20 to-slate-900/20',
  },
] as const;

const FeatureSection = async () => {
  const t = await getTranslations('FeatureSection');
  const features = t.raw('features') as FeatureTranslation[];

  return (
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
            {t('badge')}
          </Badge>
          <h2 className='text-4xl font-black tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-white via-emerald-200 to-blue-200 bg-clip-text text-transparent'>
            {t('title')}
          </h2>
          <p className='max-w-[900px] text-slate-300 text-xl md:text-2xl leading-relaxed font-light'>
            {t('description')}
          </p>
        </div>
        <div className='mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature, index) => {
            const config = featureConfigs[index];
            const Icon = config.icon;
            return (
              <div
                key={feature.title}
                className={`group flex flex-col items-center space-y-6 rounded-3xl border border-slate-700/50 p-10 shadow-2xl bg-gradient-to-br ${config.bgGradient} hover:shadow-blue-500/10 transition-all duration-700 hover:-translate-y-4 h-full relative overflow-hidden backdrop-blur-sm`}
              >
                <div className='absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-3xl'></div>
                <div
                  className={`rounded-3xl bg-gradient-to-br ${config.gradient} p-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-2xl`}
                >
                  <Icon className='h-10 w-10 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-center text-white'>
                  {feature.title}
                </h3>
                <p className='text-center text-slate-300 leading-relaxed text-lg'>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
