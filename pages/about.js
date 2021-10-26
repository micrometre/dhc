import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../components/layout'
import Navbar1 from '../components/navbar1'
import Navbar2 from '../components/navbar2'

import Gallery from '../components/Gallery'

export default function About(initialData) {
  return (
    <MainLayout>
          <Navbar1 />
          <Navbar2 />
          <Gallery />
    </MainLayout>

  )
}

