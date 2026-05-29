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

        <section className="px-5 py-16 bg-slate-50">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-black tracking-tight text-navy md:text-5xl text-center mb-12">Accept every way your customers want to pay</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="relative mx-auto aspect-square max-w-[400px] overflow-hidden rounded-3xl">
                  <Image src="/square2.avif" alt="Square Insert chip and PIN" fill className="object-cover" />
                </div>
                <p className="mt-6 text-xl font-bold text-navy">Insert a chip and PIN card</p>
              </div>
              <div className="text-center">
                <div className="relative mx-auto aspect-square max-w-[400px] overflow-hidden rounded-3xl">
                  <Image src="/square3.avif" alt="Square Tap contactless" fill className="object-cover" />
                </div>
                <p className="mt-4 text-lg font-bold text-electric">Square Tap contactless</p>
                <p className="mt-2 text-xl font-bold text-navy">Tap a contactless card</p>
              </div>
              <div className="text-center">
                <div className="relative mx-auto aspect-square max-w-[400px] overflow-hidden rounded-3xl">
                  <Image src="/square4.avif" alt="Square mobile payment" fill className="object-cover" />
                </div>
                <p className="mt-4 text-lg font-bold text-electric">Square mobile payment</p>
                <p className="mt-2 text-xl font-bold text-navy">Pay with a mobile device</p>
              </div>
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
