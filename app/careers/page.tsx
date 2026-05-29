import Link from 'next/link';
import { Banknote, BriefcaseBusiness, Check, GraduationCap, Handshake, Laptop, MapPin, Quote, Rocket, Users } from 'lucide-react';
import { AnimatedCard, PageShell, SectionHeader } from '@/components/SiteShell';

const benefits = [
  ['High commission structure', Banknote],
  ['Flexible working', Laptop],
  ['Remote opportunities', MapPin],
  ['Training & support', GraduationCap],
  ['Weekly payouts', Rocket],
  ['Growth opportunities', Users],
];
const roles = ['Freelance Sales Agent', 'Self-Employed Business Consultant', 'Merchant Services Advisor', 'Field Sales Representative', 'Referral Partner'];

export default function Careers() {
  return (
    <PageShell>
      <main>
        <section className="px-5 py-20 md:py-28">
          <div className="mx-auto max-w-5xl text-center"><p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-electric">Careers at Eposify</p><h1 className="text-5xl font-black tracking-tight text-navy md:text-7xl">Build Your Career in <span className="gradient-text">Sales & Business Growth</span></h1><p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">Join our growing network of self-employed sales agents and freelancers across the UK.</p><div className="mt-8"><Link href="#apply" className="rounded-full bg-navy px-8 py-4 font-black text-white shadow-premium">Apply Now</Link></div></div>
        </section>

        <section className="px-5 py-16"><SectionHeader eyebrow="Why join us" title="A modern merchant services opportunity" text="Represent payment solutions, EPOS systems, card machines and business funding products for UK businesses that need practical growth support." /><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">{benefits.map(([label, Icon]) => <AnimatedCard key={label as string} className="glass rounded-4xl p-7"><Icon className="mb-5 h-9 w-9 text-electric" /><h3 className="text-xl font-black text-navy">{label as string}</h3><p className="mt-3 text-slate-600">Work with clear training, flexible routes to market and support from a growth-focused team.</p></AnimatedCard>)}</div></section>

        <section className="px-5 py-16"><SectionHeader eyebrow="Referral Partner Programme" title="Earn rewards for successful recommendations" /><div className="mx-auto max-w-4xl rounded-4xl bg-white p-8 shadow-premium md:p-12"><div className="space-y-6"><div className="flex items-start gap-4"><Banknote className="mt-1 h-8 w-8 flex-none text-emerald" /><div><h3 className="text-2xl font-black text-navy">Earn a £100 referral fee for every successful recommendation</h3><p className="mt-2 text-slate-600">Your referral payment will be made once the referred merchant has generated £1,000 in transaction processing fees.</p></div></div><div className="flex items-start gap-4"><Rocket className="mt-1 h-8 w-8 flex-none text-electric" /><div><h3 className="text-2xl font-black text-navy">Start referring businesses today</h3><p className="mt-2 text-slate-600">Get rewarded for every successful introduction to Eposify payment solutions.</p></div></div></div><div className="mt-8 text-center"><Link href="#apply" className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 font-black text-white shadow-premium transition hover:-translate-y-1">Start Referring</Link></div></div></section>

        <section className="px-5 py-16"><div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] bg-navy p-8 md:p-12 lg:grid-cols-2"><div><p className="text-sm font-black uppercase tracking-[0.25em] text-emerald">Commission structure</p><h2 className="mt-4 text-4xl font-black text-white">Earn from merchant introductions and growth products</h2><p className="mt-5 text-slate-300">Sales partners can build income through card machine placements, merchant services referrals, EPOS opportunities, business funding introductions and website or ordering solution leads.</p><div className="mt-6 space-y-3">{['High earning potential', 'Weekly payout opportunities', 'Training scripts and sales support', 'Referral partner routes'].map((x) => <p key={x} className="flex gap-3 font-bold text-white"><Check className="text-emerald" />{x}</p>)}</div></div><div id="apply" className="rounded-4xl bg-white p-7"><h3 className="text-2xl font-black text-navy">Application Form</h3><form className="mt-6 space-y-4"><input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Full Name" /><input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Email" type="email" /><input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Phone" /><button className="w-full rounded-full bg-gradient-to-r from-electric to-emerald px-6 py-4 font-black text-white">Submit Application</button></form></div></div></section>

        <section className="px-5 py-16"><SectionHeader eyebrow="Testimonials" title="What partners and merchants say" /><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">{['The training helped me confidently speak to restaurant owners from week one.', 'Flexible hours and weekly payout potential make this a strong freelance opportunity.', 'The product range is easy to explain because merchants need payments, EPOS and funding.'].map((text, i) => <div key={text} className="rounded-4xl bg-white p-7 shadow-premium"><Quote className="text-electric" /><p className="mt-5 text-slate-600">{text}</p><p className="mt-6 font-black text-navy">{['Sales Agent', 'Referral Partner', 'Merchant Advisor'][i]}</p></div>)}</div></section>

        <section className="px-5 pb-20"><div className="mx-auto max-w-5xl rounded-4xl bg-gradient-to-r from-electric to-emerald p-8 text-center text-white shadow-glow"><Handshake className="mx-auto mb-4" /><h2 className="text-3xl font-black">Ready to become a sales partner?</h2><p className="mt-3">Apply today and help UK businesses access smarter payment solutions.</p></div></section>
      </main>
    </PageShell>
  );
}
