import Tag from '../Tag'

import { Card, Description, Title } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Title>Nome do jogo</Title>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Description>descricao do jogo</Description>
  </Card>
)

export default Product
