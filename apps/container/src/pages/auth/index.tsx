import { useAppTheme } from "@/context/theme";
import { mount } from "auth/AuthBootstrap";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Update } from "history";

const AuthPage = () => {
  const elRef = useRef<HTMLDivElement>(null);
  const { history } = useAppTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const { onParentNavigation } = mount(elRef.current!, {
      initialPath: history?.location.pathname,
      onNavigate: ({ location: { pathname: nextPathname } }: Update) => {
        const { pathname } = history?.location!;
        if (pathname !== nextPathname) {
          navigate(nextPathname);
        }
      },
    });

    history?.listen(onParentNavigation);
  }, []);

  return <div ref={elRef}></div>;
};

export default AuthPage;
