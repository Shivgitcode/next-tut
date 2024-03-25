import Link from "next/link";
import React from "react";

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
  return (
    <div>
      <nav className="border-2px bg-blue-500">
        {navlinks.map((el) => {
          return (
            <div>
              <Link href={el.href} className="font-bold">
                {el.name}
              </Link>
            </div>
          );
        })}
      </nav>

      {children}

      <footer className="bg-red-500">this is footer</footer>
    </div>
  );
}
