// STYLES
import styles from "./CallToActionButton.module.css";

export default function CallToActionButton({ children }) {
  return <button className={styles.callToActionButton}>{children}</button>;
}
