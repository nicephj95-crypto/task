import { style } from '@vanilla-extract/css'
import { vars } from '@/App.css'

export const card = style({
  backgroundColor: vars.colors.task,
  borderRadius: '12px',
  padding: vars.spacing.medium,
  boxShadow: vars.shadow.basic,
  transition: 'background-color 0.2s ease',
  width: '100%',
  border: 'none',
  cursor: 'pointer',
  textAlign: 'left',
  outline: 'none',
  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.taskHover,
    },
    '&:focus-visible': {
      boxShadow: `${vars.shadow.basic}, 0 0 0 2px ${vars.colors.primary}`,
    },
  },
})

export const title = style({
  fontWeight: 700,
  marginBottom: vars.spacing.small,
})

export const description = style({
  fontSize: vars.fontSizing.T6,
  color: vars.colors.secondaryDarkText,
  lineHeight: 1.4,
})
