import { render as rtlRender } from "@testing-library/react";
import { ReactElement } from "react";

const customRender = (ui: ReactElement, options = {}) => {
  return rtlRender(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });
};

export * from "@testing-library/react";
export { customRender as render };
