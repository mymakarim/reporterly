import { useRouter } from 'next/router'
import ResponsiveArticle from '../components/skeleton/ResponsiveArticle'
import Infiniteblog from './../components/Infiniteblog'
import ImageComponentity from './../components/ImageComponentity'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { dehydrate, QueryClient } from 'react-query'

function Index() {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <ResponsiveArticle />
  }

  return (
    <>
      <NextSeo
        title='reporterly'
        description='Reporterly is Afghanistan’s new online portal designed for instant coverage of daily happenings of the country.'
        canonical='https://reporterly.net'
        titleTemplate='reporterly | %s'
        robotsProps={{
          maxSnippet: 'max-snippet:-1',
          maxImagePreview: 'max-image-preview:large',
          maxVideoPreview: 'max-video-preview:-1'
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/icons/logo-dark.png'
          },
          {
            rel: 'apple-touch-icon',
            href: '/icons/logo-dark.png',
            sizes: '76x76'
          },
          {
            rel: 'manifest',
            href: '/manifest.json'
          }
        ]}
        openGraph={{
          title: 'Reporterly',
          description:
            'Reporterly is Afghanistan’s new online portal designed for instant coverage of daily happenings of the country.',
          url: `https://reporterly.net/`,
          type: 'website',
          locale: 'fa_IR',
          site_name: 'Reporterly',
          images: [
            {
              url: '/icons/seoindex.png',
              width: 1200,
              height: 630,
              alt: 'Reporterly'
            }
          ]
        }}
        twitter={{
          handle: '@reporterlyaf',
          site: '@reporterlyaf',
          cardType: 'summary_large_image'
        }}
      />
      <div className='ad p-5 hover:bg-red-50 dark:hover:bg-gray-900'>
        <Link href='https://codenawis.com/'>
          <a target='_blank' rel='noopener'>
            <ImageComponentity
              src='https://old.khabarnama.net/wp-content/uploads/2021/10/ads.png'
              classes={'w-full h-10 sm:h-16 md:h-28'}
              alt='CodeNawis - website design and development'
              title='CodeNawis - website design and development'
            />
          </a>
        </Link>
      </div>
      <Infiniteblog key={'projects'} />
    </>
  )
}

const fetchProjects = async () => {
  const res = await fetch(`https://reporterly.net/wp-json/wp/v2/posts?_embed=true`)
  const posts = res.json()
  return posts
}

const fetchreporterly = async () => {
  const res = await fetch(`https://reporterly.net/wp-json/wp/v2/posts?_embed=true&author=1`)
  const posts = res.json()
  return posts
}
const fetchSecurity = async () => {
  const res = await fetch(`https://reporterly.net/wp-json/wp/v2/posts?_embed=true&categories=1405`)
  const posts = res.json()
  return posts
}
const fetchRegional = async () => {
  const res = await fetch(`https://reporterly.net/wp-json/wp/v2/posts?_embed=true&categories=1406`)
  const posts = res.json()
  return posts
}
const fetchHuman = async () => {
  const res = await fetch(`https://reporterly.net/wp-json/wp/v2/posts?_embed=true&categories=1407`)
  const posts = res.json()
  return posts
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchInfiniteQuery('projects', fetchProjects)
  await queryClient.prefetchInfiniteQuery('author1', fetchreporterly)
  await queryClient.prefetchInfiniteQuery('categories1405', fetchSecurity)
  await queryClient.prefetchInfiniteQuery('categories1406', fetchRegional)
  await queryClient.prefetchInfiniteQuery('categories1407', fetchHuman)

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
    },
    revalidate: 43200
  }
}

export default Index
