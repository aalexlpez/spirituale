/* eslint-disable @typescript-eslint/no-unused-vars */
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import FormCaptureData from "@/components/FormCaptureData";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />

      <Logos />
      <Container>
        <Benefits />

        {/* <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing />
        </Section> */}
        
        <div className="bg-themeNavy ">
          <Section
            id="testimonios"
            title="Lo que dicen nuestros clientes"
            description="Escuche a quienes se han asociado con nosotros."
          >
            <Testimonials />
          </Section>
        </div>

        {/* <FAQ /> */}

        {/* <Stats />

        <CTA /> */}
      </Container>
    </>
  );
};

export default HomePage;
/* eslint-enable @typescript-eslint/no-unused-vars */