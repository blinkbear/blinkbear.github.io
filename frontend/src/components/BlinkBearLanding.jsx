import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Eye, ShieldOff, Flame, Clock, Lock, Sparkles, Star, Check,
  Smartphone, Menu, Heart,
} from "lucide-react";

export const AppleLogo = ({ className = "h-7 w-7" }) => (
  <svg viewBox="0 0 384 512" className={className} fill="currentColor" aria-hidden="true">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const APP_STORE_URL = "https://apps.apple.com/de/app/blinkbear/id6756180445?l=en-GB";
const CONTACT_EMAIL = "blinkbear.app@gmail.com";

const BEAR = {
  balloon: "https://customer-assets.emergentagent.com/job_a2513eb8-82ec-4f68-a26a-c638e6f83911/artifacts/oko5lzm6_Balloon.png",
  dj: "https://customer-assets.emergentagent.com/job_a2513eb8-82ec-4f68-a26a-c638e6f83911/artifacts/o576e4zs_Dj.png",
  kayak: "https://customer-assets.emergentagent.com/job_a2513eb8-82ec-4f68-a26a-c638e6f83911/artifacts/evcbabeh_Kayak.png",
  pilot: "https://customer-assets.emergentagent.com/job_a2513eb8-82ec-4f68-a26a-c638e6f83911/artifacts/luhknq1p_Pilot.png",
  flower: "https://customer-assets.emergentagent.com/job_a2513eb8-82ec-4f68-a26a-c638e6f83911/artifacts/fw1itlmj_Flower.png",
};

const INK = "#18181B";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/* ---------- Reusable bits ---------- */

const AppStoreButton = ({ testid, dark = false }) => (
  <a
    href={APP_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={testid}
    className={`inline-flex items-center gap-3 rounded-2xl border-4 border-[#18181B] px-6 py-3.5 font-fredoka font-bold text-lg transition-all shadow-[5px_5px_0_0_#18181B] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0_0_#18181B] ${
      dark ? "bg-[#18181B] text-[#FFFDF8]" : "bg-[#FDE047] text-[#18181B]"
    }`}
  >
    <AppleLogo className="h-7 w-7" />
    <span className="flex flex-col items-start leading-none">
      <span className="text-[11px] font-dm-sans font-medium opacity-80">Download on the</span>
      <span className="text-xl">App Store</span>
    </span>
  </a>
);

const Tag = ({ children, color = "#FFB5A7" }) => (
  <span
    className="inline-flex items-center gap-2 rounded-full border-2 border-[#18181B] px-4 py-1.5 text-sm font-dm-sans font-bold shadow-[2px_2px_0_0_#18181B]"
    style={{ backgroundColor: color }}
  >
    {children}
  </span>
);

/* ---------- Navigation ---------- */

const Nav = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how" },
    { label: "The Science", href: "#science" },
    { label: "Pricing", href: "#pricing" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b-4 border-[#18181B] bg-[#FFFDF8]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <a href="#top" data-testid="nav-logo" className="flex items-center gap-2.5">
          <div className="grid h-11 w-11 place-items-center rounded-2xl border-4 border-[#18181B] bg-[#A1E3CB] shadow-[3px_3px_0_0_#18181B]">
            <Eye className="h-5 w-5" strokeWidth={2.6} />
          </div>
          <span className="font-fredoka text-2xl font-bold tracking-tight">BlinkBear</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              className="font-dm-sans font-medium text-[#18181B]/80 transition-colors hover:text-[#18181B]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-get-app"
            className="hidden rounded-full border-4 border-[#18181B] bg-[#FDE047] px-6 py-2.5 font-fredoka font-bold shadow-[3px_3px_0_0_#18181B] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[0px_0px_0_0_#18181B] sm:block"
          >
            Get App
          </a>
          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center rounded-xl border-4 border-[#18181B] bg-white shadow-[3px_3px_0_0_#18181B] md:hidden"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" strokeWidth={2.6} />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t-4 border-[#18181B] bg-[#FFFDF8] px-6 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 font-fredoka text-lg font-semibold"
            >
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
  <section id="top" className="relative overflow-hidden px-6 pt-16 pb-8 lg:px-12 lg:pt-24">
    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
      <motion.div initial="hidden" animate="show" variants={fadeUp}>
        <Tag color="#A1E3CB">
          <Sparkles className="h-4 w-4" strokeWidth={2.6} /> Backed by the 20-20-20 rule
        </Tag>
        <h1 className="mt-6 font-fredoka text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Your eyes
          <br />
          deserve{" "}
          <span className="relative inline-block">
            better.
            <svg className="absolute -bottom-2 left-0 w-full" height="14" viewBox="0 0 200 14" fill="none" preserveAspectRatio="none">
              <path d="M2 10C50 3 150 3 198 10" stroke="#FFB5A7" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </span>{" "}
          🧸
        </h1>
        <p className="mt-6 max-w-lg font-dm-sans text-lg leading-relaxed text-[#18181B]/75">
          BlinkBear helps you protect your vision and break screen addiction. Every 20 minutes,
          take a 20-second break to look 20 feet away. Simple. Effective. Life-changing.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <AppStoreButton testid="hero-app-store-button" />
          <div className="flex items-center gap-1.5 font-dm-sans font-bold">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-[#FDE047]" fill="#FDE047" strokeWidth={1} />
              ))}
            </div>
            <span className="text-sm text-[#18181B]/70">Loved by thousands</span>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <Tag color="#FFFFFF"><Lock className="h-4 w-4" strokeWidth={2.6} /> No account needed</Tag>
          <Tag color="#FFFFFF"><Heart className="h-4 w-4" strokeWidth={2.6} /> Free to start</Tag>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex justify-center"
      >
        {/* pastel blob */}
        <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-[#C4B5FD] blur-2xl opacity-50 sm:h-96 sm:w-96" />
        <div className="relative rounded-[2.5rem] border-4 border-[#18181B] bg-[#A1E3CB] p-4 shadow-[10px_10px_0_0_#18181B]">
          <img
            src={BEAR.balloon}
            alt="BlinkBear mascot floating in a hot air balloon"
            className="animate-float w-64 sm:w-80"
          />
        </div>
        <div className="absolute -right-2 top-6 rotate-6 rounded-2xl border-4 border-[#18181B] bg-[#FDE047] px-4 py-2 font-fredoka font-bold shadow-[4px_4px_0_0_#18181B]">
          20 sec 👀
        </div>
        <div className="absolute -left-3 bottom-8 -rotate-6 rounded-2xl border-4 border-[#18181B] bg-white px-4 py-2 font-fredoka font-bold shadow-[4px_4px_0_0_#18181B]">
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
    <div className="my-12 overflow-hidden border-y-4 border-[#18181B] bg-[#A1E3CB] py-4">
      <div className="animate-marquee flex w-max items-center gap-6 whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-6 font-fredoka text-2xl font-bold">
            {t} <Sparkles className="h-5 w-5" strokeWidth={2.6} />
          </span>
        ))}
      </div>
    </div>
  );
};

/* ---------- Features Bento ---------- */

const FeatureCard = ({ children, className = "", color = "#FFFFFF" }) => (
  <motion.div
    variants={fadeUp}
    className={`rounded-3xl border-4 border-[#18181B] p-8 shadow-[6px_6px_0_0_#18181B] transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#18181B] ${className}`}
    style={{ backgroundColor: color }}
  >
    {children}
  </motion.div>
);

const IconBadge = ({ icon: Icon, color }) => (
  <div
    className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border-4 border-[#18181B] shadow-[3px_3px_0_0_#18181B]"
    style={{ backgroundColor: color }}
  >
    <Icon className="h-6 w-6" strokeWidth={2.6} />
  </div>
);

const Features = () => (
  <section id="features" className="px-6 py-20 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mb-14 max-w-2xl"
      >
        <Tag color="#FDE047"><Heart className="h-4 w-4" strokeWidth={2.6} /> Features you'll love</Tag>
        <h2 className="mt-5 font-fredoka text-4xl font-bold tracking-tight sm:text-5xl">
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
        {/* Smart Monitoring - span 8 */}
        <FeatureCard color="#A1E3CB" className="md:col-span-8">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="flex-1">
              <IconBadge icon={Smartphone} color="#FFFFFF" />
              <h3 className="font-fredoka text-2xl font-bold">Smart Monitoring</h3>
              <p className="mt-2 font-dm-sans text-[#18181B]/75">
                Pick your most-used apps — social media, games, work tools — and BlinkBear
                automatically tracks your 20-minute screen sessions. Choose individual apps or
                whole categories.
              </p>
            </div>
            <img src={BEAR.dj} alt="BlinkBear DJ mascot with headphones" className="animate-float-slow w-32 sm:w-40" />
          </div>
        </FeatureCard>

        {/* Gentle reminders - span 4 */}
        <FeatureCard color="#FFB5A7" className="md:col-span-4">
          <IconBadge icon={ShieldOff} color="#FFFFFF" />
          <h3 className="font-fredoka text-2xl font-bold">Gentle Break Reminders</h3>
          <p className="mt-2 font-dm-sans text-[#18181B]/75">
            Adorable bear animations gently block doomscrolling. Optional sound & haptics, plus
            16+ bear companion themes.
          </p>
        </FeatureCard>

        {/* Privacy - span 4 */}
        <FeatureCard color="#C4B5FD" className="md:col-span-4">
          <IconBadge icon={Lock} color="#FFFFFF" />
          <h3 className="font-fredoka text-2xl font-bold">Privacy First</h3>
          <p className="mt-2 font-dm-sans text-[#18181B]/75">
            All data stays on your device. No account, no analytics, no tracking — just a Screen
            Time permission.
          </p>
        </FeatureCard>

        {/* Progress - span 8 */}
        <FeatureCard color="#FDE047" className="md:col-span-8">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="flex-1">
              <IconBadge icon={Flame} color="#FFFFFF" />
              <h3 className="font-fredoka text-2xl font-bold">Progress Tracking</h3>
              <p className="mt-2 font-dm-sans text-[#18181B]/75">
                Watch your consistency grow. Current streak, longest streak, total breaks
                completed, and joyful visual celebrations for every milestone.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Tag color="#FFFFFF">🔥 Current streak</Tag>
                <Tag color="#FFFFFF">🏆 Longest streak</Tag>
                <Tag color="#FFFFFF">✅ Total breaks</Tag>
              </div>
            </div>
            <img src={BEAR.kayak} alt="BlinkBear kayaking mascot" className="animate-float-slow w-32 sm:w-40" />
          </div>
        </FeatureCard>
      </motion.div>
    </div>
  </section>
);

/* ---------- How it works ---------- */

const steps = [
  { t: "Choose your apps", d: "Pick the apps you lose time in — Instagram, TikTok, games.", c: "#A1E3CB" },
  { t: "Tap Start Monitoring", d: "One tap and BlinkBear quietly starts watching the clock.", c: "#FFB5A7" },
  { t: "Use apps normally", d: "Go about your day. No nagging, no friction.", c: "#C4B5FD" },
  { t: "20 minutes → gentle block", d: "BlinkBear steps in for a 20-second breather.", c: "#FDE047" },
  { t: "Look 20 feet away", d: "Rest your eye muscles on something distant.", c: "#A1E3CB" },
  { t: "Return & build your streak", d: "Come back refreshed and watch your streak grow.", c: "#FFB5A7" },
];

const HowItWorks = () => (
  <section id="how" className="px-6 py-20 lg:px-12">
    <div className="mx-auto max-w-4xl">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-14 text-center">
        <Tag color="#C4B5FD"><Clock className="h-4 w-4" strokeWidth={2.6} /> How it works</Tag>
        <h2 className="mt-5 font-fredoka text-4xl font-bold tracking-tight sm:text-5xl">
          Six tiny steps to happier eyes
        </h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-[27px] top-4 bottom-4 hidden w-1 border-l-4 border-dashed border-[#18181B]/30 sm:block" />
        <div className="space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative flex items-start gap-5"
            >
              <div
                className="z-10 grid h-14 w-14 flex-shrink-0 place-items-center rounded-full border-4 border-[#18181B] font-fredoka text-2xl font-bold shadow-[3px_3px_0_0_#18181B]"
                style={{ backgroundColor: s.c }}
              >
                {i + 1}
              </div>
              <div className="flex-1 rounded-2xl border-4 border-[#18181B] bg-white p-5 shadow-[4px_4px_0_0_#18181B]">
                <h3 className="font-fredoka text-xl font-bold">{s.t}</h3>
                <p className="mt-1 font-dm-sans text-[#18181B]/75">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------- The Science ---------- */

const Science = () => (
  <section id="science" className="px-6 py-20 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <div className="grid items-center gap-10 rounded-[2.5rem] border-4 border-[#18181B] bg-[#A1E3CB] p-8 shadow-[8px_8px_0_0_#18181B] lg:grid-cols-2 lg:p-14">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <Tag color="#FFFFFF"><Sparkles className="h-4 w-4" strokeWidth={2.6} /> The science behind it</Tag>
          <h2 className="mt-5 font-fredoka text-4xl font-bold tracking-tight sm:text-5xl">
            Recommended by optometrists
          </h2>
          <p className="mt-5 font-dm-sans text-lg leading-relaxed text-[#18181B]/80">
            The American Optometric Association recommends the 20-20-20 rule to combat computer
            vision syndrome. Focusing on near objects fatigues your ciliary eye muscles — looking
            at distant objects relaxes them, reducing strain and preventing long-term damage.
          </p>
          <p className="mt-4 font-dm-sans leading-relaxed text-[#18181B]/70">
            Beyond eye health, forced micro-breaks create awareness of phone habits and give you
            natural moments to put your device down.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              ["20", "minutes of work"],
              ["20", "seconds of rest"],
              ["20ft", "look into the distance"],
            ].map(([big, small], i) => (
              <div key={i} className="rounded-2xl border-4 border-[#18181B] bg-white p-4 text-center shadow-[3px_3px_0_0_#18181B]">
                <div className="font-fredoka text-3xl font-bold">{big}</div>
                <div className="mt-1 font-dm-sans text-xs font-medium text-[#18181B]/70">{small}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="rounded-[2.5rem] border-4 border-[#18181B] bg-white p-6 shadow-[8px_8px_0_0_#18181B]">
            <img src={BEAR.flower} alt="BlinkBear mascot holding a flower" className="animate-float w-56 sm:w-72" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ---------- Testimonials ---------- */

const reviews = [
  { q: "Finally breaks my Instagram addiction! Those 20 seconds make me realize I don't actually need to keep scrolling.", a: "Ava", c: "#FDE047" },
  { q: "My eye strain headaches have decreased noticeably. Plus the bear is adorable!", a: "Marco", c: "#A1E3CB" },
  { q: "Simple concept, perfectly executed. The streak feature keeps me motivated.", a: "Priya", c: "#FFB5A7" },
];

const Testimonials = () => (
  <section className="px-6 py-20 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-14 text-center">
        <Tag color="#FFB5A7"><Star className="h-4 w-4" strokeWidth={2.6} /> What users say</Tag>
        <h2 className="mt-5 font-fredoka text-4xl font-bold tracking-tight sm:text-5xl">
          Loved by mindful scrollers
        </h2>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col rounded-3xl border-4 border-[#18181B] p-7 shadow-[6px_6px_0_0_#18181B]"
            style={{ backgroundColor: r.c }}
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, s) => (
                <Star key={s} className="h-5 w-5" fill="#18181B" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-4 flex-1 font-dm-sans text-lg font-medium leading-relaxed">"{r.q}"</p>
            <div className="mt-5 font-fredoka font-bold">— {r.a}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Pricing ---------- */

const Pricing = () => (
  <section id="pricing" className="px-6 py-20 lg:px-12">
    <div className="mx-auto max-w-5xl">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-14 text-center">
        <Tag color="#A1E3CB"><Sparkles className="h-4 w-4" strokeWidth={2.6} /> Free & easy to start</Tag>
        <h2 className="mt-5 font-fredoka text-4xl font-bold tracking-tight sm:text-5xl">
          Everything essential, free
        </h2>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Free */}
        <div className="rounded-3xl border-4 border-[#18181B] bg-white p-8 shadow-[6px_6px_0_0_#18181B]">
          <h3 className="font-fredoka text-3xl font-bold">Free</h3>
          <p className="mt-1 font-dm-sans text-[#18181B]/70">All core features included.</p>
          <ul className="mt-6 space-y-3">
            {["20-20-20 break enforcement", "App monitoring & blocking", "Streak tracking", "Basic bear animations"].map((f) => (
              <li key={f} className="flex items-center gap-3 font-dm-sans font-medium">
                <span className="grid h-6 w-6 place-items-center rounded-full border-2 border-[#18181B] bg-[#A1E3CB]">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <AppStoreButton testid="pricing-free-button" />
          </div>
        </div>

        {/* Premium */}
        <div className="relative rounded-3xl border-4 border-[#18181B] bg-[#FDE047] p-8 shadow-[6px_6px_0_0_#18181B]">
          <span className="absolute -top-4 right-6 rotate-3 rounded-full border-2 border-[#18181B] bg-[#FFB5A7] px-4 py-1 font-fredoka text-sm font-bold shadow-[2px_2px_0_0_#18181B]">
            ✨ Extra cute
          </span>
          <h3 className="font-fredoka text-3xl font-bold">Premium</h3>
          <p className="mt-1 font-dm-sans text-[#18181B]/70">Unlock full personalization.</p>
          <ul className="mt-6 space-y-3">
            {["Everything in Free", "10+ exclusive bear themes", "Custom shield colors", "Adjustable sound & vibration"].map((f) => (
              <li key={f} className="flex items-center gap-3 font-dm-sans font-medium">
                <span className="grid h-6 w-6 place-items-center rounded-full border-2 border-[#18181B] bg-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <AppStoreButton testid="pricing-premium-button" dark />
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- Final CTA ---------- */

const FinalCTA = () => (
  <section className="border-y-4 border-[#18181B] bg-[#FFB5A7] px-6 py-24 lg:px-12">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
      className="mx-auto max-w-3xl text-center"
    >
      <img src={BEAR.pilot} alt="BlinkBear pilot mascot" className="animate-float mx-auto w-44 sm:w-52" />
      <h2 className="mt-6 font-fredoka text-4xl font-bold tracking-tight sm:text-6xl">
        Build lasting healthy habits.
      </h2>
      <p className="mx-auto mt-5 max-w-xl font-dm-sans text-lg text-[#18181B]/80">
        Join thousands protecting their eyes and reclaiming their time — one 20-second break at a
        time. Your eyes are precious. 💎
      </p>
      <div className="mt-8 flex justify-center">
        <AppStoreButton testid="final-cta-button" dark />
      </div>
    </motion.div>
  </section>
);

/* ---------- Footer ---------- */

const Footer = () => (
  <footer className="bg-[#18181B] px-6 pt-16 pb-8 text-[#FFFDF8] lg:px-12">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <div className="grid h-11 w-11 place-items-center rounded-2xl border-4 border-[#FFFDF8] bg-[#A1E3CB]">
              <Eye className="h-5 w-5 text-[#18181B]" strokeWidth={2.6} />
            </div>
            <span className="font-fredoka text-2xl font-bold">BlinkBear</span>
          </div>
          <p className="mt-4 font-dm-sans text-[#FFFDF8]/70">
            Protect your vision and break screen addiction with the scientifically-proven
            20-20-20 rule. 🧸
          </p>
        </div>
        <div className="flex gap-16">
          <div>
            <h4 className="font-fredoka text-lg font-bold">Explore</h4>
            <ul className="mt-4 space-y-2 font-dm-sans text-[#FFFDF8]/70">
              <li><a href="#features" className="hover:text-[#FDE047]">Features</a></li>
              <li><a href="#how" className="hover:text-[#FDE047]">How it works</a></li>
              <li><a href="#pricing" className="hover:text-[#FDE047]">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-fredoka text-lg font-bold">Connect</h4>
            <ul className="mt-4 space-y-2 font-dm-sans text-[#FFFDF8]/70">
              <li>
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" data-testid="footer-app-store" className="hover:text-[#FDE047]">
                  App Store
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} data-testid="footer-email" className="hover:text-[#FDE047]">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <Link to="/privacy" data-testid="footer-privacy" className="hover:text-[#FDE047]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/impressum" data-testid="footer-impressum" className="hover:text-[#FDE047]">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 select-none border-t-4 border-[#FFFDF8]/20 pt-8">
        <div className="font-fredoka text-[18vw] font-bold leading-none tracking-tight text-[#FFFDF8]/10 md:text-[12rem]">
          BlinkBear
        </div>
        <p className="mt-4 font-dm-sans text-sm text-[#FFFDF8]/50">
          © {new Date().getFullYear()} BlinkBear. All eyes reserved.
        </p>
      </div>
    </div>
  </footer>
);

/* ---------- Page ---------- */

export default function BlinkBearLanding() {
  return (
    <div className="min-h-screen bg-[#FFFDF8] font-dm-sans text-[#18181B]">
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
    </div>
  );
}
