import Link from "next/link";
import { usePathname } from "next/navigation";

type ChildrenProp = {
  children: React.ReactNode;
};

export default function ProductsLayout({ children }: ChildrenProp) {
  return (
    <div>
      <h1 className=" font-bold bg-blue-500 text-[42px]">Heading 2</h1>
      <div>
        <Link href="/products/1" className="font-bold text-[24px]">
          Product 1{" "}
        </Link>
        <Link href="/products/2" className="font-bold text-[24px]">
          Product 2{" "}
        </Link>
        <Link href="/products/3" className="font-bold text-[24px]">
          Product 3{" "}
        </Link>
      </div>
      {children}
      <h1 className=" font-bold bg-red-600  text-[42px]">Heading 3</h1>
    </div>
  );
}
