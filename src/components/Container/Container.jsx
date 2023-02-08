import "./Container.css"

export const Container = ({ size, children }) => {
  return (
    <div className='container' data-size={size || "md"}>
      {children}
    </div>
  )
}
