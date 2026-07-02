import Link from "next/link";
import { CamperListItem } from "@/lib/types";
import styles from "./CamperCard.module.css";
import { MdStar } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BsFuelPump } from "react-icons/bs";
import { PiGearLight } from "react-icons/pi";
import { TbHomeCog } from "react-icons/tb";

export default function CamperCard({ camper }: { camper: CamperListItem }) {
  return (
    <li className={styles.card}>
      <img className={styles.image} src={camper.coverImage} alt={camper.name} />
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.name}>{camper.name}</h3>
          <span className={styles.price}>€{camper.price}</span>
        </div>

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

        <ul className={styles.tags}>
          <li className={styles.tag}>
            <BsFuelPump className={styles.tagIcon} />
            {camper.engine}
          </li>
          <li className={styles.tag}>
            <PiGearLight className={styles.tagIcon} />
            {camper.transmission}
          </li>
          <li className={styles.tag}>
            <TbHomeCog className={styles.tagIcon} />
            {camper.form}
          </li>
        </ul>

        <Link
          href={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
        >
          Show more
        </Link>
      </div>
    </li>
  );
}
