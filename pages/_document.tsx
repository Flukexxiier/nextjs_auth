import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
          <link rel="icon" href="" sizes='32'/>
          <link rel="stylesheet" as="font" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"/>        
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}