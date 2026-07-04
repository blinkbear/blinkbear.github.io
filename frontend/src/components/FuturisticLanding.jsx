import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, ShieldHalf, Activity, Lock, ArrowUpRight, Sparkle } from "lucide-react";
import { AppleLogo } from "./BlinkBearLanding";
import DesignSwitcher from "./DesignSwitcher";

const APP_STORE_URL = "https://apps.apple.com/de/app/blinkbear/id6756180445?l=en-GB";
const CONTACT_EMAIL = "blinkbear.app@gmail.com";
const APP_LOGO = "https://customer-assets.emergentagent.com/job_vision-breaks/artifacts/2fzibdh5_AppIcon.png";
const BEAR = {
  balloon: "https://customer-assets.emergentagent.com/job_a2513eb8-82ec-4f68-a26a-c638e6f83911/artifacts/oko5lzm6_Balloon.png",
  dj: "https://customer-assets.emergentagent.com/job_a2513eb8-82ec-4f68-a26a-c638e6f83911/artifacts/o576e4zs_Dj.png",
  pilot: "https://customer-assets.emergentagent.com/job_a2513eb8-82ec-4f68-a26a-c638e6f83911/artifacts/luhknq1p_Pilot.png",
};

const fade = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const gradText = "bg-gradient-to-r from-[#5EEAD4] via-[#7DD3FC] to-[#C4B5FD] bg-clip-text text-transparent";

const StoreBtn = ({ testid, glow = true }) => (
  <a
    href={APP_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={testid}
    className={`group relative inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10 ${
      glow ? "shadow-[0_0_30px_-8px_rgba(94,234,212,0.6)]" : ""
    }`}
  >
    <AppleLogo className="h-6 w-6" />
    <span className="flex flex-col items-start leading-none">
      <span className="text-[10px] font-normal text-white/60">Download on the</span>
      <span className="text-lg">App Store</span>
    </span>
  </a>
);

const Nav = () => (
  <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08080C]/70 backdrop-blur-xl">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
      <a href="#top" className="flex items-center gap-3" data-testid="fut-nav-logo">
        <img src={APP_LOGO} alt="BlinkBear" className="h-9 w-9 rounded-xl object-cover ring-1 ring-white/20" />
        <span className="font-sora text-xl font-bold tracking-tight">BlinkBear</span>
      </a>
      <nav className="hidden items-center gap-9 md:flex">
        {["System", "Protocol", "Access"].map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-medium text-white/55 transition-colors hover:text-white">
            {l}
          </a>
        ))}
      </nav>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="fut-nav-cta"
        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#08080C] transition-all hover:shadow-[0_0_24px_-4px_rgba(255,255,255,0.6)]"
      >
        Get App <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section id="top" className="relative overflow-hidden">
    <div className="futuristic-grid absolute inset-0" />
    <div className="absolute -top-40 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#5EEAD4]/20 blur-[120px] animate-pulse-glow" />
    <div className="absolute top-20 right-10 h-[300px] w-[300px] rounded-full bg-[#A78BFA]/20 blur-[120px] animate-pulse-glow" />

    <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 text-center lg:px-8 lg:pt-32">
      <motion.div initial="hidden" animate="show" variants={fade}>
        <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur-md">
          <Sparkle className="h-3.5 w-3.5 text-[#5EEAD4]" /> Powered by the 20-20-20 protocol
        </div>
        <h1 className="mx-auto max-w-4xl font-sora text-5xl font-extrabold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
          Your eyes deserve
          <br />
          a <span className={gradText}>smarter break.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/60">
          BlinkBear runs quietly on-device, tracking your screen time and triggering a 20-second
          reset every 20 minutes. Protect your vision. Break the scroll. Zero data collected.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <StoreBtn testid="fut-hero-cta" />
          <span className="text-sm text-white/45">Free · On-device · iOS</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-16 w-fit"
      >
        <div className="absolute inset-0 m-auto h-56 w-56 rounded-full bg-[#5EEAD4]/25 blur-3xl" />
        <div className="relative rounded-[2rem] border border-white/15 bg-white/5 p-6 backdrop-blur-md shadow-[0_0_60px_-15px_rgba(94,234,212,0.5)]">
          <img src={BEAR.balloon} alt="BlinkBear mascot" className="animate-float w-60 sm:w-72" />
        </div>
      </motion.div>
    </div>

    {/* metric bar */}
    <div className="relative border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-white/10 px-6 lg:px-8">
        {[["20 min", "monitored"], ["20 sec", "reset window"], ["0", "data collected"]].map(([b, s], i) => (
          <div key={i} className="py-8 text-center">
            <div className={`font-sora text-3xl font-extrabold sm:text-4xl ${gradText}`}>{b}</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-white/40">{s}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Marquee = () => {
  const items = ["20 MINUTES", "20 SECONDS", "20 FEET", "ON-DEVICE", "PRIVACY-FIRST", "SCIENCE-BACKED"];
  const loop = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-b border-white/10 py-5">
      <div className="animate-marquee-slow flex w-max items-center gap-8 whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-8 font-sora text-lg font-semibold text-white/25">
            {t} <span className="text-[#5EEAD4]">/</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const cards = [
  { icon: Eye, t: "Adaptive monitoring", d: "Select apps or entire categories. BlinkBear tracks 20-minute sessions automatically in the background.", span: "md:col-span-3", img: BEAR.dj },
  { icon: ShieldHalf, t: "Soft app shields", d: "Break time gently blocks distracting apps with animated bear screens, sound & haptics.", span: "md:col-span-3" },
  { icon: Activity, t: "Streak engine", d: "Current streak, longest streak, total breaks and milestone rewards — motivation, quantified.", span: "md:col-span-2" },
  { icon: Lock, t: "Zero-trust privacy", d: "No account. No servers. No analytics. Everything lives in your device's secure sandbox.", span: "md:col-span-4" },
];

const Features = () => (
  <section id="system" className="mx-auto max-w-6xl px-6 py-28 lg:px-8">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="mb-16 max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5EEAD4]">System</p>
      <h2 className="mt-4 font-sora text-4xl font-extrabold tracking-tight sm:text-5xl">
        Built to guard your eyes, invisibly.
      </h2>
    </motion.div>

    <div className="grid gap-5 md:grid-cols-6">
      {cards.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#5EEAD4]/40 hover:bg-white/[0.05] ${c.span}`}
        >
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#5EEAD4]/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
          <div className="relative flex items-start justify-between">
            <div className="flex-1">
              <div className="mb-5 inline-flex rounded-xl border border-white/15 bg-white/5 p-3">
                <c.icon className="h-5 w-5 text-[#5EEAD4]" strokeWidth={1.8} />
              </div>
              <h3 className="font-sora text-xl font-bold">{c.t}</h3>
              <p className="mt-2 max-w-md leading-relaxed text-white/55">{c.d}</p>
            </div>
            {c.img && <img src={c.img} alt="BlinkBear" className="animate-float-slow ml-4 hidden w-28 sm:block" />}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const steps = [
  ["Choose apps", "Instagram, TikTok, games — your usual time sinks."],
  ["Activate", "One tap starts on-device monitoring."],
  ["Use normally", "No friction. BlinkBear watches quietly."],
  ["Reset trigger", "At 20 minutes, a 20-second shield appears."],
  ["Look 20 ft away", "Relax fatigued ciliary eye muscles."],
  ["Streak +1", "Return refreshed. Consistency compounds."],
];

const Protocol = () => (
  <section id="protocol" className="border-y border-white/10 bg-white/[0.015]">
    <div className="mx-auto max-w-6xl px-6 py-28 lg:px-8">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="mb-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5EEAD4]">Protocol</p>
        <h2 className="mt-4 font-sora text-4xl font-extrabold tracking-tight sm:text-5xl">The 20-20-20 loop</h2>
      </motion.div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map(([t, d], i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="font-sora text-sm font-bold text-[#5EEAD4]">STEP 0{i + 1}</div>
            <h3 className="mt-3 font-sora text-lg font-bold">{t}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-white/50">{d}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="access" className="mx-auto max-w-5xl px-6 py-28 lg:px-8">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="mb-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5EEAD4]">Access</p>
      <h2 className="mt-4 font-sora text-4xl font-extrabold tracking-tight sm:text-5xl">Free core. Premium polish.</h2>
    </motion.div>
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-sm">
        <h3 className="font-sora text-2xl font-bold">Free</h3>
        <p className="mt-1 text-white/50">All core features included.</p>
        <ul className="mt-8 space-y-4 text-white/70">
          {["20-20-20 break enforcement", "App monitoring & blocking", "Streak tracking", "Basic bear animations"].map((f) => (
            <li key={f} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-white/40" /> {f}
            </li>
          ))}
        </ul>
        <div className="mt-10"><StoreBtn testid="fut-price-free" glow={false} /></div>
      </div>
      <div className="relative overflow-hidden rounded-3xl border border-[#5EEAD4]/30 bg-gradient-to-b from-[#5EEAD4]/10 to-transparent p-10 backdrop-blur-sm">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#A78BFA]/20 blur-2xl" />
        <div className="relative flex items-center justify-between">
          <h3 className="font-sora text-2xl font-bold">Premium</h3>
          <span className="rounded-full bg-[#5EEAD4] px-3 py-1 text-xs font-bold text-[#08080C]">Full unlock</span>
        </div>
        <p className="relative mt-1 text-white/50">Complete personalization.</p>
        <ul className="relative mt-8 space-y-4 text-white/70">
          {["Everything in Free", "10+ exclusive bear themes", "Custom shield colors", "Adjustable sound & vibration"].map((f) => (
            <li key={f} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5EEAD4]" /> {f}
            </li>
          ))}
        </ul>
        <div className="relative mt-10"><StoreBtn testid="fut-price-premium" /></div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="relative overflow-hidden border-t border-white/10">
    <div className="absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-[#5EEAD4]/15 blur-[120px]" />
    <div className="relative mx-auto max-w-4xl px-6 py-28 text-center lg:px-8">
      <img src={BEAR.pilot} alt="BlinkBear" className="animate-float mx-auto w-44" />
      <h2 className="mx-auto mt-8 max-w-2xl font-sora text-4xl font-extrabold tracking-tight sm:text-6xl">
        Reclaim your focus.
        <br />
        <span className={gradText}>Protect your vision.</span>
      </h2>
      <div className="mt-10 flex justify-center">
        <StoreBtn testid="fut-final-cta" />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/10 bg-[#08080C]">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between lg:px-8">
      <div className="flex items-center gap-3">
        <img src={APP_LOGO} alt="BlinkBear" className="h-9 w-9 rounded-xl object-cover ring-1 ring-white/20" />
        <span className="font-sora text-lg font-bold tracking-tight">BlinkBear</span>
      </div>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-white/50">
        <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white" data-testid="fut-footer-email">{CONTACT_EMAIL}</a>
        <Link to="/privacy" className="hover:text-white" data-testid="fut-footer-privacy">Privacy</Link>
        <Link to="/impressum" className="hover:text-white" data-testid="fut-footer-impressum">Impressum</Link>
        <span className="text-white/30">© {new Date().getFullYear()}</span>
      </div>
    </div>
  </footer>
);

export default function FuturisticLanding() {
  return (
    <div className="min-h-screen bg-[#08080C] font-manrope text-white antialiased">
      <Nav />
      <Hero />
      <Marquee />
      <Features />
      <Protocol />
      <Pricing />
      <CTA />
      <Footer />
      <DesignSwitcher />
    </div>
  );
}
