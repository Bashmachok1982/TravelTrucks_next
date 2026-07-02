"use client";

import { useState } from "react";
import Filters from "@/components/Filters/Filters";
import CamperCard from "@/components/CamperCard/CamperCard";
import { useCampers } from "@/hooks/useCampers";
import styles from "./page.module.css";
import { CamperForm, Transmission, Engine } from "@/lib/types";
import Loader from "@/components/Loader/Loader";

interface FiltersState {
  location: string;
  form?: CamperForm;
  transmission?: Transmission;
  engine?: Engine;
}

export default function CatalogPage() {
  const [filters, setFilters] = useState<FiltersState>({ location: "" });

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useCampers(filters);

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  return (
    <div className={styles.page}>
      <Filters onApply={setFilters} />

      <section className={styles.section}>
        {isLoading && <Loader />}

        {!isLoading && campers.length === 0 && (
          <p className={styles.empty}>No campers found</p>
        )}

        <ul className={styles.list}>
          {campers.map((camper) => (
            <CamperCard key={camper.id} camper={camper} />
          ))}
        </ul>

        {hasNextPage && (
          <button
            className={styles.loadMoreBtn}
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading..." : "Load more"}
          </button>
        )}
      </section>
    </div>
  );
}
