import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Categories from "./components/categories"
import Instructors from "./components/instructors"
import Features from "./components/features"
import PromoSection from "./components/promo-section"
import Testimonials from "./components/testimonials"
import CTASection from "./components/cta-section"
import Footer from "./components/footer"
import AccessModal from "./components/access-modal"
import MasterContentImg from './assets/master-content.jpg'
import DigitalMarketImg from './assets/digital-market.jpg'
import BusinesCoachImg from './assets/business-coach.jpg'

export default function App() {

	return (
		<main className="min-h-screen bg-black">
		  <Navbar />
		  <Hero />
		  <Categories/>
		  <Features />
		  <PromoSection
			title="Master Content Creation"
			description="Learn the art of creating engaging content that captivates your audience and drives results."
			imageUrl = {MasterContentImg}
		  />
		  <PromoSection
			title="Sales & Marketing Strategies"
			description="Discover cutting-edge techniques to boost your sales and marketing efforts using video."
			imageUrl= {DigitalMarketImg}
			reverse
		  />
		  <PromoSection
			title="Business Leadership Skills"
			description="Develop the leadership skills needed to guide your team and business to success in the digital age."
			imageUrl= {BusinesCoachImg}
		  />
		  <Instructors />
		  <Testimonials />
		  <CTASection />
		  <Footer />
		  <AccessModal />
		</main>
	  )
}


