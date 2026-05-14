import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  Navigation,
  HeroSection,
  MarqueeSection,
  TributeSection,
  GuestListSection,
  RSVPSection,
  FinalCTASection,
  FAQSection,
  Footer
} from './components/sections'

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-dark-950 text-white overflow-x-hidden">
          <Navigation />
          <HeroSection />
          <MarqueeSection />
          <TributeSection />
          {/* <PunchlineSection /> */}
          <GuestListSection />
          <RSVPSection />
          <FinalCTASection />
          <FAQSection />
          <Footer />
        </div>
    </QueryClientProvider>
  )
}

export default App