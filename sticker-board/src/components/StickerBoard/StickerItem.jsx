import { useState } from "react";

export default function StickerItem(props) {
  const { data, className, onClick, onBlur, onInputChange, date } = props;
  const { id, color } = data;
  const [input, setInput] = useState(data);

  return (
    <li
      className={className}
      style={{
        backgroundColor: color,
      }}
    >
      <div>
        <span>{date}</span>
        <button onClick={() => onClick(id)}>&#x2716;</button>
      </div>
      <textarea
        value={input.description}
        onChange={(e) => {
          setInput(onInputChange(e, input));
        }}
        onBlur={() => onBlur(input, id)}
      />
    </li>
  );
}
