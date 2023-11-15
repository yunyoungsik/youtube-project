import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/section/Header'
import Main from './components/section/Main'
import Home from './pages/Home'
import Today from './pages/Today'
import Youtuber from './pages/Youtuber'
import Channel from './pages/Channel'
import Search from './pages/Search'
import Footer from './components/section/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/youtuber" element={<Youtuber />} />
          <Route path="/channel/:channelId" element={<Channel />} />
          <Route path="/search/:searchId" element={<Search />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App