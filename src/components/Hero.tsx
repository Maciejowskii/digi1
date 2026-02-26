"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center border-b border-white/10 px-6 pt-20">
      <div className="w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-4 text-digitay-green">
            <span className="h-px w-12 bg-digitay-green"></span>
            <span className="text-sm font-bold tracking-widest uppercase">
              System Loading // 01
            </span>
          </div>

          <h1 className="max-w-5xl text-[12vw] font-bold leading-[0.85] tracking-tighter text-white sm:text-[8vw] md:text-[7vw]">
            ENGINEERING{" "}
            <br />
            <span className="font-serif italic font-light tracking-normal text-white/90">
              Digital
            </span>{" "}
            DOMINANCE.
          </h1>

          <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed tracking-tight text-white/70 sm:text-xl">
            We build high-performance, conversion-obsessed web experiences for
            brands that refuse to blend in. Raw code, aggressive strategy, pure
            results.
          </p>

          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <button className="group flex h-14 items-center justify-between gap-8 bg-digitay-green px-8 text-lg font-bold tracking-tight text-[#07101B] transition-all hover:bg-white">
              INITIALIZE SCALE
              <ArrowDownRight className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </button>
            <div className="flex h-14 items-center border border-white/10 px-8 text-sm font-bold tracking-widest text-white/50 uppercase backdrop-blur-sm">
              Status: Operational
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 flex w-full justify-between border-t border-white/10 bg-[#07101B] px-6 py-4 text-xs font-bold tracking-widest text-white/30 uppercase">
        <span>LAT: 52&deg;31&apos;12&quot;N</span>
        <span>SYS.V: 4.1.9</span>
      </div>
    </section>
  );
}
