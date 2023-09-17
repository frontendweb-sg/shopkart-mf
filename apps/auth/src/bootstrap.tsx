import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {
  BrowserHistory,
  Update,
  createBrowserHistory,
  createMemoryHistory,
} from "history";

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
  root.render(<App history={history} />);

  return {
    onParentNavigation: ({ location: { pathname: nextPathame } }: Update) => {
      const { pathname } = history.location;
      if (pathname !== nextPathame) {
        history.push(nextPathame);
      }
    },
  };
}

if (env === "development") {
  const el = document.getElementById("_root-auth") as HTMLElement;
  if (el) mount(el, { defaultHistory: createBrowserHistory() });
}

export { mount };
