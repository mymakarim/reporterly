import { useQuery } from 'react-query'
import SmallLoader from './skeleton/SmallLoader'
import Link from 'next/link'

function SearchResults({ s }) {
  const { isLoading, isRefetching, error, data } = useQuery('searchresults', async () =>
    fetch(
      `https://reporterly.net/wp-json/wp/v2/tags?search=${encodeURI(
        s
      )}&_fields=id,name,slug&orderby=slug&per_page=5`
    ).then((res) => res.json())
  )

  if (isLoading) return <p>Searching...</p>

  if (error)
    return <p className='text-red-800 font-semibold'>'An error has occurred: ' + error.message</p>
  return (
    <>
      <div className='bg-white'>
        <div className='flex items-center justify-start gap-2 mb-4'>
          {isRefetching && (
            <div className='w-14 flex items-center justify-center'>
              <SmallLoader />
              <SmallLoader />
              <SmallLoader />
            </div>
          )}
        </div>
        <ul className=''>
          {!isRefetching && data.length == 0 ? (
            <p>Not Found! Please try another tag!</p>
          ) : (
            !isRefetching &&
            data.map((post) => (
              <li key={post.id}>
                <Link href={`/tag/${post.slug}`}>
                  <a className='block py-2 hover:text-red-800 text-semibold'>
                    #{decodeURI(post.slug)}
                  </a>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  )
}

export default SearchResults
