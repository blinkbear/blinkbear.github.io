import { useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export const INTRO_VIDEO = `${process.env.PUBLIC_URL || ""}/intro.mp4`;
export const INTRO_POSTER = `${process.env.PUBLIC_URL || ""}/intro-poster.jpg`;

/**
 * Scroll-scrubbed cinematic intro.
 * A tall scroll region pins a full-screen video; scroll position scrubs
 * through the video. Once past the region, the page content flows normally.
 */
export default function ScrollVideoIntro({
  src = INTRO_VIDEO,
  heightVh = 320,
  title = "Your eyes deserve better.",
  subtitle = "Keep scrolling",
}) {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const cueRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;

    video.pause();
    let duration = 0;
    const onMeta = () => { duration = video.duration || 0; };
    if (video.readyState >= 1) onMeta();
    video.addEventListener("loadedmetadata", onMeta);

    let raf = null;
    const update = () => {
      raf = null;
      const scrollable = wrap.offsetHeight - window.innerHeight;
      const top = wrap.getBoundingClientRect().top;
      const progress = Math.min(1, Math.max(0, -top / scrollable));

      if (duration && isFinite(duration)) {
        const t = progress * duration;
        if (Math.abs(video.currentTime - t) > 0.03) {
          try { video.currentTime = t; } catch (e) {}
        }
      }
      if (titleRef.current) {
        titleRef.current.style.opacity = String(Math.max(0, 1 - progress / 0.35));
        titleRef.current.style.transform = `translateY(${progress * -40}px)`;
      }
      if (cueRef.current) {
        cueRef.current.style.opacity = String(Math.max(0, 1 - progress / 0.25));
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      video.removeEventListener("loadedmetadata", onMeta);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [src]);

  return (
    <section ref={wrapRef} style={{ height: `${heightVh}vh` }} className="relative bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={src}
          poster={INTRO_POSTER}
          muted
          playsInline
          preload="auto"
          data-testid="intro-video"
          className="h-full w-full object-cover"
        />
        {/* legibility gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

        <div
          ref={titleRef}
          className="pointer-events-none absolute inset-x-0 top-[38%] px-6 text-center"
        >
          <h2 className="mx-auto max-w-3xl font-fredoka text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-6xl">
            {title}
          </h2>
        </div>

        <div
          ref={cueRef}
          className="pointer-events-none absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 text-white/90"
        >
          <span className="font-dm-sans text-sm font-medium tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
            {subtitle}
          </span>
          <ChevronDown className="h-6 w-6 animate-bounce drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]" />
        </div>
      </div>
    </section>
  );
}
