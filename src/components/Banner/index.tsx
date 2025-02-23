import { Imagen, Titulo, Precos } from './styles'

import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home/index'
import { useEffect, useState } from 'react'
import { formataPreco } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game>()
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])
  if (!game) {
    return <h3 className="container">Carregando...</h3>
  }

  return (
    <Imagen style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <s>{formataPreco(game.prices.old)}</s>
            <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to="/produto"
          title=" Vai deixar de aproveitar oferta de Hoje ?????"
        >
          Aproveitar
        </Button>
      </div>
    </Imagen>
  )
}
export default Banner
