import styled from 'styled-components'
import { cores } from '../../styles'

export const Items = styled.ul`
  display: flex;
  justify-content: center;
`
export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.5s ease;
`

export const Item = styled.li`
  list-style: none;
  margin-right: 16px;
  position: relative;
  img {
    border: 2px solid ${cores.branca};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
      img {
        max-width: 40px;
        max-height: 40px;
        border: 0;
      }
    }
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;
  &.visivel {
    display: flex;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;
  z-index: 1;
  header {
    display: flex;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    h4 {
      font-size: 18px;
      font-weight: bold;
    }
  }
  img,
  iframe {
    display: block;
    max-width: 100%;
  }
  iframe {
    width: 100%;
    height: 480px;
  }
`
