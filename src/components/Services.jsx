import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Branding">
            Our team of experienced designers, marketers, and strategists is dedicated to helping you build a powerful brand presence that resonates with your audience. From logo design and brand identity development to messaging strategies and digital branding solutions, we offer a comprehensive range of services tailored to your unique needs.
            </ListItem>
            <ListItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks and libraries like Next.Js, React and various UI Libraries like Tailwind Css, Material UI, Bootstrap 
            </ListItem>
            {/* <ListItem title="E-commerce">
              We are at the forefront of modern e-commerce development. Which
              mainly means adding your logo to the Shopify store template we’ve
              used for the past six years.
            </ListItem> */}
            <ListItem title="Facebook Page Management">
            With our comprehensive Facebook marketing services, we help businesses of all sizes reach their target audience, increase brand visibility, and drive conversions. Our team of experienced marketers crafts personalized strategies which can help you to optimize your Facebook presence
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
