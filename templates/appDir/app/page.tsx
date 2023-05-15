import Hero from "@components/Hero";
import styles from "./home.module.scss";

export const metadata = {
  title: "Rentals Name | Home",
  description: "",
  openGraph: {
    title: "Rentals Name",
    description: "",
  },
};

export default function Home() {
  const hero1content = {
    headline: "Lorem ipsum dolor sit amet",
    buttonlabel: "Apply Now",
  };
  const hero2content = {
    headline: "Lorem ipsum dolor sit amet",
    buttonlabel: "Amenities",
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Home</h1>
      </div>
      <Hero content={hero1content} />
    </>
  );
}
