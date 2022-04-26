import { Link, useMatch } from "react-router-dom";
export function CustomLink({ children, to, ...props }) {
  const match = useMatch(to);
  return (
    <Link
      to={to}
      style={{
        color: match ? "var(--bs-primary)" : "",
        pointerEvents: match ? "none" : "auto",
        textDecoration: match ? "none" : "underline",
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
