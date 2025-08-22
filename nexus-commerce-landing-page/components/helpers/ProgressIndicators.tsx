'use client';

type Step = 'ADDRESS' | 'COMPANY';

interface Props {
  step: Step;
}

export default function ProgressIndicators({ step }: Props) {
  const addressDone = step === 'COMPANY' || step === 'ADDRESS';
  const companyDone = step === 'COMPANY';

  return (
    <div className='flex items-center justify-center mt-16 mb-8 px-4'>
      <div className='flex items-center space-x-6 md:space-x-8'>
        <div className='flex flex-col items-center space-y-3'>
          <div
            className={`w-4 h-4 ${addressDone ? 'bg-gradient-to-r from-blue-500 to-emerald-500 shadow-lg shadow-blue-500/25' : 'bg-slate-300 dark:bg-slate-600'} rounded-full transition-all duration-300 ease-in-out`}
          ></div>
          <span
            className={`text-xs font-medium ${addressDone ? 'text-slate-900 dark:text-slate-100' : 'text-slate-500 dark:text-slate-400'} transition-colors duration-300`}
          >
            Address Setup
          </span>
        </div>

        <div
          className={`w-12 h-0.5 ${companyDone ? 'bg-gradient-to-r from-blue-500 to-emerald-500' : 'bg-slate-300 dark:bg-slate-600'} transition-all duration-300`}
        ></div>

        <div className='flex flex-col items-center space-y-3'>
          <div
            className={`w-4 h-4 ${companyDone ? 'bg-gradient-to-r from-blue-500 to-emerald-500 shadow-lg shadow-blue-500/25' : 'bg-slate-300 dark:bg-slate-600'} rounded-full transition-all duration-300 ease-in-out`}
          ></div>
          <span
            className={`text-xs font-medium ${companyDone ? 'text-slate-900 dark:text-slate-100' : 'text-slate-500 dark:text-slate-400'} transition-colors duration-300`}
          >
            Company Details
          </span>
        </div>
      </div>
    </div>
  );
}
