import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#07101B]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white">
          DIGITAY<span className="text-digitay-green">.</span>
        </Link>
        <div className="hidden gap-8 md:flex">
          {["Services", "Works", "Metrics", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium tracking-tight text-white/70 transition-colors hover:text-white"
            >
              {item}
            </Link>
          ))}
        </div>
        <Link
          href="#contact"
          className="group flex items-center gap-2 bg-digitay-green px-5 py-2 text-sm font-bold tracking-tight text-[#07101B] transition-colors hover:bg-white"
        >
          START PROJECT
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </nav>
  );
}
