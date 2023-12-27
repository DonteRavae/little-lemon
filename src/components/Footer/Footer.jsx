// INTERNAL
import Nav from "../Nav";
// STYLES
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="/Logo.svg" alt="Logo" />
      <Nav>
        <h3>Doormat Navigation</h3>
        <menu>
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
      <section>
        <h3>Contact</h3>
        <menu>
          <li>Chicago</li>
          <li>Phone Number</li>
          <li>Email</li>
        </menu>
      </section>
      <Nav>
        <h3>Social Media Links</h3>
        <menu>
          <li>
            <a href="/social">Social</a>
          </li>
          <li>
            <a href="/media">Media</a>
          </li>
          <li>
            <a href="/links">Links</a>
          </li>
        </menu>
      </Nav>
    </footer>
  );
}
