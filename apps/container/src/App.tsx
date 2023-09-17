import AppRoutes from "./AppRoutes";
import { useAppTheme } from "@/context/theme";
import { useTheme } from "@/theme";
import { Suspense } from "react";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProgressBar from "@/components/ui/ProgressBar";

const App = () => {
  const theme = useTheme();
  const { history } = useAppTheme();

  return (
    <HistoryRouter
      // @ts-expect-error
      history={history!}
    >
      <ToastContainer />
      <Suspense fallback={<ProgressBar />}>
        <AppRoutes />
      </Suspense>
    </HistoryRouter>
  );
};

export default App;
