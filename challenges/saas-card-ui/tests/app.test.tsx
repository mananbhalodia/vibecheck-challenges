import { render, screen, within } from "@testing-library/react";
import App from "../src/App";

describe("SaaS card look-a-like challenge", () => {
  it("renders the main card region", () => {
    render(<App />);

    expect(
      screen.getByRole("region", { name: /automation card/i }),
    ).toBeInTheDocument();
  });

  it("shows the project chip title and subtitle", () => {
    render(<App />);

    const chip = screen.getByTestId("project-chip");
    expect(within(chip).getByText("Name Project")).toBeInTheDocument();
    expect(
      within(chip).getByText("2/5 Team Members Are Working"),
    ).toBeInTheDocument();
  });

  it("renders the highlighted project icon container", () => {
    render(<App />);

    expect(screen.getByTestId("project-icon")).toBeInTheDocument();
  });

  it("renders the marketing headline", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Automation" }),
    ).toBeInTheDocument();
  });

  it("renders the exact supporting body copy", () => {
    render(<App />);

    expect(
      screen.getByText(
        "Set Up Workflows That Handle Reputative Tasks Automatically, Freeing Up Your Time For More Critical Work.",
      ),
    ).toBeInTheDocument();
  });

  it("places the project chip above the heading in the card layout", () => {
    render(<App />);

    const card = screen.getByTestId("saas-card");
    const chip = screen.getByTestId("project-chip");
    const heading = screen.getByRole("heading", { name: "Automation" });

    expect(card.compareDocumentPosition(chip)).toBeTruthy();
    expect(chip.compareDocumentPosition(heading)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
  });
});
