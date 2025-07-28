'use client'

import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import { Title } from './Title'

export function BottomSections() {
  const nftCollections = [
    {
      id: 1,
      imageUrl: '/images/nft-drops-calendar.png',
    },
    {
      id: 2,
      imageUrl: '/images/nft-drops-calendar.png',
    },
  ]

  return (
    <section className="w-full max-w-6xl mx-auto px-5 md:px-3 flex flex-col lg:flex-row gap-10 lg:gap-6">
      <div className="w-full lg:w-[600px]">
        <div className="flex items-center justify-between mb-2">
          <Title>NFT Drops Calendar</Title>

          <div className="flex justify-center items-center gap-2">
            <button className="swiper-button-prev-bottom p-1 md:p-2 rounded-xl bg-background-gray cursor-pointer inline-flex items-center justify-center">
              <Image
                width={24}
                height={24}
                src="/images/arrow-left.svg"
                alt="prev"
              />
            </button>
            <button className="swiper-button-next-bottom p-1 md:p-2 rounded-xl bg-background-gray cursor-pointer inline-flex items-center justify-center">
              <Image
                width={24}
                height={24}
                src="/images/arrow-right.svg"
                alt="next"
              />
            </button>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: '.swiper-button-next-bottom',
            prevEl: '.swiper-button-prev-bottom',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
        >
          {nftCollections.map((nft) => (
            <SwiperSlide key={nft.id}>
              <div className="relative h-[170px] md:h-[240px] rounded-lg md:rounded-xl overflow-hidden">
                <Image
                  objectPosition="top"
                  objectFit="cover"
                  fill
                  src="/images/nft-drops-calendar.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:gap-6 flex-1">
        <div>
          <div className="mb-2">
            <Title>HOT NFT</Title>
          </div>
          <div className="relative pb-[100%] md:pb-[240px] rounded-lg md:rounded-xl overflow-hidden">
            <Image
              objectFit="cover"
              objectPosition="top"
              fill
              src="/images/hot-nft.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="mb-2">
            <Title>PROMOTION</Title>
          </div>
          <div className="relative pb-[100%] md:pb-[240px] rounded-lg md:rounded-xl overflow-hidden">
            <Image
              objectFit="cover"
              objectPosition="top"
              fill
              src="/images/hot-nft.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}
