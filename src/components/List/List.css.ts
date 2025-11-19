import { style } from '@vanilla-extract/css'
import { vars } from '@/App.css'

export const card = style({
  backgroundColor: vars.colors.list,
  borderRadius: '16px',
  padding: vars.spacing.big2,
  minWidth: vars.minWidth.list,
  boxShadow: vars.shadow.basic,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.medium,
})

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const title = style({
  margin: 0,
  fontSize: vars.fontSizing.T3,
  color: vars.colors.secondaryDarkText,
})

export const tasksContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.small,
})
