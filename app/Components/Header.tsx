"use client";
import React, { useContext } from "react";
import darkMode from "@/app/public/dark-mode-icon.svg";
import lightMode from "@/app/public/light-mode-icon.svg";
import Image from "next/image";
import { ThemeContext, ThemeDispatchContext } from "../themeProvider/context";
function Header() {
  const dispath = useContext(ThemeDispatchContext);
  const theme = useContext(ThemeContext);
  return (
    <div>
      <button
        className="flex flex-row g-2 bg-primary p-2 rounded-md items-center"
        onClick={() => dispath(theme)}
      >
        <Image src={theme == "dark" ? lightMode : darkMode} alt="mode icon" className="w-8 h-8" />
      </button>
    </div>
  );
}

export default Header;
