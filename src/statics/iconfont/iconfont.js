import { createGlobalStyle } from 'styled-components'

export const IconfontStyle = createGlobalStyle`
@font-face {
  font-family: 'iconfont';  /* Project id 2814590 */
  src: url('//at.alicdn.com/t/c/font_2814590_luua9l07zmc.woff2?t=1691198997108') format('woff2'),
       url('//at.alicdn.com/t/c/font_2814590_luua9l07zmc.woff?t=1691198997108') format('woff'),
       url('//at.alicdn.com/t/c/font_2814590_luua9l07zmc.ttf?t=1691198997108') format('truetype');
}

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`


