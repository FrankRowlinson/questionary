import { Component } from "react"
import "./Header.css"

export class Header extends Component {
  render() {
    return (
      <>
        {this.props.main ? (
          <h1 className='header'>{this.props.children}</h1>
        ) : (
          <h3 className='header'>{this.props.children}</h3>
        )}
      </>
    )
  }
}
