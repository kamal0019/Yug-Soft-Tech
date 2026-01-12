import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Solutions } from "@/components/sections/Solutions";
import { ERPFeatures } from "@/components/sections/ERPFeatures";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { ImageBanner } from "@/components/sections/ImageBanner";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <ImageBanner />
      <Hero />
      <Problems />
      <Solutions />
      <ERPFeatures />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
}
