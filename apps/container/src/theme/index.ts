import {
  createStyles,
  useTheme,
  createTheme,
  ThemeOptions,
  alpha,
} from "@mui/material/styles";

type ThemeProps = {
  theme: "light" | "dark";
};
const theme = (options: ThemeProps) => {
  const { theme } = options;

  const themeOptions: ThemeOptions = {
    palette: {
      mode: theme,
    },
  };

  const themes = createTheme(themeOptions);
  return themes;
};

export { useTheme, createStyles, alpha };
export default theme;
