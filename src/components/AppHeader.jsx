import { Component } from "react"
import "./AppHeader.css"

export class AppHeader extends Component {
  render() {
    return <h1 className='header'>{this.props.children}</h1>
  }
}
