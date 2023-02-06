import { Component } from "react"
import "./Form.css"

export class Form extends Component {
  render() {
    return (
      <div className='form-container'>
        <form onSubmit={(event) => this.props.handleSubmit(event)}>
          {this.props.children}
        </form>
      </div>
    )
  }
}
