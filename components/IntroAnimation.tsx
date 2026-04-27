"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ELLIPSE_PATH =
  "M-400 0 H2320 C2320 200 2000 1150 960 1150 C-80 1150 -400 200 -400 0 Z";

const LETTER_I_PATH =
  "M0.230957 403.937V351.313H48.0087V52.8754H0.230957V0.250763H168.491V52.8754H120.714V351.313H168.491V403.937H0.230957Z";

const DOT_PATH =
  "M136.154 68.0769C136.154 105.675 105.675 136.154 68.0769 136.154C30.4791 136.154 0 105.675 0 68.0769C0 30.4791 30.4791 0 68.0769 0C105.675 0 136.154 30.4791 136.154 68.0769Z";

interface IntroAnimationProps {
  children: React.ReactNode;
}

export default function IntroAnimation({ children }: IntroAnimationProps) {
  const introRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const letterIRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const introEl = introRef.current;
    const wrapEl = wrapRef.current;
    const iEl = letterIRef.current;
    const dotEl = dotRef.current;

    if (!introEl || !wrapEl || !iEl || !dotEl) return;

    gsap.set(wrapEl, { scale: 0, transformOrigin: "top left" });
    gsap.set(iEl, { opacity: 0, y: "-110vh" });
    gsap.set(dotEl, { opacity: 0, y: "-130vh" });

    const tl = gsap.timeline();

    tl.to(wrapEl, {
      scale: 1,
      duration: 1.5,
      ease: "power2.out",
    });

    tl.to(
      iEl,
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "bounce.out",
      },
      "-=0.4",
    );

    tl.to(
      dotEl,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "bounce.out",
      },
      "-=0.3",
    );

    tl.to(
      introEl,
      {
        y: "-100vh",
        duration: 1.2,
        ease: "power2.inOut",
      },
      "+=1.2",
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <div
        ref={introRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "#F4F3EE",
          zIndex: 50,
          willChange: "transform",
          overflow: "hidden",
        }}
      >
        <div
          ref={wrapRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
          }}
        >
          {/* Ellipse SVG */}
          <svg
            viewBox="-400 0 2720 1150"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", width: "100%", height: "auto" }}
          >
            <path d={ELLIPSE_PATH} fill="#212121" />
          </svg>

          {/* Logo */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingBottom: "5%",
            }}
          >
            <div
              ref={dotRef}
              style={{
                width: "clamp(32px, 7.13vw, 137px)",
                flexShrink: 0,
                willChange: "transform, opacity",
                marginBottom: "clamp(3px, 0.4vw, 8px)",
              }}
            >
              <svg
                viewBox="0 0 137 137"
                fill="none"
                style={{ display: "block", width: "100%", height: "auto" }}
              >
                <path d={DOT_PATH} fill="#E84911" />
              </svg>
            </div>

            <div
              ref={letterIRef}
              style={{
                width: "clamp(40px, 8.75vw, 168px)",
                flexShrink: 0,
                willChange: "transform, opacity",
              }}
            >
              <svg
                viewBox="0 0 169 404"
                fill="none"
                style={{ display: "block", width: "100%", height: "auto" }}
              >
                <path d={LETTER_I_PATH} fill="#F4F3EE" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 0 }}>{children}</div>
    </>
  );
}
