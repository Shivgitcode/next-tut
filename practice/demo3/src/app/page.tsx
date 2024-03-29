import Link from "next/link";

export default function Home() {
  return (
    <div>
      This is Home Page
      <Link href="/blog" className="font-bold">
        blog page
      </Link>
    </div>
  );
}
