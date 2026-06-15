import React from "react";
import Button from "./Button";
import Image from "next/image";
import Reveal from "./Reveal";
import StaggerText from "./StaggerText";

const Home = () => {
  return (
    <div className="md:px-12 px-4 md:py-9 flex flex-col gap-12 py-4 bg-gradient-to-b from-background from-70% md:from-0% to-gradient-end h-full min-h-screen w-full overflow-hidden">
      <div className="pt-40 lg:pt-28 gap-9 flex-col flex">
        {/* Profile Section */}
        <Reveal delay={0.1}>
          <div className="flex gap-4 items-center">
            <Image
              src="/pfp.jpeg"
              className="rounded-full border-2 border-white"
              alt="pfp"
              width={56}
              height={56}
            />
            <div className="flex flex-col">
              <h4 className="font-medium text-white text-xl tracking-tight">
                Rishabh Kartik
              </h4>
              <p className="description-text">
                Final Year CSE Student,{" "}
                <span className="text-white">IIIT Kalyani</span>
              </p>
            </div>
          </div>
        </Reveal>

        {/* Main Headline */}
        {/* We use a flex-col here to maintain your explicit line break (<br/>) while using the StaggerText component */}
        <h1 className="heading-text flex flex-col gap-2">
          <StaggerText text="I’m a Computer Science" />
          <StaggerText text="student and full-stack developer." />
        </h1>

        {/* Description */}
        <Reveal delay={0.3}>
          <p className="description-text lg:w-1/2 w-full leading-[1.75]">
            I turn ideas into production-ready applications through clean
            design, scalable architecture, and modern technologies. My focus is
            building products people enjoy using and businesses can depend on.
          </p>
        </Reveal>

        {/* Action Buttons */}
        <Reveal delay={0.4}>
          {/* Removed items-start, added w-full */}
          <div className="flex flex-col md:flex-row gap-4 w-full">
            {/* Added w-full md:w-auto to both buttons */}
            <Button variant="primary" size="lg" className="w-full md:w-auto">
              View My Works
            </Button>

            <Button variant="ghost" size="lg" className="w-full md:w-auto">
              Get in Touch
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Recent Project Section */}
      <div className="gap-6 flex flex-col mt-8 md:mt-12">
        <Reveal delay={0.5}>
          <p className="description-text tracking-[2px] text-sm font-medium">
            RECENT PROJECT
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="w-full rounded-3xl overflow-hidden border border-white/5 bg-[#121212]">
            <Image
              src="/mainimg.png"
              alt="Main Image"
              width={1920}
              height={1080}
              sizes="100vw"
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Home;
