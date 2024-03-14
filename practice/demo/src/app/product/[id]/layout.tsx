import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <p>Featured product</p>
    </div>
  );
}
