import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class EditorDocument extends Document {
  render () {
    return (
      <Html lang="es">
        <Head>
          <meta name="msapplication-TileColor" content="#2f42cb" />
          <meta name="theme-color" content="#b6c9f2" />
                   <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2f42cb" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@400;500;700&family=Roboto:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default EditorDocument
