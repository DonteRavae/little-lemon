// INTERNAL
import HighlightCard from "../HighlightCard/HighlightCard";
import CallToActionButton from "../CallToActionButton/CallToActionButton";
// STYLES
import styles from "./Highlights.module.css";

export default function Highlights() {
  return (
    <section className={styles.highlights}>
      <h1 className={styles.specials}>This weeks specials!</h1>
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
  );
}
