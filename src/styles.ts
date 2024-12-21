import { createGlobalStyle } from 'styled-components'

const cores = {
  branca: '#fff',
  preta: '#111',
  cinza: '#EEEE',
  verde: '#10AC84'
}
export const GlobalCss = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: Roboto, sans-serif;
}
body{
background-color:${cores.preta};
color:${cores.branca}

}
`
