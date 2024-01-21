import { Inter } from "next/font/google";
import Link from "next/link";
import { useContext } from "react";
import { Cont } from "@/pages/_app";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const cont = Number(useContext(Cont));
  console.log(cont);
  return (
    <>
      <div style={{ height: "500px", width: "100%" }}></div>
      <Link href={`/shared/${cont}`}>shared</Link>
      <br></br>
      <Link href="/signup">signup</Link>
      <br></br>
      <Link href="/signin">signin</Link>
      <br></br>
      <Link href={`/folder/${cont}`}>folder</Link>
    </>
  );
}
