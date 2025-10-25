import HeroSec from "./components/HeroSec"
import Navbar from "./components/NavBAr"
import ClientSec from "./components/ClientSec"
import Unlock from "./components/UnlockSec"
import Achievements from "./components/Achievements"
import Body from "./components/Body"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <HeroSec />
      <ClientSec />
      <Unlock />
      <Achievements />
      <Body />
      <Footer />
    </>
  )
}

export default App
