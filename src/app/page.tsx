import {
  BottomSections,
  FeatureIcons,
  Footer,
  Header,
  HeroSection,
  NFTCollections,
} from '@/components'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeatureIcons />
      <div className="grid grid-cols-1 gap-10 md:gap-20 py-10 md:py-20">
        <NFTCollections />
        <BottomSections />
      </div>
      <Footer />
    </div>
  )
}
