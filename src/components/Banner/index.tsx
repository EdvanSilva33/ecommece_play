import { Imagen, Titulo, Precos } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'

const Banner = () => (
  <Imagen style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Titulo>Marvel&apos; Spider-Man: Miles Morales PS$ & PS5</Titulo>
      <Precos>
        De <s>R$ 250,00</s>
        <br />
        por apenas R$ 99,90
      </Precos>
    </div>
  </Imagen>
)
export default Banner
