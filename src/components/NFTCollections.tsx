'use client'

import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Title } from './Title'

export function NFTCollections() {
  const nftCollections = [
    {
      id: 1,
      imageUrl: '/images/nft-collection-1.png',
    },
    {
      id: 2,
      imageUrl: '/images/nft-collection-2.png',
    },
    {
      id: 3,
      imageUrl: '/images/nft-collection-3.png',
    },
    {
      id: 4,
      imageUrl: '/images/nft-collection-4.png',
    },
    {
      id: 5,
      imageUrl: '/images/nft-collection-5.png',
    },
    {
      id: 6,
      imageUrl: '/images/nft-collection-6.png',
    },
    {
      id: 7,
      imageUrl: '/images/nft-collection-7.png',
    },
  ]

  return (
    <section className="w-full max-w-6xl mx-auto px-0 md:px-3">
      <div className="flex items-center justify-between mb-2 px-5 md:px-0">
        <Title>New NFT Collections</Title>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center items-center gap-2">
          <button className="swiper-button-prev-custom p-1 md:p-2 rounded-xl bg-background-gray cursor-pointer inline-flex items-center justify-center">
            <Image
              width={24}
              height={24}
              src="/images/arrow-left.svg"
              alt="prev"
            />
          </button>
          <button className="swiper-button-next-custom p-1 md:p-2 rounded-xl bg-background-gray cursor-pointer inline-flex items-center justify-center">
            <Image
              width={24}
              height={24}
              src="/images/arrow-right.svg"
              alt="next"
            />
          </button>
        </div>
      </div>

      <div className="pl-5 md:pl-0">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 3.5,
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 5.75,
              spaceBetween: 16,
            },
          }}
        >
          {nftCollections.map((nft) => (
            <SwiperSlide key={nft.id}>
              <div className="relative h-[140px] md:h-[245px] rounded-lg md:rounded-xl overflow-hidden">
                <Image objectFit="cover" fill src={nft.imageUrl} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
