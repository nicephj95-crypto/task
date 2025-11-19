import { style } from '@vanilla-extract/css'
import { vars } from '@/App.css'

export const form = style({
  backgroundColor: vars.colors.list,
  borderRadius: '14px',
  padding: vars.spacing.big2,
  boxShadow: vars.shadow.basic,
  minWidth: vars.minWidth.list,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.medium,
})

export const input = style({
  borderRadius: '10px',
  border: `1px solid ${vars.colors.selectedTab}`,
  padding: `${vars.spacing.medium} ${vars.spacing.big2}`,
  outline: 'none',
  fontSize: vars.fontSizing.T4,
  selectors: {
    '&:focus': {
      borderColor: vars.colors.main,
      boxShadow: `0 0 0 2px ${vars.colors.mainFadedBright}`,
    },
  },
})

export const actions = style({
  display: 'flex',
  gap: vars.spacing.medium,
})

const baseButton = {
  borderRadius: '10px',
  border: 'none',
  padding: `${vars.spacing.medium} ${vars.spacing.big2}`,
  cursor: 'pointer',
  fontWeight: 600,
} as const

export const submit = style({
  ...baseButton,
  backgroundColor: vars.colors.main,
  color: vars.colors.brightText,
})

export const cancel = style({
  ...baseButton,
  backgroundColor: 'transparent',
  color: vars.colors.secondaryDarkText,
  border: `1px solid ${vars.colors.selectedTab}`,
})
