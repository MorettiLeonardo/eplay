import Section from '../Section'

import { Item, Items, Action, Modal, ModalContent } from './styles'

import zelda from '../../static/images/zelda.png'
import hogwarts from '../../static/images/fundo_hogwarts.svg'
import zoom from '../../static/images/zoom.svg'
import play from '../../static/images/play-button.svg'
import close from '../../static/images/close.svg'

type Props = {
  defaultCover: string
  name: string
}

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=he5tjUGxaq_RGBTP'
  }
]

const Gallery = ({ defaultCover, name }: Props) => {
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
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Ícone de fechar" />
          </header>
          <img src={hogwarts} alt="" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
