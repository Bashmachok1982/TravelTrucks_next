"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { fetchCamperById, fetchCamperReviews } from "@/lib/api";
import Gallery from "@/components/Gallery/Gallery";
import ReviewsList from "@/components/ReviewsList/ReviewsList";
import BookingForm from "@/components/BookingForm/BookingForm";
import { MdStar } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import styles from "./page.module.css";
import Loader from "@/components/Loader/Loader";

export default function CamperDetailsPage() {
  const { camperId } = useParams<{ camperId: string }>();

  const { data: camper, isLoading } = useQuery({
    queryKey: ["camper", camperId],
    queryFn: () => fetchCamperById(camperId),
  });

  const { data: reviews } = useQuery({
    queryKey: ["reviews", camperId],
    queryFn: () => fetchCamperReviews(camperId),
  });

  if (isLoading) return <Loader />;
  if (!camper) return <p className={styles.loading}>Camper not found</p>;

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* Шапка */}
        <div className={styles.head}>
          <h1 className={styles.name}>{camper.name}</h1>
          <div className={styles.meta}>
            <span className={styles.rating}>
              <MdStar className={styles.starIcon} />
              {camper.rating}({camper.totalReviews} Reviews)
            </span>
            <span className={styles.location}>
              <IoLocationOutline className={styles.icon} />
              {camper.location}
            </span>
          </div>
          <p className={styles.price}>€{camper.price}</p>
        </div>

        {/* Галерея */}
        <Gallery images={camper.gallery} />

        {/* Описание */}
        <p className={styles.description}>{camper.description}</p>

        {/* Теги amenities */}
        <ul className={styles.tags}>
          {camper.amenities.map((a) => (
            <li key={a} className={styles.tag}>
              {a}
            </li>
          ))}
          <li className={styles.tag}>{camper.transmission}</li>
          <li className={styles.tag}>{camper.engine}</li>
        </ul>

        {/* Нижний блок: детали + отзывы слева, форма справа */}
        <div className={styles.bottom}>
          <div className={styles.left}>
            <section className={styles.details}>
              <h2 className={styles.sectionTitle}>Vehicle details</h2>
              <ul className={styles.detailsList}>
                <li className={styles.detailsItem}>
                  <span>Form</span>
                  <span>{camper.form}</span>
                </li>
                <li className={styles.detailsItem}>
                  <span>Length</span>
                  <span>{camper.length}</span>
                </li>
                <li className={styles.detailsItem}>
                  <span>Width</span>
                  <span>{camper.width}</span>
                </li>
                <li className={styles.detailsItem}>
                  <span>Height</span>
                  <span>{camper.height}</span>
                </li>
                <li className={styles.detailsItem}>
                  <span>Tank</span>
                  <span>{camper.tank}</span>
                </li>
                <li className={styles.detailsItem}>
                  <span>Consumption</span>
                  <span>{camper.consumption}</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className={styles.sectionTitle}>Reviews</h2>
              <ReviewsList reviews={reviews ?? []} />
            </section>
          </div>

          <div className={styles.right}>
            <BookingForm camperId={camperId} />
          </div>
        </div>
      </div>
    </main>
  );
}
