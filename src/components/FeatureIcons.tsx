/* eslint-disable @next/next/no-img-element */
'use client'

interface FeatureIconProps {
  icon: string
  label: string
  tag?: string
}

function FeatureIcon({ icon, label, tag }: FeatureIconProps) {
  return (
    <div className="flex flex-col items-center gap-2 md:gap-3 cursor-pointer px-3 md:px:0 text-center">
      <div className="relative">
        <img className="h-7 md:h-[42px]" src={icon} alt={label} />
        {tag && (
          <div className="absolute -top-2 -right-1 md:-right-2 md:h-5 py-0.5 px-0.5 md:px-1.5 rounded bg-[#FF0000] text-white text-[8px] md:text-xs uppercase font-medium">
            {tag}
          </div>
        )}
      </div>
      <span className="text-[10px] leading-[12px] md:text-[14px] md:leading-[20px] uppercase text-white">
        {label}
      </span>
    </div>
  )
}

export function FeatureIcons() {
  const features = [
    { icon: '/images/free-to-earn.svg', label: 'Free to earn' },
    { icon: '/images/ranking.svg', label: 'Ranking' },
    { icon: '/images/video-nft.svg', label: 'Video NFT' },
    { icon: '/images/how-to-play.svg', label: 'How to buy' },
    { icon: '/images/new-nfts.svg', label: 'New NFTS', tag: 'new' },
    { icon: '/images/road-maps.svg', label: 'Roadmaps' },
  ]

  return (
    <section className="bg-background-secondary">
      <div className="max-w-6xl mx-auto px-0 py-4 md:py-6 md:px-3">
        <div className="flex justify-between">
          {features.map((feature, index) => (
            <FeatureIcon
              key={index}
              icon={feature.icon}
              label={feature.label}
              tag={feature?.tag}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
