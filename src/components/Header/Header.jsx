import { Component } from "react"
import "./Header.css"

export class Header extends Component {
  render() {
    return <h1 className='header'>{this.props.children}</h1>
  }
}
