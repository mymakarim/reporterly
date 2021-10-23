import HeaderClassic from './HeaderClassic'
import LatestStories from './LatestStories'
import SVGHome from './../components/SVG/SVGHome'
import SVGRegional from './../components/SVG/SVGRegional'
import SVGSecurity from './../components/SVG/SVGSecurity'
import SVGHumanrights from './../components/SVG/SVGHumanrights'
import Footer from './Footer'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ImageComponentity from './ImageComponentity'

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <div className='py-4 lg:px-4 flex flex-col lg:gap-5'>
      <HeaderClassic />
      <div className='main grid grid-cols-12 justify-between'>
        <div className='col-span-12 lg:col-span-9 flex'>
          <div className='hidden lg:relative z-50 lg:inline-block lg:w-72 lg:flex-none lg:border-r border-gray-100'>
            <div className='lg:sticky lg:top-10 lg:p-8 lg:pt-0 lg:pr-1 flex flex-col justify-between'>
              <div>
                <ul className='navigationbar lg:my-5 border-y flex flex-row justify-around lg:flex-col text-md'>
                  <li>
                    <Link href='/'>
                      <a
                        className={`${
                          router.pathname == '/' ? 'text-semibold' : ''
                        } flex items-center hover:text-red-800 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full`}
                      >
                        <SVGHome classes='text-gray-700 dark:text-gray-200 h-7' />
                        <span className='ml-2 hidden lg:inline-block'>Home</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/category/security-trends'>
                      <a
                        className={`${
                          router.pathname == '/security-trends' ? 'text-semibold' : ''
                        } flex items-center hover:text-red-800 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full`}
                      >
                        <SVGSecurity classes='text-gray-700 dark:text-gray-200 h-7' />
                        <span className='ml-2 hidden lg:inline-block'>Security Trends</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/category/regional-dynamics'>
                      <a
                        className={`${
                          router.pathname == '/regional-dynamics' ? 'text-semibold' : ''
                        } flex items-center hover:text-red-800 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full`}
                      >
                        <SVGRegional classes='text-gray-700 dark:text-gray-200 h-7' />
                        <span className='ml-2 hidden lg:inline-block'>Regional Dynamics</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/category/human-rights'>
                      <a
                        className={`${
                          router.pathname == '/human-rights' ? 'text-semibold' : ''
                        } flex items-center hover:text-red-800 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full`}
                      >
                        <SVGHumanrights classes='text-gray-700 dark:text-gray-200 h-7' />
                        <span className='ml-2 hidden lg:inline-block'>Human Rights</span>
                      </a>
                    </Link>
                  </li>
                </ul>
                <div className='ml-4 mt-4 mb-8 hidden lg:inline-block'>
                  <Link href='/archive'>
                    <a className='text-center px-7 py-3 bg-red-700 text-white rounded-full shadow-md hover:bg-red-800 transition duration-300 ease-in-out'>
                      Explore Archive
                    </a>
                  </Link>
                </div>
              </div>
              <Footer />
            </div>
          </div>
          <div className='flex-grow flex flex-col'>{children}</div>
        </div>

        <div className='hidden lg:block relative col-span-3 pr-5 scrollbar-hide h-screen overflow-y-scroll sticky top-0'>
          <LatestStories key={'lateststories'} />
          <div className='border-b border-gray-100 py-5 mb-2'>
            <h1 className='uppercase font-semibold mb-3'>Ads</h1>
            <img className='w-full' src='https://paikaftab.com/wp-content/uploads/2021/09/Ad.png' />
          </div>
        </div>
      </div>
    </div>
  )
}
