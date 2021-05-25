import { useRouter } from 'next/router'
import Link from 'next/link'

function Author({ author }) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      {author === null ? (
        <h1>Not found</h1>
      ) : (
        <div>
          <h1>{author[0].name}</h1>
          <hr />
          <article dangerouslySetInnerHTML={{ __html: author[0].description?.rendered }} />
        </div>
      )}
    </>
  )
}

export default Author

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch(`https://reporterly.net/wp-json/wp/v2/users?_embed=true`)
  const authors = await res.json()

  const slugs = []
  authors.forEach((author) => {
    slugs.push({ params: { slug: author.slug } })
  })

  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: slugs,
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const { slug } = params
  const res = await fetch(`https://reporterly.net/wp-json/wp/v2/users?_embed=true&slug=${slug}`)
  const author = await res.json()

  // Pass post data to the page via props
  return {
    props: { author },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1
  }
}
