import { Review } from "@/lib/types";
import styles from "./ReviewsList.module.css";

function Stars({ rating }: { rating: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={i < rating ? styles.starFilled : styles.starEmpty}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsList({ reviews }: { reviews: Review[] }) {
  return (
    <section className={styles.section}>
      {reviews.map((review) => (
        <div key={review.id} className={styles.review}>
          <div className={styles.avatar}>
            {review.reviewer_name[0].toUpperCase()}
          </div>
          <div className={styles.body}>
            <p className={styles.name}>{review.reviewer_name}</p>
            <Stars rating={review.reviewer_rating} />
            <p className={styles.comment}>{review.comment}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
