import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../components/layout'
import Navbar1 from '../components/navbar1'
import Navbar2 from '../components/navbar2'
import ImageSlider from '../components/ImageSlider'
import Gallery from '../components/Gallery'
import Logo from '../components/Logo'
import Moto from '../components/Moto'


export default function Home(initialData) {
  return (
    <MainLayout>
          <Navbar1 />
          <Navbar2 />
          <Logo />
          <Gallery />
    </MainLayout>

  )
}

