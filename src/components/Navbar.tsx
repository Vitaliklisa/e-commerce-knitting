import Link from "next/link";
import Image from "next/image";
import ava from "@/assets/ava.jpeg";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src={ava} width={40} height={40} alt="Knitty logo" />
          <span className="text-xl font-bold tracking-tight">Knitty Nata</span>
        </Link>
        <Button asChild>
          <Link href="/knitty/new">Post a item</Link>
        </Button>
      </nav>
    </header>
  );
}
