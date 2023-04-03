
function ArrowIcon (props) {
  const { direction } = props

  return (
    <svg style={{
      width: 35,
      fill: 'white',
      transform: direction === 'up' ? 'rotate(270deg)' : 'rotate(90deg)'
    }} focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
  )
}

export default ArrowIcon
