import { Component } from "react"
import { Form, Button, Input, ButtonGroup, Header } from "../components"
import {
  validateName,
  validatePhone,
  validateTextarea,
  validateUrl,
  required,
} from "../utils/validation"
import "./Questionary.css"

export class Questionary extends Component {
  state = { isSubmitted: false, isValid: true, fields: {}, errors: {} }

  validatorMap = {
    name: validateName,
    textarea: validateTextarea,
    phone: validatePhone,
    url: validateUrl,
    date: () => true,
  }

  setInput(type, name) {
    function handleInput(event) {
      this.setState((prev) => {
        return {
          fields: {
            ...prev.fields,
            [name]: event.target.value,
          },
          errors: {
            ...prev.errors,
            [name]:
              required(event.target.value) ||
              this.validatorMap[type](event.target.value),
          },
        }
      })
    }
    return handleInput
  }

  register(type, name) {
    if (!this.state.fields.hasOwnProperty(name)) {
      this.setState((prev) => {
        return {
          fields: { ...prev.fields, [name]: "" },
          errors: { ...prev.errors, [name]: required("") },
        }
      })
    }
    return {
      name,
      type,
      value: this.state.fields[name],
      error: this.state.errors[name],
      handleInput: this.setInput(type, name).bind(this),
      isSubmitted: this.state.isSubmitted,
    }
  }

  validateForm() {
    console.log(this.state.fields)
    this.setState(
      { isSubmitted: true },
      () =>
        Object.values(this.state.fields).every((el) => el) && this.showResult()
    )
  }

  handleSubmit(event) {
    event.preventDefault()
    this.validateForm()
  }

  showResult() {
    console.log("Форма валидна")
  }

  render() {
    return (
      <div className='questionary-container'>
        <Form handleSubmit={this.handleSubmit.bind(this)}>
          <Header>Создание анкеты</Header>
          <Input
            label='Имя'
            placeholder='Введите имя...'
            {...this.register("name", "name")}
          />
          <Input
            label='Фамилия'
            placeholder='Введите фамилию...'
            {...this.register("name", "surname")}
          />
          <Input
            label='Дата рождения'
            placeholder=''
            {...this.register("date", "bday")}
          />
          <Input
            label='Телефон'
            placeholder='+X XXX XXX XXX'
            {...this.register("phone", "phone")}
          />
          <Input
            label='Сайт'
            placeholder='www.example.com'
            {...this.register("url", "website")}
          />
          <Input
            label='О себе'
            placeholder='Вкратце о себе...'
            {...this.register("textarea", "about")}
          />
          <Input
            label='Стек технологий'
            placeholder='Стек технологий...'
            {...this.register("textarea", "technologies")}
          />
          <Input
            label='Описание последнего проекта'
            placeholder='Примененные технологии, роль, достигнутые результаты...'
            {...this.register("textarea", "last-project")}
          />
          <ButtonGroup>
            <Button type='submit'>Сохранить</Button>
            <Button type='reset'>Отменить</Button>
          </ButtonGroup>
        </Form>
      </div>
    )
  }
}
