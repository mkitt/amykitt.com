import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

type PropsType = {
  readonly children?: React.ReactNode
  readonly description?: string
  readonly image?: string
  readonly keywords?: string
  readonly referrer?: string
  readonly robots?: 'noindex,nofollow' | 'index,follow'
  readonly title?: string
}

/**
 * This component injects elements to the `<head>` of your page via `next/head`.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 *
 * @see https://nextjs.org/docs/api-reference/next/head
 * @see https://htmlhead.dev/
 */
function Meta(props: PropsType) {
  const {
    title = 'Amy Kitt Design',
    description = 'hello. I am a freelance designer with a focus on branding + identity.',
    image = '/assets/amy-kitt-dual.jpg',
    robots = 'index,follow',
    referrer = 'always',
    keywords,
  } = props

  const { asPath } = useRouter()
  const url = 'https://amykitt.com/' + asPath

  return (
    <Head>
      <title>{title}</title>
      <meta key="meta:description" name="description" content={description} />
      {keywords != null && (
        <meta
          key="meta:keywords"
          name="keywords"
          itemProp="keywords"
          content={keywords}
        />
      )}
      <meta name="subject" content={description} />
      <meta name="image" content={image} />
      <meta name="url" content={url} />
      <meta property="og:site_name" content="Amy Kitt Design" />
      <meta property="og:type" content="website" />
      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:url" property="og:url" content={url} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
      {image != null && (
        <meta key="og:image" property="og:image" content={image} />
      )}
      <meta name="twitter:card" content="summary" />
      <meta key="meta:referrer" name="referrer" content={referrer} />
      <meta key="meta:robots" name="robots" content={robots} />
      {props.children}
    </Head>
  )
}

export default Meta
