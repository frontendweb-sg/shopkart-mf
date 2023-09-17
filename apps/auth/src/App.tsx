import { useAppTheme } from "container/AppTheme";
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import { BrowserHistory } from "history";

type Props = {
  history: BrowserHistory;
};
const App = ({ history }: Props) => {
  return (
    <HistoryRouter
      // @ts-expect-error
      history={history}
    >
      <Routes>
        <Route path="/auth" element={<Signin />} />
        <Route path="/auth/signup" element={<Signup />} />
      </Routes>
    </HistoryRouter>
  );
};

export default App;
