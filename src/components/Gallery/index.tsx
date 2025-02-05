import * as S from './styles'

import potter from '../../assets/images/potter/luta-potter.jpg'
import potterLuta from '../../assets/images/potter/luta_modal.png'
import potterLutando from '../../assets/images/potter/blockpotter.jpg'

import zoom from '../../assets/images/lopa.png'
import fechar from '../../assets/images/close.png'

import play from '../../assets/images/botao_play.png'
import Section from '../Section'
import { useState } from 'react'

interface GalleryItem {
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

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }
  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <S.Items>
          {mock.map((media, index) => (
            <S.Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`media ${index + 1} de ${name}`}
              />
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para visualiza medias"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modal.isVisible ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              alt="Icone fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="image" />
          ) : (
            <iframe
              src={encodeURI(modal.url)}
              title="YouTube video"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </S.Modal>
    </>
  )
}

export default Gallery
