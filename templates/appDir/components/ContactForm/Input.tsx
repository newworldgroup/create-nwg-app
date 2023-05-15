"use client";

import { useRef, useState } from "react";
import styles from "./ContactForm.module.scss";
type Field = "name" | "email" | "phone" | "moveindate" | "comments";

export default function Input({
  field,
  label,
  required = false,
}: {
  field: Field;
  label: string;
  required?: boolean;
}) {
  const [active, setActive] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const title =
    field === "name"
      ? "Please enter your name"
      : field === "email"
      ? "Please enter your email"
      : field === "phone"
      ? "Please enter your phone number"
      : field === "moveindate"
      ? "Please enter your move in date"
      : "Please enter your comments";

  return (
    <div className={styles.holdfield}>
      <label
        className={`${styles.label} ${active ? styles.move : ""}`}
        onClick={() => {
          setActive(true);
          input.current?.focus();
        }}
      >
        {label}
        {required ? "*" : ""}
      </label>
      <input
        name={field}
        ref={input}
        required={required}
        type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
        className={styles.contactfield}
        placeholder=""
        title={title}
        onFocus={() => setActive(true)}
      />
    </div>
  );
}
