"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];
export const NavbarItems = () => {
  const currentPath = usePathname();
  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className={cn(currentPath === href && "font-semibold text-primary")}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};
