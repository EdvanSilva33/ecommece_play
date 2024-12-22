import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-botton: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
    list-style: none;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
  text-decoration: none;
`

export const LinkItem = styled.li`
  margin-right: 16px;
  list-style:none;
  img {
`

export const LinkCart = styled.a`
  display: flex;
  
    margin-left: 16px;
  }
`
