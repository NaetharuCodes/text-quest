import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AppShell from "@/components/AppShell/AppShell";

describe("AppShell", () => {
  it("renders correctly", () => {
    render(<AppShell>children</AppShell>);
    const appShell = screen.getByTestId("main-appshell");
    expect(appShell).toBeInTheDocument();
  });
});
