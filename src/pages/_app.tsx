import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import { Theme } from "../assets/theme";
import { MyContext } from "../context";
import { useState } from "react";
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`

export default function App({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState<languageOptionsProps>("pt");

  return (
    <ChakraBaseProvider theme={Theme}>
      <MyContext.Provider value={{ language, setLanguage }}>
        <Component {...pageProps} />
      </MyContext.Provider>
    </ChakraBaseProvider>
  );
}
