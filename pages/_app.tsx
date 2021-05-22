import type { AppProps } from 'next/app'
import '../components/main.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
