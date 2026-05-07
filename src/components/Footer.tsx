import Link from "next/link";
import { resume } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="text-sm font-semibold text-gray-900">{resume.name}</p>
            <p className="text-xs text-gray-500">{resume.title}</p>
            <p className="mt-1 text-xs text-gray-400">
              {resume.contact.email} · {resume.contact.phone}
            </p>
          </div>
          <nav className="flex gap-6">
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              首页
            </Link>
            <Link
              href="/cases"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              案例
            </Link>
            <Link
              href="/resume"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              简历
            </Link>
          </nav>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
