import React from 'react';

const ProgressPage = async ({
  params,
}: {
  params: Promise<{ siteConfigId: string }>;
}) => {
  const { siteConfigId } = await params;
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950/50 to-emerald-950/30 text-white overflow-x-hidden space-y-6 p-6'>
      <div>
        We are setting things up for you... you will be notified once it&apos;s
        done.
      </div>
      <div>Your Company ID is: {siteConfigId}</div>
    </div>
  );
};

export default ProgressPage;
