// app/(marketing)/_components/HowItWorks.tsx
'use client';

import {
  Timeline,
  TimelineHeader,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
  TimelineIndicator,
} from '@/components/ui/timeline';
import {
  UserPlus,
  Sparkles,
  Layers3,
  QrCode,
  Upload,
  Settings2,
  CheckCircle2,
} from 'lucide-react';
import { cn } from '@/lib/utils'; // optional, falls du eine cn util hast
import Link from 'next/link';

type TimelineItemType = {
  id: number;
  title: string;
  description?: string;
  estimatedTime: string; // z.B. "≈ 5–10 Min."
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const items: TimelineItemType[] = [
  {
    id: 1,
    title: 'Registrieren',
    description: 'Firmenprofil anlegen, Basisdaten bestätigen – fertig.',
    estimatedTime: '≈ 2–3 Min.',
    icon: UserPlus,
  },
  {
    id: 2,
    title: '14-Tage Free Trial starten',
    description: 'Alle Module ohne Verpflichtung testen.',
    estimatedTime: 'Sofort',
    icon: Sparkles,
  },
  {
    id: 3,
    title: 'Pakete & Module wählen',
    description:
      'Admin-Tool, Delivery-Navigation, WebShop & Analytics nach Bedarf aktivieren.',
    estimatedTime: '≈ 1–2 Min.',
    icon: Layers3,
  },
  {
    id: 4,
    title: 'Navigation-App per QR verbinden',
    description:
      'Im Admin-Tool unter Geräte → „Fahrer-App verknüpfen“ öffnen und QR mit der Handy-App scannen.',
    estimatedTime: '≈ 1 Min.',
    icon: QrCode,
  },
  {
    id: 5,
    title: 'Produkte & Kunden importieren',
    description:
      'CSV-Import oder manuell anlegen – OrderLink prüft und bereinigt Stammdaten.',
    estimatedTime: '≈ 5–10 Min.',
    icon: Upload,
  },
  {
    id: 6,
    title: 'Lager & Rollen konfigurieren',
    description: 'Standorte, Bestandsgrenzen und Nutzerrechte setzen.',
    estimatedTime: '≈ 5–15 Min.',
    icon: Settings2,
  },
  {
    id: 7,
    title: 'Loslegen',
    description:
      'Bestellungen erfassen, Routen planen, Zahlungen abwickeln und Insights sehen.',
    estimatedTime: 'Direkt',
    icon: CheckCircle2,
  },
];

function TimeBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className='inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium text-muted-foreground'>
      {children}
    </span>
  );
}

export default function HowItWorks() {
  return (
    <section className='relative mx-auto max-w-5xl px-4 py-16'>
      <div className='mx-auto mb-10 max-w-2xl text-center'>
        <h2 className='text-3xl font-semibold tracking-tight sm:text-4xl'>
          So funktioniert das Setup mit OrderLink
        </h2>
        <p className='mt-3 text-muted-foreground'>
          In unter 20 Minuten einsatzbereit – ohne IT-Team. Einfach starten,
          Module aktivieren und die Fahrer-App per QR verbinden.
        </p>
      </div>

      <Timeline defaultValue={1} className='mx-auto'>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <TimelineItem
              key={item.id}
              step={item.id}
              className={cn(
                'w-[calc(50%-1.5rem)]',
                'odd:ms-auto',
                'even:text-right',
                'even:group-data-[orientation=vertical]/timeline:ms-0',
                'even:group-data-[orientation=vertical]/timeline:me-8',
                'even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:-right-6',
                'even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:left-auto',
                'even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:translate-x-1/2',
                'even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:-right-6',
                'even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:left-auto',
                'even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:translate-x-1/2'
              )}
            >
              <TimelineHeader>
                <TimelineSeparator />
                <div className='flex items-center gap-2'>
                  <TimeBadge>{item.estimatedTime}</TimeBadge>
                  <TimelineTitle className='flex items-center gap-2'>
                    <Icon className='h-4 w-4 opacity-80' aria-hidden />
                    {item.title}
                  </TimelineTitle>
                </div>
                <TimelineIndicator />
              </TimelineHeader>

              {item.description ? (
                <p className='mt-2 text-sm text-muted-foreground'>
                  {item.description}
                </p>
              ) : null}
            </TimelineItem>
          );
        })}
      </Timeline>

      <div className='mt-12 flex flex-wrap items-center justify-center gap-3'>
        <Link
          href='/signup'
          className='inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:opacity-90'
        >
          Gratis testen (14 Tage)
        </Link>
        <Link
          href='/pricing'
          className='inline-flex items-center rounded-xl border px-4 py-2 text-sm font-medium hover:bg-accent'
        >
          Preise & Pakete ansehen
        </Link>
      </div>
    </section>
  );
}
