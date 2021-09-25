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
  height: '10vh',
  padding: '1vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  color: layoutColorTheme.black,
  background: layoutColorTheme.veryLight,
  fontSize: 'calc(12px + 1vw)',
})

export const footer = css({
  height: '20vh',
  padding: '2vw',
  display: 'flex',
  flexDirection: 'column',
  color: layoutColorTheme.black,
  background: layoutColorTheme.light,
  fontSize: 'calc(8px + 1vw)',
})