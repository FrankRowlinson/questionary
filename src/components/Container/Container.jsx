import { Component } from "react"
import "./Container.css"

export class Container extends Component {
  render() {
    return (
      <div className='container' data-size={this.props.size || "md"}>
        {this.props.children}
      </div>
    )
  }
}
