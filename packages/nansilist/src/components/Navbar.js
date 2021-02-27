import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image
          className="logo-image"
          width="100px"
          height="100px"
          src="/images/nansi-logo.png"
          alt="nansi-logo"
        />
        <p className="logo-title">난시난시❤️</p>
      </div>
      <Link href="/">
        <a>홈</a>
      </Link>
      <Link href="/about">
        <a>소개</a>
      </Link>
      <Link href="/friends">
        <a>난시친구들</a>
      </Link>
    </nav>
  );
};

export default Navbar;
