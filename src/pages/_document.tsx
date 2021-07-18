import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class RootDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
