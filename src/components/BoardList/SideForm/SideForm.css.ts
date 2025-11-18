import { style } from '@vanilla-extract/css'
import { vars } from '@/App.css'

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.small,
})

export const label = style({
  fontSize: vars.fontSizing.T5,
  color: vars.colors.secondaryDarkText,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.small,
})

export const input = style({
  padding: `${vars.spacing.small} ${vars.spacing.medium}`,
  borderRadius: '10px',
  border: `1px solid ${vars.colors.selectedTab}`,
  outline: 'none',
  ':focus': {
    borderColor: vars.colors.main,
    boxShadow: `0 0 0 2px ${vars.colors.mainFadedBright}`,
  },
})
