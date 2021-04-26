import { render, screen } from "@testing-library/react";

import Counter from "./index";

describe("Counter", () => {
  it("Accepts count", () => {
    render(<Counter count={1} />);
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
