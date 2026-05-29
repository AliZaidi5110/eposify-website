'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calculator, CheckCircle2, Cookie, Menu, MessageCircle, Phone, ShieldCheck, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { email, phone, slogan, telPhone, whatsappPhone } from '@/lib/brand';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className={`flex h-11 w-11 items-center justify-center rounded-2xl text-lg font-black shadow-glow ${light ? 'bg-white text-navy' : 'bg-gradient-to-br from-navy via-electric to-aqua text-white'}`}>E</div>
      <div>
        <div className={`text-2xl font-black tracking-tight ${light ? 'text-white' : 'text-navy'}`}>EPOS<span className={light ? 'text-emerald' : 'text-aqua'}>ify</span></div>
        <div className={`text-[10px] font-bold uppercase tracking-[0.18em] ${light ? 'text-slate-300' : 'text-slate-500'}`}>{slogan}</div>
      </div>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const pathname = usePathname();
  const links = [
    ['About', '/#about'],
    ['Services', '/#services'],
    ['Industries', '/#industries'],
    ['Funding', '/#funding'],
    ['Teya', '/teya'],
    ['Square', '/square'],
    ['Shift4', '/shift4'],
    ['Careers', '/careers'],
    ['Contact', '/contact'],
  ];
  useEffect(() => {
    const sections = ['about', 'services', 'industries', 'funding'];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] },
    );
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => {
            const id = href.startsWith('/#') ? href.slice(2) : '';
            const isSectionActive = id && active === id;
            const isPageActive = !href.startsWith('/#') && pathname === href;
            const isActive = isSectionActive || isPageActive;
            return <Link key={label} href={href} className={`relative rounded-full px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-electric/20 text-electric border-b-2 border-electric' : 'text-slate-700 hover:text-electric'}`}>{label}</Link>;
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${telPhone}`} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-navy hover:border-electric">Call us</a>
          <Link href="/contact" className="rounded-full bg-navy px-5 py-2.5 text-sm font-bold text-white shadow-premium transition hover:-translate-y-0.5">Get Started</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden rounded-xl border border-slate-200 p-2">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map(([label, href]) => {
              const isPageActive = !href.startsWith('/#') && pathname === href;
              return <Link key={label} href={href} onClick={() => setOpen(false)} className={`rounded-xl px-3 py-2 font-semibold transition ${isPageActive ? 'bg-electric/20 text-electric' : 'text-slate-700 hover:bg-slate-50'}`}>{label}</Link>;
            })}
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2"><Logo light /><p className="mt-5 max-w-lg text-slate-300">Premium payment solutions, merchant services, EPOS systems and flexible business funding UK support for modern businesses.</p></div>
        <div><h3 className="font-bold">Contact</h3><p className="mt-4 text-slate-300">{phone}</p><p className="text-slate-300">{email}</p><p className="mt-2 text-slate-400">UK-based assistance</p></div>
        <div><h3 className="font-bold">Compliance</h3><p className="mt-4 text-slate-300">GDPR compliant enquiries. Funding subject to eligibility and card sales performance. Terms may apply.</p></div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-slate-400">© 2026 Eposify UK. All rights reserved.</div>
    </footer>
  );
}

export function ChatAndCookie() {
  const [cookie, setCookie] = useState(true);
  return (
    <>
      <a href={`https://wa.me/${whatsappPhone}`} className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-emerald px-5 py-3 font-bold text-white shadow-glow"><MessageCircle size={19} /> WhatsApp</a>
      {cookie && <div className="fixed bottom-5 left-5 z-50 max-w-sm rounded-3xl border border-slate-200 bg-white p-4 shadow-premium"><div className="flex gap-3"><Cookie className="text-electric" /><div><p className="font-bold text-navy">Cookie notice</p><p className="mt-1 text-sm text-slate-600">We use essential cookies to improve your experience and handle lead enquiries securely.</p><button onClick={() => setCookie(false)} className="mt-3 rounded-full bg-navy px-4 py-2 text-sm font-bold text-white">Accept</button></div></div></div>}
    </>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><Navbar />{children}<Footer /><ChatAndCookie /></>;
}

export function SectionHeader({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return <div className="mx-auto mb-12 max-w-3xl text-center"><p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-electric">{eyebrow}</p><h2 className={`text-3xl font-black tracking-tight md:text-5xl ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>{text && <p className={`mt-5 text-lg ${light ? 'text-slate-300' : 'text-slate-600'}`}>{text}</p>}</div>;
}

export function AnimatedCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} whileHover={{ y: -6 }} className={className}>{children}</motion.div>;
}

export function TrustBadge({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm"><CheckCircle2 size={16} className="text-emerald" />{children}</div>;
}

export function MiniStat({ value, label }: { value: string; label: string }) {
  return <div className="rounded-3xl bg-white p-6 text-center shadow-premium"><div className="text-3xl font-black gradient-text">{value}</div><div className="mt-2 text-sm font-bold text-slate-600">{label}</div></div>;
}

export function FundingCalculator() {
  const [sales, setSales] = useState(25000);
  const estimate = Math.min(500000, Math.max(5000, sales * 2.4));
  return <div className="dark-glass rounded-4xl p-6"><div className="mb-5 flex items-center gap-3 text-white"><Calculator className="text-emerald" /><h3 className="text-xl font-black">Funding calculator</h3></div><label className="text-sm font-bold text-slate-300">Monthly card sales</label><input type="range" min="3000" max="210000" value={sales} onChange={(e) => setSales(Number(e.target.value))} className="mt-4 w-full" /><div className="mt-6 grid gap-4 sm:grid-cols-2"><div className="rounded-3xl bg-white/10 p-4"><p className="text-slate-300">Card sales</p><p className="text-2xl font-black text-white">£{sales.toLocaleString()}</p></div><div className="rounded-3xl bg-emerald p-4"><p className="text-emerald-950">Estimated access</p><p className="text-2xl font-black text-emerald-950">£{Math.round(estimate).toLocaleString()}</p></div></div><p className="mt-4 text-xs text-slate-400">Indicative only. Funding is subject to eligibility, lender approval and card sales performance.</p></div>;
}

export function SecurityStrip() {
  return <div className="flex flex-wrap justify-center gap-3"><TrustBadge>No Long Contracts</TrustBadge><TrustBadge>Fast Approval</TrustBadge><TrustBadge>UK Support</TrustBadge><TrustBadge>Next-Day Funding</TrustBadge><TrustBadge>Secure Payments</TrustBadge><div className="flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-bold text-white"><ShieldCheck size={16} />PCI-aware guidance</div></div>;
}
