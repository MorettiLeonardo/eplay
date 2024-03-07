import Tag from '../Tag'
import Button from '../Button'
import Loader from '../Loader'

import { parseToBRL } from '../../utils/index'
import { useGetFeatureGameQuery } from '../../services/api'

import * as S from './styles'

const Banner = () => {
  const { data: game } = useGetFeatureGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Image
      style={{
        backgroundImage: `url(${game.media.cover})`
      }}
    >
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            De <span>{parseToBRL(game.prices.old)}</span> <br />
            por apenas {parseToBRL(game.prices.current)}
          </S.Prices>
        </div>
        <Button
          type="link"
          to={`/produto/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner
