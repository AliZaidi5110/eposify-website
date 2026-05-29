import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Eposify UK | Card Machines, EPOS Systems & Business Funding',
  description:
    'Eposify provides card machines UK, EPOS systems, payment solutions, merchant services, POS systems and small business funding for UK businesses.',
  keywords: [
    'Card machines UK',
    'Business funding UK',
    'EPOS systems',
    'Payment solutions',
    'Merchant services',
    'POS systems',
    'Small business funding',
    'Restaurant card machine',
    'Salon payment systems',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
