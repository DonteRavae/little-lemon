import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <img src="/Logo.svg" alt="Logo" />
      <Nav>
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
    </header>
  );
}
