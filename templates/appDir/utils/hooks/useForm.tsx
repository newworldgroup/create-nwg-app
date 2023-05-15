import {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useState,
} from "react";

export function useForm() {
  const [inputs, setInputs] = useState({});

  const handleSubmit: (formData: FormData) => void = useCallback(async () => {
    // "use server";
    // const res = await fetch("/api/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(inputs),
    // });
    // if (res.ok) console.log(res.body);
    // else console.log(`Error: ${res.status} ${res.statusText}`);
    console.log(formData.get("name"));
  }, []);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      event.persist();
      setInputs((inputs) => ({
        ...inputs,
        [event.target.name]: event.target.value,
      }));
    },
    []
  );
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
}
