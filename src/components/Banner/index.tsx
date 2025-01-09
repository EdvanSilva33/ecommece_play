import { Imagen, Titulo, Precos } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Imagen style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Titulo>Marvel&apos; Spider-Man: Miles Morales PS$ & PS5</Titulo>
        <Precos>
          De <s>R$ 250,00</s>
          <br />
          por apenas R$ 99,90
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
export default Banner
