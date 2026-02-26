import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesBento } from "@/components/ServicesBento";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col text-white">
        <Hero />
        <ServicesBento />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
