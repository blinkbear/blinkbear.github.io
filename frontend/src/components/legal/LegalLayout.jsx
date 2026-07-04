import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const APP_LOGO = "https://customer-assets.emergentagent.com/job_vision-breaks/artifacts/2fzibdh5_AppIcon.png";
const ACCENT = "#C96F3C";
const INK = "#241F1B";
const BG = "#FBF8F3";

export default function LegalLayout({ title, subtitle, updated, children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-dm-sans" style={{ backgroundColor: BG, color: INK }}>
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-xl"
        style={{ borderColor: "rgba(36,31,27,0.08)", backgroundColor: "rgba(251,248,243,0.82)" }}
      >
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link to="/" data-testid="legal-logo" className="flex items-center gap-2.5">
            <img
              src={APP_LOGO}
              alt="BlinkBear"
              className="h-10 w-10 rounded-2xl object-cover"
              style={{ boxShadow: "0 2px 10px rgba(36,31,27,0.12)" }}
            />
            <span className="font-fredoka text-2xl font-semibold tracking-tight">BlinkBear</span>
          </Link>
          <Link
            to="/"
            data-testid="legal-back-home"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-fredoka font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: INK }}
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2.2} /> Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_24px_60px_-30px_rgba(36,31,27,0.4)] md:p-14">
          <h1 className="font-fredoka text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          {subtitle && <p className="mt-3 font-dm-sans text-lg text-[#241F1B]/65">{subtitle}</p>}
          {updated && (
            <span
              className="mt-5 inline-block rounded-full px-4 py-1.5 text-sm font-semibold"
              style={{ backgroundColor: "rgba(201,111,60,0.1)", color: ACCENT }}
            >
              Last updated: {updated}
            </span>
          )}
          <div className="legal-content mt-10">{children}</div>
        </div>
      </main>

      <footer className="border-t px-6 py-10 text-center" style={{ borderColor: "rgba(36,31,27,0.1)" }}>
        <p className="font-dm-sans text-sm text-[#241F1B]/45">
          © {new Date().getFullYear()} BlinkBear. All eyes reserved.
        </p>
      </footer>
    </div>
  );
}

export const Section = ({ title, children }) => (
  <section className="mt-8 first:mt-0">
    <h2 className="font-fredoka text-2xl font-semibold tracking-tight">{title}</h2>
    <div className="mt-3 space-y-3 font-dm-sans leading-relaxed text-[#241F1B]/80">{children}</div>
  </section>
);
