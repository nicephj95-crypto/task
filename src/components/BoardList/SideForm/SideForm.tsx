import { FormEvent, useState } from 'react'
import { form, input, label as labelStyle } from './SideForm.css'

type SideFormProps = {
  onSubmit: (value: string) => void
}

const SideForm = ({ onSubmit }: SideFormProps) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(value)
    setValue('')
  }

  return (
    <form className={form} onSubmit={handleSubmit}>
      <label className={labelStyle}>
        새 보드
        <input
          className={input}
          value={value}
          placeholder="보드 이름"
          onChange={(event) => setValue(event.target.value)}
        />
      </label>
    </form>
  )
}

export default SideForm
