import { cookies } from "next/headers";

export async function GET() {
  cookies().set("jwt", "thisismytoken");

  console.log(cookies().get("jwt"));
  return new Response("Profile API data");
}
