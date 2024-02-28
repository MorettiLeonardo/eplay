import { Game } from '../../pages/Home'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id?: string
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const ProductsList = ({ background, title, games, id }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formatPrice(game.prices.current))
    }

    return tags
  }

  return (
    <Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                title={game.name}
                description={game.description}
                category={game.details.category}
                image={game.media.thumbnail}
                infos={getGameTags(game)}
                system={game.details.system}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
