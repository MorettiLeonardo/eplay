import { Image, Title, Prices } from './style'

import bannerImg from '../../static/images/banner-homem-aranha.png'

const Banner = () => (
  <Image
    style={{
      backgroundImage: `url(${bannerImg})`
    }}
  >
    <div className="container">
      <Title>Marvel &apos; s Spider-man: Miles Morales PS4 & PS5</Title>
      <Prices>
        De <span>R$ 250,00</span> <br />
        por apenas R$ 99,90
      </Prices>
    </div>
  </Image>
)

export default Banner
