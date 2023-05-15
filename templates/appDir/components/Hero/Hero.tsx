import { useEffect, useState, useRef } from "react";
import parse from "html-react-parser";
import styles from "./Hero.module.scss";

export default function Hero({ content }: { content: HeroContent }) {
  console.log(content.headline);
  const headlineWithHtml = parse(content.headline);
  const headline1 = content.headline;
  return (
    <div className={styles.container}>
      {/* {headline1} */}
      <button type="button">{content.buttonlabel}</button>
    </div>
  );
}
