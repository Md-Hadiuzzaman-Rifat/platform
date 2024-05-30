import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Make your online business{" "}
            <span className="text-blue-600 text-4xl sm:text-5xl font-bold">PROFITABLE</span>{" "}
            with us!
          </h1>
          <p className="m-6 text-xl text-blue-600 font-italic line-through">
            Services that we provide...
          </p>
          <div className="flex flex-col gap-2">
            <p className="flex items-center hover:scale-125 hover:ms-24 delay-50 duration-300 gap-2 cursor-pointer text-neutral-600">
              <span>Facebook Marketing</span>
              <FaArrowRightLong />
            </p>
            <p className="flex items-center hover:scale-125 hover:ms-24 delay-50 duration-300 gap-2 cursor-pointer text-neutral-600">
              <span>Brand Promotion</span>
              <FaArrowRightLong />
            </p>
            <p className="flex items-center hover:scale-125 hover:ms-24 delay-50 duration-300 gap-2 cursor-pointer text-neutral-600">
              <span>Video Creation and Editing</span>
              <FaArrowRightLong />
            </p>
            <p className="flex items-center hover:scale-125 hover:ms-24 delay-50 duration-300 gap-2 cursor-pointer text-neutral-600">
              <span>Field Work Marketing</span>
              <FaArrowRightLong />
            </p>
            <p className="flex items-center hover:scale-125 hover:ms-24 delay-50 duration-300 gap-2 cursor-pointer text-neutral-600">
              <span>Create Website or Web Application</span>
              <FaArrowRightLong />
            </p>
            
            <p className="flex items-center hover:scale-125 hover:ms-24 delay-50 duration-300 gap-2 cursor-pointer text-neutral-600">
              Event Management<span></span>
              <FaArrowRightLong />
            </p>
          </div>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        As a team, we concentrate on the intersection between design, technology and business development. Its a really busy intersection though — a lot of our staff have been involved in hit and runs.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
