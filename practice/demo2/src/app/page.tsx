import Link from "next/link";

export default function Home() {
  return (
    <h1>
      This is Home page
      <Link href="/about"> about </Link>
    </h1>
  );
}
