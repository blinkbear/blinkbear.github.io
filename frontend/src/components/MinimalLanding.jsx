import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Shield, Flame, Lock, Plus, Minus } from "lucide-react";
import { AppleLogo } from "./BlinkBearLanding";
import DesignSwitcher from "./DesignSwitcher";
import ScrollVideoIntro from "./ScrollVideoIntro";

const APP_STORE_URL = "https://apps.apple.com/de/app/blinkbear/id6756180445?l=en-GB";
const CONTACT_EMAIL = "blinkbear.app@gmail.com";
const APP_LOGO = "https://customer-assets.emergentagent.com/job_vision-breaks/artifacts/2fzibdh5_AppIcon.png";
const BEAR = {
  balloon: "https://customer-assets.emergentagent.com/job_a2513eb8-82ec-4f68-a26a-c638e6f83911/artifacts/oko5lzm6_Balloon.png",
  flower: "https://customer-assets.emergentagent.com/job_a2513eb8-82ec-4f68-a26a-c638e6f83911/artifacts/fw1itlmj_Flower.png",
  kayak: "https://customer-assets.emergentagent.com/job_a2513eb8-82ec-4f68-a26a-c638e6f83911/artifacts/evcbabeh_Kayak.png",
};

const ACCENT = "#B45309";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const StoreBtn = ({ testid, variant = "dark" }) => (
  <a
    href={APP_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={testid}
    className={`inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-base font-semibold transition-all duration-300 ${
      variant === "dark"
        ? "bg-[#1A1A1A] text-white hover:bg-black"
        : "border border-black/15 bg-white text-[#1A1A1A] hover:border-black/40"
    }`}
  >
    <AppleLogo className="h-6 w-6" />
    <span className="flex flex-col items-start leading-none">
      <span className="text-[10px] font-normal opacity-70">Download on the</span>
      <span className="text-lg">App Store</span>
    </span>
  </a>
);

const Nav = () => (
  <header className="sticky top-0 z-50 border-b border-black/5 bg-[#FAFAF7]/80 backdrop-blur-xl">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
      <a href="#top" className="flex items-center gap-3" data-testid="min-nav-logo">
        <img src={APP_LOGO} alt="BlinkBear" className="h-9 w-9 rounded-xl object-cover" />
        <span className="font-manrope text-xl font-extrabold tracking-tight">BlinkBear</span>
      </a>
      <nav className="hidden items-center gap-10 md:flex">
        {["Features", "Method", "Pricing"].map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-medium text-black/60 transition-colors hover:text-black">
            {l}
          </a>
        ))}
      </nav>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="min-nav-cta"
        className="group inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:gap-3"
      >
        Get the app <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section id="top" className="mx-auto max-w-6xl px-6 pt-20 pb-16 lg:px-8 lg:pt-28">
    <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
      <motion.div initial="hidden" animate="show" variants={fade}>
        <div className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-black/50">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
          The 20-20-20 rule, made effortless
        </div>
        <h1 className="font-manrope text-5xl font-extrabold leading-[1.02] tracking-tight text-[#1A1A1A] sm:text-6xl lg:text-7xl">
          Your eyes
          <br />
          deserve <span style={{ color: ACCENT }}>better.</span>
        </h1>
        <p className="mt-8 max-w-md text-lg leading-relaxed text-black/60">
          Every 20 minutes, take a 20-second break to look 20 feet away. BlinkBear protects your
          vision and quietly breaks screen addiction — no account, no tracking.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <StoreBtn testid="min-hero-cta" />
          <span className="text-sm text-black/50">Free · Privacy-first · iOS</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex justify-center"
      >
        <div className="absolute h-64 w-64 rounded-full bg-gradient-to-b from-[#FCE9D6] to-transparent blur-2xl" />
        <img src={BEAR.balloon} alt="BlinkBear mascot" className="animate-float-slow relative w-72 lg:w-80" />
      </motion.div>
    </div>

    {/* stats strip */}
    <div className="mt-20 grid grid-cols-3 divide-x divide-black/10 border-y border-black/10 py-8 text-center">
      {[
        ["20", "minutes focused"],
        ["20", "seconds of rest"],
        ["20 ft", "into the distance"],
      ].map(([b, s], i) => (
        <div key={i}>
          <div className="font-manrope text-3xl font-extrabold tracking-tight sm:text-4xl">{b}</div>
          <div className="mt-1 text-sm text-black/50">{s}</div>
        </div>
      ))}
    </div>
  </section>
);

const features = [
  { icon: Eye, t: "Smart monitoring", d: "Pick your most-used apps and BlinkBear automatically tracks 20-minute screen sessions — individual apps or whole categories." },
  { icon: Shield, t: "Gentle break screens", d: "Adorable bear animations softly block doomscrolling. Optional sound and haptics, plus 16+ companion themes." },
  { icon: Flame, t: "Streaks that stick", d: "Current streak, longest streak, total breaks — small daily wins that quietly compound into a habit." },
  { icon: Lock, t: "Private by design", d: "All data stays on your device. No account, no analytics, no tracking. Just a Screen Time permission." },
];

const Features = () => (
  <section id="features" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>Features</p>
      <h2 className="mt-4 font-manrope text-4xl font-extrabold tracking-tight sm:text-5xl">
        Everything you need. Nothing you don't.
      </h2>
    </motion.div>

    <div className="mt-16 grid gap-x-16 gap-y-14 sm:grid-cols-2">
      {features.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          className="border-t border-black/10 pt-6"
        >
          <f.icon className="h-6 w-6" strokeWidth={1.6} style={{ color: ACCENT }} />
          <h3 className="mt-4 font-manrope text-xl font-bold">{f.t}</h3>
          <p className="mt-2 leading-relaxed text-black/55">{f.d}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const steps = [
  ["Choose your apps", "Instagram, TikTok, games — whatever pulls you in."],
  ["Start monitoring", "One tap. BlinkBear quietly watches the clock."],
  ["Use apps normally", "No nagging, no friction. Just live your day."],
  ["Take a 20-second break", "BlinkBear gently blocks and invites you to rest."],
  ["Look 20 feet away", "Relax your eye muscles on something distant."],
  ["Build your streak", "Return refreshed and watch consistency grow."],
];

const Method = () => (
  <section id="method" className="border-y border-black/10 bg-[#F4F1EA]">
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>The method</p>
          <h2 className="mt-4 font-manrope text-4xl font-extrabold tracking-tight sm:text-5xl">
            Six small steps to happier eyes.
          </h2>
          <p className="mt-5 leading-relaxed text-black/55">
            Recommended by the American Optometric Association to combat computer vision syndrome —
            looking into the distance relaxes fatigued eye muscles.
          </p>
          <img src={BEAR.flower} alt="BlinkBear" className="animate-float-slow mt-10 w-44" />
        </motion.div>

        <div>
          {steps.map(([t, d], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="flex items-baseline gap-6 border-b border-black/10 py-6"
            >
              <span className="font-manrope text-sm font-bold tabular-nums" style={{ color: ACCENT }}>
                0{i + 1}
              </span>
              <div>
                <h3 className="font-manrope text-xl font-bold">{t}</h3>
                <p className="mt-1 text-black/55">{d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="mx-auto max-w-5xl px-6 py-24 lg:px-8">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="text-center">
      <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>Pricing</p>
      <h2 className="mt-4 font-manrope text-4xl font-extrabold tracking-tight sm:text-5xl">
        Free to start. Premium if you want more.
      </h2>
    </motion.div>

    <div className="mt-16 grid gap-8 md:grid-cols-2">
      <div className="rounded-2xl border border-black/10 bg-white p-10">
        <h3 className="font-manrope text-2xl font-bold">Free</h3>
        <p className="mt-1 text-black/50">All core features included.</p>
        <ul className="mt-8 space-y-4 text-black/70">
          {["20-20-20 break enforcement", "App monitoring & blocking", "Streak tracking", "Basic bear animations"].map((f) => (
            <li key={f} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-black/40" /> {f}
            </li>
          ))}
        </ul>
        <div className="mt-10"><StoreBtn testid="min-price-free" variant="light" /></div>
      </div>

      <div className="rounded-2xl border p-10" style={{ borderColor: ACCENT, background: "#FFFBF5" }}>
        <div className="flex items-center justify-between">
          <h3 className="font-manrope text-2xl font-bold">Premium</h3>
          <span className="rounded-full px-3 py-1 text-xs font-bold text-white" style={{ background: ACCENT }}>Extra cute</span>
        </div>
        <p className="mt-1 text-black/50">Unlock full personalization.</p>
        <ul className="mt-8 space-y-4 text-black/70">
          {["Everything in Free", "10+ exclusive bear themes", "Custom shield colors", "Adjustable sound & vibration"].map((f) => (
            <li key={f} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} /> {f}
            </li>
          ))}
        </ul>
        <div className="mt-10"><StoreBtn testid="min-price-premium" /></div>
      </div>
    </div>
  </section>
);

const faqs = [
  ["Do I need an account?", "No. BlinkBear works entirely on-device with a single Screen Time permission — no sign-up, no login."],
  ["Is my data collected?", "Never. No analytics, no tracking, no servers. Everything stays in your device's secure app sandbox."],
  ["Does it work while I use other apps?", "Yes. BlinkBear monitors your selected apps in the background and gently steps in every 20 minutes."],
  ["Is it really free?", "All core features are free. Premium only adds extra bear themes and custom shield colors."],
];

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="border-t border-black/10 bg-[#F4F1EA]">
      <div className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
        <h2 className="font-manrope text-4xl font-extrabold tracking-tight sm:text-5xl">Questions</h2>
        <div className="mt-10">
          {faqs.map(([q, a], i) => (
            <div key={i} className="border-b border-black/10">
              <button
                data-testid={`min-faq-${i}`}
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between py-6 text-left"
              >
                <span className="font-manrope text-lg font-bold">{q}</span>
                {open === i ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </button>
              {open === i && <p className="pb-6 pr-8 leading-relaxed text-black/60">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="mx-auto max-w-6xl px-6 py-28 text-center lg:px-8">
    <img src={BEAR.kayak} alt="BlinkBear" className="animate-float-slow mx-auto w-40" />
    <h2 className="mx-auto mt-8 max-w-2xl font-manrope text-4xl font-extrabold tracking-tight sm:text-6xl">
      Care for your eyes, one break at a time.
    </h2>
    <div className="mt-10 flex justify-center">
      <StoreBtn testid="min-final-cta" />
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-black/10 bg-[#FAFAF7]">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between lg:px-8">
      <div className="flex items-center gap-3">
        <img src={APP_LOGO} alt="BlinkBear" className="h-9 w-9 rounded-xl object-cover" />
        <span className="font-manrope text-lg font-extrabold tracking-tight">BlinkBear</span>
      </div>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-black/55">
        <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-black" data-testid="min-footer-email">{CONTACT_EMAIL}</a>
        <Link to="/privacy" className="hover:text-black" data-testid="min-footer-privacy">Privacy</Link>
        <Link to="/impressum" className="hover:text-black" data-testid="min-footer-impressum">Impressum</Link>
        <span className="text-black/35">© {new Date().getFullYear()}</span>
      </div>
    </div>
  </footer>
);

export default function MinimalLanding() {
  return (
    <>
      <ScrollVideoIntro subtitle="Scroll to begin">
        <div className="min-h-screen bg-[#FAFAF7] font-manrope text-[#1A1A1A] antialiased">
          <Nav />
          <Hero />
          <Features />
          <Method />
          <Pricing />
          <FAQ />
          <CTA />
          <Footer />
        </div>
      </ScrollVideoIntro>
      <DesignSwitcher />
    </>
  );
}
