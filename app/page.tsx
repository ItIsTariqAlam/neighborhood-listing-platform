import PropertyCard from "../src/components/PropertyCard";
import SponsorBanner from "../src/components/SponsorBanner";
import SearchFilters from "../src/components/SearchFilters";
import { Property, Sponsor } from "../src/types";

const properties: Property[] = [
  {
    id: "prop-001",
    title: "Cozy Family Home",
    address: "123 Main Street, Alhambra, CA",
    price: 650000,
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "https://via.placeholder.com/300x200",
    imageAlt: "Front exterior of a cozy family home",
  },
  {
    id: "prop-002",
    title: "Modern Downtown Condo",
    address: "456 Oak Avenue, Los Angeles, CA",
    price: 875000,
    bedrooms: 2,
    bathrooms: 2,
    imageUrl: "https://via.placeholder.com/300x200",
    imageAlt: "Modern condominium building exterior",
  },
  {
    id: "prop-003",
    title: "Suburban Townhouse",
    address: "789 Pine Road, Pasadena, CA",
    price: 720000,
    bedrooms: 3,
    bathrooms: 3,
    imageUrl: "https://via.placeholder.com/300x200",
    imageAlt: "Two-story suburban townhouse",
  },
];

const sponsor: Sponsor = {
  id: "sponsor-001",
  sponsorName: "Community Realty Group",
  sponsorLogoUrl: "https://via.placeholder.com/100x100",
  targetUrl: "https://example.com",
  description: "Helping local residents buy and sell homes.",
};

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Neighborhood Listing Platform
      </h1>

      <SearchFilters />

      <SponsorBanner sponsor={sponsor} />

      <section
        aria-labelledby="listings-heading"
        className="mt-6"
      >
        <h2
          id="listings-heading"
          className="text-2xl font-semibold mb-4"
        >
          Available Properties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </section>
    </main>
  );
}