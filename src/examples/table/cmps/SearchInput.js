export default function SearchInput({term, handleChange}) {
  return (
    <div className="search-box">
      <input
        value={term}
        onChange={handleChange}
        />
    </div>
  );
}