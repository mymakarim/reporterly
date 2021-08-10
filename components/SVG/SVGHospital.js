export default function SVGLectern({ classes }) {
  return (
    <svg
      className={`${classes ? classes : 'h-8'}`}
      fill='currentColor'
      viewBox='0 0 32 32'
      id='icon'
      xmlns='http://www.w3.org/2000/svg'
    >
      <polygon points='21 10 17 10 17 6 15 6 15 10 11 10 11 12 15 12 15 16 17 16 17 12 21 12 21 10' />
      <path d='M28,10H26V4a2.0023,2.0023,0,0,0-2-2H8A2.0023,2.0023,0,0,0,6,4v6H4a2.0023,2.0023,0,0,0-2,2V30H30V12A2.0023,2.0023,0,0,0,28,10ZM14,28V22h4v6Zm6,0V21a1,1,0,0,0-1-1H13a1,1,0,0,0-1,1v7H4V12H8V4H24v8h4V28Z' />
    </svg>
  )
}
