import { useQuery } from "@tanstack/react-query";
import { fetchFilters } from "@/lib/api";

export function useFilters() {
  return useQuery({
    queryKey: ["filters"],
    queryFn: fetchFilters,
    staleTime: Infinity,
  });
}
