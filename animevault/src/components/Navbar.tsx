import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://shikimori.one/api/animes?page=3&limit=8&order=popularity"
      );
      const data = await response.json();

      console.log(data);
    }
    fetchData();
  }, []);
  return <div></div>;
}
