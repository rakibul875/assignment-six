
import { useState } from 'react'
import './App.css'
import Account from './Component/Account/Account'
import Banner from './Component/Banner/Banner'
import Cart from './Component/Cart/Cart'
import Footer from './Component/Footer/Footer'
import NavBar from './Component/NavBar/NavBar'
import ProdactsSection from './Component/ProdactsSection/ProdactsSection'
import Ranks from './Component/Ranks/Ranks'
import Transparent from './Component/Transparent/Transparent'
import BodyHero from './Component/BodyHero/BodyHero'

const DataP = fetch('/Data.json').then(res => res.json())


function App() {

  const [active, setActive] = useState('ProdactsSection')
  const [carts, setCarts] = useState([])
  return (
    <>
      <NavBar carts={carts} />
      <Banner />
      <Ranks />

      <div className='my-10 space-y-5'>
        <h1 className='text-4xl text-center font-bold'>Premium Digital Tools</h1>
        <p className='text-center text-gray-400'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center my-10 bg-transparent">
        <input type="radio" name="my_tabs_1"
          className={`tab w-40 rounded-full ${active === 'ProdactsSection' ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white' : ''}`}
          aria-label="Products" onClick={() => setActive('ProdactsSection')} defaultChecked />
        <input type="radio" name="my_tabs_1" className={`tab w-40 rounded-full ${active === 'Cart' ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white' : ''}`} aria-label={`cart(${carts.length})`} onClick={() => setActive('Cart')} />
      </div>

      {active === 'ProdactsSection' && <ProdactsSection DataP={DataP} carts={carts} setCarts={setCarts} />}
      {active === 'Cart' && <Cart carts={carts} setCarts={setCarts} />}
      <Account />
      <Transparent />
      <BodyHero />
      <Footer />
    </>
  )
}

export default App
