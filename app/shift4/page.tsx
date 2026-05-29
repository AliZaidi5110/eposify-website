import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { PageShell } from '@/components/SiteShell';

export default function Shift4() {
  return (
    <PageShell>
      <main>
        <section className="px-5 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex justify-center">
              <Image src="/Shift4-Partner-Logo.svg" alt="Shift4" width={120} height={45} className="h-12 w-auto object-contain" />
            </div>
            <h1 className="text-5xl font-black tracking-tight text-navy md:text-6xl text-center mb-12">Shift4 Payment Solutions</h1>
            <div className="grid gap-12 md:grid-cols-2">
              <div className="relative">
                <Image src="/IMG_9925.JPG.jpeg" alt="Shift4 card terminal" width={600} height={500} className="rounded-3xl object-cover w-full" />
              </div>
              <div className="relative">
                <Image src="/shift4.2.jpeg" alt="Shift4 POS system" width={600} height={500} className="rounded-3xl object-cover w-full" />
              </div>
            </div>
            <div className="mt-12 max-w-3xl mx-auto">
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><Check className="mt-1 h-6 w-6 flex-none text-emerald" /><span className="text-xl font-bold text-slate-700">FREE First Card Terminal</span></li>
                <li className="flex items-start gap-3"><Check className="mt-1 h-6 w-6 flex-none text-emerald" /><span className="text-xl font-bold text-slate-700">POS Includes Card Machine, Cash Drawer & Receipt Printer – No Upfront Costs</span></li>
                <li className="flex items-start gap-3"><Check className="mt-1 h-6 w-6 flex-none text-emerald" /><span className="text-xl font-bold text-slate-700">Next Working Day Payments (Monday–Friday)</span></li>
              </ul>
              <div className="mt-8 text-center">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 font-black text-white transition hover:-translate-y-1">Get Shift4</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-12 bg-navy text-center">
          <p className="text-lg font-bold text-white">Shift4 Official Provider</p>
        </section>
      </main>
    </PageShell>
  );
}
