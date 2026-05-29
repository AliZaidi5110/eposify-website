import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/SiteShell';

export default function Square() {
  return (
    <PageShell>
      <main>
        <section className="px-5 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <Image src="/sqaure1.avif" alt="Square Terminal" width={600} height={500} className="rounded-3xl object-cover" />
            </div>
            <div>
              <h1 className="text-5xl font-black tracking-tight text-navy md:text-6xl">Square Terminal</h1>
              <p className="mt-6 text-xl text-slate-600">The compact card machine that flexes with your business</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 font-black text-white transition hover:-translate-y-1">Get Square</Link>
            </div>
          </div>
        </section>

        <section className="px-5 py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-navy md:text-5xl">Square Register</h2>
              <p className="mt-4 text-xl text-slate-600">Dual-screen till system. Advanced software. Tough enough for every rush.</p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3"><span className="text-electric">•</span><span className="text-lg text-slate-700">Lightning-fast checkout on both sides of the counter</span></li>
                <li className="flex items-start gap-3"><span className="text-electric">•</span><span className="text-lg text-slate-700">Memory and processing power to keep up on your busiest days</span></li>
                <li className="flex items-start gap-3"><span className="text-electric">•</span><span className="text-lg text-slate-700">Two touchscreens move customers quickly from order to payment</span></li>
                <li className="flex items-start gap-3"><span className="text-electric">•</span><span className="text-lg text-slate-700">Square Point of Sale software helps you manage complex operations</span></li>
              </ul>
            </div>
            <div className="relative">
              <Image src="/square_register.avif" alt="Square Register" width={600} height={500} className="rounded-3xl object-cover" />
            </div>
          </div>
        </section>

        <section className="px-5 py-16 bg-slate-50">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <Image src="/square_handheld.jpeg" alt="Square Handheld" width={600} height={500} className="rounded-3xl object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-black tracking-tight text-navy md:text-5xl">Square Handheld</h2>
              <p className="mt-6 text-xl text-slate-600">The powerful POS that fits in your pocket, with built-in payments, barcode scanner and camera. Perfect for tableside ordering, inventory management and more.</p>
            </div>
          </div>
        </section>

        <section className="px-5 py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-navy md:text-5xl">A kiosk solution by Square</h2>
              <p className="mt-6 text-xl text-slate-600">Affordable, easy setup. For real. No costly service visits. No pricey installation fees. Just add an iPad and set up your kiosk entirely on your own.</p>
            </div>
            <div className="relative">
              <Image src="/square_kiosk.jpeg" alt="Square Kiosk" width={600} height={500} className="rounded-3xl object-cover" />
            </div>
          </div>
        </section>

        <section className="px-5 py-12 bg-navy text-center">
          <p className="text-lg font-bold text-white">Square Official Provider</p>
        </section>
      </main>
    </PageShell>
  );
}
