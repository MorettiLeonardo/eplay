import { Image, Title, Prices } from './styles'

import bannerImg from '../../static/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Image
    style={{
      backgroundImage: `url(${bannerImg})`
    }}
  >
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Title>Marvel &apos; s Spider-man: Miles Morales PS4 & PS5</Title>
        <Prices>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,90
        </Prices>
      </div>
      <Button
        type="link"
        to="/produto"
        title="Clique aqui para aproveitar esta oferta"
      >
        Aproveitar
      </Button>
    </div>
  </Image>
)

export default Banner
