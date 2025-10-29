import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import HealthIcons from './components/HealthIcons/HealthIcons'
import Intro from './components/Intro/Intro'
import NutritionFacts from './components/NutritionFacts/NutritionFacts'
import WhatsInside from './components/WhatsInside/WhatsInside'
import Footer from './components/Footer/Footer'
import MobileButton from './components/Navbar/MobileButton'
import FindInStores from './components/FindInStores/FindInStores'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navbar />
      <MobileButton />
      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <HealthIcons />
            <Intro />
            <WhatsInside />
            <NutritionFacts />
            
          </>
        } />
        <Route path='/find-in-stores' element={<FindInStores />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
