import React from 'react'
import { Helmet } from 'react-helmet'
import { RouteComponentProps } from 'react-router-dom'

import RSAllanDolle from '@/database/rich-snippets/me'
import PwaReact from '@/images/pwa-react-uhd-trans.png'

import styles from './home.module.scss'

type TMatch = {
  path: string
}

export default function Home({
  match
}: RouteComponentProps<TMatch>): React.FunctionComponentElement<RouteComponentProps> {
  const { path } = match
  const canonicalUrl = `${process.env.SERVER_BASE_URL}${path}`
  const appTitle = 'ReactJS Progressive Web App'
  const description =
    'A fast and full TypeScript PWA built with React with every best practices for SEO and web performances'

  return (
    <>
      <Helmet>
        <title>Home</title>
        <link rel='canonical' href={canonicalUrl} />
        <meta name='description' content={description} />
        <script type='application/ld+json'>{JSON.stringify(RSAllanDolle)}</script>
      </Helmet>
      <div className={styles.container}>
        <h1 className={styles.title}>{appTitle}</h1>
        <img
          className={styles.image}
          src={PwaReact.src}
          srcSet={PwaReact.srcSet}
          sizes='(max-width: 1024px) 320px,
            500px'
          width={PwaReact.width}
          height={PwaReact.height}
          loading='lazy'
          alt='Pwa React'
        />
      </div>
    </>
  )
}
