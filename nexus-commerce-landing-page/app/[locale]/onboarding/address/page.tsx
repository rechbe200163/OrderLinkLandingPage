import { redirect } from 'next/navigation';

const OnboardingAddressPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  redirect(`/${locale}/onboarding`);
};

export default OnboardingAddressPage;
