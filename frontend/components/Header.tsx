"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          MediumLite
        </Link>
        <nav className="nav">
          <Link href="/tags">Tags</Link>
          <Link href="/search">Search</Link>
          <Link href="/editor/new">New Post</Link>
          <Link href="/login" className="cta">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}