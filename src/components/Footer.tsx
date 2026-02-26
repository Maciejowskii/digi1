import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#07101B] px-6 py-20">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 md:flex-row">
        <div>
          <h2 className="text-7xl font-bold tracking-tighter text-white sm:text-[10rem] leading-none">
            DIGITAY<span className="text-digitay-green">.</span>
          </h2>
          <p className="mt-8 max-w-sm text-sm font-medium tracking-tight text-white/50">
            Engineered in the void. Raw, confident, highly technical digital experiences. No compromises.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 justify-end">
          <Link
            href="mailto:contact@digitay.com"
            className="group flex items-center gap-4 border border-white/10 px-8 py-5 text-sm font-bold tracking-widest text-white uppercase transition-colors hover:bg-white/5"
          >
            INITIATE CONTACT
            <ArrowUpRight className="h-5 w-5 text-digitay-green transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          <div className="mt-8 flex flex-col gap-2 text-xs font-bold tracking-widest text-white/30 uppercase">
            <p>© {new Date().getFullYear()} Digitay. All rights reserved.</p>
            <p>System Status: Online</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
