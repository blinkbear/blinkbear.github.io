import { Link, useLocation } from "react-router-dom";
import { Palette } from "lucide-react";

const OPTIONS = [
  { to: "/", label: "Cozy", testid: "switch-cozy" },
  { to: "/soft", label: "Soft", testid: "switch-soft" },
  { to: "/motion", label: "Motion", testid: "switch-motion" },
  { to: "/minimal", label: "Minimal", testid: "switch-minimal" },
  { to: "/futuristic", label: "Futuristic", testid: "switch-futuristic" },
];

export default function DesignSwitcher() {
  const { pathname } = useLocation();
  return (
    <div
      data-testid="design-switcher"
      className="fixed bottom-5 left-1/2 z-[9998] -translate-x-1/2"
    >
      <div className="flex items-center gap-1 rounded-full border border-black/10 bg-white/80 p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl">
        <span className="hidden items-center gap-1.5 px-3 text-xs font-semibold text-black/50 sm:flex">
          <Palette className="h-3.5 w-3.5" /> Theme
        </span>
        {OPTIONS.map((o) => {
          const active = pathname === o.to;
          return (
            <Link
              key={o.to}
              to={o.to}
              data-testid={o.testid}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                active
                  ? "bg-[#18181B] text-white shadow-sm"
                  : "text-black/60 hover:bg-black/5 hover:text-black"
              }`}
            >
              {o.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
