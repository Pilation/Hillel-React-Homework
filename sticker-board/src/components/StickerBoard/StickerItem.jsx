import { useState } from "react";

export default function StickerItem(props) {
  const { data, className, onClick, onMouseLeave, onInputChange, date } = props;
  const { id, color, description } = data;
  const [input, setInput] = useState(data);

  return (
    <li
      className={className}
      style={{
        backgroundColor: color,
      }}
      onMouseLeave={() => {
        onMouseLeave(description, input, id);
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
      />
    </li>
  );
}
