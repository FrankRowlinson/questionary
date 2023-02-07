import { Component } from "react"
import "./Input.css"

export class Input extends Component {
  attributes = {
    id: this.props.name,
    name: this.props.name,
    value: this.props.value,
    placeholder: this.props.placeholder || "",
    type: this.props.type || "text",
    onChange: this.props.handleInput,
  }
  textareaMessage() {
    return `Осталось ${
      this.props.value ? this.props.value.trim().length : 0
    }/600 символов`
  }

  showErrorForTextarea() {
    return (
      (this.props.isSubmitted && this.props.error) ||
      (this.props.value && this.props.value.trim() && this.props.error)
    )
  }

  render() {
    return (
      <div className='form-group'>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        {this.attributes.type === "textarea" ? (
          <>
            <textarea
              {...this.attributes}
              className={
                this.showErrorForTextarea() ? "form-field error" : "form-field"
              }
              rows={7}
            />
            {this.showErrorForTextarea() ? (
              <p className='error info-message'>{this.props.error}</p>
            ) : (
              <p className='info-message'>{this.textareaMessage()}</p>
            )}
          </>
        ) : (
          <>
            <input
              {...this.attributes}
              className={
                this.props.error && this.props.isSubmitted
                  ? "form-field error"
                  : "form-field"
              }
            />
            {this.props.isSubmitted && (
              <p className='error info-message'>{this.props.error}</p>
            )}
          </>
        )}
      </div>
    )
  }
}
