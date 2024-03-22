"use client";

import { useRouter } from "next/navigation";

export default function Order() {
  const router = useRouter();

  const handleClick = () => {
    console.log("order placed");
    router.push("/");
  };
  return (
    <h1 className="text-[42px] font-bold">
      place Order
      <button className="border-red-700 border-2" onClick={handleClick}>
        order now
      </button>
    </h1>
  );
}
