import {
  Navigation,
  HeroSection,
  MarqueeSection,
  TributeSection,
  PunchlineSection,
  GuestListSection,
  RSVPSection,
  FinalCTASection,
  FAQSection,
  Footer
} from './components/sections'

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <MarqueeSection />
      <TributeSection />
      <PunchlineSection />
      <GuestListSection />
      <RSVPSection />
      <FinalCTASection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default App