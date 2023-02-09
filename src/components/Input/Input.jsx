import { maskPhone } from "../../utils/formatting/"
import "./Input.css"

export const Input = (props) => {
  const {
    name,
    label,
    placeholder,
    value,
    errors,
    type,
    handleInput,
    isSubmitted,
  } = props

  const attributes = {
    id: name,
    name,
    value: type === "phone" ? maskPhone(value) : value,
    placeholder: placeholder || "",
    type: type || "text",
    onChange: handleInput,
  }

  const textareaMessage = () => {
    return `Осталось ${value ? 600 - value.trim().length : 600}/600 символов`
  }

  const showError = (errors.empty && isSubmitted) || errors.other

  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      {type === "textarea" ? (
        <>
          <textarea
            {...attributes}
            className={showError ? "form-field error" : "form-field"}
            rows={7}
          />
          {showError ? (
            <p className='error info-message'>
              {(isSubmitted && errors.empty) || errors.other}
            </p>
          ) : (
            <p className='info-message'>{textareaMessage()}</p>
          )}
        </>
      ) : (
        <>
          <input
            {...attributes}
            className={showError ? "form-field error" : "form-field"}
          />
          {showError && (
            <p className='error info-message'>
              {(isSubmitted && errors.empty) || errors.other}
            </p>
          )}
        </>
      )}
    </div>
  )
}
