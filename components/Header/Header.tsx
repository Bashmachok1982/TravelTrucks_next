import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/icons/logo.svg"
            alt="TravelTrucks"
            width={136}
            height={16}
            priority
          />
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/catalog" className={styles.navLink}>
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
}
