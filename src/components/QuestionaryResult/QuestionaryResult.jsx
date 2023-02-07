import { Component } from "react"
import { Container, Header, Typography } from "../"
import "./QuestionaryResult.css"

export class QuestionaryResult extends Component {
  render() {
    return (
      <Container size='md'>
        <Header main>
          {this.props.name} {this.props.surname}
        </Header>
        <div className='result-field'>
          <Header>Дата рождения: </Header>
          <Typography>{this.props.bday}</Typography>
        </div>
        <div className='result-field'>
          <Header>Телефон: </Header>
          <Typography>{this.props.phone}</Typography>
        </div>
        <div className='result-field'>
          <Header>Сайт: </Header>
          <Typography>
            <a class='link' href={this.props.website}>
              {this.props.website}
            </a>
          </Typography>
        </div>
        <div className='result-field'>
          <Header>О себе:</Header>
          <Typography>{this.props.about}</Typography>
        </div>
        <div className='result-field'>
          <Header>Стек технологий:</Header>
          <Typography>{this.props.technologies}</Typography>
        </div>
        <div className='result-field'>
          <Header>Описание последнего проекта:</Header>
          <Typography>{this.props.lastproject}</Typography>
        </div>
      </Container>
    )
  }
}
