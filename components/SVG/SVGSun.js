export default function SVGSun({ classes }) {
  return (
    <svg
      className={`${classes ? classes : 'h-6'}`}
      fill='text-gray-900'
      viewBox='0 0 32 32'
      id='icon'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='15' y='2' width='2' height='4.96' />
      <rect
        x='21.67'
        y='6.85'
        width='4.96'
        height='2'
        transform='translate(1.52 19.37) rotate(-45)'
      />
      <rect x='25.04' y='15' width='4.96' height='2' />
      <rect
        x='23.15'
        y='21.67'
        width='2'
        height='4.96'
        transform='translate(-10 24.15) rotate(-45)'
      />
      <rect x='15' y='25.04' width='2' height='4.96' />
      <rect
        x='5.37'
        y='23.15'
        width='4.96'
        height='2'
        transform='translate(-14.77 12.63) rotate(-45)'
      />
      <rect x='2' y='15' width='4.96' height='2' />
      <rect
        x='6.85'
        y='5.37'
        width='2'
        height='4.96'
        transform='translate(-3.25 7.85) rotate(-45)'
      />
      <path d='M16,12a4,4,0,1,1-4,4,4,4,0,0,1,4-4m0-2a6,6,0,1,0,6,6,6,6,0,0,0-6-6Z' />
    </svg>
  )
}
