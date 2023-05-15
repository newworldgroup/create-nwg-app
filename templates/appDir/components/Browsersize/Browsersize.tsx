"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./Browsersize.module.scss";

export default function Browsersize() {
  const [browserSize, setBrowserSize] = useState([0, 0]);

  const handleResize = useCallback(function () {
    setBrowserSize([window.innerWidth, window.innerHeight]);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.browserwidth}>
      {browserSize[0]} x {browserSize[1]}
    </div>
  );
}
