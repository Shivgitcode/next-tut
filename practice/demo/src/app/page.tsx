import Link from "next/link";

export default function Home() {
  return (
    <h1>
      Home
      <Link href="/docs">Docs page</Link>
      <Link href="/docs/feature1">features</Link>
    </h1>
  );
}
