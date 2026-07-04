import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldOff, Flame, Clock, Lock, Sparkles, Star, Check,
  Smartphone, Menu, Heart,
} from "lucide-react";
import { AppleLogo } from "./BlinkBearLanding";
import DesignSwitcher from "./DesignSwitcher";

const APP_STORE_URL = "https://apps.apple.com/de/app/blinkbear/id6756180445?l=en-GB";
const CONTACT_EMAIL = "blinkbear.app@gmail.com";
const APP_LOGO = "https://customer-assets.emergentagent.com/job_vision-breaks/artifacts/2fzibdh5_AppIcon.png";

const BEAR = {
  balloon: "https://customer-assets.emergentagent.com/job_a2513eb8-82ec-4f68-a26a-c638e6f83911/artifacts/oko5lzm6_Balloon.png",
  dj: "https://customer-assets.emergentagent.com/job_a2513eb8-82ec-4f68-a26a-c638e6f83911/artifacts/o576e4zs_Dj.png",
  kayak: "https://customer-assets.emergentagent.com/job_a2513eb8-82ec-4f68-a26a-c638e6f83911/artifacts/evcbabeh_Kayak.png",
  pilot: "https://customer-assets.emergentagent.com/job_a2513eb8-82ec-4f68-a26a-c638e6f83911/artifacts/luhknq1p_Pilot.png",
  flower: "https://customer-assets.emergentagent.com/job_a2513eb8-82ec-4f68-a26a-c638e6f83911/artifacts/fw1itlmj_Flower.png",
};

const ACCENT = "#C2703D"; // muted terracotta
const INK = "#2A2723";
const BG = "#FAF7F2";
const BORDER = "rgba(42,39,35,0.10)";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const card = "rounded-3xl border bg-white shadow-[0_4px_24px_rgba(42,39,35,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(42,39,35,0.08)]";

/* ---------- shared bits ---------- */

const AppStoreButton = ({ testid, variant = "dark" }) => (
  <a
    href={APP_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={testid}
    className={`inline-flex items-center gap-3 rounded-2xl px-6 py-3.5 font-fredoka font-semibold transition-all duration-300 ${
      variant === "dark"
        ? "text-white hover:opacity-90"
        : "border bg-white hover:border-black/30"
    }`}
    style={variant === "dark" ? { backgroundColor: INK } : { borderColor: BORDER, color: INK }}
  >
    <AppleLogo className="h-6 w-6" />
    <span className="flex flex-col items-start leading-none">
      <span className="text-[10px] font-dm-sans font-normal opacity-70">Download on the</span>
      <span className="text-lg">App Store</span>
    </span>
  </a>
);

const Tag = ({ children }) => (
  <span
    className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-dm-sans font-semibold"
    style={{ borderColor: BORDER, color: ACCENT, backgroundColor: "rgba(194,112,61,0.06)" }}
  >
    {children}
  </span>
);

const IconBadge = ({ icon: Icon }) => (
  <div
    className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border"
    style={{ borderColor: BORDER, backgroundColor: "rgba(194,112,61,0.08)" }}
  >
    <Icon className="h-5 w-5" strokeWidth={2} style={{ color: ACCENT }} />
  </div>
);

/* ---------- Nav ---------- */

const Nav = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how" },
    { label: "The Science", href: "#science" },
    { label: "Pricing", href: "#pricing" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-xl" style={{ borderColor: BORDER, backgroundColor: "rgba(250,247,242,0.85)" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" data-testid="soft-nav-logo" className="flex items-center gap-2.5">
          <img src={APP_LOGO} alt="BlinkBear" className="h-10 w-10 rounded-2xl object-cover" style={{ boxShadow: "0 2px 10px rgba(42,39,35,0.12)" }} />
          <span className="font-fredoka text-2xl font-semibold tracking-tight">BlinkBear</span>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-dm-sans text-[15px] font-medium text-[#2A2723]/60 transition-colors hover:text-[#2A2723]">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="soft-nav-cta"
            className="hidden rounded-full px-6 py-2.5 font-fredoka font-semibold text-white transition-all hover:opacity-90 sm:block"
            style={{ backgroundColor: INK }}
          >
            Get App
          </a>
          <button
            data-testid="soft-nav-toggle"
            onClick={() => setOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center rounded-xl border md:hidden"
            style={{ borderColor: BORDER }}
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t px-6 py-4 md:hidden" style={{ borderColor: BORDER }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 font-fredoka text-lg font-medium">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

/* ---------- Hero ---------- */

const Hero = () => (
  <section id="top" className="mx-auto max-w-6xl px-6 pt-16 pb-8 lg:px-8 lg:pt-24">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <motion.div initial="hidden" animate="show" variants={fadeUp}>
        <Tag><Sparkles className="h-4 w-4" strokeWidth={2} /> Backed by the 20-20-20 rule</Tag>
        <h1 className="mt-6 font-fredoka text-5xl font-semibold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">
          Your eyes
          <br />
          deserve <span style={{ color: ACCENT }}>better.</span>
        </h1>
        <p className="mt-6 max-w-lg font-dm-sans text-lg leading-relaxed text-[#2A2723]/65">
          BlinkBear helps you protect your vision and break screen addiction. Every 20 minutes, take
          a 20-second break to look 20 feet away. Simple. Effective. Life-changing.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <AppStoreButton testid="soft-hero-cta" />
          <div className="flex items-center gap-1.5 font-dm-sans">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4" style={{ color: ACCENT }} fill={ACCENT} strokeWidth={1} />
              ))}
            </div>
            <span className="text-sm text-[#2A2723]/55">Loved by thousands</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex justify-center"
      >
        <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-gradient-to-b from-[#F2E4D6] to-transparent blur-2xl" />
        <div className={`relative ${card} p-6`} style={{ borderColor: BORDER }}>
          <img src={BEAR.balloon} alt="BlinkBear mascot floating in a hot air balloon" className="animate-float w-64 sm:w-80" />
        </div>
        <div className="absolute -right-2 top-8 rotate-3 rounded-2xl border bg-white px-4 py-2 font-fredoka font-semibold shadow-[0_6px_20px_rgba(42,39,35,0.08)]" style={{ borderColor: BORDER }}>
          20 sec 👀
        </div>
        <div className="absolute -left-3 bottom-10 -rotate-3 rounded-2xl border bg-white px-4 py-2 font-fredoka font-semibold shadow-[0_6px_20px_rgba(42,39,35,0.08)]" style={{ borderColor: BORDER }}>
          🔥 12 day streak
        </div>
      </motion.div>
    </div>
  </section>
);

/* ---------- Marquee ---------- */

const Marquee = () => {
  const items = ["20 MINUTES", "20 SECONDS", "20 FEET", "SCIENTIFICALLY PROVEN"];
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="my-14 overflow-hidden border-y py-4" style={{ borderColor: BORDER, backgroundColor: "#F3EDE4" }}>
      <div className="animate-marquee flex w-max items-center gap-6 whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-6 font-fredoka text-xl font-medium text-[#2A2723]/45">
            {t} <Sparkles className="h-4 w-4" strokeWidth={2} style={{ color: ACCENT }} />
          </span>
        ))}
      </div>
    </div>
  );
};

/* ---------- Features bento ---------- */

const FeatureCard = ({ children, className = "" }) => (
  <motion.div variants={fadeUp} className={`${card} p-8 ${className}`} style={{ borderColor: BORDER }}>
    {children}
  </motion.div>
);

const Features = () => (
  <section id="features" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="mb-14 max-w-2xl">
      <Tag><Heart className="h-4 w-4" strokeWidth={2} /> Features you'll love</Tag>
      <h2 className="mt-5 font-fredoka text-4xl font-semibold tracking-tight sm:text-5xl">
        A cuddly bear that guards your eyes
      </h2>
    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ staggerChildren: 0.12 }}
      className="grid grid-cols-1 gap-6 md:grid-cols-12"
    >
      <FeatureCard className="md:col-span-8">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div className="flex-1">
            <IconBadge icon={Smartphone} />
            <h3 className="font-fredoka text-2xl font-semibold">Smart Monitoring</h3>
            <p className="mt-2 font-dm-sans text-[#2A2723]/65">
              Pick your most-used apps — social media, games, work tools — and BlinkBear automatically
              tracks your 20-minute screen sessions. Choose individual apps or whole categories.
            </p>
          </div>
          <img src={BEAR.dj} alt="BlinkBear DJ mascot" className="animate-float-slow w-32 sm:w-40" />
        </div>
      </FeatureCard>

      <FeatureCard className="md:col-span-4">
        <IconBadge icon={ShieldOff} />
        <h3 className="font-fredoka text-2xl font-semibold">Gentle Break Reminders</h3>
        <p className="mt-2 font-dm-sans text-[#2A2723]/65">
          Adorable bear animations gently block doomscrolling. Optional sound & haptics, plus 16+ bear
          companion themes.
        </p>
      </FeatureCard>

      <FeatureCard className="md:col-span-4">
        <IconBadge icon={Lock} />
        <h3 className="font-fredoka text-2xl font-semibold">Privacy First</h3>
        <p className="mt-2 font-dm-sans text-[#2A2723]/65">
          All data stays on your device. No account, no analytics, no tracking — just a Screen Time
          permission.
        </p>
      </FeatureCard>

      <FeatureCard className="md:col-span-8">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div className="flex-1">
            <IconBadge icon={Flame} />
            <h3 className="font-fredoka text-2xl font-semibold">Progress Tracking</h3>
            <p className="mt-2 font-dm-sans text-[#2A2723]/65">
              Watch your consistency grow. Current streak, longest streak, total breaks completed, and
              joyful celebrations for every milestone.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["🔥 Current streak", "🏆 Longest streak", "✅ Total breaks"].map((t) => (
                <span key={t} className="rounded-full border px-3 py-1 text-sm font-dm-sans font-medium text-[#2A2723]/70" style={{ borderColor: BORDER }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <img src={BEAR.kayak} alt="BlinkBear kayaking mascot" className="animate-float-slow w-32 sm:w-40" />
        </div>
      </FeatureCard>
    </motion.div>
  </section>
);

/* ---------- How it works ---------- */

const steps = [
  ["Choose your apps", "Pick the apps you lose time in — Instagram, TikTok, games."],
  ["Tap Start Monitoring", "One tap and BlinkBear quietly starts watching the clock."],
  ["Use apps normally", "Go about your day. No nagging, no friction."],
  ["20 minutes → gentle block", "BlinkBear steps in for a 20-second breather."],
  ["Look 20 feet away", "Rest your eye muscles on something distant."],
  ["Return & build your streak", "Come back refreshed and watch your streak grow."],
];

const HowItWorks = () => (
  <section id="how" className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-14 text-center">
      <Tag><Clock className="h-4 w-4" strokeWidth={2} /> How it works</Tag>
      <h2 className="mt-5 font-fredoka text-4xl font-semibold tracking-tight sm:text-5xl">
        Six tiny steps to happier eyes
      </h2>
    </motion.div>
    <div className="relative">
      <div className="absolute left-[23px] top-4 bottom-4 hidden w-px sm:block" style={{ backgroundColor: BORDER }} />
      <div className="space-y-5">
        {steps.map(([t, d], i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative flex items-start gap-5"
          >
            <div className="z-10 grid h-12 w-12 flex-shrink-0 place-items-center rounded-full border bg-white font-fredoka text-lg font-semibold" style={{ borderColor: BORDER, color: ACCENT }}>
              {i + 1}
            </div>
            <div className={`flex-1 ${card} p-5`} style={{ borderColor: BORDER }}>
              <h3 className="font-fredoka text-xl font-semibold">{t}</h3>
              <p className="mt-1 font-dm-sans text-[#2A2723]/65">{d}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Science ---------- */

const Science = () => (
  <section id="science" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
    <div className="grid items-center gap-10 rounded-[2rem] border p-8 lg:grid-cols-2 lg:p-14" style={{ borderColor: BORDER, backgroundColor: "#F3EDE4" }}>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
        <Tag><Sparkles className="h-4 w-4" strokeWidth={2} /> The science behind it</Tag>
        <h2 className="mt-5 font-fredoka text-4xl font-semibold tracking-tight sm:text-5xl">
          Recommended by optometrists
        </h2>
        <p className="mt-5 font-dm-sans text-lg leading-relaxed text-[#2A2723]/70">
          The American Optometric Association recommends the 20-20-20 rule to combat computer vision
          syndrome. Focusing on near objects fatigues your ciliary eye muscles — looking at distant
          objects relaxes them, reducing strain and preventing long-term damage.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {[["20", "minutes of work"], ["20", "seconds of rest"], ["20ft", "look into the distance"]].map(([big, small], i) => (
            <div key={i} className="rounded-2xl border bg-white p-4 text-center" style={{ borderColor: BORDER }}>
              <div className="font-fredoka text-3xl font-semibold" style={{ color: ACCENT }}>{big}</div>
              <div className="mt-1 font-dm-sans text-xs text-[#2A2723]/60">{small}</div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex justify-center">
        <div className="rounded-[2rem] border bg-white p-6 shadow-[0_10px_40px_rgba(42,39,35,0.06)]" style={{ borderColor: BORDER }}>
          <img src={BEAR.flower} alt="BlinkBear mascot holding a flower" className="animate-float w-56 sm:w-72" />
        </div>
      </motion.div>
    </div>
  </section>
);

/* ---------- Testimonials ---------- */

const reviews = [
  { q: "Finally breaks my Instagram addiction! Those 20 seconds make me realize I don't actually need to keep scrolling.", a: "Ava" },
  { q: "My eye strain headaches have decreased noticeably. Plus the bear is adorable!", a: "Marco" },
  { q: "Simple concept, perfectly executed. The streak feature keeps me motivated.", a: "Priya" },
];

const Testimonials = () => (
  <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-14 text-center">
      <Tag><Star className="h-4 w-4" strokeWidth={2} /> What users say</Tag>
      <h2 className="mt-5 font-fredoka text-4xl font-semibold tracking-tight sm:text-5xl">
        Loved by mindful scrollers
      </h2>
    </motion.div>
    <div className="grid gap-6 md:grid-cols-3">
      {reviews.map((r, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className={`flex flex-col ${card} p-7`}
          style={{ borderColor: BORDER }}
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, s) => (
              <Star key={s} className="h-4 w-4" style={{ color: ACCENT }} fill={ACCENT} strokeWidth={0} />
            ))}
          </div>
          <p className="mt-4 flex-1 font-dm-sans text-lg leading-relaxed text-[#2A2723]/80">"{r.q}"</p>
          <div className="mt-5 font-fredoka font-semibold">— {r.a}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

/* ---------- Pricing ---------- */

const Pricing = () => (
  <section id="pricing" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-14 text-center">
      <Tag><Sparkles className="h-4 w-4" strokeWidth={2} /> Free & easy to start</Tag>
      <h2 className="mt-5 font-fredoka text-4xl font-semibold tracking-tight sm:text-5xl">
        Everything essential, free
      </h2>
    </motion.div>
    <div className="grid gap-8 md:grid-cols-2">
      <div className={`${card} p-8`} style={{ borderColor: BORDER }}>
        <h3 className="font-fredoka text-3xl font-semibold">Free</h3>
        <p className="mt-1 font-dm-sans text-[#2A2723]/60">All core features included.</p>
        <ul className="mt-6 space-y-3">
          {["20-20-20 break enforcement", "App monitoring & blocking", "Streak tracking", "Basic bear animations"].map((f) => (
            <li key={f} className="flex items-center gap-3 font-dm-sans text-[#2A2723]/80">
              <span className="grid h-5 w-5 place-items-center rounded-full" style={{ backgroundColor: "rgba(194,112,61,0.12)" }}>
                <Check className="h-3 w-3" strokeWidth={3} style={{ color: ACCENT }} />
              </span>
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-8"><AppStoreButton testid="soft-price-free" variant="light" /></div>
      </div>

      <div className="relative rounded-3xl border p-8" style={{ borderColor: "rgba(194,112,61,0.4)", backgroundColor: "#FBF4EC" }}>
        <span className="absolute -top-3 right-6 rounded-full px-4 py-1 font-fredoka text-sm font-semibold text-white" style={{ backgroundColor: ACCENT }}>
          Extra cute
        </span>
        <h3 className="font-fredoka text-3xl font-semibold">Premium</h3>
        <p className="mt-1 font-dm-sans text-[#2A2723]/60">Unlock full personalization.</p>
        <ul className="mt-6 space-y-3">
          {["Everything in Free", "10+ exclusive bear themes", "Custom shield colors", "Adjustable sound & vibration"].map((f) => (
            <li key={f} className="flex items-center gap-3 font-dm-sans text-[#2A2723]/80">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white">
                <Check className="h-3 w-3" strokeWidth={3} style={{ color: ACCENT }} />
              </span>
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-8"><AppStoreButton testid="soft-price-premium" /></div>
      </div>
    </div>
  </section>
);

/* ---------- Final CTA ---------- */

const FinalCTA = () => (
  <section className="border-y px-6 py-24 lg:px-8" style={{ borderColor: BORDER, backgroundColor: "#F3EDE4" }}>
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mx-auto max-w-3xl text-center">
      <img src={BEAR.pilot} alt="BlinkBear pilot mascot" className="animate-float mx-auto w-44 sm:w-52" />
      <h2 className="mt-6 font-fredoka text-4xl font-semibold tracking-tight sm:text-6xl">
        Build lasting healthy habits.
      </h2>
      <p className="mx-auto mt-5 max-w-xl font-dm-sans text-lg text-[#2A2723]/65">
        Join thousands protecting their eyes and reclaiming their time — one 20-second break at a
        time. Your eyes are precious.
      </p>
      <div className="mt-8 flex justify-center">
        <AppStoreButton testid="soft-final-cta" />
      </div>
    </motion.div>
  </section>
);

/* ---------- Footer ---------- */

const Footer = () => (
  <footer className="px-6 pt-16 pb-8 lg:px-8" style={{ backgroundColor: "#F3EDE4" }}>
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col justify-between gap-8 border-t pt-10 md:flex-row" style={{ borderColor: BORDER }}>
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <img src={APP_LOGO} alt="BlinkBear" className="h-10 w-10 rounded-2xl object-cover" />
            <span className="font-fredoka text-2xl font-semibold">BlinkBear</span>
          </div>
          <p className="mt-4 font-dm-sans text-[#2A2723]/60">
            Protect your vision and break screen addiction with the scientifically-proven 20-20-20 rule.
          </p>
        </div>
        <div className="flex gap-16">
          <div>
            <h4 className="font-fredoka text-lg font-semibold">Explore</h4>
            <ul className="mt-4 space-y-2 font-dm-sans text-[#2A2723]/60">
              <li><a href="#features" className="hover:text-[#2A2723]">Features</a></li>
              <li><a href="#how" className="hover:text-[#2A2723]">How it works</a></li>
              <li><a href="#pricing" className="hover:text-[#2A2723]">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-fredoka text-lg font-semibold">Connect</h4>
            <ul className="mt-4 space-y-2 font-dm-sans text-[#2A2723]/60">
              <li><a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#2A2723]">App Store</a></li>
              <li><a href={`mailto:${CONTACT_EMAIL}`} data-testid="soft-footer-email" className="hover:text-[#2A2723]">{CONTACT_EMAIL}</a></li>
              <li><Link to="/privacy" data-testid="soft-footer-privacy" className="hover:text-[#2A2723]">Privacy Policy</Link></li>
              <li><Link to="/impressum" data-testid="soft-footer-impressum" className="hover:text-[#2A2723]">Impressum</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mt-10 font-dm-sans text-sm text-[#2A2723]/45">
        © {new Date().getFullYear()} BlinkBear. All eyes reserved.
      </p>
    </div>
  </footer>
);

/* ---------- Page ---------- */

export default function SoftLanding() {
  return (
    <div className="min-h-screen font-dm-sans" style={{ backgroundColor: BG, color: INK }}>
      <Nav />
      <Hero />
      <Marquee />
      <Features />
      <HowItWorks />
      <Science />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
      <DesignSwitcher />
    </div>
  );
}
