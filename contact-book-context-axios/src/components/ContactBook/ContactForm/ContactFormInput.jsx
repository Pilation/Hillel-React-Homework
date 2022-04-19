export default function ContactFormInput(props) {
  const { value, id, onInputChange } = props;
  return (
    <div>
      <label htmlFor={id}>{id}:</label>
      <input
        type={id === `phone` ? `tel` : `text`}
        id={id}
        onChange={onInputChange}
        value={value}
      />
    </div>
  );
}
