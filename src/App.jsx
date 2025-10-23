import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import HealthIcons from './components/HealthIcons/HealthIcons'
import Intro from './components/Intro/Intro'
import NutritionFacts from './components/NutritionFacts/NutritionFacts'
import WhatsInside from './components/WhatsInside/WhatsInside'
import Footer from './components/Footer/Footer'
import MobileButton from './components/Navbar/MobileButton'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
      </Routes>
      <HealthIcons />
      <Intro />
      <WhatsInside />
      <NutritionFacts />
      <Footer />
      <MobileButton />
    </Router>
  )
}

export default App
