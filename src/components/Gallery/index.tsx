import * as S from './styles'

import potter from '../../assets/images/potter/luta-potter.jpg'
import potterLuta from '../../assets/images/potter/luta_modal.png'
import potterLutando from '../../assets/images/potter/blockpotter.jpg'

import zoom from '../../assets/images/lopa.png'
import fechar from '../../assets/images/close.png'

import play from '../../assets/images/botao_play.png'
import Section from '../Section'
import { useState } from 'react'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: potterLutando
  },
  {
    type: 'image',
    url: potter
  },
  {
    type: 'image',
    url: potterLuta
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/qVgOzNgheMA?si=vOVOd22ccTsF3XKU&amp'
  }
]
type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [modalUrl, setModalUrl] = useState('')

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }
  return (
    <>
      <Section title="Galeria" background="black">
        <S.Items>
          {mock.map((media, index) => (
            <S.Item
              key={media.url}
              onClick={() => {
                setModalEstaAberto(true)
                setModalUrl(media.url)
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`midia ${index + 1} de ${name}`}
              />
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para visualiza midias"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modalEstaAberto ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} onClick={() => setModalEstaAberto(false)} />
          </header>
          <img src={modalUrl} alt="" />
        </S.ModalContent>
        <div className="overlay"></div>
      </S.Modal>
    </>
  )
}

export default Gallery
