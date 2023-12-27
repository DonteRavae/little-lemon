// INTERNAL
import HighlightCard from "../HighlightCard/HighlightCard";
import CallToActionButton from "../CallToActionButton/CallToActionButton";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
// STYLES
import styles from "./Main.module.css";

export default function Main() {
  return (
    <main>
      {/* HERO */}
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

      {/* HIGHLIGHTS */}
      <section className={styles.highlights}>
        <h1 className={styles.specials}>Specials</h1>
        <CallToActionButton>Online Menu</CallToActionButton>
        <section className={styles.highlightsSlider}>
          <HighlightCard
            image="/greekSalad.jpg"
            title="Greek Salad"
            price="$12.99"
            description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
          />
          <HighlightCard
            image="/bruchetta.svg"
            title="Bruchetta"
            price="$5.99"
            description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
          />
          <HighlightCard
            image="/lemonDessert.jpg"
            title="Lemon Dessert"
            price="$5.00"
            description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          />
        </section>
      </section>

      {/* TESTIMONIALS */}
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

      {/* ABOUT */}
      <section className={styles.about}>
        <div className={styles.aboutInfo}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </div>
        <div className={styles.aboutImages}>
          <img src="/chefs1.jpg" alt="Mario and Adrian in Kitchen" />
          <img src="/chefs2.jpg" alt="Mario and Adrian Smiling" />
        </div>
      </section>
    </main>
  );
}
