import "./Button.css"

export const Button = ({ type, onClick, children }) => {
  return (
    <button type={type || "submit"} onClick={onClick}>
      {children}
    </button>
  )
}
