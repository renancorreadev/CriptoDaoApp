import { Logo } from "@icons/Logo";
import Link from "next/Link";

export function Navbar() {
  return (
    <header className="">
      <div className="">
        <div className="w-">
          <Logo />
        </div>
        <nav>
          <Link href="#">Explore</Link>
          <Link href="#">Artistas</Link>
          <Link href="#">Sobre</Link>
          <Link href="#">Dashboard</Link>
        </nav>
      </div>
    </header>
  );
}
