import { Component } from "react"
import "./Button.css"

export class Button extends Component {
  render() {
    return <button type={this.props.type}>{this.props.children}</button>
  }
}
