"use client";

import { useRouter } from "next/navigation";

export default function OrderNow() {
  const router = useRouter();
  const isLoggedIn = false;
  const submitOrder = async () => {
    router.push("/");
  };

  return (
    <div>
      Order now
      <button onClick={submitOrder}>order submitted</button>
    </div>
  );
}
