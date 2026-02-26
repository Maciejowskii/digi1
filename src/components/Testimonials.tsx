export function Testimonials() {
  return (
    <section id="metrics" className="border-b border-white/10 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 border border-white/10 md:grid-cols-3">
          <div className="border-b border-white/10 p-12 md:border-b-0 md:border-r">
            <p className="text-xs font-bold tracking-widest text-digitay-green uppercase">
              Metric 01 // Revenue
            </p>
            <p className="mt-8 text-8xl font-bold tracking-tighter text-white">
              +42<span className="text-4xl text-white/50">%</span>
            </p>
            <p className="mt-6 font-serif italic text-white/70">
               &quot;They completely rewired our customer acquisition flow. Brutal efficiency.&quot;
            </p>
            <p className="mt-6 text-sm font-bold tracking-widest uppercase text-white">
              — Sarah J., TechCorp
            </p>
          </div>

          <div className="border-b border-white/10 p-12 md:border-b-0 md:border-r bg-white/5">
            <p className="text-xs font-bold tracking-widest text-digitay-green uppercase">
              Metric 02 // Speed
            </p>
            <p className="mt-8 text-8xl font-bold tracking-tighter text-white">
              0.8<span className="text-4xl text-white/50">s</span>
            </p>
            <p className="mt-6 font-serif italic text-white/70">
              &quot;Our load times dropped to sub-second. Conversions skyrocketed instantly.&quot;
            </p>
            <p className="mt-6 text-sm font-bold tracking-widest uppercase text-white">
              — Mark T., E-Comm Plus
            </p>
          </div>

          <div className="p-12">
            <p className="text-xs font-bold tracking-widest text-digitay-green uppercase">
              Metric 03 // Uptime
            </p>
            <p className="mt-8 text-8xl font-bold tracking-tighter text-white">
              99.9<span className="text-4xl text-white/50">%</span>
            </p>
            <p className="mt-6 font-serif italic text-white/70">
               &quot;An unbreakable infrastructure. Perfect execution from day one.&quot;
            </p>
            <p className="mt-6 text-sm font-bold tracking-widest uppercase text-white">
              — Elena R., Fintech.io
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
