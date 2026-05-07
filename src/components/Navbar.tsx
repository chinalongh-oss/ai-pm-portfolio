"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { resume } from "@/data/resume";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/cases", label: "案例" },
  { href: "/resume", label: "简历" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-gray-900">
          {resume.name}
        </Link>
        <nav className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href))
                  ? "font-medium text-brand-600"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
