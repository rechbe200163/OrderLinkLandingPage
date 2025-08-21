import AddressForm from '@/components/forms/AddressForm';
import ProgressIndicators from '@/components/helpers/ProgressIndicators';

const OnboardingAddressPage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/50 to-emerald-950/30'>
      {/* Background pattern overlay */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]' />

      <div className='relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12'>
        {/* Header section */}
        <div className='text-center mb-8 max-w-2xl'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Address Information
          </h1>
          <p className='text-slate-300 text-lg leading-relaxed'>
            Please provide your address details to complete your onboarding
            process.
          </p>
        </div>

        {/* Form container with matching card styling */}
        <div className='w-full max-w-2xl'>
          <div className='relative'>
            {/* Glow effect */}
            <div className='absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-emerald-500/20 to-blue-500/20 rounded-3xl blur-sm' />

            {/* Main form container */}
            <div className='relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-blue-500/20 backdrop-blur-sm'>
              <AddressForm />
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <ProgressIndicators />
      </div>
    </div>
  );
};

export default OnboardingAddressPage;
