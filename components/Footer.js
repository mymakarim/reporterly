import Link from 'next/link'

export default function Footer() {
  return (
    <div className='text-xs p-5 flex flex-col items-start gap-2 md:gap-4 text-gray-900 dark:text-gray-300'>
      <div className='flex gap-2'>
        <Link href='/about-us'>
          <a className='hover:underline'>About Us</a>
        </Link>
        <Link href='/contact-us'>
          <a className='hover:underline'>Contact Us</a>
        </Link>
      </div>
      <p className='font-semibold'>© {new Date().getFullYear()} Reporterly, All rights reserved.</p>
    </div>
  )
}
