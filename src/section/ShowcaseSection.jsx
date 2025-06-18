import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
      }
    );
  }, []);
  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>GTAverse - A dynamic GTA-themed experience</h2>
              <p className="text-white-50 md:text-xl">
                GTAverse is a GTA-inspired web experience built with React,
                GSAP, and Tailwind CSS. It features smooth animations and
                responsive design to bring the game's vibe into the browser.
                <br /> <br />
                <a href="https://gta-seven.vercel.app/">VIEW THE PROJECT </a>
              </p>
            </div>
          </div>
          {/* right showcase layout */}
          <div className="project -list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper  bg-{#ffefdb}">
                <img  className="rounded-xl"src="/images/project2.png" alt="hust" />
              </div>
              <br />
              <div className="text-content">
                    <h2>Hustle Digital Marketing Platform</h2>
              </div>
              
              
             <button className="dark:md"><a  href="https://hustle-gules.vercel.app/">VIEW THE PROJECT </a></button>  
              <br />
              <br />
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-{#ffe7db}">
                <img className="rounded-xl" src="/images/project3.png" alt="YC Directory" />
              </div>
              <br />
              <h2>Login System </h2>
              
              <a href="https://vercel-fronted.vercel.app/login">VIEW THE PROJECT </a>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
