import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerFooter = styled.footer`
  background-color: ${cores.cinza};
  padding: 32px 0;
  font-size: 12px;
  p {
    text-align: center;
  }
`
export const SectionTitle = styled.h4`
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
`
export const Links = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 16px;
`
export const Link = styled.a`
  color: ${cores.cinzaClaro};
  text-decoration: none;
  margin-right: 8px;
`
export const FooterSection = styled.div`
  margin-bottom: 64px;
`
