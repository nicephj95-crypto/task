import { useState } from 'react'
import DropDownForm from './DropDownForm/DropDownForm'
import { button, ghost } from './ActionButton.css'

type ActionButtonProps = {
  label: string
  placeholder: string
  buttonText?: string
  variant?: 'solid' | 'ghost'
  onSubmit: (value: string) => void
}

const ActionButton = ({ label, placeholder, buttonText = '추가', variant = 'solid', onSubmit }: ActionButtonProps) => {
  const [open, setOpen] = useState(false)

  if (open) {
    return (
      <DropDownForm
        placeholder={placeholder}
        buttonText={buttonText}
        onCancel={() => setOpen(false)}
        onSubmit={(value) => {
          onSubmit(value)
          setOpen(false)
        }}
      />
    )
  }

  return (
    <button
      type="button"
      className={variant === 'ghost' ? ghost : button}
      onClick={() => setOpen(true)}
    >
      {label}
    </button>
  )
}

export default ActionButton
