export const metadata = {
  title: "My Portfolio",
  description: "welcome to my portfolio",
};

import Link from "next/link";

export default function About() {
  return (
    <>
      <h1>about page</h1>
      <div>
        <Link href="/products" className=" font-bold">
          products
        </Link>
      </div>
      <div>
        <Link href="/dashboard" className=" font-bold">
          dashboard
        </Link>
      </div>
      <div>
        <Link href="/docs" className=" font-bold">
          docs
        </Link>
      </div>
      <div>
        <Link href="/">home</Link>
      </div>
    </>
  );
}
