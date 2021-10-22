import ImageComponentity from './ImageComponentity'
import Link from 'next/link'
import SVGClock from './../components/SVG/SVGClock'
import SVGLifestyle from './../components/SVG/SVGLifestyle'
import SVGTag from './../components/SVG/SVGTag'
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share'
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share'
import moment from 'moment'

function Post({ post }) {
  return (
    <>
      <div
        id={post.id}
        className='blog hover:bg-red-50 dark:hover:bg-gray-800 overflow-hidden flex flex-col mx-auto px-5'
      >
        <div className='flex flex-col gap-3 p-3 md:p-7 pb-3'>
          <Link href={`${post.link.replace('old.reporterly', 'reporterly')}`}>
            <a className='font-semibold text-xl md:text-2xl inline-block hover:text-red-800 transition duration-500 ease-in-out inline-block mb-2'>
              <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </a>
          </Link>
          <div className='flex justify-between'>
            {post._embedded.author[0].slug && (
              <div className='flex items-center'>
                <Link href={`/author/${post._embedded.author[0].slug}`}>
                  <a>
                    <ImageComponentity
                      classes='w-10 h-10 rounded-full overflow-hidden mr-2'
                      src={
                        post._embedded.author[0].avatar_urls
                          ? encodeURI(post._embedded.author[0].avatar_urls['96'])
                          : 'https://secure.gravatar.com/avatar/5ba47e3ab322d98712c8147821ede32a?s=4896&d=mm&r=g'
                      }
                      alt={`Written By:  ` + post._embedded.author[0].name}
                    />
                  </a>
                </Link>
                <div className='text-xs'>
                  <Link href={`/author/${post._embedded.author[0].slug}`}>
                    <a className='text-gray-900 dark:text-gray-100 font-semibold leading-none text-xs md:text-sm hover:text-red-800 dark:hover:text-red-800 transition duration-500 ease-in-out'>
                      {post._embedded.author[0].name}
                    </a>
                  </Link>
                  <p className='text-gray-600 text-xs'>{post._embedded.author[0].slug}</p>
                </div>
              </div>
            )}
            <div className='share flex items-center text-gray-600'>
              <div className='mr-1'>
                <TwitterShareButton url={`${post.link.replace('old.reporterly', 'reporterly')}`}>
                  <TwitterIcon size={24} round={false} />
                </TwitterShareButton>
              </div>
              <div className='mr-1'>
                <LinkedinShareButton url={`${post.link.replace('old.reporterly', 'reporterly')}`}>
                  <LinkedinIcon size={24} round={false} />
                </LinkedinShareButton>
              </div>
              <div className='mr-1'>
                <FacebookShareButton url={`${post.link.replace('old.reporterly', 'reporterly')}`}>
                  <FacebookIcon size={24} round={false} />
                </FacebookShareButton>
              </div>
            </div>
          </div>
        </div>
        <div className='relative'>
          {post.featured_media != 0 && post.featured_media != null && (
            <ImageComponentity
              src={encodeURI(post._embedded['wp:featuredmedia'][0].source_url)}
              classes={'h-48 md:h-72 bg-gray-300 rounded-xl overflow-hidden'}
              alt={post.title.rendered}
            />
          )}
        </div>
        <div className='p-3 md:p-7 pb-5 border-b border-gray-100 w-full'>
          <div
            className='text-gray-700 dark:text-gray-300 text-sm md:text-base h-24 overflow-hidden line-clamp-4 leading-6 md:leading-8'
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
          <div className='text-xs md:text-sm font-regular text-gray-900 dark:text-gray-100 flex mt-4 flex items-center justify-between'>
            <div className='flex overflow-scroll scrollbar-hide'>
              <span className='mr-3 flex-wrap flex flex-row items-center'>
                <SVGClock />
                <span className='ml-1'>{moment(post.date_gmt).format('DD MMMM')}</span>
              </span>
              {post._embedded['wp:term'].map((termArray) =>
                termArray.map(
                  (term, index) =>
                    index < 2 && (
                      <Link
                        href={
                          '' +
                          (term.taxonomy == 'category' ? '/category' : '/tag') +
                          `/${term.slug}`
                        }
                      >
                        <a
                          className={`ml-1 sm:ml-3 ${
                            index == 1 ? 'hidden sm:flex' : 'flex'
                          } flex-none items-center hover:text-red-800`}
                        >
                          {term.taxonomy == 'category' ? (
                            <SVGLifestyle classes='h-5' />
                          ) : (
                            <SVGTag />
                          )}
                          <span className='ml-1' dangerouslySetInnerHTML={{ __html: term.name }} />
                        </a>
                      </Link>
                    )
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
