import { Component } from "react"
import "./FormField.css"

export class FormField extends Component {
  fieldTypes = {
    date: "date",
    email: "email",
    url: "url",
  }
  attributes = {
    className: "form-field",
    id: this.props.name,
    name: this.props.name,
    placeholder: this.props.placeholder,
    type: this.props.type ? this.fieldTypes[this.props.type] : "text",
  }
  render() {
    return (
      <div className='form-group'>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        {this.props.textarea ? (
          <textarea {...this.attributes} rows={7} />
        ) : (
          <input {...this.attributes} />
        )}
      </div>
    )
  }
}
