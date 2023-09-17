import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider, CssBaseline } from "@mui/material";
import { createBrowserHistory, BrowserHistory } from "history";
import themes from "@/theme";
type ThemeProps = {
  history?: BrowserHistory | null;
  theme: "light" | "dark";
  changeTheme: () => void;
};

type ITheme = "light" | "dark";
const ThemeContext = createContext<ThemeProps>({
  theme: "light",
  changeTheme: () => {},
});

const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ITheme>("light");

  const history = createBrowserHistory();

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme") as ITheme;
    if (theme) {
      setTheme(theme);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
        history,
      }}
    >
      <StyledEngineProvider injectFirst>
        <ThemeProvider
          theme={themes({
            theme,
          })}
        >
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Context can not be empty!");
  }
  return context;
};

export type { ITheme, ThemeProps };
export default AppThemeProvider;

//https://github.com/devias-io/carpatin-dashboard-free/tree/main/src/theme
