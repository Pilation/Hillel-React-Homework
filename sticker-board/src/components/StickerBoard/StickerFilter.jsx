function StickerFilter({ filter, setFilter, className }) {
  function onChange(e) {
    setFilter(e.target.value);
  }
  return (
    <select value={filter} onChange={onChange} className={className}>
      <option value="default">Default</option>
      <option value="newer">Newer first</option>
      <option value="older">Older first</option>
    </select>
  );
}

export default StickerFilter;
