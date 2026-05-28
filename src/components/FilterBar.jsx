function FilterBar({
  filter,
  setFilter,
  search,
  setSearch,
}) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search updates..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option>All</option>
        <option>Attendance</option>
        <option>Homework</option>
        <option>Test</option>
        <option>Fees</option>
        <option>Holiday</option>
      </select>
    </div>
  );
}

export default FilterBar;