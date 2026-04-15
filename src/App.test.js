import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock(
  "react-router-dom",
  () => {
    const mockNavigate = jest.fn();
    const LinkLike = ({ children, to = "#", ...rest }) => (
      <a href={typeof to === "string" ? to : "#"} {...rest}>
        {children}
      </a>
    );

    return {
      BrowserRouter: ({ children }) => <>{children}</>,
      Routes: ({ children }) => <>{children}</>,
      Route: ({ path, element = null }) => (path === "/" ? element : null),
      Link: LinkLike,
      NavLink: LinkLike,
      useLocation: () => ({ pathname: "/", hash: "" }),
      useNavigate: () => mockNavigate,
      useParams: () => ({})
    };
  },
  { virtual: true }
);

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false
    })
  });
  window.scrollTo = jest.fn();
});

test("renders navigation links", () => {
  render(<App />);

  expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /services & about/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /book service/i })).toBeInTheDocument();
});
