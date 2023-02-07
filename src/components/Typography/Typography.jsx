import { Component } from "react"
import "./Typography.css"

export class Typography extends Component {
  render() {
    return <p className='typography'>{this.props.children}</p>
  }
}
