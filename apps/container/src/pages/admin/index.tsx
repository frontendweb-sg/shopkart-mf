import { useEffect, useRef } from "react";
import { mount } from "admin/AdminBootstrap";
import { useAppTheme } from "@/context/theme";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const elRef = useRef<HTMLDivElement>(null);
  const { history } = useAppTheme();
  const navigate = useNavigate();

  useEffect(() => {
    mount(elRef.current!, {
      initialPath: history?.location.pathname,
      onNavigate: ({ location: { pathname: nextPathame } }) => {
        const pathname = history?.location.pathname;
        if (pathname !== nextPathame) {
          navigate(nextPathame);
        }
      },
    });
  }, []);

  return <div ref={elRef}></div>;
};

export default AdminPage;
