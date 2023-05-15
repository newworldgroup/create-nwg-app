import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "./ExpandedNav.module.scss";

export default function ExpandedNav({ active }: { active: boolean }) {
  // todo map links to routes
  return (
    <div
      className={`${styles.expandednav} ${active ? styles.active : null}`}
    ></div>
  );
}
