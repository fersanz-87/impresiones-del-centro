import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Promotions from "@/components/Promotions";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Promotions />
        <FAQ />
        <Testimonials />
        <Location />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
