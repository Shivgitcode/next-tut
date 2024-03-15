import Link from "next/link";
import React from "react";

export default function () {
  return (
    <h1>
      <div>
        <Link href="/product/1">product 1</Link>
      </div>
      <div>
        <Link href="/product/2">product 2</Link>
      </div>
      <div>
        <Link href="/product/3" replace>
          product 3
        </Link>
      </div>
    </h1>
  );
}
