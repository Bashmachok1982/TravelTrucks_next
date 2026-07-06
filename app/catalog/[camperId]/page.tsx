import { fetchCamperById } from "@/lib/api";
import CamperDetailsClient from "@/app/catalog/[camperId]/CamperDetailsClient";

export async function generateMetadata({
  params,
}: {
  params: { camperId: string };
}) {
  const camper = await fetchCamperById(params.camperId);
  return {
    title: `${camper.name} — TravelTrucks`,
    description: camper.description,
  };
}

export default function CamperDetailsPage({
  params,
}: {
  params: { camperId: string };
}) {
  return <CamperDetailsClient camperId={params.camperId} />;
}
