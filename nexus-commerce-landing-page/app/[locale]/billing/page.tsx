import React from 'react';

const BillingPage = async (props: {
  searchParams: Promise<{ moduleNames?: string[]; userGroups?: string[] }>;
}) => {
  const { moduleNames, userGroups } = await props.searchParams;
  return (
    <div>
      <h2>Modules</h2>
      <pre>{JSON.stringify(moduleNames, null, 2)}</pre>

      <h2>User Groups</h2>
      <pre>{JSON.stringify(userGroups)}</pre>
    </div>
  );
};

export default BillingPage;
