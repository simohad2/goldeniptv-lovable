import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Clapperboard,
  Clock,
  Globe,
  ChevronDown,
  MonitorSmartphone,
  Play,
  Search,
  Trophy,
  Tv,
  Globe2,
} from "lucide-react";
import hero from "@/assets/football-hero.png.asset.json";
import posters from "@/assets/catalogue-poster-wall.png.asset.json";
import pl from "@/assets/pl.png.asset.json";
import seriea from "@/assets/seriea.png.asset.json";
import laliga from "@/assets/laliga.png.asset.json";
import bundesliga from "@/assets/bundesliga.png.asset.json";
import ligue1 from "@/assets/ligue1.png.asset.json";
import netflix from "@/assets/netflix.png.asset.json";
import prime from "@/assets/prime.png.asset.json";
import disney from "@/assets/disney.png.asset.json";
import hbomax from "@/assets/hbomax.png.asset.json";
import hulu from "@/assets/hulu.png.asset.json";
import paramount from "@/assets/paramount.png.asset.json";
import appletv from "@/assets/appletv.png.asset.json";
import canal from "@/assets/canal.png.asset.json";
import bein from "@/assets/bein.png.asset.json";
import sky from "@/assets/sky.png.asset.json";
import espn from "@/assets/espn.png.asset.json";
import iptv from "@/assets/iptv.png.asset.json";
import shahid from "@/assets/shahid.png.asset.json";
import tod from "@/assets/tod.png.asset.json";
import youtubetv from "@/assets/youtubetv.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Golden IPTV — Football, Movies & Series in One Subscription" },
      {
        name: "description",
        content:
          "Follow major football leagues plus movies, series and live TV in one Golden IPTV subscription. Start a 24-hour free trial.",
      },
      { property: "og:title", content: "Golden IPTV — Your Football. Your Entertainment." },
      {
        property: "og:description",
        content: "Major football leagues, movies, series and live TV — one subscription.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = ["Home", "Pricing", "Devices", "Guides", "FAQ", "Contact"];
const ROW1 = [netflix, prime, disney, hbomax, hulu, paramount, appletv];
const ROW2 = [canal, bein, sky, espn, iptv, shahid, tod, youtubetv];
const LEAGUES: { name: string; logo?: string; icon?: "trophy" | "globe" }[] = [
  { name: "All Sports", icon: "trophy" },
  { name: "Premier League", logo: pl.url },
  { name: "LaLiga", logo: laliga.url },
  { name: "Serie A", logo: seriea.url },
  { name: "Bundesliga", logo: bundesliga.url },
  { name: "Ligue 1", logo: ligue1.url },
  { name: "International", icon: "globe" },
];

function Logo({ small = false }: { small?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <Play
        className={`${small ? "size-6" : "size-9"} fill-violet text-electric`}
        strokeWidth={1.5}
      />
      <span className={`${small ? "text-lg" : "text-2xl"} font-bold tracking-tight`}>
        Golden IPTV
      </span>
    </div>
  );
}

function Header() {
  return (
    <header className="relative z-20 mx-auto flex max-w-[1680px] items-center justify-between px-16 pt-5">
      <Logo />
      <nav className="flex items-center gap-2 text-[15px]">
        {NAV.map((n, i) => (
          <a
            key={n}
            href="#"
            className={
              i === 0
                ? "rounded-lg border border-violet/60 bg-violet/25 px-4 py-2 font-medium shadow-glow"
                : "px-4 py-2 text-foreground/85 transition-colors hover:text-foreground"
            }
          >
            {n}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-8">
        <a
          href="#"
          className="flex items-center gap-2 rounded-lg bg-gradient-brand px-5 py-2.5 text-sm font-semibold shadow-glow"
        >
          Start 24-Hour Free Trial <ArrowRight className="size-4" />
        </a>
        <button className="flex items-center gap-1.5 text-sm">
          <Globe className="size-4" /> EN <ChevronDown className="size-3.5" />
        </button>
      </div>
    </header>
  );
}

function TV() {
  return (
    <div className="relative" style={{ perspective: "2200px" }}>
      {/* environmental glow */}
      <div className="pointer-events-none absolute -inset-x-10 -top-12 bottom-24 rounded-[40%] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--electric)_22%,transparent),color-mix(in_oklab,var(--violet)_10%,transparent)_45%,transparent_72%)] blur-2xl" />
      <div
        className="relative rounded-[18px] border border-foreground/15 bg-gradient-to-b from-midnight-2 to-midnight p-[10px] tv-rim"
        style={{ transform: "rotateY(-7deg) rotateX(1deg)", transformOrigin: "left center" }}
      >
        {/* screen */}
        <div className="relative overflow-hidden rounded-[10px] bg-midnight ring-1 ring-electric/30">
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-foreground/[0.07] via-transparent to-transparent" />
          {/* top bar */}
          <div className="flex items-center px-6 pt-5 pb-3">
            <Logo small />
            <div className="ml-16 flex items-center gap-8 text-[13px] text-foreground/80">
              {["Live TV", "Sports", "Movies", "Series", "Kids"].map((t) => (
                <span
                  key={t}
                  className={
                    t === "Sports"
                      ? "rounded-md border-b-2 border-violet bg-violet/25 px-3 py-1.5 font-semibold text-foreground"
                      : ""
                  }
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="ml-auto flex items-center gap-5">
              <Search className="size-5" />
              <Bell className="size-5" />
              <div className="size-8 rounded-full bg-gradient-brand ring-2 ring-foreground/30" />
            </div>
          </div>
          <div className="flex gap-4 px-4 pb-5">
            {/* sidebar */}
            <aside className="w-[170px] shrink-0 space-y-1 pt-1">
              {LEAGUES.map((l, i) => (
                <div
                  key={l.name}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] ${
                    i === 0 ? "bg-gradient-brand font-semibold shadow-glow" : "text-foreground/90"
                  }`}
                >
                  <span className="flex size-6 items-center justify-center">
                    {l.logo ? (
                      <img src={l.logo} alt={l.name} className="max-h-6 max-w-6 object-contain" />
                    ) : l.icon === "trophy" ? (
                      <Trophy className="size-5" />
                    ) : (
                      <Globe2 className="size-5" />
                    )}
                  </span>
                  {l.name}
                </div>
              ))}
            </aside>
            {/* main */}
            <div className="min-w-0 flex-1">
              <div className="relative h-[272px] overflow-hidden rounded-xl ring-1 ring-electric/40">
                <img
                  src={hero.url}
                  alt="Footballer striking the ball in a floodlit stadium"
                  className="absolute inset-0 h-full w-full object-cover object-[70%_35%]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-midnight/90 via-midnight/40 to-transparent" />
                <div className="absolute bottom-6 left-7 max-w-[300px]">
                  <span className="rounded bg-violet px-2 py-0.5 text-[11px] font-bold tracking-wide">
                    LIVE FOOTBALL
                  </span>
                  <h3 className="mt-2 text-[26px] leading-[1.1] font-bold">
                    Major Leagues
                    <br />
                    and Competitions
                  </h3>
                  <p className="mt-2 text-[12px] leading-snug text-foreground/85">
                    Enjoy world-class football as part of your Golden IPTV subscription.
                  </p>
                  <button className="mt-3 flex items-center gap-2 rounded-full border border-foreground/30 bg-midnight/50 py-1 pr-4 pl-1 text-[12px] font-medium">
                    <span className="flex size-7 items-center justify-center rounded-full border border-foreground/60">
                      <Play className="size-3 fill-foreground" />
                    </span>
                    Watch Now
                  </button>
                </div>
              </div>
              <p className="mt-3 mb-2 text-[13px] font-semibold">Popular Streaming Platforms</p>
              <div className="grid grid-cols-7 gap-1.5">
                {ROW1.map((l, i) => (
                  <LogoTile key={i} src={l.url} />
                ))}
              </div>
              <div className="mt-1.5 grid grid-cols-8 gap-1.5">
                {ROW2.map((l, i) => (
                  <LogoTile key={i} src={l.url} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* bottom lip */}
        <div className="mx-auto mt-[6px] h-[3px] w-24 rounded-full bg-electric/70 shadow-[0_0_12px_var(--electric)]" />
      </div>
      {/* stand */}
      <div className="relative mx-auto -mt-1 h-10 w-24 bg-gradient-to-b from-midnight-2 to-midnight" />
      <div className="relative z-10 mx-auto h-3 w-[46%] rounded-t-lg border-t border-foreground/20 bg-midnight-2" />
      {/* desk surface */}
      <div className="pointer-events-none relative -mt-3 h-24">
        <div className="absolute -top-6 -right-14 -left-[22%] h-40 desk-plane" />
        <div className="absolute top-0 -right-14 -left-[22%] h-px desk-edge" />
        {/* reflection of the display */}
        <div className="absolute top-1 left-[8%] h-14 w-[84%] desk-reflection" />
        {/* contact shadow + highlight under base */}
        <div className="absolute top-0 left-1/2 h-5 w-[50%] -translate-x-1/2 rounded-[50%] bg-midnight blur-sm" />
        <div className="absolute top-[2px] left-1/2 h-[2px] w-[40%] -translate-x-1/2 desk-contact" />
      </div>
    </div>
  );
}

function LogoTile({ src }: { src: string }) {
  return (
    <div className="aspect-[1.55/1] overflow-hidden rounded-md border border-foreground/15 bg-glass shadow-[inset_0_1px_0_oklch(1_0_0/0.12)]">
      <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
    </div>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden scene-bg font-sans text-foreground">
      {/* atmosphere */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] scene-beams" />
      <div className="pointer-events-none absolute inset-0 scene-vignette" />

      <Header />

      <section className="relative z-10 mx-auto flex max-w-[1680px] items-start pt-16 pl-16">
        <div className="w-[34%] shrink-0 pt-10 pr-4">
          <p className="text-[15px] tracking-[0.3em] text-foreground/85">
            FOOTBALL • SPORTS • ENTERTAINMENT
          </p>
          <h1 className="mt-5 text-[52px] leading-[1.05] font-bold tracking-tight">
            Your Football.
            <br />
            Your Entertainment.
            <br />
            <span className="text-gradient-brand">One Subscription.</span>
          </h1>
          <p className="mt-6 max-w-[460px] text-[19px] leading-[1.45] text-muted-foreground">
            Follow major football leagues and competitions, plus movies, series and live
            entertainment in one Golden IPTV experience.
          </p>
          <div className="mt-8 flex gap-5">
            <a
              href="#"
              className="flex items-center gap-3 rounded-xl bg-gradient-brand px-7 py-4 text-[17px] font-semibold shadow-glow"
            >
              Start 24-Hour Free Trial <ArrowRight className="size-5" />
            </a>
            <a
              href="#"
              className="flex items-center rounded-xl border border-electric/70 px-11 py-4 text-[17px] font-semibold transition-colors hover:bg-electric/10"
            >
              Explore Plans
            </a>
          </div>
          <div className="mt-8 flex gap-7 text-[13px] text-foreground/85">
            {[
              [Clock, "24-hour free trial"],
              [CalendarDays, "Multiple plan periods"],
              [MonitorSmartphone, "Device setup guides"],
            ].map(([I, t]) => {
              const Icon = I as typeof Clock;
              return (
                <span key={t as string} className="flex items-center gap-2">
                  <Icon className="size-6 text-violet" strokeWidth={1.5} />
                  {t as string}
                </span>
              );
            })}
          </div>
        </div>
        <div className="-mt-6 min-w-0 flex-1 pr-14">
          <TV />
        </div>
      </section>

      {/* catalogue */}
      <section className="relative z-10 mx-auto -mt-2 flex max-w-[1680px] items-end pb-10 pl-16">
        <div className="relative z-10 w-[55%] shrink-0">
          <p className="text-[14px] tracking-[0.3em] text-foreground/85">
            ENTERTAINMENT FOR EVERYONE
          </p>
          <h2 className="mt-3 text-[42px] leading-[1.1] font-bold tracking-tight">
            Everything You Want to Watch.
            <br />
            <span className="text-gradient-brand">One Subscription.</span>
          </h2>
          <p className="mt-3 text-[18px] text-muted-foreground">
            Live TV, movies, series and more — all in one place.
          </p>
          <div className="mt-5 flex gap-4">
            {[
              [Tv, "30,000+", "Live Channels", "text-electric"],
              [Clapperboard, "160,000+", "Movies", "text-violet"],
              [Play, "59,000+", "Series", "text-violet"],
            ].map(([I, n, l, c]) => {
              const Icon = I as typeof Tv;
              return (
                <div
                  key={l as string}
                  className="flex w-[270px] items-center gap-6 rounded-xl border border-foreground/12 bg-midnight-2/80 px-6 py-3 backdrop-blur"
                >
                  <Icon className={`size-12 ${c as string}`} strokeWidth={1.4} />
                  <div>
                    <div className="text-[26px] leading-tight font-bold">{n as string}</div>
                    <div className="text-[16px] text-foreground/85">{l as string}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="pointer-events-none absolute right-0 bottom-0 h-[320px] w-[62%]" style={{ background: "radial-gradient(ellipse 50% 45% at 60% 70%, color-mix(in oklab, var(--violet) 12%, transparent), transparent)" }} />
        <div
          className="pointer-events-none absolute right-0 bottom-0 h-[260px] w-[58%]"
          style={{ perspective: "1200px" }}
        >
          <img
            src={posters.url}
            alt="Wall of movie and series posters"
            className="h-full w-full object-cover object-left"
            style={{
              transform: "rotateY(-14deg)",
              transformOrigin: "right center",
              maskImage:
                "linear-gradient(90deg, transparent 0%, black 22%, black 100%), linear-gradient(0deg, transparent, black 25%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          />
        </div>
      </section>
    </main>
  );
}
