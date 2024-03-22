"use client";

import Link from "next/link";
import { useState } from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState("");
  const navlinks = [
    { name: "login", href: "/login" },
    { name: "register", href: "/register" },
  ];

  return (
    <div>
      {navlinks.map((el) => {
        return (
          <Link key={el.name} href={el.href}>
            {el.name}
          </Link>
        );
      })}
      <p>Inside userauth</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        id=""
      />

      {children}
    </div>
  );
}
