import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchCampers, fetchFilters, CampersQuery } from "@/lib/api";

const PER_PAGE = 4;

export function useCampers(filters: Omit<CampersQuery, "page" | "perPage">) {
  return useInfiniteQuery({
    queryKey: ["campers", filters],
    queryFn: ({ pageParam = 1 }) =>
      fetchCampers({
        ...filters,
        page: pageParam as number,
        perPage: PER_PAGE,
      }),
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
    initialPageParam: 1,
  });
}

export function useFilters() {
  return useQuery({
    queryKey: ["filters"],
    queryFn: fetchFilters,
    staleTime: Infinity,
  });
}
