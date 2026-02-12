import { Shield, Target, TrendingUp, Users, Workflow, Zap } from 'lucide-react';
import React from 'react';
import { Badge } from '../ui/badge';

const FeatureSection = () => {
  return (
    <section
      id='features'
      className='relative w-full py-24 md:py-32'
    >
      <div className='container relative'>
        <div className='flex flex-col items-center justify-center gap-4 text-center mb-16 max-w-3xl mx-auto'>
          <Badge
            variant='outline'
            className='border-primary/20 text-primary bg-primary/5 rounded-full px-4 py-2'
          >
            <Zap className='w-4 h-4 mr-2' />
            Key Benefits
          </Badge>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground text-balance'>
            Why businesses choose OrderLink
          </h2>
          <p className='max-w-[700px] text-muted-foreground text-lg leading-relaxed'>
            Streamline operations, reduce costs, and scale your business with
            our comprehensive logistics platform.
          </p>
        </div>
        <div className='mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {[
            {
              icon: Target,
              title: 'Operational Efficiency',
              description:
                'Streamline all business processes with integrated modules that eliminate redundancy and boost productivity across your organization.',
            },
            {
              icon: TrendingUp,
              title: 'Scalable Growth',
              description:
                'Grow your business confidently with a platform that scales seamlessly from startup to enterprise level operations.',
            },
            {
              icon: Zap,
              title: 'Real-time Insights',
              description:
                'Make informed decisions with comprehensive analytics and reporting that provide instant visibility into your operations.',
            },
            {
              icon: Shield,
              title: 'Secure & Reliable',
              description:
                'Trust your business data with enterprise-grade security, regular backups, and 99.9% uptime guarantee.',
            },
            {
              icon: Users,
              title: 'Team Collaboration',
              description:
                'Enable seamless collaboration across departments with role-based access and integrated communication tools.',
            },
            {
              icon: Workflow,
              title: 'Process Automation',
              description:
                'Automate repetitive tasks and workflows to reduce manual errors and free up your team for strategic work.',
            },
          ].map((capability, index) => (
            <div
              key={index}
              className='group flex flex-col items-start gap-4 rounded-2xl border border-border p-8 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full'
            >
              <div className='rounded-xl bg-primary/10 p-3 group-hover:bg-primary/15 transition-colors duration-300'>
                <capability.icon className='h-6 w-6 text-primary' />
              </div>
              <h3 className='text-lg font-semibold text-card-foreground'>
                {capability.title}
              </h3>
              <p className='text-muted-foreground leading-relaxed text-sm'>
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
