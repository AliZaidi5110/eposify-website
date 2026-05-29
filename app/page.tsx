import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgePoundSterling, BarChart3, Building2, Check, Coffee, CreditCard, Dumbbell, Globe2, HandCoins, Laptop, LockKeyhole, PhoneCall, Quote, Scissors, ShoppingBag, Sparkles, Store, TrendingDown, Utensils, Zap } from 'lucide-react';
import { AnimatedCard, FundingCalculator, MiniStat, PageShell, SectionHeader, SecurityStrip } from '@/components/SiteShell';

const services = [
  { icon: CreditCard, title: 'Card Machines', items: ['Wireless terminals', 'Countertop terminals', 'Portable machines', 'Android smart POS'] },
  { icon: Laptop, title: 'EPOS Systems', items: ['Restaurant POS', 'Retail POS', 'Salon POS', 'Inventory management'] },
  { icon: Globe2, title: 'Online Payments', items: ['Payment links', 'Online checkout', 'QR code payments', 'Invoice payments'] },
  { icon: HandCoins, title: 'Business Funding', items: ['Funding based on card sales performance', 'Growth capital', 'Stock purchasing', 'Cash flow support'] },
];

const industries = ['Restaurants', 'Takeaways', 'Cafés', 'Salons', 'Retail Shops', 'Grocery Stores', 'Gyms'];
const businessFlavors = [
  { label: 'Restaurants', icon: Utensils, className: 'left-[3%] top-[33%] bg-emerald/10 text-emerald' },
  { label: 'Barbers & salons', icon: Scissors, className: 'left-[20%] top-[56%] bg-aqua/10 text-aqua' },
  { label: 'Retail stores', icon: ShoppingBag, className: 'left-[23%] top-[23%] bg-electric/10 text-electric' },
  { label: 'Takeaways', icon: Store, className: 'left-[44%] top-[38%] bg-navy text-white' },
  { label: 'Cafés', icon: Coffee, className: 'right-[28%] top-[18%] bg-emerald/10 text-emerald' },
  { label: 'Grocery shops', icon: Store, className: 'right-[15%] top-[57%] bg-electric/10 text-electric' },
  { label: 'Gyms', icon: Dumbbell, className: 'right-[4%] top-[30%] bg-aqua/10 text-aqua' },
];
const heroBusinessImages = [
  { src: '/PD07203_-_USEN_-_hero_img_a.avif', alt: 'Business owner using a modern checkout system' },
  { src: '/PD07203_-_hero_img_b.avif', alt: 'Retail order being packed for a customer' },
  { src: '/PD07203_-_hero_img_c.avif', alt: 'Shop owner stocking grocery shelves' },
];
const businessCategoryCards = [
  { name: 'TAKEAWAYS', image: '/takeaway.jpg', alt: 'Fast food counter', slogan: 'Fast payments for quick service' },
  { name: 'CAFÉS', image: '/cafe.jpg', alt: 'Coffee shop scene', slogan: 'Brewing smooth transactions' },
  { name: 'SALONS', image: '/saloon.jpg', alt: 'Hair salon interior', slogan: 'Style your payments with ease' },
  { name: 'RETAIL SHOPS', image: '/retail shop.jpg', alt: 'Boutique store', slogan: 'Checkout made simple' },
  { name: 'GROCERY STORES', image: '/ym.jpg', alt: 'Supermarket checkout', slogan: 'Fresh payment solutions' },
  { name: 'GYMS', image: '/gym.jpg', alt: 'Fitness center', slogan: 'Power up your payments' },
];
const whyChooseItems = [
  { icon: Zap, title: 'Easy to Setup', text: 'Fast setup and simple onboarding for small business needs.' },
  { icon: TrendingDown, title: 'Lowest transaction rates', text: 'Competitive payment processing rates for your customers.' },
  { icon: LockKeyhole, title: 'Secure Transactions', text: 'Fast, secure and reliable payment solutions for every business.' },
  { icon: PhoneCall, title: '24/7 Support', text: 'Our team is available to support merchants when they need help.' },
];
const trustedCategories = ['Lodging & Hospitality', 'Food & Beverage', 'Retail', 'Sports & Entertainment', 'Casinos & Online Gaming', 'eCommerce', 'Airlines & Travel'];
const trustedLogos = ['aka.', 'Great Wolf Resorts', 'WYNDHAM', 'NOBLE HOUSE', 'ALTERA', 'Montage'];

export default function Home() {
  return (
    <PageShell>
      <main>
        <section className="relative overflow-hidden px-5 py-16 md:py-24">
          <div className="absolute left-1/2 top-16 -z-10 h-80 w-80 rounded-full bg-electric/20 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm"><Sparkles size={16} className="text-electric" /> Partnered with Teya, Shift4 & Square</div>
              <h1 className="text-5xl font-black tracking-tight text-navy md:text-7xl">Smart Payment Solutions for <span className="gradient-text">Modern Businesses</span></h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">Card Machines, POS Systems, Business Funding & Payment Processing Solutions for UK Businesses.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/contact" className="rounded-full bg-navy px-7 py-4 text-center font-black text-white shadow-premium transition hover:-translate-y-1">Get Started</Link><Link href="/contact#callback" className="rounded-full border border-slate-200 bg-white px-7 py-4 text-center font-black text-navy transition hover:border-electric">Request Callback</Link><Link href="/careers" className="rounded-full bg-gradient-to-r from-electric to-emerald px-7 py-4 text-center font-black text-white shadow-glow">Become a Sales Partner</Link></div>
              <div className="mt-8"><SecurityStrip /></div>
            </div>
            <div className="relative">
              <div className="glass rounded-4xl p-4"><Image src="/ab front.jpg.jpeg" alt="Eposify brochure with Teya Shift4 Square partners" width={900} height={550} className="rounded-3xl object-cover" priority /></div>
              <div className="absolute -bottom-7 -left-3 rounded-3xl bg-navy p-5 text-white shadow-premium"><p className="text-sm text-slate-300">Funding available</p><p className="text-2xl font-black">£5K–£500K</p><p className="text-sm text-emerald">within 24 hours</p></div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="w-full overflow-hidden bg-white shadow-premium">
            <div className="grid md:grid-cols-3">
              {heroBusinessImages.map((image) => (
                <div key={image.src} className="relative h-[360px] overflow-hidden md:h-[520px]">
                  <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="px-5 py-16">
          <div className="mx-auto max-w-7xl rounded-4xl bg-white p-8 shadow-premium md:p-12">
            <SectionHeader eyebrow="About Eposify" title="Helping Businesses Grow with Smarter Payments" text="We help UK businesses accept payments easily through advanced card machines, EPOS systems, online payment gateways, QR ordering systems, and business funding solutions." />
            <div className="grid gap-5 md:grid-cols-5">{['Transparent pricing', 'Fast onboarding', 'Dedicated support', 'Custom business solutions', 'Secure transactions'].map((item) => <div key={item} className="rounded-3xl bg-slate-50 p-5 text-center font-bold text-navy"><Check className="mx-auto mb-3 text-emerald" />{item}</div>)}</div>
          </div>
        </section>

        <section id="services" className="px-5 py-16">
          <SectionHeader eyebrow="Services" title="Complete merchant services for ambitious UK businesses" text="From restaurant card machine packages to salon payment systems and small business funding, every solution is built around your workflow." />
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map((service) => <AnimatedCard key={service.title} className="glass rounded-4xl p-7"><service.icon className="mb-6 h-10 w-10 text-electric" /><h3 className="text-2xl font-black text-navy">{service.title}</h3><ul className="mt-5 space-y-3 text-slate-600">{service.items.map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 flex-none text-emerald" />{item}</li>)}</ul></AnimatedCard>)}</div>
        </section>

        <section id="industries" className="px-5 py-16">
          <SectionHeader eyebrow="Industries" title="Built for everyday British businesses" text="We support restaurants, salons, barbershops, takeaways, retail stores, cafés, grocery stores and gyms." />
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {businessCategoryCards.map((card) => (
              <div key={card.name} className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-[0px_4px_12px_rgba(0,0,0,0.15)] transition duration-500 hover:scale-[1.02] hover:brightness-110">
                <Image src={card.image} alt={card.alt} fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold tracking-[0.06em] text-white">{card.name}</h3>
                  <p className="mt-2 text-sm font-medium text-white/90">{card.slogan}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="why-choose-us" className="py-16">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-white shadow-premium lg:grid-cols-2">
            <div className="px-6 py-12 md:px-14 lg:py-20">
              <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-orange-600">Why choose us</p>
              <h2 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-navy md:text-5xl">Various acquirers and selection of terminals</h2>
              <p className="mt-5 max-w-xl text-slate-600">Eposify helps UK businesses compare payment options, terminals and merchant services with clear guidance tailored to every business size.</p>
              <div className="mt-8 space-y-5">
                {whyChooseItems.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-ink text-orange-500"><item.icon size={22} /></div>
                    <div>
                      <h3 className="text-lg font-black text-ink">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <MiniStat value="500+" label="Businesses Supported" />
                <MiniStat value="99.9%" label="Uptime" />
              </div>
            </div>
            <div className="relative min-h-[420px] lg:min-h-full">
              <Image src="/PD07204_-_USEN_-_customer_facing_register.avif" alt="Business owner processing payment with a tablet" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section className="px-5 py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2.5rem] bg-[#f7efdf] p-6 shadow-premium md:p-12 lg:grid-cols-2">
            <div>
              <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-lime-600">Made for the floor</p>
              <h2 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-ink md:text-5xl">Built by people who&apos;ve <span className="underline decoration-lime-500 decoration-4 underline-offset-4">run shifts.</span></h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-700">We&apos;re the team behind Seamless POS — used by independent pubs, restaurants and cafés across the UK. We know how badly the wrong card provider hurts on a Friday night: bad tipping flows, surprise statements, terminals that can&apos;t talk to your kitchen. CardRate is the comparison we wished existed.</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 font-black text-ink transition hover:text-electric">Read our methodology <ArrowRight size={18} /></Link>
            </div>
            <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] md:min-h-[440px]">
              <Image src="/139.avif" alt="Restaurant team serving a fresh meal" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section id="funding" className="px-5 py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2.5rem] bg-navy p-8 md:p-12 lg:grid-cols-2">
            <div><p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-emerald">Business funding UK</p><h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">Flexible Business Funding for Growing Companies</h2><p className="mt-6 text-lg leading-8 text-slate-300">Access fast and flexible business funding solutions designed around your card sales performance. Whether you need stock, renovations, marketing, or expansion capital, we help businesses unlock growth opportunities.</p><div className="mt-7 flex flex-wrap gap-3"><span className="rounded-full bg-white/10 px-4 py-2 font-bold text-white">Fast approval</span><span className="rounded-full bg-white/10 px-4 py-2 font-bold text-white">£5K–£500K</span><span className="rounded-full bg-white/10 px-4 py-2 font-bold text-white">Growth chart review</span></div><Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald px-7 py-4 font-black text-emerald-950">Apply for Funding <ArrowRight size={18} /></Link></div>
            <FundingCalculator />
          </div>
        </section>

        <section className="px-5 py-16">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#05040a] px-6 py-16 text-center shadow-premium md:px-12">
            <div className="absolute left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-electric/20 blur-3xl" />
            <div className="relative">
              <h2 className="text-4xl font-black tracking-tight text-electric md:text-5xl">Trusted by the Top Brands Across Industries</h2>
              <div className="mt-10 grid gap-5 text-sm font-bold text-slate-400 md:grid-cols-7">
                {trustedCategories.map((category, index) => (
                  <div key={category} className={index === 0 ? 'text-electric' : ''}>{category}</div>
                ))}
              </div>
              <div className="mt-12 grid items-center gap-8 md:grid-cols-6">
                {trustedLogos.map((logo) => (
                  <div key={logo} className="font-serif text-2xl font-black tracking-wide text-white/80 opacity-70 transition hover:opacity-100 md:text-3xl">{logo}</div>
                ))}
              </div>
              <p className="mt-14 text-lg font-black text-white">+ Hundreds of Thousands More</p>
            </div>
          </div>
        </section>

        <section className="px-5 py-16"><SectionHeader eyebrow="Testimonials" title="Trusted by merchants and sales partners" /><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">{['The onboarding was quick and our new terminal improved table service immediately.', 'Eposify helped us compare card machines UK options and secure better rates.', 'The funding conversation was clear, fast and based around real card sales.'].map((text, i) => <div key={text} className="rounded-4xl bg-white p-7 shadow-premium"><Quote className="text-electric" /><p className="mt-5 text-slate-600">{text}</p><p className="mt-6 font-black text-navy">{['Restaurant Owner', 'Salon Director', 'Retail Merchant'][i]}</p></div>)}</div></section>

        <section className="px-5 py-16">
          <div className="mx-auto grid max-w-7xl items-center overflow-hidden rounded-[2.5rem] bg-[#dff8ff] shadow-premium lg:grid-cols-[0.85fr_1.15fr]">
            <div className="px-6 py-12 md:px-14 lg:py-20">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-electric">Support for queries</p>
              <h2 className="text-5xl font-black tracking-tight text-navy md:text-7xl">Need help?</h2>
              <p className="mt-6 max-w-md text-lg font-medium text-ink">Contact one of our representatives today for card machines, EPOS systems, merchant services or funding support.</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-rose-600 px-6 py-4 font-black text-white shadow-glow transition hover:-translate-y-1 hover:bg-rose-700">Get support <ArrowRight size={18} /></Link>
            </div>
            <div className="relative min-h-[320px] lg:min-h-[440px]">
              <Image src="/Helpline.png" alt="Red landline support phone" fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-contain object-right-bottom" />
            </div>
          </div>
        </section>

        <section className="px-5 py-16"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3"><div className="rounded-4xl bg-white p-7 shadow-premium"><Store className="text-electric" /><h3 className="mt-4 text-xl font-black text-navy">Merchant guide</h3><p className="mt-3 text-slate-600">How to choose the right POS systems for your sector.</p></div><div className="rounded-4xl bg-white p-7 shadow-premium"><BadgePoundSterling className="text-emerald" /><h3 className="mt-4 text-xl font-black text-navy">Funding insights</h3><p className="mt-3 text-slate-600">Using payment performance to support growth plans.</p></div><div className="rounded-4xl bg-white p-7 shadow-premium"><BarChart3 className="text-electric" /><h3 className="mt-4 text-xl font-black text-navy">ROI calculator</h3><p className="mt-3 text-slate-600">Estimate time saved from integrated payment solutions.</p></div></div></section>
      </main>
    </PageShell>
  );
}
