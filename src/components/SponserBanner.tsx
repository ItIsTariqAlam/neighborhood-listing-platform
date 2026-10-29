import { Sponsor } from "../types";

interface SponsorBannerProps {
  sponsor: Sponsor;
}

export default function SponsorBanner({
  sponsor,
}: SponsorBannerProps) {
  return (
    <aside
      className="border rounded-lg p-4 bg-yellow-50"
      aria-label="Sponsored content"
    >
      <p className="font-bold text-sm text-gray-700">
        Sponsored
      </p>

      <h2 className="text-lg font-semibold mt-2">
        {sponsor.sponsorName}
      </h2>

      {sponsor.description && (
        <p className="mt-2">
          {sponsor.description}
        </p>
      )}

      {sponsor.targetUrl}
        Visit {sponsor.sponsorName}
      </a>
    </aside>
  );
}
``