import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import CuratedCollectionsCarousel from "../components/CuratedCollectionsCarousel";
import HomeLayout from "../components/HomeLayout";

const Home = () => {
  return (
    <HomeLayout>
      {/* Hero Carousel Section */}
      <section aria-labelledby="hero-carousel-heading">
        <h1 id="hero-carousel-heading" className="sr-only">
          Featured NFT Collections
        </h1>
        <HeroCarousel />
      </section>

      {/* Curated Collections Carousel */}
      <section aria-labelledby="curated-collections-heading" className="mt-12">
        <h2 id="curated-collections-heading" className="sr-only">
          Curated Collections
        </h2>
        <CuratedCollectionsCarousel />
      </section>

      {/* Additional sections will go here */}
    </HomeLayout>
  );
};

export default Home;

// Legacy sections - commented out for future implementation
// import Hero from '../components/Hero'
// import LatestCollection from '../components/LatestCollection'
// import BestSeller from '../components/BestSeller'
// import OurPolicy from '../components/OurPolicy'
// import NewsletterBox from '../components/NewsletterBox'
// import FeaturedSection from '../components/Featured'
// import OurTeam from '../components/OurTeam'
// import HeroSection from '../components/HeroSection'
// import Testimonials from '../components/Testimonials'
// import UnboxingGallery from '../components/UnboxingGallery'
// import DeliveryPickup from '../components/DeliveryPickup'
// import Chatbot from '../components/Chatbot'
// import ServicesHighlight from '../components/ServicesHighlight'
// import USPsection from '../components/USPsection'
// import ReferralTeaser from '../components/ReferralTeaser'
// import TrainingPreview from '../components/TrainingPreview'
// import SolarCalculator from '../components/SolarCalculator'
// import HomeFAQ from '../components/HomeFAQ'
// import SolarPackages from '../components/SolarPackages'
// import LocationMap from '../components/LocationMap'

// import React from 'react'
// import Hero from '../components/Hero'
// import LatestCollection from '../components/LatestCollection'
// import BestSeller from '../components/BestSeller'
// import OurPolicy from '../components/OurPolicy'
// import NewsletterBox from '../components/NewsletterBox'
// import FeaturedSection from '../components/Featured'
// import OurTeam from '../components/OurTeam'
// import HeroSection from '../components/HeroSection'
// import Testimonials from '../components/Testimonials'
// import UnboxingGallery from '../components/UnboxingGallery'
// import DeliveryPickup from '../components/DeliveryPickup'
// import Chatbot from '../components/Chatbot'
// import ServicesHighlight from '../components/ServicesHighlight'
// import USPsection from '../components/USPsection'
// import ReferralTeaser from '../components/ReferralTeaser'
// import TrainingPreview from '../components/TrainingPreview'
// import SolarCalculator from '../components/SolarCalculator'
// import HomeFAQ from '../components/HomeFAQ'
// import SolarPackages from '../components/SolarPackages'
// import LocationMap from '../components/LocationMap'

// const Home = () => {
//   return (
//     <div className=' bg-gray-50 text-black'>

//       <HeroSection />
//       {/* <ServicesHighlight /> */}
//       <LatestCollection/>
//       <BestSeller/>
//       <Testimonials/>
//       <SolarPackages />
//       {/* <DeliveryPickup/> */}
//       <Chatbot/>
//       <SolarCalculator />
//       <ReferralTeaser />
//       <TrainingPreview />
//       <OurTeam />
//       <HomeFAQ />
//       <USPsection />
//       {/* <LocationMap /> */}

//       {/* <FeaturedSection /> */}
//       {/* <OurPolicy/> */}
//       {/* <NewsletterBox/> */}
//     </div>
//   )
// }

// export default Home
