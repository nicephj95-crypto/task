import { style } from '@vanilla-extract/css'
import { vars } from '@/App.css'

const base = {
  border: 'none',
  borderRadius: '12px',
  padding: `${vars.spacing.medium} ${vars.spacing.big2}`,
  cursor: 'pointer',
  fontWeight: 600,
  transition: 'transform 0.1s ease, box-shadow 0.2s ease',
  selectors: {
    '&:hover': {
      transform: 'translateY(-1px)',
    },
    '&:active': {
      transform: 'translateY(0)',
    },
  },
} as const

export const button = style({
  ...base,
  backgroundColor: vars.colors.main,
  color: vars.colors.brightText,
  boxShadow: vars.shadow.basic,
})

export const ghost = style({
  ...base,
  backgroundColor: 'transparent',
  color: vars.colors.secondaryDarkText,
  border: `1px dashed ${vars.colors.selectedTab}`,
})
