import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});
export const useColorMode = () => React.useContext(ColorModeContext);

export default function ToggleColorMode({ children }: React.PropsWithChildren) {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        localStorage.setItem("mui-mode", mode === "light" ? "dark" : "light");
      },
    }),
    [mode]
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  React.useEffect(() => {
    const localMode = localStorage.getItem("mui-mode");
    if (localMode) {
      setMode(localMode as "light" | "dark");
    }
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
