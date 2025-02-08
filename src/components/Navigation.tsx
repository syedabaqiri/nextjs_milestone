import Link from 'next/link';
import styles from "../styles/Navigation.module.css"

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
}