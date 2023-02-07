import { createContext } from "react";

interface contextProps {
  language: languageOptionsProps;
  setLanguage: any;
}

export const MyContext = createContext<contextProps>({
  language: "pt",
  setLanguage: undefined,
});
