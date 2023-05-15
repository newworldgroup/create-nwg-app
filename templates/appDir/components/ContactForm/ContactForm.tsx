"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import styles from "./ContactForm.module.scss";
import Image from "next/image";
import arrowWhite from "../../public/icons/Arrow-right-white.svg";
import * as gtag from "../../lib/gtag";
import { useForm, useUTM } from "utils/hooks";
import Input from "./Input";

function Contact() {
  const utmKeywordsRef = useRef<HTMLInputElement>();
  const utmSourceRef = useRef<HTMLInputElement>();
  const utmMediumRef = useRef<HTMLInputElement>();
  const [formSuccess, setformSuccess] = useState(false);
  const [formError, setformError] = useState("");
  const [buttonSubmitted, setButtonSubmitted] = useState(false);

  const contactRef = useRef(null);

  const pathname = usePathname();
  const contactPage = pathname.includes("contact");

  // function handleSubmit() {
  //   setButtonSubmitted(true);
  //   async function sendLead() {
  //     //json post
  //     // const postJsonVaues = await {
  //     //   formdata_name: nameRef.current.value,
  //     //   formdata_email: emailRef.current.value,
  //     //   formdata_phone: phoneRef.current.value,
  //     //   formdata_moveindate: moveindateRef.current.value,
  //     //   formdata_comments: commentRef.current.value,
  //     // };

  //     let fd = await new FormData();
  //     fd.append("formdata_name", nameRef.current.value);
  //     fd.append("formdata_email", emailRef.current.value);
  //     fd.append("formdata_phone", phoneRef.current.value);
  //     fd.append("formdata_movein_date", moveindateRef.current.value);
  //     fd.append("formdata_comments", commentRef.current.value);
  //     fd.append("formdata_source", utmSourceRef.current.value);
  //     fd.append("formdata_medium", utmMediumRef.current.value);
  //     fd.append("formdata_keywords", utmKeywordsRef.current.value);

  //     const options = {
  //       method: "POST",
  //       // headers: {
  //       //   "Content-type": "application/json",
  //       // },
  //       // body: JSON.stringify(postJsonVaues),
  //       body: fd,
  //       // body: new URLSearchParams(
  //       //   "formdata_name=Omar Elbaga&formdata_email=oelbaga@newworldgroup.com&2017701404&Test"
  //       // ),
  //       // mode: "cors",
  //     };
  //     if (buttonSubmitted === true) return;
  //     const url = "https://nwgapi.com/apiforms/XXX/XX.php";
  //     const response = await fetch(url, options);
  //     const responseJson = await response.text();
  //     if (responseJson === "Success") {
  //       setformSuccess(true);
  //       setButtonSubmitted(false);
  //     } else {
  //       setformError(responseJson);
  //       setButtonSubmitted(false);
  //     }
  //     console.log(responseJson);
  //     // gtag.gconversion("XXXX");
  //   }
  //   sendLead();
  // }

  const { handleSubmit, handleInputChange } = useForm();
  const { utmSource, utmMedium, utmKeywords } = useUTM();
  return (
    <section
      className={`${styles.formSection} ${
        contactPage ? styles.pt10 : styles.ptb150
      }`}
    >
      <div className={styles.formContainer} ref={contactRef}>
        {formSuccess === false ? (
          <div className={styles.formcontent}>
            <div className={styles.formarea}>
              <form action={handleSubmit} onSubmit={(e) => e.preventDefault()}>
                <Input field="name" label="Name" required />
                <Input field="phone" label="Phone" required />
                <Input field="email" label="Email" required />
                <Input field="moveindate" label="Move-in-Date" />
                <Input field="comments" label="Message" />

                <div className={styles.errors}>
                  <p>{formError}</p>
                </div>

                <input type="hidden" defaultValue={utmSource} />
                <input type="hidden" defaultValue={utmMedium} />
                <input type="hidden" defaultValue={utmKeywords} />

                <button
                  className={
                    !buttonSubmitted
                      ? `-modOrangeText ${styles.button} ${styles.largeText}`
                      : `-whiteText  ${styles.button}`
                  }
                  type="submit"
                  onClick={() => setButtonSubmitted(true)}
                >
                  {!buttonSubmitted ? "Submit" : "Sending ..."}
                </button>
              </form>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {formSuccess ? (
        <div className={`${styles.thankyoucontent} -uppercase`}>
          Thank you for your inquiry.
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default Contact;
