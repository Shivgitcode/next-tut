import Link from "next/link";

export default function Archived() {
  return (
    <div>
      archived notifications <Link href={"/dashboard"}>notifications</Link>
    </div>
  );
}
