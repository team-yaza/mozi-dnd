import type { AppProps } from "next/app"
import Head from "next/head"

import "@/styles/globals.css"
import { useRouter } from "next/router"
import Link from "next/link"

function ALink({ href, title }: { href: string; title: string }) {
  const route = useRouter()
  const isCurrent = route.pathname === href

  return (
    <Link href={href}>
      <a
        className={
          "text-lg transition-all hover:drop-shadow-lg " +
          (isCurrent ? "font-bold" : "text-gray-500")
        }
      >
        {title}
      </a>
    </Link>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DND playground</title>
        <meta name="description" content="Learn Drag add Drop" />
        <meta property="og:type" key="type" content="website" />
        <meta
          property="og:site_name"
          key="site_name"
          content="dnd-playground"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto pb-10 max-w-3xl">
        <div className="flex items-center gap-4 p-4">
          <ALink href="/" title="Drag" />
          <ALink href="/touch" title="Touch" />
          <ALink href="/resize" title="Resize" />
          <ALink href="/carousel" title="Carousel" />
          <ALink href="/dnd" title="DND" />
          <ALink href="/todo" title="TODO" />
        </div>
      </div>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
