import { useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export const INTRO_VIDEO = `${process.env.PUBLIC_URL || ""}/intro.mp4`;
export const INTRO_POSTER = `${process.env.PUBLIC_URL || ""}/intro-poster.jpg`;

/**
 * Scroll-scrubbed cinematic intro that blends into the page.
 *
 * The video is a FIXED full-screen backdrop. A tall transparent spacer
 * provides the scroll distance used to scrub the video. The page content
 * (children) sits after the spacer and, over the final frames, rises up and
 * cross-fades in over the video — so you keep scrolling straight into the site.
 */
export default function ScrollVideoIntro({
  children,
  src = INTRO_VIDEO,
  scrollMult = 3,
  title = "Your eyes deserve better.",
  subtitle = "Keep scrolling",
}) {
  const spacerRef = useRef(null);
  const videoLayerRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const cueRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const spacer = spacerRef.current;
    const layer = videoLayerRef.current;
    const content = contentRef.current;
    if (!video || !spacer) return;

    // Always begin at the very top on the first frame (disable scroll restore)
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    video.pause();
    let duration = 0;
    const onMeta = () => { duration = video.duration || 0; };
    if (video.readyState >= 1) onMeta();
    video.addEventListener("loadedmetadata", onMeta);

    // Coalesced seeking: keep only one seek in flight. Rapid scroll just
    // moves the target; the next seek fires when 'seeked' resolves. A safety
    // timer unsticks us if 'seeked' never fires (some browsers skip it).
    let targetTime = 0;
    let seeking = false;
    let seekTimer = null;
    const doSeek = () => {
      if (!duration || seeking) return;
      if (Math.abs(video.currentTime - targetTime) < 0.02) return;
      seeking = true;
      try {
        video.currentTime = targetTime;
      } catch (e) {
        seeking = false;
        return;
      }
      if (seekTimer) clearTimeout(seekTimer);
      seekTimer = setTimeout(() => { seeking = false; doSeek(); }, 160);
    };
    const onSeeked = () => {
      if (seekTimer) { clearTimeout(seekTimer); seekTimer = null; }
      seeking = false;
      doSeek();
    };
    video.addEventListener("seeked", onSeeked);

    let raf = null;
    const update = () => {
      raf = null;
      const S = spacer.offsetHeight || 1;
      const vh = window.innerHeight;
      const y = window.scrollY || window.pageYOffset || 0;
      const progress = Math.min(1, Math.max(0, y / S));

      // scrub video (coalesced)
      if (duration && isFinite(duration)) {
        targetTime = Math.min(duration - 0.05, progress * duration);
        doSeek();
      }

      // intro overlay fades early
      if (titleRef.current) {
        titleRef.current.style.opacity = String(Math.max(0, 1 - progress / 0.4));
        titleRef.current.style.transform = `translateY(${progress * -30}px)`;
      }
      if (cueRef.current) {
        cueRef.current.style.opacity = String(Math.max(0, 1 - progress / 0.25));
      }

      // reveal window = final viewport of scroll (the last frames)
      const revealStart = Math.max(0, (S - vh) / S);
      let reveal = (progress - revealStart) / (1 - revealStart || 1);
      reveal = Math.min(1, Math.max(0, reveal));
      // smootherstep for a gentle, well-paced hand-off into the page
      const eased = reveal * reveal * reveal * (reveal * (reveal * 6 - 15) + 10);
      if (content) content.style.opacity = String(eased);

      // hide backdrop once fully covered (perf); show again when scrolling up
      if (layer) layer.style.visibility = reveal >= 0.999 ? "hidden" : "visible";
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    // iOS Safari needs a brief muted play/pause to decode frames before
    // seeking will render them. Best-effort only — never blocks scrubbing.
    let primed = false;
    const prime = () => {
      if (primed) return;
      primed = true;
      const p = video.play();
      if (p && p.then) {
        p.then(() => {
          setTimeout(() => { try { video.pause(); } catch (e) {} doSeek(); }, 60);
        }).catch(() => { primed = false; });
      } else {
        try { video.pause(); } catch (e) {}
      }
    };
    video.addEventListener("loadeddata", prime);
    video.addEventListener("canplay", prime);
    if (video.readyState >= 2) prime();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      video.removeEventListener("loadedmetadata", onMeta);
      video.removeEventListener("loadeddata", prime);
      video.removeEventListener("canplay", prime);
      video.removeEventListener("seeked", onSeeked);
      if (seekTimer) clearTimeout(seekTimer);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [src, scrollMult]);

  return (
    <>
      {/* Fixed cinematic backdrop */}
      <div
        ref={videoLayerRef}
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black"
        style={{ willChange: "transform" }}
      >
        <video
          ref={videoRef}
          src={src}
          poster={INTRO_POSTER}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          data-testid="intro-video"
          style={{ backgroundImage: `url(${INTRO_POSTER})`, backgroundSize: "cover", backgroundPosition: "center" }}
          className="h-full w-full object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

        <div ref={titleRef} className="pointer-events-none absolute inset-x-0 top-[38%] px-6 text-center">
          <h2 className="mx-auto max-w-3xl font-fredoka text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-6xl">
            {title}
          </h2>
        </div>

        <div ref={cueRef} className="pointer-events-none absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 text-white/90">
          <span className="font-dm-sans text-sm font-medium tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
            {subtitle}
          </span>
          <ChevronDown className="h-6 w-6 animate-bounce drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]" />
        </div>
      </div>

      {/* Transparent scroll spacer that drives the scrub */}
      <div ref={spacerRef} aria-hidden style={{ height: `${scrollMult * 100}vh` }} />

      {/* The site — rises up and cross-fades in over the final frames */}
      <div ref={contentRef} className="relative z-10">
        {children}
      </div>
    </>
  );
}
