import { useEffect, useRef } from "react";
import { mount } from "cart/CartBootstrap";
import { useAppTheme } from "@/context/theme";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const elRef = useRef<HTMLDivElement>(null);
  const { history } = useAppTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const { onParentNavigation } = mount(elRef.current!, {
      initialPath: history?.location.pathname,
      onNavigate: ({ location: { pathname: nextPathame } }) => {
        const pathname = history?.location.pathname;
        if (pathname !== nextPathame) {
          navigate(nextPathame);
        }
      },
    });
    history?.listen(onParentNavigation);
  }, []);

  return <div ref={elRef}></div>;
};

export default CartPage;
