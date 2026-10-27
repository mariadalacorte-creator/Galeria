"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { slideCard } from "../data/dataCard";
import "./card.css"; // ← ESTAVA FALTANDO

export default function Card() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="card-swiper"
    >
      {slideCard.map((card) => (
        <SwiperSlide key={card.id}>
          <div className="card">
            <img src={card.imageSrc} alt={card.title} />
            <div className="card-text">
              <p className="card-title">{card.title}</p>
              <h3>{card.description}</h3>
              <p>
                📅 {card.data} ● 💬 {card.comments}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}