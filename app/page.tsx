import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main>
      <section className={styles.hero}>
        <picture className={styles.heroBg}>
          <source
            srcSet="/images/hero/hero-2x.webp"
            media="(min-resolution: 2dppx)"
          />
          <img
            src="/images/hero/hero-1x.webp"
            alt="Camper at sunset"
            className={styles.heroBgImg}
          />
        </picture>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Campers of your dreams</h1>
          <p className={styles.heroSubtitle}>
            You can find everything you want in our catalog
          </p>
          <Link href="/catalog" className={styles.heroBtn}>
            View Now
          </Link>
        </div>
      </section>
    </main>
  );
}
