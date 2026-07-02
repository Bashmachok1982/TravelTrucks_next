"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { CamperImage } from "@/lib/types";
import styles from "./Gallery.module.css";

import "swiper/css";
import "swiper/css/navigation";

export default function Gallery({ images }: { images: CamperImage[] }) {
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sorted = [...images].sort((a, b) => a.order - b.order);

  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Navigation]}
        navigation
        onSwiper={setMainSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className={styles.mainSwiper}
      >
        {sorted.map((img) => (
          <SwiperSlide key={img.id}>
            <img src={img.original} alt="" className={styles.mainImage} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.thumbsWrapper}>
        {sorted.map((img, index) => (
          <img
            key={img.id}
            src={img.thumb}
            alt=""
            className={`${styles.thumbImage} ${activeIndex === index ? styles.thumbActive : ""}`}
            onClick={() => mainSwiper?.slideTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
