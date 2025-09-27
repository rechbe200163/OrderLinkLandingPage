import OnboardingForm from '@/components/forms/OnboardingForm';

const OnboardingPage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/50 to-emerald-950/30'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_55%)]' />

      <div className='relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16'>
        <div className='text-center mb-10 max-w-2xl space-y-4'>
          <h1 className='text-4xl md:text-5xl font-bold text-white'>
            Finish Your OrderLink Setup
          </h1>
          <p className='text-slate-300 text-lg leading-relaxed'>
            Provide your company profile and business address in one step so we can configure your workspace.
          </p>
        </div>

        <div className='w-full max-w-4xl'>
          <OnboardingForm />
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
