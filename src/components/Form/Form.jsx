import { Container } from "../"

export const Form = ({ handleSubmit, children }) => {
  return (
    <Container>
      <form onSubmit={(event) => handleSubmit(event)}>{children}</form>
    </Container>
  )
}
