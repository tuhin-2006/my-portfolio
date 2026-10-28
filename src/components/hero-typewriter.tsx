"use client";

import { useEffect, useState } from "react";

/**
 * Decorative animated text. The hero provides a stable accessible heading.
 */
export function HeroTypewriter({ phrases }: { phrases: string[] }) {
  // Keep server and first client render identical; the first phrase is
  // provided separately in a noscript fallback.
  const [text, setText] = useState("");

  useEffect(() => {
    const words = phrases.filter(Boolean);
    if (words.length === 0) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timeout: ReturnType<typeof setTimeout> | undefined;
    let index = 0;
    let length = 0;
    let deleting = false;

    function tick() {
      const word = words[index];

      if (deleting) {
        length -= 1;
        setText(word.slice(0, length));
        if (length === 0) {
          deleting = false;
          index = (index + 1) % words.length;
          timeout = setTimeout(tick, 300);
        } else {
          timeout = setTimeout(tick, 40);
        }
      } else {
        length += 1;
        setText(word.slice(0, length));
        if (length === word.length) {
          deleting = true;
          timeout = setTimeout(tick, 1900);
        } else {
          timeout = setTimeout(tick, 75);
        }
      }
    }

    function onMotionChange() {
      clearTimeout(timeout);
      index = 0;
      if (motion.matches) {
        length = words[0].length;
        deleting = true;
        setText(words[0]);
      } else {
        length = 0;
        deleting = false;
        setText("");
        timeout = setTimeout(tick, 150);
      }
    }

    if (motion.matches) {
      timeout = setTimeout(() => setText(words[0]), 0);
    } else {
      timeout = setTimeout(tick, 150);
    }
    motion.addEventListener("change", onMotionChange);
    return () => {
      clearTimeout(timeout);
      motion.removeEventListener("change", onMotionChange);
    };
  }, [phrases]);

  return (
    <span className="hero-typewriter hero-typewriter-animated" aria-hidden="true">
      <span className="hero-typewriter-current">
        <span className="hero-typewriter-text">{text}</span>
        <span className="hero-typewriter-caret" />
      </span>
    </span>
  );
}
