import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      Sign in page <Link to="/auth/signup">Sign up</Link>
    </div>
  );
};

export default Signin;
