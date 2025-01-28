import bannerHero from '../../assets/images/fundo_hogwarts.png'
import { Banner, Infos } from './styles'

import Tag from '../Tag/index'
import Button from '../Button'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerHero})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 250,00</span>
          por R$ 190,00
        </p>
        <Button
          type="button"
          title="Clique aqui para adicionar este jogo ao carrinho"
          variant="primary"
        >
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
