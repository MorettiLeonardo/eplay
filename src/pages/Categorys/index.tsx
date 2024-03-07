import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulatorGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categorys = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRPGGamesQuery()
  const { data: simulatorGames, isLoading: isLoadingSimulator } =
    useGetSimulatorGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()

  return (
    <>
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRPG}
      />
      <ProductsList
        games={actionGames}
        title="Ação"
        background="gray"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={fightGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={sportGames}
        title="Esportes"
        background="gray"
        id="sport"
        isLoading={isLoadingSport}
      />
      <ProductsList
        games={simulatorGames}
        title="Simulação"
        background="black"
        id="simulator"
        isLoading={isLoadingSimulator}
      />
    </>
  )
}

export default Categorys
