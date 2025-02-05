import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

import potter from '../../assets/images/potter/potter_alado.jpg'
import Gallery from '../../components/Gallery'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title={'Sobre o jogo'} background={'black'}>
        <p>
          Hogwarts Legacy é um jogo de ação e RPG imersivo e de mundo aberto,
          ambientado no primeiro mundo apresentado nos livros da série Harry
          Potter. Embarque em uma jornada por locais familiares e novos enquanto
          explora e descobre criaturas mágicas, personaliza seu personagem e
          cria poções, domina feitiços, melhora talentos e se torna o bruxo que
          você sempre quis ser. Viva na Hogwarts do século XIX. Seu personagem é
          um estudante que possui a chave para um segredo antigo, o qual ameaça
          destroçar o mundo bruxo. Descubra a sensação de viver em Hogwarts
          enquanto faz aliados, enfrenta bruxos das trevas e decide o destino do
          mundo bruxo. Você decide seu legado. Viva o inesperado
        </p>
      </Section>

      <Section title={'Mais Detalhes'} background={'gray'}>
        <p>
          <b>Plataforma: </b> PS5
          <br />
          <b>Lançamento: </b>
          5/06/2024
          <br />
          <b>Distribuidora: </b>
          Warner Bros. Interactive
          <br />
          <b>Gêneros: </b> Original
          <br />
          <br />
          <p>
            É preciso ter uma conta para usar os recursos online, que estão
            sujeitos aos termos de serviço e à política de privacidade aplicável{' '}
            <b>
              playstationnetwork.com/terms-of-service e
              playstationnetwork.com/privacy-policy.
            </b>{' '}
            Software sujeito à licença e à garantia limitada
            us.playstation.com/softwarelicense/br. Você pode baixar esse
            conteúdo e reproduzi-lo no console PS5 principal associado à sua
            conta pela configuração “Compartilhamento do console e Jogo offline”
            e em outros consoles PS5 ao fazer login com essa conta.
          </p>
        </p>
      </Section>
      <Gallery defaultCover={potter} name="jogo teste" />
    </>
  )
}

export default Product
