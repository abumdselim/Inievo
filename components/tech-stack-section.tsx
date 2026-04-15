import type { CSSProperties } from "react"

type StackTool = {
  name: string
  logo: string
}

type StackGroup = {
  title: string
  subtitle: string
  speed: number
  tools: StackTool[]
}

const stackGroups: StackGroup[] = [
  {
    title: "Web Design",
    subtitle: "UI/UX and design systems",
    speed: 30,
    tools: [
      { name: "Figma", logo: "figma/F24E1E" },
      { name: "Webflow", logo: "webflow/146EF5" },
      { name: "Framer", logo: "framer/0055FF" },
      { name: "Tailwind CSS", logo: "tailwindcss/06B6D4" },
      { name: "Adobe", logo: "adobe/FF0000" },
    ],
  },
  {
    title: "Software Development",
    subtitle: "Modern, production-ready engineering",
    speed: 26,
    tools: [
      { name: "React", logo: "react/61DAFB" },
      { name: "Next.js", logo: "nextdotjs/000000" },
      { name: "TypeScript", logo: "typescript/3178C6" },
      { name: "Node.js", logo: "nodedotjs/5FA04E" },
      { name: "GitHub", logo: "github/181717" },
    ],
  },
  {
    title: "WordPress Stack",
    subtitle: "Flexible CMS and commerce tooling",
    speed: 28,
    tools: [
      { name: "WordPress", logo: "wordpress/21759B" },
      { name: "WooCommerce", logo: "woocommerce/96588A" },
      { name: "Elementor", logo: "elementor/92003B" },
      { name: "Cloudflare", logo: "cloudflare/F38020" },
      { name: "Yoast", logo: "yoast/A4286A" },
    ],
  },
  {
    title: "Popular Databases",
    subtitle: "Fast, reliable, and scalable data layers",
    speed: 24,
    tools: [
      { name: "PostgreSQL", logo: "postgresql/4169E1" },
      { name: "MySQL", logo: "mysql/4479A1" },
      { name: "MongoDB", logo: "mongodb/47A248" },
      { name: "Redis", logo: "redis/DC382D" },
      { name: "Supabase", logo: "supabase/3ECF8E" },
    ],
  },
  {
    title: "AI Tools for Development",
    subtitle: "AI-assisted building and delivery",
    speed: 22,
    tools: [
      { name: "OpenAI", logo: "openai/412991" },
      { name: "Anthropic", logo: "anthropic/191919" },
      { name: "GitHub Copilot", logo: "githubcopilot/000000" },
      { name: "LangChain", logo: "langchain/1C3C3C" },
      { name: "Hugging Face", logo: "huggingface/FFD21E" },
    ],
  },
  {
    title: "Scalable Premium Debugging",
    subtitle: "Monitoring, tracing, and incident response",
    speed: 20,
    tools: [
      { name: "Sentry", logo: "sentry/362D59" },
      { name: "Datadog", logo: "datadog/632CA6" },
      { name: "New Relic", logo: "newrelic/1CE783" },
      { name: "Docker", logo: "docker/2496ED" },
      { name: "Kubernetes", logo: "kubernetes/326CE5" },
    ],
  },
]

function StackMarquee({ tools, speed }: { tools: StackTool[]; speed: number }) {
  const loopedTools = [...tools, ...tools]

  return (
    <div className="logo-marquee">
      <div
        className="logo-track"
        style={{ "--marquee-duration": `${speed}s` } as CSSProperties}
      >
        {loopedTools.map((tool, index) => (
          <div
            key={`${tool.name}-${index}`}
            className="flex min-w-fit items-center gap-3 rounded-full border border-slate-200/80 bg-white px-4 py-2.5 shadow-sm"
          >
            <img
              src={`https://cdn.simpleicons.org/${tool.logo}`}
              alt={`${tool.name} logo`}
              loading="lazy"
              width={18}
              height={18}
              className="h-[18px] w-[18px]"
            />
            <span className="text-sm font-medium text-slate-700">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function TechStackSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(13,148,136,0.08),transparent_42%),radial-gradient(circle_at_80%_15%,rgba(249,115,22,0.1),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center md:mb-12">
          <span className="inline-block rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
            What Stack We Use
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Built with trusted tools across design, development, and scale
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            From web design and software development to WordPress, popular databases, AI development tools, and premium debugging platforms.
          </p>
        </div>

        <div className="space-y-5">
          {stackGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm md:p-5">
              <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-800 md:text-base">
                  {group.title}
                </h3>
                <p className="text-xs text-slate-500 md:text-sm">{group.subtitle}</p>
              </div>
              <StackMarquee tools={group.tools} speed={group.speed} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
