import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div style={{ height: "500px", width: "100%" }}></div>
      <Link href="/shared/1">shared</Link>
      <br></br>
      <Link href="/signup">signup</Link>
      <br></br>
      <Link href="/signin">signin</Link>
      <br></br>
      <Link href="/folder/1">folder</Link>
    </>
  );
}
