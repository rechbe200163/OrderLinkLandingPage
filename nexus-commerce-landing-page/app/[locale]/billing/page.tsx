import React from 'react';

const BillingPage = async (props: {
  searchParams: Promise<{ moduleNames?: string[]; userGroups?: string }>;
}) => {
  const { moduleNames, userGroups } = await props.searchParams;
  return (
    <div>
      <h2>Modules</h2>
      {moduleNames?.map((moduleName) => (
        <pre key={moduleName}>{moduleName}</pre>
      ))}

      <h2>User Groups</h2>
      <pre>{userGroups}</pre>
    </div>
  );
};

export default BillingPage;
