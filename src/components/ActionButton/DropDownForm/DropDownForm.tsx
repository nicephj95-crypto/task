import { FormEvent, useState } from 'react'
import { form, input, actions, submit, cancel } from './DropDownForm.css'

type DropDownFormProps = {
  placeholder: string
  buttonText: string
  onSubmit: (value: string) => void
  onCancel: () => void
}

const DropDownForm = ({ placeholder, buttonText, onCancel, onSubmit }: DropDownFormProps) => {
  const [value, setValue] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onSubmit(value)
    setValue('')
  }

  return (
    <form className={form} onSubmit={handleSubmit}>
      <input
        className={input}
        value={value}
        placeholder={placeholder}
        onChange={(event) => setValue(event.target.value)}
      />
      <div className={actions}>
        <button className={submit} type="submit">
          {buttonText}
        </button>
        <button className={cancel} type="button" onClick={onCancel}>
          취소
        </button>
      </div>
    </form>
  )
}

export default DropDownForm
