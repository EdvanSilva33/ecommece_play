import {
  ContainerFooter,
  FooterSection,
  Link,
  Links,
  SectionTitle
} from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <ContainerFooter>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link>RPG</Link>
          </li>
          <li>
            <Link>AÇÃO</Link>
          </li>
          <li>
            <Link>AVENTURA</Link>
          </li>
          <li>
            <Link>TERROR</Link>
          </li>
          <li>
            <Link>ESPORTE</Link>
          </li>
          <li>
            <Link>SIMULAÇÃO</Link>
          </li>
          <li>
            <Link>ESTRATÉGIA</Link>
          </li>
          <li>
            <Link>FPS</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>

        <Links>
          <li>
            <Link>NOVIDADES</Link>
          </li>
          <li>
            <Link>PROMOÇÕES</Link>
          </li>
          <li>
            <Link>EM BREVE</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear}copy; WarGame Todos direitos reservados</p>
    </div>
  </ContainerFooter>
)

export default Footer
