// INTERNAL
import TestimonialCard from "../TestimonialCard/TestimonialCard";
// STYLES
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2>Testimonials</h2>
      <section className={styles.testimonialsSlider}>
        <TestimonialCard
          rating={4}
          user={{ image: "/testimonialUser.jpg", name: "John Doe" }}
          review="Good food. Great Service."
        />
        <TestimonialCard
          rating={4}
          user={{ image: "/testimonialUser.jpg", name: "John Doe" }}
          review="Good food. Great Service."
        />
        <TestimonialCard
          rating={4}
          user={{ image: "/testimonialUser.jpg", name: "John Doe" }}
          review="Good food. Great Service."
        />
        <TestimonialCard
          rating={4}
          user={{ image: "/testimonialUser.jpg", name: "John Doe" }}
          review="Good food. Great Service."
        />
      </section>
    </section>
  );
}
