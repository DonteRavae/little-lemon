// INTERNAL
import CallToActionButton from "../CallToActionButton/CallToActionButton";
// STYLES
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>

      <p>
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </p>

      <CallToActionButton>Reserve a Table</CallToActionButton>
      <img src="/heroImg.jpg" alt="Restaurant Food" />
    </section>
  );
}
