"use client";

import { motion } from "framer-motion";
import { Code2, Zap, BarChart3, Globe } from "lucide-react";

// 4 bento cards
const services = [
  {
    title: "Web Architecture",
    description: "High-performance Next.js architectures built for speed and scale. No templates, no bloat.",
    icon: <Code2 className="h-8 w-8 text-digitay-green" />,
    number: "01",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "Conversion Opt",
    description: "Aggressive A/B testing and data-driven design.",
    icon: <Zap className="h-8 w-8 text-white" />,
    number: "02",
    colSpan: "col-span-1",
  },
  {
    title: "Global Scale",
    description: "Deploying Edge infrastructure for global latency reduction.",
    icon: <Globe className="h-8 w-8 text-white" />,
    number: "03",
    colSpan: "col-span-1",
  },
  {
    title: "Data Intelligence",
    description: "Actionable analytics parsing every user interaction into revenue streams.",
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    number: "04",
    colSpan: "col-span-1 md:col-span-2",
  },
];

export function ServicesBento() {
  return (
    <section id="services" className="border-b border-white/10 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="text-5xl font-bold leading-none tracking-tighter text-white sm:text-7xl">
            CORE{" "}
            <span className="font-serif italic font-light text-white/70">
              Operations
            </span>
          </h2>
          <p className="max-w-xs text-sm font-medium tracking-tight text-white/50">
            Systematic deployment of technical solutions to dominate digital markets.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group relative flex flex-col justify-between border border-white/10 bg-[#07101B]/50 p-8 backdrop-blur-sm transition-colors hover:bg-white/5 ${service.colSpan}`}
            >
              <div className="mb-12 flex items-start justify-between">
                {service.icon}
                <span className="font-serif tracking-tighter text-6xl font-bold text-white/10 transition-colors group-hover:text-white/20">
                  {service.number}
                </span>
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold tracking-tight text-white">
                  {service.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed tracking-tight text-white/50">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
