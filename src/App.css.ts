import { createGlobalTheme, globalStyle, style } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  colors: {
    main: '#ffa726',
    mainDarker: '#f57c00',
    mainFaded: '#fff3e0',
    mainFadedBright: '#ffe0b2',
    primary: '#ffa726',
    primaryHover: '#f57c00',
    primaryText: '#212121',
    inverseText: '#ffffff',
    surface: '#ffffff',
    list: 'rgba(255, 255, 255, 0.92)',
    task: 'rgba(255, 255, 255, 0.86)',
    taskHover: 'rgba(255, 255, 255, 0.98)',
    brightText: '#ffffff',
    darkText: '#212121',
    secondaryDarkText: '#424242',
    secondaryDarkTextHover: '#616161',
    selectedTab: 'rgba(255, 255, 255, 0.4)',
    updateButton: '#81c784',
    deleteButton: '#e57373',
  },
  fontSizing: {
    T1: '32px',
    T2: '24px',
    T3: '20px',
    T4: '16px',
    T5: '14px',
    T6: '12px',
    P1: '12px',
  },
  spacing: {
    small: '5px',
    medium: '10px',
    big1: '20px',
    big2: '15px',
    xlarge: '30px',
    listSpacing: '30px',
  },
  font: {
    body: '"Noto Sans KR", Arial, sans-serif',
  },
  shadow: {
    basic: '4px 4px 10px rgba(0, 0, 0, 0.12)',
    deep: '0 14px 40px rgba(0, 0, 0, 0.14)',
  },
  minWidth: {
    list: '260px',
  },
})

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('body', {
  margin: 0,
  fontFamily: vars.font.body,
  backgroundColor: vars.colors.mainFaded,
  color: vars.colors.darkText,
})

globalStyle('button', {
  fontFamily: vars.font.body,
})

export const appContainer = style({
  display: 'grid',
  gridTemplateColumns: '280px 1fr',
  minHeight: '100vh',
  width: '100%',
  background: `linear-gradient(135deg, ${vars.colors.mainFaded}, ${vars.colors.mainFadedBright})`,
})

export const boardArea = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.big1,
  padding: `${vars.spacing.big1} ${vars.spacing.big1}`,
})

export const contentArea = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.big1,
  padding: `${vars.spacing.big1} ${vars.spacing.big2}`,
})
