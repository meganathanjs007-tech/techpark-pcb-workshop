"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center text-3xl font-extrabold tracking-tight"
        >
          <span className="text-orange-500">Tech</span>
          <span className="text-gray-900">Park</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="#about"
            className="font-medium text-gray-700 transition-colors duration-300 hover:text-orange-500"
          >
            About
          </a>

          <a
            href="#learn"
            className="font-medium text-gray-700 transition-colors duration-300 hover:text-orange-500"
          >
            Learn
          </a>

          <a
            href="#details"
            className="font-medium text-gray-700 transition-colors duration-300 hover:text-orange-500"
          >
            Workshop
          </a>

          <a
            href="#techpark"
            className="font-medium text-gray-700 transition-colors duration-300 hover:text-orange-500"
          >
            TechPark
          </a>

          <a
            href="#contact"
            className="font-medium text-gray-700 transition-colors duration-300 hover:text-orange-500"
          >
            Contact
          </a>
        </nav>

        {/* Register Button */}
        <Link
          href="/register"
          className="inline-flex h-11 items-center justify-center rounded-xl bg-orange-500 px-6 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg"
        >
          Register Now
        </Link>
      </div>
    </header>
  );
}