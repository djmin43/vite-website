/** @jsx jsx */
import { css } from '@emotion/react'

const layoutColorTheme = {
  primary: '#ffa000',
  light: '#ffd149',
  veryLight: '#fff9c4',
  dark: '#c67100',
  black: '#000000'
}

export const basicLayout = css({
  width: '100vw',
  textAlign: 'center'
})

export const header = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  color: layoutColorTheme.black,
  background: layoutColorTheme.veryLight,
  height: '10vh',
  fontSize: 'calc(12px + 1vw)',
  padding: '0 2vw 1vw 2vw'
})

export const footer = css({
  display: 'flex',
  flexDirection: 'column',
  color: layoutColorTheme.black,
  background: layoutColorTheme.light,
  height: '20vh',
  fontSize: '12px',
  paddingTop: '2vw',
  
})