"use client";

import Image from "next/image";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function HeroSection() {
  const heroSlides = [
    { id: 1, imageUrl: "/images/banner-1.png", hyperLink: "" },
    { id: 2, imageUrl: "/images/banner-1.png", hyperLink: "" },
    { id: 3, imageUrl: "/images/banner-1.png", hyperLink: "" },
  ];

  return (
    <Container>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <a
              href={slide.hyperLink}
              target="_blank"
              className="block w-full h-[180px] md:h-[450px] relative"
            >
              <Image
                className="object-cover object-top"
                src={slide.imageUrl}
                alt="NFT section"
                fill
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

const Container = styled.section`
  position: relative;

  .swiper-pagination {
    bottom: 12px !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    width: auto !important;
    display: flex !important;
    justify-content: center !important;
    gap: 8px !important;
  }

  .swiper-pagination-bullet {
    width: 28px !important;
    height: 4px !important;
    border-radius: 20px !important;
    background: rgba(255, 255, 255, 0.6) !important;
    opacity: 1 !important;
    transition: all 0.3s ease !important;
    cursor: pointer !important;
  }

  .swiper-pagination-bullet-active {
    background: #ffc700 !important;
  }

  .swiper-pagination-bullet:hover {
    background: white !important;
  }

  @media (max-width: 768px) {
    .swiper-pagination {
      bottom: 8px !important;
      gap: 4px !important;
    }

    .swiper-pagination-bullet {
      width: 16px !important;
      height: 6px !important;
    }
  }
`;
