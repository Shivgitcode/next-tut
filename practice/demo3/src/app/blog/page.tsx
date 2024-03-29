"use client";

// export const metadata = {
//   title: "blog page",
//   description: "this is blog page",
// };

export default function Blog() {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  console.log(randomNum);
  if (randomNum > 3) {
    throw new Error("this is an error");
  }
  return <div>This is Blog page</div>;
}
