import React, { useEffect } from 'react'
import Head from 'next/head'
import { AppContextProvider } from '../src/context/app'
import '../styles/index.scss'

/**
 * Componente principal de carga de la aplicacion
 *
 * @param {Component} Component Componente a renderizar de acuerdo al sistema de rutas de next
 * @param {pageProps}
 * @returns
 */
/* eslint-disable react/prop-types */
const WebApp = ({ Component, pageProps }) => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  })
  return (
    <React.StrictMode>
      <Head>
        <title>Prueba</title>
      </Head>
      <AppContextProvider value={pageProps}>
        <Component {...pageProps} />
      </AppContextProvider>
    </React.StrictMode>
  )
}

export default WebApp
