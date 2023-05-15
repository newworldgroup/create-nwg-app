"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import ExpandedNav from "./ExpandedNav";

export default function Header() {
  const [mobileNavToggle, setMobileNavToggle] = useState(false);

  function toggleMobileNav() {
    setMobileNavToggle((prev) => !prev);
  }
  return (
    <div className={styles.container}>
      <div className={styles.hamburgerarea}>
        <button
          aria-label="Toggle Navigation"
          type="button"
          title="Toggle Navigation"
          className={`${styles.hamburger} ${
            mobileNavToggle ? styles.open : null
          }`}
          onClick={toggleMobileNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={styles.holdcontent}>
        <div className={styles.col}></div>
        <div className={`${styles.col} ${styles.logoarea}`}>
          <div className={styles.logo}>
            <Link href={`/`}>Website</Link>
          </div>
        </div>
        <div className={`${styles.col} ${styles.linkarea}`}>
          <div className="links">
            <ul>
              <li>
                <Link href={`/availability`}>Availability</Link>
              </li>
              <li className={styles.keeponmobile}>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </li>
              <li>
                <Link href={`/contact`}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ExpandedNav active={mobileNavToggle} />
    </div>
  );
}
