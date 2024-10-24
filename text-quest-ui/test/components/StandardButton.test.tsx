import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import StandardButton from "@/components/StandardButton/StandardButton";

describe("StandardButton", () => {
  it("renders correctly", () => {
    render(
      <StandardButton
        text="Test Button"
        onClick={() => {}}
        type="button"
        btnType="primary"
      />
    );
    const button = screen.getByText("Test Button");
    expect(button).toBeInTheDocument();
  });

  it("displays the correct type", () => {
    render(
      <StandardButton
        text="Test Button"
        onClick={() => {}}
        type="button"
        btnType="primary"
      />
    );
    const button = screen.getByText("Test Button");
    expect(button).toHaveAttribute("type", "button");
  });

  it("clicks when onClick is pressed", () => {
    const mockFunc = vi.fn();

    render(
      <StandardButton
        text="Test Button"
        onClick={mockFunc}
        type="button"
        btnType="primary"
      />
    );
    const button = screen.getByText("Test Button");
    fireEvent.click(button);
    expect(mockFunc).toHaveBeenCalledOnce();
  });
});
