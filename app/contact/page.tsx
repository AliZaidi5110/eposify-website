import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { PageShell, SectionHeader } from '@/components/SiteShell';
import { email, phone, telPhone } from '@/lib/brand';

export default function Contact() {
  return (
    <PageShell>
      <main>
        <section className="px-5 py-20 md:py-28"><div className="mx-auto max-w-4xl text-center"><p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-electric">Contact Eposify</p><h1 className="text-5xl font-black tracking-tight text-navy md:text-7xl">Let’s build your smarter payment setup</h1><p className="mx-auto mt-6 max-w-2xl text-xl text-slate-600">Request card machines UK support, EPOS systems advice, business funding UK guidance or merchant services pricing.</p></div></section>

        <section className="px-5 pb-20"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr]"><div className="rounded-4xl bg-white p-7 shadow-premium"><h2 className="text-2xl font-black text-navy">Contact form</h2><form className="mt-6 grid gap-4 md:grid-cols-2"><input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Full Name" /><input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Email" type="email" /><input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Phone" /><select className="rounded-2xl border border-slate-200 px-4 py-3"><option>Card Machines</option><option>EPOS Systems</option><option>Business Funding</option><option>Sales Partner</option></select><textarea className="min-h-36 rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2" placeholder="Tell us about your business" /><button className="rounded-full bg-navy px-7 py-4 font-black text-white md:col-span-2">Send Enquiry</button></form></div><div id="callback" className="space-y-5"><a href="https://wa.me/447894946374" className="flex items-center gap-4 rounded-4xl bg-emerald p-6 font-black text-emerald-950 shadow-glow"><MessageCircle /> WhatsApp {phone}</a><a href={`tel:${telPhone}`} className="flex items-center gap-4 rounded-4xl bg-white p-6 font-black text-navy shadow-premium"><Phone className="text-electric" /> Request a call</a><a href={`mailto:${email}`} className="flex items-center gap-4 rounded-4xl bg-white p-6 font-black text-navy shadow-premium"><Mail className="text-electric" /> {email}</a><div className="rounded-4xl bg-white p-6 shadow-premium"><Clock className="mb-3 text-electric" /><h3 className="font-black text-navy">Business hours</h3><p className="mt-2 text-slate-600">Monday to Friday: 9:00–18:00<br />Saturday: 10:00–14:00<br />Sunday: Closed</p></div></div></div></section>

        <section className="px-5 pb-20"><SectionHeader eyebrow="Find us" title="UK-based assistance" text="Speak directly with Alicia Baugh at Eposify about payment solutions, POS systems, salon payment systems, restaurant card machine options and business funding." /><div className="mx-auto max-w-7xl overflow-hidden rounded-4xl bg-white shadow-premium"><div className="flex items-center gap-3 p-6 font-black text-navy"><MapPin className="text-electric" /> 64 Dundridge Lane Bristol BS5 8SH</div><iframe title="Google Maps UK" src="https://www.google.com/maps?q=64+Dundridge+Lane+Bristol+BS5+8SH&output=embed" className="h-96 w-full border-0" loading="lazy" /></div></section>
      </main>
    </PageShell>
  );
}
