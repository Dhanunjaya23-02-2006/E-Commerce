import React from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Landingpage from './stores/pages/Landingpage'
import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import WatchPage from './stores/pages/WatchPage'
import FurniturePage from './stores/pages/FurniturePage'
import MenPage from './stores/pages/MenPage'
import WomanPage from './stores/pages/WomanPage'
import TvPage from './stores/pages/TvPage'
import SpeakerPage from './stores/pages/SpeakerPage'
import AcPage from './stores/pages/AcPage'
import KitchenPage from './stores/pages/KitchenPage'
import BooksPage from './stores/pages/BooksPage'
import FridgePage from './stores/pages/FridgePage'
import MobilesSingle from './Singles/MobilesSingle'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landingpage />}/>
        <Route path='/computers' element={<ComputerPage />} />
        <Route path='/mobiles' element={<MobilePage />} />
        <Route path='/watches' element={<WatchPage />} />
        <Route path='/furnitures' element={<FurniturePage />} />
        <Route path='/menfashion' element={<MenPage />} />
        <Route path='/woman' element={<WomanPage />} />
        <Route path='/tvs' element={<TvPage />} />
        <Route path='/speaker' element={<SpeakerPage />} />
        <Route path='/ac' element={<AcPage />} />
        <Route path='/kitchen' element={<KitchenPage />} />
        <Route path='/book' element={<BooksPage />} />
        <Route path='/fridge' element={<FridgePage />} />
          <Route path='/mobiles/:id' element={<MobilesSingle />} />

      </Routes>
    </div>
  )
}

export default App
