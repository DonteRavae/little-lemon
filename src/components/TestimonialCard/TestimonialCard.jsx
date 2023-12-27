// STYLES
import styles from "./TestimonialCard.module.css";

export default function TestimonialCard({ rating, user, review }) {
  return (
    <article className={styles.testimonialCard}>
      <h5 className={styles.rating}>Rating: {rating}/5</h5>
      <section className={styles.user}>
        <img src={user.image} alt="Reviewer Avatar" />
        <p>{user.name}</p>
      </section>
      <p className={styles.review}>{review}</p>
    </article>
  );
}
