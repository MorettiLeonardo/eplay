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
        <ProductsList games={rpgGames} title="RPG" background="black" />
        <ProductsList games={actionGames} title="Ação" background="gray" />
        <ProductsList games={fightGames} title="Luta" background="black" />
        <ProductsList games={sportGames} title="Esportes" background="gray" />
        <ProductsList
          games={simulatorGames}
          title="Simulação"
          background="black"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categorys
