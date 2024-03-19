gsap.from("#main", {
  duration: 2,
  scale: 0,
  scrub: 5,
});
gsap.from("#body h3,h2", {
  x: 700,
  duration: 2,
  scrub: 5,
});
gsap.from("#body1 #box", {
  x: -700,
  duration: 2,
  scrub: 5,
});

gsap.from("#body1 h1", {
  x: 900,
  duration: 2,
  scrub: 5,
});
function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();

function scroll() {
  gsap.from("#page2 #pagebody1 h3", {
    x: 500,
    duration: 2,
    scrollTrigger: {
      trigger: "#page2 #pagebody1 h3",
      scroller: "#main",
      start: "top 90%",
      end: "top 10%",
      scrub: 5,
    },
  });

  gsap.from("#pagebody2 #image h3", {
    x: -500,
    duration: 2,
    scrollTrigger: {
      trigger: "#pagebody2 #image h3",
      // markers: true,
      scroller: "#main",
      start: "top 140%",
      end: "top 10%",
    },
  });

  gsap.from("#pagebody3 #text3 h4", {
    x: 200,
    duration: 2,
    scrollTrigger: {
      trigger: "#pagebody3 #text3 h4",
      scroller: "#main",
      start: "top 90%",
      end: "top 30%",
      scrub: 5,
    },
  });

  gsap.from("#page3 #page5 h3", {
    x: 200,
    duration: 2,
    scrollTrigger: {
      trigger: "#page3 #page5 h3",
      scroller: "#main",
      start: "top 90%",
      end: "top 30%",
      scrub: 5,
    },
  });

  gsap.from("#page3 #page5 h1", {
    x: 200,
    duration: 2,
    scrollTrigger: {
      trigger: "#page3 #page5 h1",
      scroller: "#main",
      start: "top 90%",
      end: "top 30%",
      scrub: 5,
    },
  });

  gsap.to("#page3 #page5 h2", {
    x: 1,
    duration: 2,
    scrollTrigger: {
      trigger: "#page3 #page5 h2",
      scroller: "#main",
      start: "top 90%",
      end: "top 30%",
      scrub: 5,
    },
  });

  gsap.from("#page3 #page5 h4", {
    x: 200,
    duration: 2,
    scrollTrigger: {
      trigger: "#page3 #page5 h4",
      scroller: "#main",
      start: "top 90%",
      end: "top 30%",
      scrub: 5,
    },
  });

  gsap.from("#page3 #page4 h1", {
    x: -200,
    duration: 2,
    scrollTrigger: {
      trigger: "#page3 #page5 h4",
      scroller: "#main",
      start: "top 150%",
      end: "top 30%",
      scrub: 5,
    },
  });

  gsap.from("#footer h1", {
    x: -200,
    duration: 2,
    scrollTrigger: {
      trigger: "#footer h1",
      scroller: "#main",
      start: "top 210%",
      end: "top 30%",
      scrub: 5,
    },
  });

  gsap.from("#footer h4", {
    x: 200,
    duration: 2,
    scrollTrigger: {
      trigger: "#footer h4",
      scroller: "#main",
      start: "top 210%",
      end: "top 30%",
      scrub: 5,
    },
  });
}
scroll();
