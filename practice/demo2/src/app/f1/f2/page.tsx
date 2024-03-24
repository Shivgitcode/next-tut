import Link from "next/link";

export default function f2() {
  return (
    <div>
      f2{" "}
      <div>
        <Link href={"/about"}>about</Link>
      </div>
    </div>
  );
}
