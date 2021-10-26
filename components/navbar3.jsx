import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (

      <div className=" flex flex-row justify-center w-full ">
              <Link href="/">
 <a  title="Follow us on Facebook" className="flex flex-row  m-6  border-2 border-solid border-gray-333 p-6 hover:bg-gray-100 transition-colors duration-100 ease-in-out ">
<Image src="/logo-about.webp"alt="Elmbridgea painting brand logo" width={320}height={188} />
                </a>
              </Link>
    </div>






  )
}
