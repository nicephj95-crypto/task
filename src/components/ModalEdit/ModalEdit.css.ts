import { style } from '@vanilla-extract/css'
import { vars } from '@/App.css'

export const backdrop = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.35)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: vars.spacing.xlarge,
  zIndex: 1000,
})

export const modal = style({
  backgroundColor: vars.colors.surface,
  borderRadius: '16px',
  width: 'min(640px, 100%)',
  padding: vars.spacing.xlarge,
  boxShadow: vars.shadow.deep,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.big2,
})

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: vars.spacing.medium,
})

export const title = style({
  margin: 0,
  fontSize: vars.fontSizing.T2,
  color: vars.colors.primaryText,
})

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.medium,
})

export const field = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.small,
})

export const label = style({
  fontSize: vars.fontSizing.T5,
  color: vars.colors.secondaryDarkText,
  fontWeight: 700,
})

const inputBase = {
  width: '100%',
  padding: `${vars.spacing.medium} ${vars.spacing.big2}`,
  borderRadius: '12px',
  border: `1px solid ${vars.colors.mainFadedBright}`,
  backgroundColor: '#fdfdfd',
  fontSize: vars.fontSizing.T4,
  selectors: {
    '&:focus-visible': {
      outline: `3px solid ${vars.colors.mainFaded}`,
      borderColor: vars.colors.main,
    },
  },
}

export const input = style({
  ...inputBase,
})

export const textarea = style({
  ...inputBase,
  minHeight: '120px',
  resize: 'vertical',
  lineHeight: 1.5,
})

export const helper = style({
  margin: 0,
  fontSize: vars.fontSizing.T6,
  color: vars.colors.secondaryDarkText,
})

export const actions = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: vars.spacing.medium,
})

export const secondaryButton = style({
  border: `1px solid ${vars.colors.mainFadedBright}`,
  backgroundColor: 'transparent',
  color: vars.colors.secondaryDarkText,
  padding: `${vars.spacing.small} ${vars.spacing.medium}`,
  borderRadius: '10px',
  fontWeight: 700,
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      borderColor: vars.colors.main,
      color: vars.colors.mainDarker,
    },
    '&:focus-visible': {
      outline: '3px solid rgba(0, 149, 255, 0.25)',
      outlineOffset: '2px',
    },
  },
})

export const primaryButton = style({
  border: 'none',
  backgroundColor: vars.colors.updateButton,
  color: vars.colors.inverseText,
  padding: `${vars.spacing.small} ${vars.spacing.big2}`,
  borderRadius: '10px',
  fontWeight: 800,
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      backgroundColor: '#6abf69',
    },
    '&:focus-visible': {
      outline: '3px solid rgba(0, 149, 255, 0.25)',
      outlineOffset: '2px',
    },
  },
})

export const error = style({
  color: vars.colors.deleteButton,
  fontSize: vars.fontSizing.T6,
  margin: 0,
})
