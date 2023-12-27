// STYLES
import styles from "./HighlightCard.module.css";

export default function HighlightCard({ image, title, price, description }) {
  return (
    <article className={styles.highlightCard}>
      <img className={styles.dishImage} src={image} alt="" />
      <section>
        <header>
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.price}>{price}</h3>
        </header>
        <p>{description}</p>
        <footer>
          <h4>
            Order a delivery <img src="/deliveryIcon.svg" alt="delivery" />
          </h4>
        </footer>
      </section>
    </article>
  );
}
