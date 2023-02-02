import { Component } from "react"
import {
  AppForm,
  AppButton,
  FormField,
  ButtonGroup,
  AppHeader,
} from "../components"
import "./Questionary.css"

export class Questionary extends Component {
  render() {
    return (
      <div className='questionary-container'>
        <AppForm>
          <AppHeader>Создание анкеты</AppHeader>
          <FormField label='Имя' name='name' placeholder='Введите имя...' />
          <FormField
            label='Фамилия'
            name='surname'
            placeholder='Введите фамилию...'
          />
          <FormField
            label='Дата рождения'
            name='bday'
            placeholder=''
            type='date'
          />
          <FormField
            label='Телефон'
            name='phone'
            placeholder='+X XXX XXX XXX'
          />
          <FormField
            label='Сайт'
            name='website'
            placeholder='www.example.com'
            type='url'
          />
          <FormField
            label='О себе'
            name='about'
            placeholder='Вкратце о себе...'
            textarea
          />
          <FormField
            label='Стек технологий'
            name='technologies'
            placeholder='Стек технологий...'
            textarea
          />
          <FormField
            label='Описание последнего проекта'
            name='last-project'
            placeholder='Примененные технологии, роль, достигнутые результаты...'
            textarea
          />
          <ButtonGroup>
            <AppButton type='submit'>Сохранить</AppButton>
            <AppButton type='reset'>Отменить</AppButton>
          </ButtonGroup>
        </AppForm>
      </div>
    )
  }
}
