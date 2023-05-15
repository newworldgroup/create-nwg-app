import { useEffect, useState } from "react";

export function useUTM() {
  const [utmSource, setutmSource] = useState<string | undefined>();
  const [utmMedium, setutmMedium] = useState<string | undefined>();
  const [utmKeywords, setutmKeywords] = useState<string | undefined>();

  useEffect(() => {
    if (localStorage.getItem("utm_source")) {
      const utmsource = localStorage.getItem("utm_source") ?? "";
      setutmSource(utmsource);
    }
    if (localStorage.getItem("utm_medium")) {
      const utmmedium = localStorage.getItem("utm_medium") ?? "";
      setutmMedium(utmmedium);
    }
    if (localStorage.getItem("utm_term")) {
      const utmkeywords = localStorage.getItem("utm_term") ?? "";
      setutmKeywords(utmkeywords);
    }

    console.log(utmSource, utmMedium, utmKeywords);
  }, []);

  return {
    utmSource,
    utmMedium,
    utmKeywords,
  };
}
