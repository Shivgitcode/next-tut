"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Order() {
  const router = useRouter();
  function handleClick() {
    console.log("Order Placed");
    router.push("/");
  }
  return (
    <div>
      <h3>Place Order</h3>
      <button onClick={handleClick}>place your order</button>
    </div>
  );
}
