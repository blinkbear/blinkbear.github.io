import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Eye, ArrowLeft } from "lucide-react";

export default function LegalLayout({ title, subtitle, updated, children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFDF8] font-dm-sans text-[#18181B]">
      <header className="sticky top-0 z-50 border-b-4 border-[#18181B] bg-[#FFFDF8]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link to="/" data-testid="legal-logo" className="flex items-center gap-2.5">
            <div className="grid h-11 w-11 place-items-center rounded-2xl border-4 border-[#18181B] bg-[#A1E3CB] shadow-[3px_3px_0_0_#18181B]">
              <Eye className="h-5 w-5" strokeWidth={2.6} />
            </div>
            <span className="font-fredoka text-2xl font-bold tracking-tight">BlinkBear</span>
          </Link>
          <Link
            to="/"
            data-testid="legal-back-home"
            className="inline-flex items-center gap-2 rounded-full border-4 border-[#18181B] bg-[#FDE047] px-5 py-2.5 font-fredoka font-bold shadow-[3px_3px_0_0_#18181B] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[0px_0px_0_0_#18181B]"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2.6} /> Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-[2rem] border-4 border-[#18181B] bg-white p-8 shadow-[8px_8px_0_0_#18181B] md:p-14">
          <h1 className="font-fredoka text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          {subtitle && <p className="mt-3 font-dm-sans text-lg text-[#18181B]/70">{subtitle}</p>}
          {updated && (
            <span className="mt-5 inline-block rounded-full border-2 border-[#18181B] bg-[#A1E3CB] px-4 py-1.5 text-sm font-bold shadow-[2px_2px_0_0_#18181B]">
              Last updated: {updated}
            </span>
          )}
          <div className="legal-content mt-10">{children}</div>
        </div>
      </main>

      <footer className="border-t-4 border-[#18181B] bg-[#18181B] px-6 py-10 text-center text-[#FFFDF8]">
        <p className="font-dm-sans text-sm text-[#FFFDF8]/60">
          © {new Date().getFullYear()} BlinkBear. All eyes reserved.
        </p>
      </footer>
    </div>
  );
}

export const Section = ({ title, children }) => (
  <section className="mt-8 first:mt-0">
    <h2 className="font-fredoka text-2xl font-bold tracking-tight">{title}</h2>
    <div className="mt-3 space-y-3 font-dm-sans leading-relaxed text-[#18181B]/80">{children}</div>
  </section>
);
