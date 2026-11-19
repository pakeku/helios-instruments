import {
  Activity, Building2, Cog, FlaskConical, Gauge, ShieldCheck, ShoppingCart, Sun, Truck, Warehouse,
} from "lucide-react";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import { IMG } from "@/lib/images";

const nav = [
  { label: "About", href: "#about" },
  { label: "Range", href: "#offer" },
  { label: "Global", href: "#global" },
  { label: "Why Helios", href: "#why" },
];

const facts = [
  { value: "~850", label: "employees" },
  { value: "5", label: "warehouses" },
  { value: "3", label: "offices, including headquarters" },
  { value: "Worldwide", label: "shipping, direct to you" },
];

const offers = [
  { icon: Gauge, title: "Professional hardware", img: IMG.hardware, alt: "Precision measuring instrument",
    text: "Precision instruments and equipment built for labs, workshops and production floors." },
  { icon: FlaskConical, title: "Consumable materials", img: IMG.consumables, alt: "Laboratory glassware and materials",
    text: "The everyday materials your work runs on, restocked directly so nothing waits." },
  { icon: Cog, title: "Parts", img: IMG.parts, alt: "Close-up of electronic components",
    text: "Replacement parts and components that keep every instrument performing." },
];

const offices = [
  { place: "Denver, USA", role: "Headquarters" },
  { place: "Reading, UK", role: "Office" },
  { place: "Hannover, Germany", role: "Office" },
];

const warehouses = ["Pennsylvania, USA", "Nevada, USA", "United Kingdom", "Germany", "China"];

const why = [
  { icon: ShieldCheck, title: "Quality you can verify", img: IMG.quality, alt: "Engineer inspecting a precision part",
    text: "Every instrument, material and part is specified and checked to professional standards." },
  { icon: Activity, title: "Reliable, run after run", img: IMG.reliability, alt: "Industrial machinery in operation",
    text: "Consistent performance and dependable supply keep your lab or line moving." },
  { icon: Truck, title: "Global logistics", img: IMG.logistics, alt: "Cargo containers ready for shipping",
    text: "Five warehouses across four countries put stock closer to where you work." },
  { icon: ShoppingCart, title: "Buy direct, online", img: IMG.direct, alt: "Customer ordering online",
    text: "Order straight from Helios: no middlemen, clear pricing, quick fulfilment." },
];

function Heading({ title, text, dark = false }: { title: string; text?: string; dark?: boolean }) {
  return (
    <div className="max-w-2xl">
      <h2 className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-navy-900"}`}>
        {title}
      </h2>
      {text && <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/70" : "text-slate-600"}`}>{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-950/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold text-white">
            <Sun className="text-gold-400" size={22} aria-hidden /> Helios Instruments
          </a>
          <nav aria-label="Primary" className="hidden gap-8 text-sm text-white/80 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-gold-400">{n.label}</a>
            ))}
          </nav>
          <a href="#offer" className="rounded-md bg-gold-500 px-4 py-2 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400">
            Shop online
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative isolate flex min-h-[85vh] items-center overflow-hidden bg-navy-950">
          <Photo src={IMG.hero} alt="Precision instruments on an engineering workbench" priority />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/65 to-navy-950/10" />
          <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
            <h1 className="max-w-4xl font-display text-6xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Helios Instruments
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
              Professional hardware, consumable materials and parts. Sold direct online and shipped worldwide from five warehouses.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href="#offer" className="rounded-md bg-gold-500 px-8 py-4 font-semibold text-navy-950 shadow-lg shadow-black/30 transition hover:-translate-y-0.5 hover:bg-gold-400">
                Browse the range
              </a>
              <a href="#global" className="font-medium text-white underline decoration-gold-500 decoration-2 underline-offset-8 transition-colors hover:text-gold-300">
                See where we ship from
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
            <Photo src={IMG.about} alt="Engineer working in a modern facility" sizes="(min-width:1024px) 50vw, 100vw" />
          </div>
          <div>
            <Heading title="Precision, delivered direct" />
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Helios Instruments supplies professional hardware along with the consumable materials and parts that keep it running. Our team of about 850 is headquartered in Denver, with offices in Reading (UK) and Hannover (Germany). We sell directly to customers online and ship worldwide from five warehouses in Pennsylvania, Nevada, the UK, Germany and China.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6">
              {facts.map((f) => (
                <div key={f.label} className="border-t-2 border-gold-500 pt-3">
                  <dt className="sr-only">{f.label}</dt>
                  <dd className="font-display text-3xl font-semibold text-navy-900">{f.value}</dd>
                  <dd className="mt-1 text-sm text-slate-500">{f.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="offer" className="bg-slate-100 pt-24">
          <div className="mx-auto max-w-7xl px-6 pb-12">
            <Heading
              title="Everything your instruments need"
              text="Hardware, the materials that go with it, and the parts that keep it running, from one supplier on one order."
            />
          </div>
          <div className="grid md:grid-cols-3 md:gap-1">
            {offers.map((o) => (
              <article key={o.title} className="group relative isolate flex min-h-[30rem] items-end overflow-hidden bg-navy-950">
                <Photo src={o.img} alt={o.alt} sizes="(min-width:768px) 33vw, 100vw" className="transition-transform duration-700 group-hover:scale-105" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                <div className="relative p-8">
                  <o.icon className="mb-4 text-gold-400" size={28} aria-hidden />
                  <h3 className="font-display text-2xl font-semibold text-white">{o.title}</h3>
                  <p className="mt-2 max-w-sm leading-relaxed text-white/80">{o.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="global" className="relative isolate overflow-hidden bg-navy-950 py-24 text-white">
          <Photo src={IMG.globe} alt="" className="opacity-30" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/70 to-navy-950" />
          <div className="relative mx-auto max-w-7xl px-6">
            <Heading
              dark
              title="One network, five warehouses"
              text="Stock sits close to our customers in North America, Europe and Asia, so orders leave the nearest warehouse."
            />
            <div className="relative mt-12 flex min-h-[20rem] items-end overflow-hidden rounded-lg">
              <Photo src={IMG.warehouse} alt="Modern warehouse with stocked shelving" sizes="(min-width:1280px) 1200px, 100vw" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent" />
              <p className="relative max-w-md p-8 font-display text-2xl font-semibold">
                Ordered online, packed and shipped from the warehouse nearest you.
              </p>
            </div>
            <div className="mt-14 grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="font-display text-xl font-semibold text-gold-400">Offices</h3>
                <ul className="mt-4 divide-y divide-white/15 border-y border-white/15">
                  {offices.map((o) => (
                    <li key={o.place} className="flex items-center gap-4 py-4">
                      <Building2 className="text-gold-400" size={22} aria-hidden />
                      <span className="font-medium">{o.place}</span>
                      <span className="ml-auto text-sm text-white/60">{o.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-gold-400">Warehouses</h3>
                <ul className="mt-4 divide-y divide-white/15 border-y border-white/15">
                  {warehouses.map((w) => (
                    <li key={w} className="flex items-center gap-4 py-4">
                      <Warehouse className="text-gold-400" size={22} aria-hidden />
                      <span className="font-medium">{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="why" className="mx-auto max-w-7xl px-6 py-24">
          <Heading title="Why customers choose Helios" />
          <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2">
            {why.map((w) => (
              <div key={w.title} className="group">
                <div className="relative aspect-[3/2] overflow-hidden rounded-md shadow-md">
                  <Photo src={w.img} alt={w.alt} sizes="(min-width:640px) 50vw, 100vw" className="transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-5 flex gap-4">
                  <w.icon className="mt-1 shrink-0 text-gold-600" size={24} aria-hidden />
                  <div>
                    <h3 className="font-display text-xl font-semibold text-navy-900">{w.title}</h3>
                    <p className="mt-1 max-w-md leading-relaxed text-slate-600">{w.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-gold-500 bg-navy-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="flex items-center gap-2 font-display text-lg font-semibold">
              <Sun className="text-gold-400" size={20} aria-hidden /> Helios Instruments
            </p>
            <p className="mt-2 text-white/70">Precision hardware, materials and parts, shipped worldwide.</p>
          </div>
          <SocialLinks />
        </div>
        <p className="border-t border-white/10 py-5 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Helios Instruments. A demo website created for a case study.
        </p>
      </footer>
    </>
  );
}
