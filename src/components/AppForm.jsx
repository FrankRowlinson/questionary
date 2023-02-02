import { Component } from "react"
import "./AppForm.css"

export class AppForm extends Component {
  handleSubmit(event) {
    event.preventDefault()
    console.log(event.target)
  }

  render() {
    return (
      <div className='form-container'>
        <form onSubmit={this.handleSubmit}>{this.props.children}</form>
      </div>
    )
  }
}
