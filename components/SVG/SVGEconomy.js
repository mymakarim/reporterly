export default function SVGEconomy({ classes }) {
  return (
    <svg
      className={`${classes ? classes : 'h-8'}`}
      fill='currentColor'
      viewBox='0 0 32 32'
      id='icon'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='8' y='10' width='8' height='2' />
      <rect x='8' y='6' width='12' height='2' />
      <rect x='8' y='2' width='12' height='2' />
      <path d='M4.7111,28l5.6312-9.9961,7.4341,6.49A2,2,0,0,0,20.86,23.96l6.9707-10.4034-1.6622-1.1132-7,10.4472-.07.1035-7.4345-6.4907a2.0032,2.0032,0,0,0-3.0806.5308L4,25.1826V2H2V28a2.0023,2.0023,0,0,0,2,2H30V28Z' />
    </svg>
  )
}
