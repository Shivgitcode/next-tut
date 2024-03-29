import Link from "next/link";

export default function Notifications() {
  return (
    <div>
      Notifications <Link href={"/dashboard/archived"}>archived</Link>
    </div>
  );
}
