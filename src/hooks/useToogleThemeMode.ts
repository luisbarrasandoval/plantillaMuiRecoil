import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../atom/themeMode";

const useToogleThemeMode = () => {
  const [mode, setMode] = useRecoilState(themeState);

  const toggleTheme = useCallback(() => {
    setMode(mode === "light" ? "dark" : "light");
  }, [mode]);

  return {  mode, toggleTheme };
};

export default useToogleThemeMode;
