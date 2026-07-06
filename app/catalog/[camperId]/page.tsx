import { fetchCamperById } from "@/lib/api";
import CamperDetailsClient from "@/app/catalog/[camperId]/CamperDetailsClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ camperId: string }>;
}) {
  const { camperId } = await params;
  try {
    const camper = await fetchCamperById(camperId);
    return {
      title: `${camper.name} — TravelTrucks`,
      description: camper.description,
    };
  } catch {
    return {
      title: "Camper Details — TravelTrucks",
      description: "View camper details",
    };
  }
}

export default async function CamperDetailsPage({
  params,
}: {
  params: Promise<{ camperId: string }>;
}) {
  const { camperId } = await params;
  return <CamperDetailsClient camperId={camperId} />;
}
