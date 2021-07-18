import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Global, css } from '@emotion/react'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SIK BLOG</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta httpEquiv="Content-Type" content="text/xml; charset=utf-8" />
      </Head>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            outline: none;
            margin: 0;
            padding: 0;
          }

          html {
            width: 100%;
            height: 100%;
          }

          body {
            margin: 0;
            padding: 0;
            position: relative;
            width: 100%;
            height: 100%;

            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Apple SD Gothic Neo',
              'Malgun Gothic', '맑은 고딕', 나눔고딕, 'Nanum Gothic', 'Noto Sans KR',
              'Noto Sans CJK KR', arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
          }

          #__next {
            width: 100%;
            height: 100%;
          }

          h1,
          h2,
          h3,
          h4 {
            letter-spacing: 0.3px;
          }

          ul {
            list-style: none;
          }

          a {
            text-decoration: none;
            color: inherit;
          }

          button {
            padding: 0;
            cursor: pointer;
          }

          input,
          button {
            font-family: inherit;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App
