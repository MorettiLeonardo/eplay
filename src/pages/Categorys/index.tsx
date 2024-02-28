import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulatorGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categorys = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRPGGamesQuery()
  const { data: simulatorGames } = useGetSimulatorGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && simulatorGames && sportGames) {
    return (
      <>
        <ProductsList
          games={rpgGames}
          title="RPG"
          background="black"
          id="rpg"
        />
        <ProductsList
          games={actionGames}
          title="Ação"
          background="gray"
          id="action"
        />
        <ProductsList
          games={fightGames}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProductsList
          games={sportGames}
          title="Esportes"
          background="gray"
          id="sport"
        />
        <ProductsList
          games={simulatorGames}
          title="Simulação"
          background="black"
          id="simulator"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categorys
