import Image from 'next/image';
import Link from 'next/link';
import { Check, Smartphone } from 'lucide-react';
import { PageShell } from '@/components/SiteShell';

export default function Teya() {
  return (
    <PageShell>
      <main>
        <section className="px-5 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div className="relative mx-auto max-w-md order-2 lg:order-1">
              <Image src="/teya1-section.png" alt="Teya card payment solution" width={400} height={350} className="rounded-3xl object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-4">
                <Image src="/teya_logo.png" alt="Teya" width={120} height={45} className="h-12 w-auto object-contain" />
              </div>
              <h1 className="text-5xl font-black tracking-tight text-navy md:text-6xl">Enjoy simple, easy and fast card payments with Teya</h1>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3"><Check className="mt-1 h-6 w-6 flex-none" style={{ color: '#e8e23c' }} /><span className="text-lg text-slate-700">Simple Flat Rate Pricing</span></li>
                <li className="flex items-start gap-3"><Check className="mt-1 h-6 w-6 flex-none" style={{ color: '#e8e23c' }} /><span className="text-lg text-slate-700">Money in your account next business day</span></li>
                <li className="flex items-start gap-3"><Check className="mt-1 h-6 w-6 flex-none" style={{ color: '#e8e23c' }} /><span className="text-lg text-slate-700">No Contracts, No Hidden Fees, No PCI Charges</span></li>
                <li className="flex items-start gap-3"><Check className="mt-1 h-6 w-6 flex-none" style={{ color: '#e8e23c' }} /><span className="text-lg text-slate-700">Pay-By-Link, for Secure Remote Payments</span></li>
                <li className="flex items-start gap-3"><Check className="mt-1 h-6 w-6 flex-none" style={{ color: '#e8e23c' }} /><span className="text-lg text-slate-700">Live Transaction Data via the Teya App & Portal</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 bg-slate-50">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1">
              <Image src="/teya2-section.jpg" alt="Teya business account features" width={600} height={500} className="rounded-3xl object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-black tracking-tight text-navy md:text-5xl">A smart, simple and secure Business Account with Teya</h2>
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-xl font-black text-navy">Free to Open, No Management Fees</h3>
                  <p className="mt-2 text-slate-600">Get started with no setup costs or hidden charges—stay fee-free forever. The Teya Business Account is optional with your Teya card payments.</p>
                </div>
                <div>
                  <h3 className="text-xl font-black text-navy">Stay in Control of your Money</h3>
                  <p className="mt-2 text-slate-600">Send and receive money instantly, manage cash deposits, and enjoy 30 free ATM withdrawals per month.</p>
                </div>
                <div>
                  <h3 className="text-xl font-black text-navy">Smart Spending Tools</h3>
                  <p className="mt-2 text-slate-600">Access free physical Visa debit and virtual cards with 0.5% Cashback when you use it, plus set up automated direct debits for recurring payments.</p>
                </div>
                <div>
                  <h3 className="text-xl font-black text-navy">24/7 Security & Fraud Protection</h3>
                  <p className="mt-2 text-slate-600">Keep your money safe with advanced encryption, 24/7 fraud monitoring, and secure logins—day and night. Regulated by the FCA.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16" style={{ backgroundColor: '#e8e23c' }}>
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-navy md:text-5xl">Take contactless payments on your phone with Teya Tap</h2>
              <p className="mt-6 text-xl text-slate-600">Accept contactless payments anytime, anywhere – all you need is your phone. Need an extra card reader for busy periods? Looking for a simple way to process payments on the go? Available on Android when you join.</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 font-black text-white transition hover:-translate-y-1">Get Teya</Link>
            </div>
            <div className="relative mx-auto max-w-md">
              <Image src="/teya3-section.png" alt="Teya Tap mobile payments" width={400} height={350} className="rounded-3xl object-cover" />
            </div>
          </div>
        </section>

        <section className="px-5 py-12 bg-navy text-center">
          <p className="text-lg font-bold text-white">Teya Official Provider</p>
        </section>
      </main>
    </PageShell>
  );
}
