import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

test("renders the Create Next App heading", () => {
  render(<Page />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Create Next App" }),
  ).toBeDefined();
});

test("renders Deploy Now and Documentation links pointing to the right destinations", () => {
  render(<Page />);

  const deployNow = screen.getByRole("link", { name: /Deploy Now/ });
  expect(deployNow.getAttribute("href")).toMatch(/^https:\/\/vercel\.com\/new/);
  expect(deployNow.getAttribute("target")).toBe("_blank");

  const documentation = screen.getByRole("link", { name: "Documentation" });
  expect(documentation.getAttribute("href")).toMatch(/^https:\/\/nextjs\.org\/docs/);
  expect(documentation.getAttribute("target")).toBe("_blank");
});

test("renders Templates and Learning links pointing to the right destinations", () => {
  render(<Page />);

  const templates = screen.getByRole("link", { name: "Templates" });
  expect(templates.getAttribute("href")).toMatch(/^https:\/\/vercel\.com\/templates/);

  const learning = screen.getByRole("link", { name: "Learning" });
  expect(learning.getAttribute("href")).toMatch(/^https:\/\/nextjs\.org\/learn/);
});
