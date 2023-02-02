import { Component } from "react"
import "./AppButton.css"

export class AppButton extends Component {
  render() {
    return <button type={this.props.type}>{this.props.children}</button>
  }
}
