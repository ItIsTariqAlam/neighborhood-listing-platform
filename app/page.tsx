export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-4">
        Neighborhood Listing Platform
      </h1>

      <p className="mb-8 text-lg">
        A community-focused platform helping residents discover property
        listings, neighborhood sponsors, and voice assistance tools.
      </p>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            Listings
          </h2>
          <p>
            Browse and share neighborhood property listings.
          </p>
        </article>

        <article className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            Neighborhood Sponsors
          </h2>
          <p>
            Connect with local businesses that support the community.
          </p>
        </article>

        <article className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            Voice Help
          </h2>
          <p>
            Accessibility-focused voice guidance and assistance.
          </p>
        </article>
      </section>
    </main>
  );
}