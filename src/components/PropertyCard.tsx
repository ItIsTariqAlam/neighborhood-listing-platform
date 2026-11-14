interface PropertyCardProps {
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
}

export default function PropertyCard({
  address,
  price,
  bedrooms,
  bathrooms,
  squareFeet,
}: PropertyCardProps) {
  return (
    <article className="border rounded-lg p-4 shadow-sm">
      <header>
        <h2 className="text-xl font-semibold">
          {address}
        </h2>
      </header>

      <p className="text-lg font-bold mt-2">
        ${price.toLocaleString()}
      </p>

      <ul className="mt-3 list-disc list-inside">
        <li>{bedrooms} Beds</li>
        <li>{bathrooms} Baths</li>
        <li>{squareFeet} Sq Ft</li>
      </ul>

      <button
        aria-label={`View details for ${address}`}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
      >
        View Details
      </button>
    </article>
  );
}
