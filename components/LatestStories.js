import PostSmall from './PostSmall'
import { useQuery } from 'react-query'
import NotificationLoader from './skeleton/NotificationLoader'
import SmallLoader from './skeleton/SmallLoader'

function LatestStories() {
  const { isLoading, isRefetching, error, data } = useQuery(
    'lateststories',
    () =>
      fetch(
        'https://reporterly.net/wp-json/wp/v2/posts?categories=22&_fields=id,title,slug,date_gmt,link'
      ).then((res) => res.json()),
    { keepPreviousData: true }
  )

  if (isLoading) return <NotificationLoader />

  if (error)
    return <p className='text-red-800 font-semibold'>'An error has occurred: ' + error.message</p>
  return (
    <>
      <div className='border-b border-gray-100 py-5 ml-2 mb-2'>
        <div className='flex items-center justify-start gap-2 mb-4'>
          <h1 className='uppercase font-semibold'>Latest News</h1>
          {isRefetching && (
            <div className='w-14 flex items-center justify-center'>
              <SmallLoader />
              <SmallLoader />
              <SmallLoader />
            </div>
          )}
        </div>
        <ul className='newsfeed text-gray-600'>
          {data.map((post) => (
            <PostSmall key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default LatestStories
