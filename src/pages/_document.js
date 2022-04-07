// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document"
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(
      App => props => sheet.collectStyles(<App {...props} />)
    )

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          {/* SEO */}
          <meta
            name="description"
            content="Médico Traumatólogo, 25 años de experiencia. Graduado U.B.A, Buenos Aires, Argentina."
          />
          <meta
            name="keywords"
            content="medico, traumatologo, luis ghilino, traumatologo san miguel, medico bella vista, traumatologo bella vista, cirujano bella vista, cirujano san miguel, dr ghilino, dolor de huesos"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.drluisghilino.com" />
          <meta property="og:title" content="Dr. Luis Ghilino" />
          <meta
            property="og:description"
            content="Médico Traumatólogo, 25 años de experiencia. Graduado U.B.A, Buenos Aires, Argentina."
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
            integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
            referrerPolicy="no-referrer"
            crossOrigin="anonymous"
          />
          <meta
            name="google-site-verification"
            content="63h5ERvL-w0Y9THg94TsVF5DfpBOfmnbL7NWbPTqQtQ"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@300&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/images/logo.png" />
          {this.props.styleTags}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
