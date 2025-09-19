import Link from "next/link";
export default function GlobalLayout({ children }) {
  return (
    <>
      <header>
        <div className="container">
          <Link href="/">ONEBITE CINEMA</Link>
        </div>
      </header>
      <main className="container">{children}</main>
    </>
  );
}
