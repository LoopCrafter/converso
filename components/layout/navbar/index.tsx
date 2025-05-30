import Image from "next/image";
import Link from "next/link";
import { NavbarItems } from "./NavbarItems";

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="">
        <Link href="/">
          <Image src="/images/logo.svg" alt="Logo" width={46} height={44} />
        </Link>
      </div>
      <div className="flex items-center gap-8">
        <NavbarItems />
        <p>Sign In</p>
      </div>
    </header>
  );
};
