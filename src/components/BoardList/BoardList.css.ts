import { style } from '@vanilla-extract/css'
import { vars } from '@/App.css'

export const boardCard = style({
  backgroundColor: vars.colors.list,
  borderRadius: '16px',
  boxShadow: vars.shadow.basic,
  padding: vars.spacing.big1,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.big2,
  minHeight: '100%',
})

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing.medium,
})

export const title = style({
  margin: 0,
  fontSize: vars.fontSizing.T2,
  color: vars.colors.mainDarker,
})

export const actions = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: vars.spacing.medium,
  flexWrap: 'wrap',
})

export const boardList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.small,
})

export const boardRow = style({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: vars.spacing.small,
  alignItems: 'center',
})

export const boardItem = style({
  border: 'none',
  textAlign: 'left',
  padding: `${vars.spacing.medium} ${vars.spacing.big1}`,
  borderRadius: '12px',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  color: vars.colors.secondaryDarkText,
  transition: 'background-color 0.2s ease, transform 0.1s ease',
  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.selectedTab,
      transform: 'translateY(-1px)',
    },
  },
})

export const activeBoard = style({
  backgroundColor: vars.colors.main,
  color: vars.colors.brightText,
  fontWeight: 700,
})

export const deleteButton = style({
  border: 'none',
  padding: `${vars.spacing.small} ${vars.spacing.medium}`,
  borderRadius: '10px',
  backgroundColor: vars.colors.deleteButton,
  color: vars.colors.brightText,
  cursor: 'pointer',
  fontWeight: 700,
  selectors: {
    '&:hover': {
      backgroundColor: '#ef5350',
    },
    '&:focus-visible': {
      outline: '3px solid rgba(0, 149, 255, 0.25)',
      outlineOffset: '2px',
    },
  },
})
