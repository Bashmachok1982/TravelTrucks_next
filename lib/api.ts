import {
  CamperListResponse,
  FiltersResponse,
  CamperDetails,
  Review,
  BookingRequest,
  BookingRequestResponse,
  CamperForm,
  Transmission,
  Engine,
} from "./types";

const BASE_URL = "https://campers-api.goit.study";

export interface CampersQuery {
  page?: number;
  perPage?: number;
  location?: string;
  form?: CamperForm;
  transmission?: Transmission;
  engine?: Engine;
}

export async function fetchCampers(
  params: CampersQuery,
): Promise<CamperListResponse> {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      search.set(key, String(value));
    }
  });

  const res = await fetch(`${BASE_URL}/campers?${search.toString()}`);
  if (!res.ok) throw new Error("Failed to fetch campers");
  return res.json();
}

export async function fetchFilters(): Promise<FiltersResponse> {
  const res = await fetch(`${BASE_URL}/campers/filters`);
  if (!res.ok) throw new Error("Failed to fetch filters");
  return res.json();
}

export async function fetchCamperById(
  camperId: string,
): Promise<CamperDetails> {
  const res = await fetch(`${BASE_URL}/campers/${camperId}`);
  if (!res.ok) throw new Error("Camper not found");
  return res.json();
}

export async function fetchCamperReviews(camperId: string): Promise<Review[]> {
  const res = await fetch(`${BASE_URL}/campers/${camperId}/reviews`);
  if (!res.ok) throw new Error("Failed to fetch reviews");
  return res.json();
}

export async function createBookingRequest(
  camperId: string,
  data: BookingRequest,
): Promise<BookingRequestResponse> {
  const res = await fetch(`${BASE_URL}/campers/${camperId}/booking-requests`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create booking request");
  return res.json();
}
