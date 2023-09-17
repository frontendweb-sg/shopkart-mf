import { useAppTheme } from "@/context/theme";

const HomePage = () => {
  const { changeTheme } = useAppTheme();
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={changeTheme}>theme</button>
    </div>
  );
};

export default HomePage;
