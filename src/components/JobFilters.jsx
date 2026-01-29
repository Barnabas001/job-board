export default function JobFilters({ search, setSearch, type, setType }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search job title or company"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full"
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border rounded-lg px-4 py-2"
      >
        <option value="">All Types</option>
        <option value="Full-time">Full-time</option>
        <option value="Contract">Contract</option>
        <option value="Part-time">Part-time</option>
      </select>
    </div>
  );
}
