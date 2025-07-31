import Link from "next/link";
import "./header.css";
export default function Header() {
  return (
    <header>
      <nav className="d-flex upper-nav text-muted ms-3">
        <div className="flex-fill"><i className="bi bi-chevron-left "></i> Visit Nike.com</div>
        <Link className="" href='/'>Join/Login</Link>
        <Link href='/'>help</Link>
        <Link href='/'><i className="bi bi-cart4"></i></Link>
        <Link href='/'><i className="bi bi-geo-alt"></i>Canada</Link>
      </nav>
      <nav className="d-flex lower-nav justify-content-between align-items-center">
        <div><img src="/images-removebg-preview.png" alt="Nike Logo" className="logo ms-3" /></div>
        <div className="primary-nav">
            <Link href='/'> FEED</Link>
            <Link href='/'> IN STOCK</Link>
            <Link href='/'> UPCOMING</Link>
        </div>
        <div></div>
    </nav>
    </header>
  );
}