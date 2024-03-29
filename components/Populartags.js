import { useQuery, useQueryClient } from 'react-query'
import { useEffect } from 'react'
import Link from 'next/link'

function Populartags() {
  const { isLoading, error, data } = useQuery(
    'populartags',
    () =>
      fetch(
        'https://reporterly.net/wp-json/wp/v2/tags?order=desc&orderby=count&per_page=3&_fields=id,name,slug'
      ).then((res) => res.json()),
    { keepPreviousData: true }
  )

  const queryClient = new useQueryClient()

  useEffect(() => {
    return async () => {
      await queryClient.prefetchQuery(
        'populartags',
        () =>
          fetch(
            'https://reporterly.net/wp-json/wp/v2/tags?order=desc&orderby=count&per_page=3&_fields=id,name,slug'
          ).then((res) => res.json()),
        { keepPreviousData: true }
      )
    }
  }, [])

  if (isLoading) return <p>...</p>

  if (error)
    return <p className='text-red-800 font-semibold'>'An error has occurred: ' + error.message</p>
  return (
    <>
      {data.map((tag, index) => (
        <Link key={tag.id} href={`/tag/${tag.slug}`}>
          <a className='flex flex-none lg:border border-gray-100 hover:bg-red-800 hover:text-white transition duration-300 ease-in-out text-xs lg:p-2 mr-1 rounded-md'>
            #{tag.name}
          </a>
        </Link>
      ))}
    </>
  )
}

export default Populartags
