import { gsap } from 'gsap';

export const liquidMorph = (element: HTMLElement) => {
  gsap.to(element, {
    duration: 1,
    morphSVG: "M0,0 C50,0 50,100 100,100",
    ease: "power2.inOut",
  });
};

export const textReveal = (element: HTMLElement) => {
  gsap.from(element, {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: "power4.out",
    stagger: 0.2
  });
};

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: "easeInOut" }
};