export default function Button({ value, onClick }) {
  if (onClick) {
    return <button onClick={() => onClick()}>{value}</button>;
  } else {
    return <button>{value}</button>;
  }
}
