"use client";

import { useReducer } from "react";
import { ThemeContext, ThemeDispatchContext } from "./context";

function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, dispath] = useReducer(themeReducer, "dark");

  return (
    <ThemeContext value={theme}>
      <ThemeDispatchContext value={dispath}>
        <body data-theme={theme} className="antialiased h-screen mx-auto">
          {children}
        </body>
      </ThemeDispatchContext>
    </ThemeContext>
  );
}

export default ThemeProvider;

function themeReducer(theme: string) {
  return theme == "dark" ? "light" : "dark";
}
