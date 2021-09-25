/** @jsx jsx */
import { css } from '@emotion/react'

const layoutColorTheme = {
  primary: '#ffa000',
  light: '#ffd149',
  dark: '#c67100',
  black: '#000000'
}

export const basicLayout = css({
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center'
})

export const header = css({
  color: layoutColorTheme.black,
  background: layoutColorTheme.primary,
  height: '15vh',
  fontSize: '20px',
})

export const footer = css({
  color: layoutColorTheme.black,
  background: layoutColorTheme.light,
  height: '20vh',
  fontSize: '12px',
})