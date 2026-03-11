import { render, screen, within } from "@testing-library/react";
import App from "../src/App";

describe("Designer profile card look-a-like challenge", () => {
  it("renders the profile card container", () => {
    render(<App />);

    expect(screen.getByTestId("profile-card")).toBeInTheDocument();
  });

  it("displays the designer name", () => {
    render(<App />);

    expect(screen.getByText("Chloe Harrison")).toBeInTheDocument();
  });

  it("displays the job title", () => {
    render(<App />);

    expect(screen.getByText("Product designer")).toBeInTheDocument();
  });

  it("renders skill tags for Figma and UX Design", () => {
    render(<App />);

    expect(screen.getByText("Figma")).toBeInTheDocument();
    expect(screen.getByText("UX Design")).toBeInTheDocument();
  });

  it("displays the rating value", () => {
    render(<App />);

    expect(screen.getByText("4.5")).toBeInTheDocument();
  });

  it("displays earnings and rate information", () => {
    render(<App />);

    expect(screen.getByText("$15K+")).toBeInTheDocument();
    expect(screen.getByText("$80/hr")).toBeInTheDocument();
  });

  it("renders a Get in touch button", () => {
    render(<App />);

    expect(
      screen.getByRole("button", { name: /get in touch/i }),
    ).toBeInTheDocument();
  });

  it("renders a bookmark button", () => {
    render(<App />);

    expect(
      screen.getByRole("button", { name: /bookmark/i }),
    ).toBeInTheDocument();
  });
});
