import { useState } from 'react'
import './styles/App.css'
import Header from "./header"
import IndexPage from "./pages/index"
import Footer from './footer'
import { register } from 'swiper/element/bundle';
register();

function App() {
  return (
    <>
    <Header ></Header>
    <IndexPage></IndexPage>
    <Footer />
    </>
  )
}

export default App
