import {
  ArrowRightLeft,
  BarChart2,
  Brain,
  CircleCheck,
  Cpu,
  Database,
  Globe,
  Leaf,
  Menu,
  Network,
  Recycle,
  Server,
  TrendingDown,
  Wind,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/* ---------- data ---------- */
const monthlyCostData = [
  { platform: "AWS", cost: 9200 },
  { platform: "Azure", cost: 8800 },
  { platform: "Google Cloud", cost: 8100 },
];

const energyData = [
  { params: "1B", energy: 10 },
  { params: "7B", energy: 65 },
  { params: "13B", energy: 120 },
  { params: "30B", energy: 280 },
  { params: "70B", energy: 580 },
  { params: "175B", energy: 1000 },
];

const costBreakdown = [
  { type: "Storage", cost: "₹1,000" },
  { type: "Compute", cost: "₹7,200" },
  { type: "Data Transfer", cost: "₹200" },
];

const platformComparison = [
  {
    feature: "Pricing",
    aws: "Pay-as-you-go, competitive",
    azure: "Flexible, enterprise discounts",
    gcp: "Sustained use discounts",
  },
  {
    feature: "Scalability",
    aws: "★★★★★",
    azure: "★★★★☆",
    gcp: "★★★★★",
  },
  {
    feature: "Performance",
    aws: "★★★★★",
    azure: "★★★★☆",
    gcp: "★★★★☆",
  },
  {
    feature: "Free Tier",
    aws: "12 months + always free",
    azure: "12 months + 55+ services",
    gcp: "Always-free tier",
  },
];

const advantages = [
  {
    icon: TrendingDown,
    title: "Reduced Operational Cost",
    desc: "Sustainable practices like auto-scaling and rightsizing cut cloud bills by up to 40%, eliminating waste and idle resources.",
  },
  {
    icon: Zap,
    title: "Lower Energy Consumption",
    desc: "Efficient architectures, serverless functions, and edge computing dramatically reduce the energy footprint of cloud workloads.",
  },
  {
    icon: Recycle,
    title: "Environment-Friendly Systems",
    desc: "Migrating to renewable-energy data centers and optimizing cooling systems lowers carbon emissions significantly.",
  },
  {
    icon: BarChart2,
    title: "Improved Efficiency",
    desc: "Green cloud strategies align performance with demand, ensuring resources are used at peak efficiency rather than over-provisioned.",
  },
];

const aiMethods = [
  {
    icon: Brain,
    label: "Efficient AI Models",
    desc: "Deploy quantized and pruned models that deliver comparable accuracy at a fraction of the compute cost.",
  },
  {
    icon: Zap,
    label: "Token Optimization",
    desc: "Reduce prompt length and response tokens using smart truncation, caching, and batching strategies.",
  },
  {
    icon: Wind,
    label: "Renewable Energy Data Centers",
    desc: "Partner with cloud providers certified for 100% renewable electricity procurement.",
  },
  {
    icon: Server,
    label: "Auto-Scaling",
    desc: "Spin resources up and down automatically with load, eliminating idle capacity waste.",
  },
  {
    icon: Network,
    label: "Edge Computing",
    desc: "Process data closer to users to minimize latency and reduce data transfer energy costs.",
  },
];

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Costs", href: "#costs" },
  { label: "Sustainable AI", href: "#ai" },
  { label: "Platforms", href: "#platforms" },
  { label: "Charts", href: "#charts" },
  { label: "Advantages", href: "#advantages" },
];

/* ---------- sub-components ---------- */
function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-teal-50 text-teal-700 border border-teal-200 mb-3">
      {children}
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
      {children}
    </h2>
  );
}

function SectionSubtitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-muted-foreground text-base max-w-2xl mx-auto mb-10">
      {children}
    </p>
  );
}

function IconBadge({
  icon: Icon,
  color = "mint",
}: { icon: React.ElementType; color?: string }) {
  const cls =
    color === "mint"
      ? "bg-teal-50 text-teal-500 border border-teal-200"
      : "bg-teal-700 text-teal-200";
  return (
    <span
      className={`inline-flex items-center justify-center w-11 h-11 rounded-full ${cls}`}
    >
      <Icon size={20} />
    </span>
  );
}

/* ---------- main app ---------- */
export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      {/* ── NAV ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur shadow-xs border-b border-border"
            : "bg-transparent"
        }`}
        data-ocid="nav.panel"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-teal-700 font-bold text-lg"
            data-ocid="nav.link"
          >
            <Leaf size={22} className="text-teal-400" />
            <span className={scrolled ? "text-teal-900" : "text-white"}>
              GreenCloud Insights
            </span>
          </a>

          {/* desktop nav */}
          <nav
            className="hidden md:flex items-center gap-6"
            data-ocid="nav.section"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-teal-400 ${
                  scrolled ? "text-foreground" : "text-white/90"
                }`}
                data-ocid="nav.link"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-teal-400 text-teal-900 hover:bg-teal-500 transition-colors"
            data-ocid="nav.primary_button"
          >
            Request Demo
          </a>

          {/* mobile hamburger */}
          <button
            type="button"
            className={`md:hidden p-2 rounded-lg ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* mobile drawer */}
        {mobileOpen && (
          <div
            className="md:hidden bg-white border-t border-border px-4 pb-4 pt-2 flex flex-col gap-3"
            data-ocid="nav.modal"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-foreground hover:text-teal-500"
                data-ocid="nav.link"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-1 inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-semibold bg-teal-400 text-teal-900"
              data-ocid="nav.secondary_button"
            >
              Request Demo
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        id="hero"
        className="hero-gradient min-h-screen flex items-center pt-16"
        data-ocid="hero.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* text */}
          <div className="fade-in-up">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-teal-400/20 text-teal-200 border border-teal-400/30 mb-5">
              Sustainable Cloud Computing
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Powering the Future with{" "}
              <span className="text-teal-400">Sustainable</span> Cloud Computing
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg">
              Cloud computing and AI workloads now consume more electricity than
              entire nations. GreenCloud Insights helps organizations understand
              their true cloud costs, reduce energy waste, and build greener
              infrastructure without sacrificing performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#costs"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-teal-400 text-teal-900 hover:bg-teal-300 transition-colors text-sm"
                data-ocid="hero.primary_button"
              >
                Explore Insights
              </a>
              <a
                href="#ai"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors text-sm"
                data-ocid="hero.secondary_button"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* outer ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-teal-400/20 animate-spin"
                style={{ animationDuration: "20s" }}
              />
              <div className="absolute inset-6 rounded-full border border-teal-400/10" />
              {/* center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-teal-400/30 to-teal-700/40 border border-teal-400/30 flex items-center justify-center backdrop-blur">
                  <Leaf size={64} className="text-teal-300" />
                </div>
              </div>
              {/* floating badges */}
              {[
                { icon: Database, label: "Storage", pos: "top-0 left-1/4" },
                { icon: Cpu, label: "Compute", pos: "bottom-4 left-0" },
                { icon: Wind, label: "Renewable", pos: "bottom-4 right-0" },
              ].map(({ icon: Icon, label, pos }) => (
                <div
                  key={label}
                  className={`absolute ${pos} flex items-center gap-1.5 bg-white/10 backdrop-blur border border-white/20 rounded-xl px-3 py-2`}
                >
                  <Icon size={14} className="text-teal-300" />
                  <span className="text-white text-xs font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOUD COST COMPONENTS ── */}
      <section
        id="costs"
        className="py-20 bg-background"
        data-ocid="costs.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionBadge>Cloud Cost Components</SectionBadge>
            <SectionHeading>Understanding Your Cloud Spend</SectionHeading>
            <SectionSubtitle>
              A typical e-commerce platform breaks cloud costs into three
              primary categories. Here's how a real-world monthly bill stacks
              up.
            </SectionSubtitle>
          </div>

          {/* three cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Database,
                num: "01",
                title: "Storage Cost",
                formula: "500 GB × ₹2 / GB / month",
                result: "₹1,000 / month",
                desc: "An e-commerce platform storing product images, order data, and user records.",
              },
              {
                icon: Cpu,
                num: "02",
                title: "Compute Cost",
                formula: "2 VMs × ₹5/hr × 720 hrs",
                result: "₹7,200 / month",
                desc: "Two virtual machines running 24/7 to handle API requests and background jobs.",
              },
              {
                icon: ArrowRightLeft,
                num: "03",
                title: "Data Transfer Cost",
                formula: "200 GB × ₹1 / GB",
                result: "₹200 / month",
                desc: "Outbound bandwidth serving images and data to end users globally.",
              },
            ].map((card, i) => (
              <div
                key={card.num}
                className="bg-card rounded-2xl border border-border shadow-card p-6 flex flex-col gap-4"
                data-ocid={`costs.item.${i + 1}`}
              >
                <div className="flex items-center justify-between">
                  <IconBadge icon={card.icon} />
                  <span className="text-3xl font-black text-teal-200">
                    {card.num}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {card.title}
                </h3>
                <code className="text-xs bg-teal-50 text-teal-700 rounded-lg px-3 py-2 font-mono">
                  {card.formula}
                </code>
                <p className="text-xl font-bold text-teal-500">{card.result}</p>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* cost table */}
          <div
            className="bg-card rounded-2xl border border-border shadow-card overflow-hidden max-w-lg mx-auto"
            data-ocid="costs.table"
          >
            <div className="px-6 py-4 border-b border-border bg-secondary">
              <h3 className="font-semibold text-foreground text-sm">
                Monthly Cost Breakdown
              </h3>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-6 py-3 font-semibold text-muted-foreground">
                    Cost Type
                  </th>
                  <th className="text-right px-6 py-3 font-semibold text-muted-foreground">
                    Monthly Cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {costBreakdown.map((row) => (
                  <tr
                    key={row.type}
                    className="border-b border-border hover:bg-secondary/50 transition-colors"
                  >
                    <td className="px-6 py-3 text-foreground">{row.type}</td>
                    <td className="px-6 py-3 text-right font-medium text-teal-600">
                      {row.cost}
                    </td>
                  </tr>
                ))}
                <tr className="bg-teal-50">
                  <td className="px-6 py-4 font-bold text-foreground">Total</td>
                  <td className="px-6 py-4 text-right font-bold text-teal-600 text-base">
                    ₹8,400
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SUSTAINABLE AI ── */}
      <section id="ai" className="py-20 bg-secondary/40" data-ocid="ai.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionBadge>Sustainable AI</SectionBadge>
            <SectionHeading>AI & Energy Consumption</SectionHeading>
            <SectionSubtitle>
              Training a single large language model can emit as much CO₂ as
              five cars over their entire lifetime. Inference at scale
              multiplies that burden daily.
            </SectionSubtitle>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* left: narrative */}
            <div
              className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8"
              data-ocid="ai.card"
            >
              <h3 className="font-bold text-lg mb-3 text-foreground">
                Real-Life Example: A Streaming Platform
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                A global streaming service (comparable to Netflix) runs
                AI-powered recommendation engines, content encoding pipelines,
                and fraud detection in real time — 24 hours a day, 7 days a
                week. These systems collectively process over 1 petabyte of data
                daily.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                At peak load, inference clusters consume hundreds of megawatts
                of power. Without sustainable practices, this single
                application's compute footprint rivals the energy use of a
                mid-sized city. Adopting green AI strategies can reduce this by
                up to 70%.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "GPT-4 class inference",
                  "1 PB / day",
                  "Hundreds of MW",
                  "+70% savings possible",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-700 border border-teal-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* right: methods */}
            <div className="flex flex-col gap-4">
              {aiMethods.map((m) => (
                <div
                  key={m.label}
                  className="flex items-start gap-4 bg-card rounded-xl border border-border shadow-xs p-4"
                  data-ocid="ai.row"
                >
                  <IconBadge icon={m.icon} />
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-0.5">
                      {m.label}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORM COMPARISON ── */}
      <section
        id="platforms"
        className="py-20 bg-background"
        data-ocid="platforms.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionBadge>Cloud Platforms</SectionBadge>
            <SectionHeading>AWS vs Azure vs Google Cloud</SectionHeading>
            <SectionSubtitle>
              Choosing the right cloud provider matters for both cost and
              sustainability goals. Here's how the big three compare across key
              dimensions.
            </SectionSubtitle>
          </div>

          <div
            className="bg-card rounded-2xl border border-border shadow-card overflow-hidden"
            data-ocid="platforms.table"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-teal-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">
                      Feature
                    </th>
                    <th className="text-left px-6 py-4 font-semibold">AWS</th>
                    <th className="text-left px-6 py-4 font-semibold">Azure</th>
                    <th className="text-left px-6 py-4 font-semibold">
                      Google Cloud
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {platformComparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-border hover:bg-secondary/50 transition-colors ${
                        i % 2 === 0 ? "" : "bg-secondary/20"
                      }`}
                      data-ocid={`platforms.row.${i + 1}`}
                    >
                      <td className="px-6 py-4 font-semibold text-foreground">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {row.aws}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {row.azure}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {row.gcp}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHARTS ── */}
      <section
        id="charts"
        className="py-20 bg-secondary/40"
        data-ocid="charts.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionBadge>Visual Analytics</SectionBadge>
            <SectionHeading>Interactive Cloud Insights</SectionHeading>
            <SectionSubtitle>
              Visualizing cost differences and the energy scaling challenge of
              AI helps teams make data-driven decisions about sustainable
              infrastructure.
            </SectionSubtitle>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* bar chart */}
            <div
              className="bg-card rounded-2xl border border-border shadow-card p-6"
              data-ocid="charts.card"
            >
              <h3 className="font-bold text-base text-foreground mb-1">
                Estimated Monthly Costs
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                Comparative cloud spend across major providers (₹)
              </p>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart
                  data={monthlyCostData}
                  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#E6ECEB" />
                  <XAxis
                    dataKey="platform"
                    tick={{ fontSize: 12, fill: "#6B7C7A" }}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: "#6B7C7A" }}
                    tickFormatter={(v) => `₹${(v / 1000).toFixed(1)}k`}
                  />
                  <Tooltip
                    formatter={(v: number) => [
                      `₹${v.toLocaleString()}`,
                      "Monthly Cost",
                    ]}
                    contentStyle={{
                      borderRadius: "10px",
                      border: "1px solid #E6ECEB",
                      fontSize: 12,
                    }}
                  />
                  <Bar dataKey="cost" fill="#25C47E" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* line chart */}
            <div
              className="bg-card rounded-2xl border border-border shadow-card p-6"
              data-ocid="charts.card"
            >
              <h3 className="font-bold text-base text-foreground mb-1">
                AI Model Size vs Energy Consumption
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                Estimated training energy (kWh) by model parameter count
              </p>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart
                  data={energyData}
                  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#E6ECEB" />
                  <XAxis
                    dataKey="params"
                    tick={{ fontSize: 12, fill: "#6B7C7A" }}
                    label={{
                      value: "Parameters",
                      position: "insideBottom",
                      offset: -2,
                      fontSize: 11,
                      fill: "#6B7C7A",
                    }}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: "#6B7C7A" }}
                    tickFormatter={(v) => `${v}k`}
                  />
                  <Tooltip
                    formatter={(v: number) => [`${v} kWh`, "Energy"]}
                    contentStyle={{
                      borderRadius: "10px",
                      border: "1px solid #E6ECEB",
                      fontSize: 12,
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Line
                    type="monotone"
                    dataKey="energy"
                    stroke="#1C4E45"
                    strokeWidth={3}
                    dot={{ fill: "#2ECC8A", r: 5 }}
                    activeDot={{ r: 7, fill: "#25C47E" }}
                    name="Energy (kWh)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section
        id="advantages"
        className="py-20 bg-background"
        data-ocid="advantages.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionBadge>Why Go Green</SectionBadge>
            <SectionHeading>
              Advantages of Sustainable Cloud Computing
            </SectionHeading>
            <SectionSubtitle>
              Green cloud strategies deliver benefits that extend beyond
              environmental impact — they directly improve your bottom line and
              competitive position.
            </SectionSubtitle>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, i) => (
              <div
                key={adv.title}
                className="bg-card rounded-2xl border border-border shadow-card p-6 flex flex-col gap-4 hover:border-teal-300 hover:shadow-lg transition-all duration-200"
                data-ocid={`advantages.item.${i + 1}`}
              >
                <IconBadge icon={adv.icon} />
                <h3 className="font-semibold text-sm text-foreground">
                  {adv.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONCLUSION / CTA BAND ── */}
      <section
        id="contact"
        className="py-20 hero-gradient"
        data-ocid="conclusion.section"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Leaf size={36} className="text-teal-400 mx-auto mb-5" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            The Future of Cloud is Green
          </h2>
          <p className="text-white/75 text-base leading-relaxed mb-8">
            Sustainable cloud computing isn't just an ethical choice — it's a
            strategic one. Organizations that adopt efficient architectures,
            renewable energy sourcing, and intelligent resource management today
            will enjoy lower costs, reduced regulatory risk, and a measurable
            competitive advantage tomorrow. The transition to green cloud is no
            longer optional; it's the foundation of resilient, future-ready
            infrastructure.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#costs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-teal-400 text-teal-900 hover:bg-teal-300 transition-colors text-sm"
              data-ocid="conclusion.primary_button"
            >
              <CircleCheck size={16} />
              Start Your Green Journey
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="bg-teal-900 text-white py-12"
        data-ocid="footer.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <Leaf size={20} className="text-teal-400" />
                <span className="font-bold text-lg">GreenCloud Insights</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                Empowering organizations to build sustainable, cost-efficient
                cloud infrastructure for a greener digital future.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4 text-teal-200">
                Resources
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  "Cloud Cost Guide",
                  "AI Energy Calculator",
                  "Platform Comparison",
                  "Case Studies",
                ].map((l) => (
                  <li key={l}>
                    <a
                      href="/"
                      className="text-white/60 text-sm hover:text-teal-300 transition-colors"
                      data-ocid="footer.link"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4 text-teal-200">
                Company
              </h4>
              <ul className="flex flex-col gap-2">
                {["About Us", "Blog", "Careers", "Contact"].map((l) => (
                  <li key={l}>
                    <a
                      href="/"
                      className="text-white/60 text-sm hover:text-teal-300 transition-colors"
                      data-ocid="footer.link"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <p>
              © {new Date().getFullYear()} GreenCloud Insights. All rights
              reserved.
            </p>
            <p>
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                className="text-teal-400 hover:text-teal-300 underline"
                target="_blank"
                rel="noreferrer"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
