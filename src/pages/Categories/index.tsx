import Game from '../../models/Game'
import ProductsList from '../../components/ProductsList'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import god from '../../assets/images/god_of_war.png'
import star from '../../assets/images/star_wars.png'
import spider from '../../assets/images/spider_man2.png'
import assassino from '../../assets/images/assassin-creed.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'jogo de ação e terror muito bom para jogar sozinho',
    image: resident,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Residente Evil 4'
  },
  {
    id: 2,
    category: 'Ação',
    description: 'jogo de ação e terror muito bom para jogar sozinho',
    image: star,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Residente Evil 4'
  },
  {
    id: 3,
    category: 'Terror',
    description: 'jogo de ação e terror muito bom para jogar sozinho',
    image: diablo,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'DiABLO '
  },
  {
    id: 4,
    category: 'Aventura',
    description: 'jogo de ação e terror muito bom para jogar sozinho',
    image: god,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'GOD of WAR 4'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description: 'jogo de ação e terror muito bom para jogar sozinho',
    image: zelda,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Residente Evil 4'
  },
  {
    id: 6,
    category: 'Ação',
    description: 'jogo de ação e terror muito bom para jogar sozinho',
    image: spider,
    infos: ['10/08'],
    system: 'Windows',
    title: 'Spider Man 2'
  },
  {
    id: 7,
    category: 'Ação',
    description: 'jogo de ação e terror muito bom para jogar sozinho',
    image: spider,
    infos: ['10/08'],
    system: 'Windows',
    title: 'Spider Man 2'
  },
  {
    id: 8,
    category: 'Ação',
    description: 'jogo de ação e terror muito bom para jogar sozinho',
    image: assassino,
    infos: ['11/08'],
    system: 'Android',
    title: 'Assassins Creediv'
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="AÇÃO" background="black" />
    <ProductsList games={promocoes} title="AVENTURA" background="gray" />
    <ProductsList games={emBreve} title="TERROR" background="black" />
  </>
)

export default Categories
