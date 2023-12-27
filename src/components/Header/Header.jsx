// INTERNAL
import Nav from "../Nav";
import Icons from "../Icons/index";
// STYLES
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.applicationHeader}>
      <img src="/Logo.svg" alt="Logo" />
      <Nav className={styles.headerNavigation}>
        <menu className={styles.headerNavigationMenu}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/order-online">Order Online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </menu>
      </Nav>
      <button className={styles.cart}>
        <Icons type="cart" />
      </button>
      <button className={styles.responsiveMenu}>
        <Icons type="hamburger-menu" />
      </button>
    </header>
  );
}
