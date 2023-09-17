import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserHistory,
  Update,
  createBrowserHistory,
  createMemoryHistory,
} from "history";
import App from "./App";
// import { createMemoryRouter } from "react-router-dom";
//  import { createBrowserRouter } from "react-router-dom";

type MountProps = {
  defaultHistory?: BrowserHistory;
  initialPath?: string;
  onNavigate?: (option: Update) => void;
};
const env = process.env.NODE_ENV;
function mount(
  el: HTMLElement,
  { defaultHistory, initialPath, onNavigate }: MountProps
) {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath!],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  const root = createRoot(el);
  root.render(<App />);

  return {
    onParentNavigation: ({ location: { pathname: nextPathname } }: Update) => {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
}

if (env === "development") {
  const el = document.getElementById("_root-categories") as HTMLElement;
  if (el) mount(el, { defaultHistory: createBrowserHistory() });
}

export { mount };
