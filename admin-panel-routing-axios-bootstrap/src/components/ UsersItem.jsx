import { useBootstrapAccordion } from "../hooks/common";

export default function UsersItem({ data: user }) {
  const wrapedObject = useBootstrapAccordion(user);

  return <>{user ? wrapedObject : ""}</>;
}
