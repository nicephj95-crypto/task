import { style } from '@vanilla-extract/css'
import { vars } from '@/App.css'

export const item = style({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: vars.spacing.small,
  padding: `${vars.spacing.medium} ${vars.spacing.big2}`,
  borderRadius: '12px',
  backgroundColor: vars.colors.mainFaded,
  border: `1px solid ${vars.colors.mainFadedBright}`,
})

export const message = style({
  margin: 0,
  fontSize: vars.fontSizing.T4,
  color: vars.colors.primaryText,
  fontWeight: 700,
})

export const meta = style({
  margin: 0,
  fontSize: vars.fontSizing.T6,
  color: vars.colors.secondaryDarkText,
})

export const timestamp = style({
  margin: 0,
  fontSize: vars.fontSizing.T6,
  color: vars.colors.secondaryDarkText,
  textAlign: 'right',
})
