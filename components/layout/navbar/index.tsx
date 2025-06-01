import Image from "next/image";
import Link from "next/link";
import { NavbarItems } from "./NavbarItems";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";

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
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};
