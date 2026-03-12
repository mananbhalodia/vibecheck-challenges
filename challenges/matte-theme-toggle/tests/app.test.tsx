import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";

describe("Matte theme toggle look-a-like challenge", () => {
  it("renders an accessible theme switch", () => {
    render(<App />);

    expect(
      screen.getByRole("switch", { name: /theme toggle/i }),
    ).toBeInTheDocument();
  });

  it("starts in the dark position shown in the reference image", () => {
    render(<App />);

    expect(screen.getByRole("switch", { name: /theme toggle/i })).toHaveAttribute(
      "aria-checked",
      "true",
    );
  });

  it("renders accessible anchors for the light icon and dark thumb", () => {
    render(<App />);

    expect(screen.getByLabelText(/light mode icon/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/dark mode thumb/i)).toBeInTheDocument();
  });

  it("toggles between dark and light states when clicked", async () => {
    const user = userEvent.setup();
    render(<App />);

    const toggle = screen.getByRole("switch", { name: /theme toggle/i });

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-checked", "false");

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-checked", "true");
  });

  it("keeps the control inside a framed matte surface", () => {
    render(<App />);

    expect(screen.getByTestId("toggle-frame")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-track")).toBeInTheDocument();
  });
});
