import { Component } from "react"
import { Container } from "../"

export class Form extends Component {
  render() {
    return (
      <Container>
        <form onSubmit={(event) => this.props.handleSubmit(event)}>
          {this.props.children}
        </form>
      </Container>
    )
  }
}
