import { style } from '@vanilla-extract/css'
import { vars } from '@/App.css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.big1,
})

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing.big1,
})

export const headerActions = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.medium,
  flexWrap: 'wrap',
})

export const heading = style({
  margin: 0,
  fontSize: vars.fontSizing.T2,
  color: vars.colors.secondaryDarkText,
})

export const logButton = style({
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

export const listsRow = style({
  display: 'flex',
  gap: vars.spacing.listSpacing,
  alignItems: 'flex-start',
  overflowX: 'auto',
  paddingBottom: vars.spacing.big2,
})

export const emptyText = style({
  fontSize: vars.fontSizing.T4,
  color: vars.colors.secondaryDarkText,
})
