import ContactForm from "@components/ContactForm";
import styles from "./contact.module.scss";

export const metadata = {
  title: "Rentals Name | Contact",
  description: "",
  openGraph: {
    title: "Rentals Name",
    description: "",
  },
};

export default function Contact() {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact</h1>
        <ContactForm />
      </div>
    </>
  );
}
