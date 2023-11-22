import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/section/Main'

const Home = lazy(() => import('./pages/Home'))
const Today = lazy(() => import('./pages/Today'))
const Youtuber = lazy(() => import('./pages/Youtuber'))
const Channel = lazy(() => import('./pages/Channel'))
const Search = lazy(() => import('./pages/Search'))
const VIdeo = lazy(() => import('./pages/VIdeo'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/youtuber" element={<Youtuber />} />
          <Route path="/channel/:channelId" element={<Channel />} />
          <Route path="/search/:searchId" element={<Search />} />
          <Route path="/video/:videoId" element={<VIdeo />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App