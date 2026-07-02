"use client";

import { useState } from "react";
import { useFilters } from "@/hooks/useFilters";
import { CamperForm, Engine, Transmission } from "@/lib/types";
import styles from "./Filters.module.css";

interface FiltersState {
  location: string;
  form?: CamperForm;
  transmission?: Transmission;
  engine?: Engine;
}

interface Props {
  onApply: (filters: FiltersState) => void;
}

export default function Filters({ onApply }: Props) {
  const { data: filterOptions } = useFilters();
  const [location, setLocation] = useState("");
  const [form, setForm] = useState<CamperForm | undefined>();
  const [transmission, setTransmission] = useState<Transmission | undefined>();
  const [engine, setEngine] = useState<Engine | undefined>();

  const handleSearch = () => {
    onApply({ location, form, transmission, engine });
  };

  const handleClear = () => {
    setLocation("");
    setForm(undefined);
    setTransmission(undefined);
    setEngine(undefined);
    onApply({ location: "" });
  };

  return (
    <aside className={styles.aside}>
      <label className={styles.locationLabel}>
        <span className={styles.locationTitle}>Location</span>
        <input
          className={styles.locationInput}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Kyiv, Ukraine"
        />
      </label>

      <p className={styles.filtersTitle}>Filters</p>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Camper form</legend>
        <div className={styles.radioGroup}>
          {filterOptions?.forms.map((f) => (
            <label key={f} className={styles.radioLabel}>
              <input
                className={styles.radioInput}
                type="radio"
                name="form"
                checked={form === f}
                onChange={() => setForm(f)}
              />
              {f}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Engine</legend>
        <div className={styles.radioGroup}>
          {filterOptions?.engines.map((e) => (
            <label key={e} className={styles.radioLabel}>
              <input
                className={styles.radioInput}
                type="radio"
                name="engine"
                checked={engine === e}
                onChange={() => setEngine(e)}
              />
              {e}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Transmission</legend>
        <div className={styles.radioGroup}>
          {filterOptions?.transmissions.map((t) => (
            <label key={t} className={styles.radioLabel}>
              <input
                className={styles.radioInput}
                type="radio"
                name="transmission"
                checked={transmission === t}
                onChange={() => setTransmission(t)}
              />
              {t}
            </label>
          ))}
        </div>
      </fieldset>

      <button className={styles.searchBtn} onClick={handleSearch}>
        Search
      </button>
      <button className={styles.clearBtn} onClick={handleClear}>
        ✕ Clear filters
      </button>
    </aside>
  );
}
