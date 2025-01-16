import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  preta: '#111',
  cinza: '#333',
  verde: '#10AC84',
  cinzaClaro: '#A4A4A4'
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
color:${cores.branca};

}
.container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
`
