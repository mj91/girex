import { render } from "@testing-library/react";
import { App } from "./App";

test("renders nothing", () => {
  const { container } = render(<App />);
  expect(container).toBeEmptyDOMElement();
});
