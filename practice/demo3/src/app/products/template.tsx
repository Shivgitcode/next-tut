"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navlinks = [
    { name: "product 1", href: "/products/1" },
    { name: "product 2", href: "/products/2" },
    { name: "product 3", href: "/products/3" },
  ];

  const [input, setInput] = useState("");

  const pathname = usePathname();
  return (
    <div>
      <nav className="border-2px bg-blue-500">
        {navlinks.map((el) => {
          const isActive = pathname.startsWith(el.href);
          return (
            <div>
              <Link
                href={el.href}
                className={isActive ? "font-bold" : "text-white"}
              >
                {el.name}
              </Link>
            </div>
          );
        })}
      </nav>

      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        id=""
        className="border-2 border-red-600"
      />

      {children}

      <footer className="bg-red-500">this is footer</footer>
    </div>
  );
}
