'use client';
import { useProgressStore } from '@/lib/stores/useProgressStore';
import React from 'react';

const ProgressIndicators = () => {
  const progress = useProgressStore((state) => state.progress);
  console.log('Progress Indicators', progress);

  return (
    <div className='flex items-center justify-center mt-12 space-x-4'>
      <div className='flex items-center space-x-2'>
        <div
          className={`w-3 h-3 ${
            progress && progress.includes('ADDRESS')
              ? 'bg-gradient-to-r from-blue-500 to-emerald-500'
              : 'bg-slate-700'
          } rounded-full`}
        ></div>
        <span className='text-sm text-slate-500'>Address Setup</span>
      </div>

      <div className='w-8 h-0.5 bg-slate-700'></div>
      <div className='flex items-center space-x-2'>
        <div
          className={`w-3 h-3 ${
            progress && progress.includes('COMPANY')
              ? 'bg-gradient-to-r from-blue-500 to-emerald-500'
              : 'bg-slate-700'
          } rounded-full`}
        ></div>
        <span className='text-sm text-slate-400'>Company Details</span>
      </div>

      <div className='w-8 h-0.5 bg-slate-700'></div>
      <div className='flex items-center space-x-2'>
        <div
          className={`w-3 h-3 ${
            progress && progress.includes('REVIEW')
              ? 'bg-gradient-to-r from-blue-500 to-emerald-500'
              : 'bg-slate-700'
          } rounded-full`}
        ></div>
        <span className='text-sm text-slate-500'>REVIEW</span>
      </div>
    </div>
  );
};

export default ProgressIndicators;
