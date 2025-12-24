gsap.registerPlugin(ScrollTrigger);

/* ENTRY */
gsap.from(".hero-text h1", {
  opacity: 0,
  y: 60,
  duration: 1.2,
  ease: "power4.out"
});

/* IDLE FLOAT */
gsap.to(window.bottle3D.rotation, {
  y: Math.PI * 2,
  duration: 8,
  repeat: -1,
  ease: "none"
});

gsap.to(window.bottle3D.position, {
  y: 0.3,
  duration: 2,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

/* SCROLL = CINEMA */
gsap.to(window.bottle3D.rotation, {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  },
  x: Math.PI / 2,
  y: Math.PI
});

gsap.to(window.bottle3D.position, {
  scrollTrigger: {
    trigger: ".benefits",
    start: "top bottom",
    end: "top center",
    scrub: true
  },
  z: -2
});
