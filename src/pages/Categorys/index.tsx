import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../static/images/resident.png'
import diablo from '../../static/images/diablo.png'
import zelda from '../../static/images/zelda.png'
import starWars from '../../static/images/star_wars.png'

const promotions: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Resident Evil 4 .... .... .... .... ....',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'RPG',
    description: 'Diablo 4 .... .... .... .... ....',
    title: 'Diablo 4',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: diablo
  },
  {
    id: 3,
    category: 'Ação',
    description: 'Resident Evil 4 .... .... .... .... ....',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 4,
    category: 'RPG',
    description: 'Diablo 4 .... .... .... .... ....',
    title: 'Diablo 4',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: diablo
  }
]

const comingSoon: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description: 'Zelda .... .... .... .... ....',
    title: 'Zelda',
    system: 'Nitendo Switch',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 6,
    category: 'RPG',
    description: 'Star Wars .... .... .... .... ....',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['13/08'],
    image: starWars
  },
  {
    id: 7,
    category: 'RPG',
    description: 'Zelda .... .... .... .... ....',
    title: 'Zelda',
    system: 'Nitendo Switch',
    infos: ['01/12'],
    image: zelda
  },
  {
    id: 8,
    category: 'RPG',
    description: 'Star Wars .... .... .... .... ....',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['31/01'],
    image: starWars
  }
]

const Categorys = () => (
  <>
    <ProductsList games={promotions} title="RPG" background="gray" />
    <ProductsList games={comingSoon} title="Ação" background="black" />
    <ProductsList games={promotions} title="Aventura" background="gray" />
    <ProductsList games={comingSoon} title="FPS" background="black" />
  </>
)

export default Categorys
