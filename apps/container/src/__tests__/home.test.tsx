import HomePage from "../pages/home";
import { render, screen } from "@testing-library/react";

describe("Home component", () => {
  it("Load component", () => {
    render(<HomePage />);

    const text = screen.getByText("Home Page");
    expect(text).toBeInTheDocument();
  });
});
