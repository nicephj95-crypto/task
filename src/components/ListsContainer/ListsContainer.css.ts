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

export const heading = style({
  margin: 0,
  fontSize: vars.fontSizing.T2,
  color: vars.colors.secondaryDarkText,
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
