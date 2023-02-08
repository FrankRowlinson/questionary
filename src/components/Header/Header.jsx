import "./Header.css"

export const Header = ({ main, children }) => {
  return (
    <>
      {main ? (
        <h1 className='header'>{children}</h1>
      ) : (
        <h3 className='header'>{children}</h3>
      )}
    </>
  )
}
