import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Smartphone, ShieldOff, Flame, Clock, Sparkles, Star, Check, Heart,
} from "lucide-react";
import ScrollVideoIntro from "./ScrollVideoIntro";

const AppleLogo = ({ className = "h-7 w-7" }) => (
  <svg viewBox="0 0 384 512" className={className} fill="currentColor" aria-hidden="true">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const APP_STORE_URL = "https://apps.apple.com/de/app/blinkbear/id6756180445?l=en-GB";
const CONTACT_EMAIL = "blinkbear.app@gmail.com";
const APP_LOGO = "https://customer-assets.emergentagent.com/job_vision-breaks/artifacts/2fzibdh5_AppIcon.png";

const VID = (n) => `${process.env.PUBLIC_URL || ""}/vid/${n}.mp4`;
const POS = (n) => `${process.env.PUBLIC_URL || ""}/vid/${n}.jpg`;

const ACCENT = "#C96F3C";
const INK = "#241F1B";
const BG = "#FBF8F3";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/* Auto-playing looping animation that only runs while on screen */
function LoopVideo({ name, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { rootMargin: "300px 0px 500px 0px", threshold: 0.01 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      src={VID(name)}
      poster={POS(name)}
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      data-testid={`loop-video-${name}`}
      style={{ backgroundImage: `url(${POS(name)})`, backgroundSize: "cover", backgroundPosition: "center" }}
      className={className}
    />
  );
}

const AppStoreButton = ({ testid, variant = "dark" }) => (
  <a
    href={APP_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={testid}
    className={`inline-flex items-center gap-3 rounded-2xl px-6 py-3.5 font-fredoka font-semibold transition-all duration-300 ${
      variant === "dark" ? "text-white hover:opacity-90" : "border border-black/10 bg-white hover:border-black/30"
    }`}
    style={variant === "dark" ? { backgroundColor: INK } : { color: INK }}
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
    style={{ borderColor: "rgba(36,31,27,0.12)", color: ACCENT, backgroundColor: "rgba(201,111,60,0.07)" }}
  >
    {children}
  </span>
);

const Nav = () => (
  <header className="sticky top-0 z-50 border-b backdrop-blur-xl" style={{ borderColor: "rgba(36,31,27,0.08)", backgroundColor: "rgba(251,248,243,0.82)" }}>
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
      <a href="#top" data-testid="motion-nav-logo" className="flex items-center gap-2.5">
        <img src={APP_LOGO} alt="BlinkBear" className="h-10 w-10 rounded-2xl object-cover" style={{ boxShadow: "0 2px 10px rgba(36,31,27,0.12)" }} />
        <span className="font-fredoka text-2xl font-semibold tracking-tight">BlinkBear</span>
      </a>
      <nav className="hidden items-center gap-9 md:flex">
        {["Features", "How it works", "Pricing"].map((l) => (
          <a key={l} href={`#${l.split(" ")[0].toLowerCase()}`} className="font-dm-sans text-[15px] font-medium text-[#241F1B]/60 transition-colors hover:text-[#241F1B]">
            {l}
          </a>
        ))}
      </nav>
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" data-testid="motion-nav-cta" className="rounded-full px-6 py-2.5 font-fredoka font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: INK }}>
        Get App
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section id="top" className="mx-auto max-w-6xl px-6 pt-16 pb-10 lg:px-8 lg:pt-24">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <motion.div initial="hidden" animate="show" variants={fadeUp}>
        <Tag><Sparkles className="h-4 w-4" strokeWidth={2} /> Backed by the 20-20-20 rule</Tag>
        <h1 className="mt-6 font-fredoka text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Your eyes
          <br />
          deserve <span style={{ color: ACCENT }}>better.</span>
        </h1>
        <p className="mt-6 max-w-lg font-dm-sans text-lg leading-relaxed text-[#241F1B]/65">
          Every 20 minutes, take a 20-second break to look 20 feet away. BlinkBear protects your
          vision and quietly breaks screen addiction — with a little bear cheering you on.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <AppStoreButton testid="motion-hero-cta" />
          <div className="flex items-center gap-1.5 font-dm-sans">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4" style={{ color: ACCENT }} fill={ACCENT} strokeWidth={1} />
              ))}
            </div>
            <span className="text-sm text-[#241F1B]/55">Loved by thousands</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="overflow-hidden rounded-[2rem] border border-black/5 shadow-[0_24px_60px_-20px_rgba(36,31,27,0.35)]">
          <LoopVideo name="balloon" className="aspect-square w-full object-cover" />
        </div>
        <div className="absolute -left-3 top-8 -rotate-3 rounded-2xl bg-white px-4 py-2 font-fredoka font-semibold shadow-[0_10px_30px_rgba(36,31,27,0.12)]">
          🔥 12 day streak
        </div>
        <div className="absolute -right-3 bottom-10 rotate-3 rounded-2xl px-4 py-2 font-fredoka font-semibold text-white shadow-[0_10px_30px_rgba(36,31,27,0.2)]" style={{ backgroundColor: ACCENT }}>
          20 sec 👀
        </div>
      </motion.div>
    </div>
  </section>
);

const Marquee = () => {
  const items = ["20 MINUTES", "20 SECONDS", "20 FEET", "SCIENTIFICALLY PROVEN"];
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="my-16 overflow-hidden border-y py-4" style={{ borderColor: "rgba(36,31,27,0.1)", backgroundColor: "#F3EADF" }}>
      <div className="animate-marquee flex w-max items-center gap-6 whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-6 font-fredoka text-xl font-medium text-[#241F1B]/45">
            {t} <Sparkles className="h-4 w-4" strokeWidth={2} style={{ color: ACCENT }} />
          </span>
        ))}
      </div>
    </div>
  );
};

const rows = [
  {
    name: "dj", icon: Smartphone, tag: "Smart Monitoring", side: "right",
    title: "Choose the apps that steal your focus",
    desc: "Pick your most-used apps — social, games, work tools — and BlinkBear automatically tracks your 20-minute sessions. Individual apps or whole categories.",
  },
  {
    name: "flower", icon: ShieldOff, tag: "Gentle Reminders", side: "left",
    title: "Sweet nudges, never harsh blocks",
    desc: "When it's break time, an adorable bear gently pauses your scroll. Optional sound & haptics, and 16+ bear companion themes to keep it delightful.",
  },
  {
    name: "kayak", icon: Flame, tag: "Progress Tracking", side: "right",
    title: "Ride your streak, day after day",
    desc: "Current streak, longest streak, total breaks completed — small wins that compound. Every completed break is a paddle stroke toward healthier eyes.",
  },
];

const FeatureRow = ({ r }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeUp}
    className="grid items-center gap-10 lg:grid-cols-2"
  >
    <div className={r.side === "left" ? "lg:order-2" : ""}>
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl" style={{ backgroundColor: "rgba(201,111,60,0.1)" }}>
        <r.icon className="h-5 w-5" strokeWidth={2} style={{ color: ACCENT }} />
      </div>
      <Tag>{r.tag}</Tag>
      <h3 className="mt-4 font-fredoka text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{r.title}</h3>
      <p className="mt-4 max-w-md font-dm-sans text-lg leading-relaxed text-[#241F1B]/65">{r.desc}</p>
    </div>
    <div className={r.side === "left" ? "lg:order-1" : ""}>
      <div className="overflow-hidden rounded-[2rem] border border-black/5 shadow-[0_24px_60px_-24px_rgba(36,31,27,0.4)]">
        <LoopVideo name={r.name} className="aspect-[4/3] w-full object-cover" />
      </div>
    </div>
  </motion.div>
);

const Features = () => (
  <section id="features" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-16 max-w-2xl">
      <Tag><Heart className="h-4 w-4" strokeWidth={2} /> Features you'll love</Tag>
      <h2 className="mt-5 font-fredoka text-4xl font-semibold tracking-tight sm:text-5xl">A cuddly bear that guards your eyes</h2>
    </motion.div>
    <div className="space-y-24">
      {rows.map((r) => <FeatureRow key={r.name} r={r} />)}
    </div>
  </section>
);

const steps = [
  ["Choose your apps", "Instagram, TikTok, games — your usual time sinks."],
  ["Tap Start Monitoring", "One tap and BlinkBear quietly watches the clock."],
  ["Use apps normally", "No nagging, no friction. Just live your day."],
  ["20 min → gentle block", "BlinkBear steps in for a 20-second breather."],
  ["Look 20 feet away", "Rest your eye muscles on something distant."],
  ["Return & build your streak", "Come back refreshed and watch it grow."],
];

const HowItWorks = () => (
  <section id="how" className="border-y" style={{ borderColor: "rgba(36,31,27,0.1)", backgroundColor: "#F3EADF" }}>
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <Tag><Clock className="h-4 w-4" strokeWidth={2} /> How it works</Tag>
          <h2 className="mt-5 font-fredoka text-4xl font-semibold tracking-tight sm:text-5xl">Six tiny steps to happier eyes</h2>
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-black/5 shadow-[0_24px_60px_-24px_rgba(36,31,27,0.4)]">
            <LoopVideo name="plane" className="aspect-video w-full object-cover" />
          </div>
        </motion.div>
        <div>
          {steps.map(([t, d], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="flex items-start gap-5 border-b py-5"
              style={{ borderColor: "rgba(36,31,27,0.1)" }}
            >
              <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-white font-fredoka text-lg font-semibold shadow-sm" style={{ color: ACCENT }}>
                {i + 1}
              </div>
              <div>
                <h3 className="font-fredoka text-xl font-semibold">{t}</h3>
                <p className="mt-1 font-dm-sans text-[#241F1B]/65">{d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Science = () => (
  <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
      <Tag><Sparkles className="h-4 w-4" strokeWidth={2} /> The science behind it</Tag>
      <h2 className="mx-auto mt-5 max-w-2xl font-fredoka text-4xl font-semibold tracking-tight sm:text-5xl">Recommended by optometrists</h2>
      <p className="mx-auto mt-5 max-w-2xl font-dm-sans text-lg leading-relaxed text-[#241F1B]/65">
        The American Optometric Association recommends the 20-20-20 rule to combat computer vision
        syndrome. Looking at distant objects relaxes fatigued eye muscles, reducing strain.
      </p>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-4">
        {[["20", "minutes of work"], ["20", "seconds of rest"], ["20ft", "into the distance"]].map(([b, s], i) => (
          <div key={i} className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
            <div className="font-fredoka text-3xl font-semibold" style={{ color: ACCENT }}>{b}</div>
            <div className="mt-1 font-dm-sans text-xs text-[#241F1B]/60">{s}</div>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

const reviews = [
  { q: "Finally breaks my Instagram addiction! Those 20 seconds make me realize I don't need to keep scrolling.", a: "Ava" },
  { q: "My eye strain headaches have decreased noticeably. Plus the bear is adorable!", a: "Marco" },
  { q: "Simple concept, perfectly executed. The streak feature keeps me motivated.", a: "Priya" },
];

const Testimonials = () => (
  <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
    <div className="grid gap-6 md:grid-cols-3">
      {reviews.map((r, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="flex flex-col rounded-3xl border border-black/5 bg-white p-7 shadow-[0_16px_40px_-24px_rgba(36,31,27,0.3)]"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, s) => <Star key={s} className="h-4 w-4" style={{ color: ACCENT }} fill={ACCENT} strokeWidth={0} />)}
          </div>
          <p className="mt-4 flex-1 font-dm-sans text-lg leading-relaxed text-[#241F1B]/80">"{r.q}"</p>
          <div className="mt-5 font-fredoka font-semibold">— {r.a}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="mx-auto max-w-5xl px-6 py-8 pb-24 lg:px-8">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-14 text-center">
      <Tag><Sparkles className="h-4 w-4" strokeWidth={2} /> Free & easy to start</Tag>
      <h2 className="mt-5 font-fredoka text-4xl font-semibold tracking-tight sm:text-5xl">Everything essential, free</h2>
    </motion.div>
    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
        <h3 className="font-fredoka text-3xl font-semibold">Free</h3>
        <p className="mt-1 font-dm-sans text-[#241F1B]/60">All core features included.</p>
        <ul className="mt-6 space-y-3">
          {["20-20-20 break enforcement", "App monitoring & blocking", "Streak tracking", "Basic bear animations"].map((f) => (
            <li key={f} className="flex items-center gap-3 font-dm-sans text-[#241F1B]/80">
              <span className="grid h-5 w-5 place-items-center rounded-full" style={{ backgroundColor: "rgba(201,111,60,0.12)" }}>
                <Check className="h-3 w-3" strokeWidth={3} style={{ color: ACCENT }} />
              </span>{f}
            </li>
          ))}
        </ul>
        <div className="mt-8"><AppStoreButton testid="motion-price-free" variant="light" /></div>
      </div>
      <div className="relative rounded-3xl border p-8" style={{ borderColor: "rgba(201,111,60,0.4)", backgroundColor: "#FBF2E9" }}>
        <span className="absolute -top-3 right-6 rounded-full px-4 py-1 font-fredoka text-sm font-semibold text-white" style={{ backgroundColor: ACCENT }}>Extra cute</span>
        <h3 className="font-fredoka text-3xl font-semibold">Premium</h3>
        <p className="mt-1 font-dm-sans text-[#241F1B]/60">Unlock full personalization.</p>
        <ul className="mt-6 space-y-3">
          {["Everything in Free", "10+ exclusive bear themes", "Custom shield colors", "Adjustable sound & vibration"].map((f) => (
            <li key={f} className="flex items-center gap-3 font-dm-sans text-[#241F1B]/80">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white">
                <Check className="h-3 w-3" strokeWidth={3} style={{ color: ACCENT }} />
              </span>{f}
            </li>
          ))}
        </ul>
        <div className="mt-8"><AppStoreButton testid="motion-price-premium" /></div>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="relative overflow-hidden border-y" style={{ borderColor: "rgba(36,31,27,0.1)" }}>
    <LoopVideo name="flower" className="absolute inset-0 h-full w-full object-cover" />
    <div className="absolute inset-0 bg-[#241F1B]/55 backdrop-blur-[2px]" />
    <div className="relative mx-auto max-w-3xl px-6 py-28 text-center lg:px-8">
      <h2 className="font-fredoka text-4xl font-semibold tracking-tight text-white sm:text-6xl">Build lasting healthy habits.</h2>
      <p className="mx-auto mt-5 max-w-xl font-dm-sans text-lg text-white/80">
        Join thousands protecting their eyes and reclaiming their time — one 20-second break at a time.
      </p>
      <div className="mt-8 flex justify-center">
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" data-testid="motion-final-cta" className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3.5 font-fredoka font-semibold text-[#241F1B] transition-all hover:opacity-90">
          <AppleLogo className="h-6 w-6" />
          <span className="flex flex-col items-start leading-none">
            <span className="text-[10px] font-dm-sans font-normal opacity-70">Download on the</span>
            <span className="text-lg">App Store</span>
          </span>
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="px-6 pt-16 pb-8 lg:px-8" style={{ backgroundColor: BG }}>
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <img src={APP_LOGO} alt="BlinkBear" className="h-10 w-10 rounded-2xl object-cover" />
            <span className="font-fredoka text-2xl font-semibold">BlinkBear</span>
          </div>
          <p className="mt-4 font-dm-sans text-[#241F1B]/60">
            Protect your vision and break screen addiction with the scientifically-proven 20-20-20 rule.
          </p>
        </div>
        <div className="flex gap-16">
          <div>
            <h4 className="font-fredoka text-lg font-semibold">Explore</h4>
            <ul className="mt-4 space-y-2 font-dm-sans text-[#241F1B]/60">
              <li><a href="#features" className="hover:text-[#241F1B]">Features</a></li>
              <li><a href="#how" className="hover:text-[#241F1B]">How it works</a></li>
              <li><a href="#pricing" className="hover:text-[#241F1B]">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-fredoka text-lg font-semibold">Connect</h4>
            <ul className="mt-4 space-y-2 font-dm-sans text-[#241F1B]/60">
              <li><a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#241F1B]">App Store</a></li>
              <li><a href={`mailto:${CONTACT_EMAIL}`} data-testid="motion-footer-email" className="hover:text-[#241F1B]">{CONTACT_EMAIL}</a></li>
              <li><Link to="/privacy" data-testid="motion-footer-privacy" className="hover:text-[#241F1B]">Privacy Policy</Link></li>
              <li><Link to="/impressum" data-testid="motion-footer-impressum" className="hover:text-[#241F1B]">Impressum</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mt-10 border-t pt-8 font-dm-sans text-sm text-[#241F1B]/45" style={{ borderColor: "rgba(36,31,27,0.1)" }}>
        © {new Date().getFullYear()} BlinkBear. All eyes reserved.
      </p>
    </div>
  </footer>
);

export default function MotionLanding() {
  return (
    <ScrollVideoIntro subtitle="Scroll to meet BlinkBear">
      <div className="min-h-screen overflow-x-hidden font-dm-sans" style={{ backgroundColor: BG, color: INK }}>
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
    </ScrollVideoIntro>
  );
}
