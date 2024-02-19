import ProductsList from '../../components/ProductsList'

import resident from '../../static/images/resident.png'
import diablo from '../../static/images/diablo.png'
import zelda from '../../static/images/zelda.png'
import starWars from '../../static/images/star_wars.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

const Categorys = () => {
  const [actionGames, setActionGames] = useState<Game[]>([])
  const [sportsGames, setSportsGames] = useState<Game[]>([])
  const [simulatorGames, setSimulatorGames] = useState<Game[]>([])
  const [rpgGames, setRpgGames] = useState<Game[]>([])
  const [fightGames, setFightGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setActionGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setSportsGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setSimulatorGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setRpgGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setFightGames(res))
  }, [])

  return (
    <>
      <ProductsList games={rpgGames} title="RPG" background="black" />
      <ProductsList games={actionGames} title="Ação" background="gray" />
      <ProductsList games={fightGames} title="Luta" background="black" />
      <ProductsList games={sportsGames} title="Esportes" background="gray" />
      <ProductsList
        games={simulatorGames}
        title="Simulação"
        background="black"
      />
    </>
  )
}

export default Categorys
