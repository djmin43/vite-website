/** @jsx jsx */
import { css } from '@emotion/react'

const layoutColorTheme = {
  primary: '#ffa000',
  light: '#ffd149',
  dark: '#c67100',
  black: '#000000'
}

const basicLayoutRule = css({
  width: '100vw',
  height: '19vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
})

const header = css({
  basicLayoutRule,
  color: layoutColorTheme.black,
  background: layoutColorTheme.primary,
  fontSize: '20px',
})

const footer = css({
  basicLayoutRule,
  color: layoutColorTheme.black,
  background: layoutColorTheme.light,
  fontSize: '12px',
})