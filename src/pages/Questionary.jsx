import { useState, useEffect } from "react"
import {
  Form,
  Button,
  Input,
  ButtonGroup,
  Header,
  QuestionaryResult,
  Modal,
  Typography,
} from "../components"
import { resetFields } from "../utils/formatting"
import {
  required,
  validateName,
  validatePhone,
  validateTextarea,
  validateUrl,
} from "../utils/validation"
import "./Questionary.css"

export const Questionary = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [fields, setFields] = useState({})
  const [errors, setErrors] = useState({})

  const validatorMap = {
    name: validateName,
    textarea: validateTextarea,
    phone: validatePhone,
    url: validateUrl,
    date: () => null,
  }

  function setInput(type, name) {
    function handleInput(event) {
      setFields((prev) => ({ ...prev, [name]: event.target.value }))
      setErrors((prev) => ({
        ...prev,
        [name]: {
          empty: required(event.target.value),
          other: validatorMap[type](event.target.value),
        },
      }))
    }
    return handleInput
  }

  const register = (type, name) => {
    if (!fields.hasOwnProperty(name)) {
      setFields((prev) => ({ ...prev, [name]: "" }))
      setErrors((prev) => ({
        ...prev,
        [name]: { empty: required(""), other: null },
      }))
    }
    return {
      name,
      type,
      value: fields[name],
      errors: errors[name],
      handleInput: setInput(type, name),
      isSubmitted,
    }
  }

  useEffect(() => {
    if (isValid) document.title = `${fields.name} ${fields.surname}`
  }, [isValid, fields])

  const handleSubmit = (event) => {
    event.preventDefault()
    validateForm()
  }

  const validateForm = () => {
    setIsValid(Object.values(errors).every((el) => !el.other && !el.empty))
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setIsValid(false)
    setErrors({})
    setFields({ ...resetFields(fields) })
  }
  return (
    <div className='questionary-container'>
      {isValid ? (
        <>
          <Modal size='sm' isOpenByDefault>
            <Header>Спасибо!</Header>
            <Typography>
              Анкета заполнена корректно. Нажмите "Закрыть" чтобы увидеть
              результат.
            </Typography>
          </Modal>
          <QuestionaryResult {...fields} />
        </>
      ) : (
        <Form handleSubmit={handleSubmit.bind(this)}>
          <Header main>Создание анкеты</Header>
          <Input
            label='Имя'
            placeholder='Введите имя...'
            {...register("name", "name")}
          />
          <Input
            label='Фамилия'
            placeholder='Введите фамилию...'
            {...register("name", "surname")}
          />
          <Input
            label='Дата рождения'
            placeholder=''
            {...register("date", "bday")}
          />
          <Input
            label='Телефон'
            placeholder='X-XXXX-XX-XX'
            {...register("phone", "phone")}
          />
          <Input
            label='Сайт'
            placeholder='https://www.example.com'
            {...register("url", "website")}
          />
          <Input
            label='О себе'
            placeholder='Вкратце о себе...'
            {...register("textarea", "about")}
          />
          <Input
            label='Стек технологий'
            placeholder='Стек технологий...'
            {...register("textarea", "technologies")}
          />
          <Input
            label='Описание последнего проекта'
            placeholder='Примененные технологии, роль, достигнутые результаты...'
            {...register("textarea", "lastproject")}
          />
          <ButtonGroup>
            <Button type='submit'>Сохранить</Button>
            <Button type='reset' onClick={handleReset.bind(this)}>
              Отменить
            </Button>
          </ButtonGroup>
        </Form>
      )}
    </div>
  )
}
