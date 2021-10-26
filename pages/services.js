import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../components/layout'
import Navbar1 from '../components/navbar1'
import Navbar2 from '../components/navbar2'

export default function Home(initialData) {
  return (
    <MainLayout>
          <Navbar1 />
          <Navbar2 />
    </MainLayout>

  )
}

