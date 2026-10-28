"use client";

import { useRef } from "react";

type NavigationItem = { label: string; href: string };

export function MobileNav({ items }: { items: NavigationItem[] }) {
  const menuRef = useRef<HTMLDetailsElement>(null);

  function closeMenu() {
    if (menuRef.current) menuRef.current.open = false;
  }

  return (
    <details
      className="mobile-nav"
      ref={menuRef}
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuRef.current?.open) {
          closeMenu();
          menuRef.current.querySelector("summary")?.focus();
        }
      }}
    >
      <summary aria-label="Toggle navigation">Menu <span aria-hidden="true">☰</span></summary>
      <nav className="mobile-menu" aria-label="Mobile navigation">
        {items.map((item) => (
          <a href={item.href} key={item.href} onClick={closeMenu}>{item.label}</a>
        ))}
        <a href="#contact" onClick={closeMenu}>Contact <span aria-hidden="true">↗</span></a>
      </nav>
    </details>
  );
}
