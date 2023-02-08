import { Container, Header, Typography } from "../"
import "./QuestionaryResult.css"

export const QuestionaryResult = (props) => {
  const {
    name,
    surname,
    bday,
    phone,
    website,
    about,
    technologies,
    lastproject,
  } = props
  return (
    <Container size='md'>
      <Header main>
        {name} {surname}
      </Header>
      <div className='result-field'>
        <Header>Дата рождения: </Header>
        <Typography>{bday}</Typography>
      </div>
      <div className='result-field'>
        <Header>Телефон: </Header>
        <Typography>{phone}</Typography>
      </div>
      <div className='result-field'>
        <Header>Сайт: </Header>
        <Typography>
          <a className='link' href={website}>
            {website}
          </a>
        </Typography>
      </div>
      <div className='result-field'>
        <Header>О себе:</Header>
        <Typography>{about}</Typography>
      </div>
      <div className='result-field'>
        <Header>Стек технологий:</Header>
        <Typography>{technologies}</Typography>
      </div>
      <div className='result-field'>
        <Header>Описание последнего проекта:</Header>
        <Typography>{lastproject}</Typography>
      </div>
    </Container>
  )
}
