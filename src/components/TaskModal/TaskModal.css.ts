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
  color: vars.colors.primaryText,
  borderRadius: '16px',
  width: 'min(560px, 100%)',
  padding: vars.spacing.xlarge,
  boxShadow: vars.shadow.deep,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.medium,
})

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: vars.spacing.small,
})

export const title = style({
  fontSize: vars.fontSizing.T1,
  fontWeight: 800,
  lineHeight: 1.3,
})

export const subtitle = style({
  fontSize: vars.fontSizing.T5,
  color: vars.colors.secondaryDarkText,
})

export const body = style({
  fontSize: vars.fontSizing.T4,
  lineHeight: 1.6,
  color: vars.colors.secondaryDarkText,
  whiteSpace: 'pre-line',
})

export const actions = style({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: vars.spacing.big1,
})

export const actionGroup = style({
  display: 'flex',
  gap: vars.spacing.medium,
})

export const closeButton = style({
  border: 'none',
  backgroundColor: vars.colors.primary,
  color: vars.colors.inverseText,
  padding: `${vars.spacing.small} ${vars.spacing.medium}`,
  borderRadius: '10px',
  cursor: 'pointer',
  fontWeight: 700,
  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.primaryHover,
    },
    '&:focus-visible': {
      outline: '3px solid rgba(0, 149, 255, 0.25)',
      outlineOffset: '2px',
    },
  },
})

export const ghostButton = style({
  border: `1px solid ${vars.colors.mainFadedBright}`,
  backgroundColor: 'transparent',
  color: vars.colors.secondaryDarkText,
  padding: `${vars.spacing.small} ${vars.spacing.medium}`,
  borderRadius: '10px',
  cursor: 'pointer',
  fontWeight: 700,
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
