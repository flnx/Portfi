import { CTA } from '@/components/CTA/CTA';
import { Features } from '@/components/Features/Features';
import { Hero } from '@/components/Hero/Hero';
import { Testimonials } from '@/components/Testimonials/Testimonials';
import { TopPortfolios } from '@/components/TopPortfolios/TopPortfolios';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <TopPortfolios />
      <CTA />
    </>
  );
}
