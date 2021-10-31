import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import styles from './layout.module.css'


export const siteTitle = 'whilbypainting'

export default function Layout({ children, home }) {
  return (
    <div className="section">
      <Head>
        <link rel="icon" href="/favicon.ico" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="high standard of painting, decorating and refurbishment " />
          <meta name="og:title" content={siteTitle} />
          <meta name="title" content={siteTitle} />
            <title>{siteTitle}</title>
      </Head>
      <main>{children}</main>
    </div>
  )
}
