export default function SearchFilters() {
  return (
    <form
      className="border rounded-lg p-4 mb-6"
      aria-label="Property Search Filters"
    >
      <div className="mb-4">
        <label
          htmlFor="property-type"
          className="block font-medium mb-1"
        >
          Property Type
        </label>

        <select
          id="property-type"
          name="property-type"
          className="border rounded p-2 w-full"
        >
          <option value="">All Types</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
          <option value="apartment">Apartment</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="price-range"
          className="block font-medium mb-1"
        >
          Price Range
        </label>

        <select
          id="price-range"
          name="price-range"
          className="border rounded p-2 w-full"
        >
          <option value="">Any Price</option>
          <option value="0-200000">
            Under $200,000
          </option>
          <option value="200000-500000">
            $200,000 - $500,000
          </option>
          <option value="500000+">
            Above $500,000
          </option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Apply Filters
      </button>
    </form>
  );
}