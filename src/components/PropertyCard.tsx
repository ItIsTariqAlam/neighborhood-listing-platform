import { Property } from "../types";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({
  property,
}: PropertyCardProps) {
  return (
    <article className="border rounded-lg p-4 shadow-sm">
      {property.imageUrl}

      <h2 className="text-xl font-semibold mt-3">
        {property.title}
      </h2>

      <p className="text-gray-600">
        {property.address}
      </p>

      <p className="text-lg font-bold mt-2">
        ${property.price.toLocaleString()}
      </p>

      <ul className="mt-3 list-disc list-inside">
        <li>{property.bedrooms} Bedrooms</li>
        <li>{property.bathrooms} Bathrooms</li>
      </ul>

      #
        View