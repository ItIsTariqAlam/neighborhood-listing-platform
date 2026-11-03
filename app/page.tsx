import PropertyCard from "../src/components/PropertyCard";

export default function Home() {
  const properties = [
    {
      address: "123 Maple Street",
      price: 650000,
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 1800,
    },
    {
      address: "456 Oak Avenue",
      price: 875000,
      bedrooms: 4,
      bathrooms: 3,
      squareFeet: 2400,
    },
    {
      address: "789 Pine Road",
      price: 720000,
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 2000,
    },
  ];

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Neighborhood Listing Platform
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard
            key={property.address}
            address={property.address}
            price={property.price}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            squareFeet={property.squareFeet}
          />
        ))}
      </div>
    </main>
  );
}