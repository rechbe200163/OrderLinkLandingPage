import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/ui/dark-mode/theme-provider';
import { Toaster } from 'sonner';
import { envSet } from '@/lib/utils';
import { Metadata } from 'next';
import '../globals.css';

// app/[locale]/layout.tsx (dein Layout)
export const metadata: Metadata = {
  title: 'OrderLink - Landing Page',
  description: 'Logistikplattform',
  // wirkt nur als PWA "zum Home-Bildschirm", schadet aber nicht:
  appleWebApp: { capable: true, statusBarStyle: 'black-translucent' },

  // WICHTIG: themeColor für iOS Safari
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  console.log('LocaleLayout', locale);

  if (!envSet()) throw new Error('Missing environment variables');
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className='min-h-dvh bg-[#EEF2FF] text-slate-900 antialiased dark:bg-[#0B1B5E] dark:text-slate-100'>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster richColors closeButton />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
