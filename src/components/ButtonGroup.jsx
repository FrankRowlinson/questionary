import { Component } from "react"
import "./ButtonGroup.css"

export class ButtonGroup extends Component {
  render() {
    return <div className='button-group'>{this.props.children}</div>
  }
}
