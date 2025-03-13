//Arquivo de criação e configuração do rodapé da página.
import {
  Container,
  Copyright,
  FooterSection,
  Link,
  Links
} from './footer-styles'
import efoodLogo from '../../assets/images/efood-logo.png'
import instagramIcon from '../../assets/images/icones/instagram-icon.png'
import facebookIcon from '../../assets/images/icones/facebook-icon.png'
import twitterIcon from '../../assets/images/icones/twitter-icon.png'

//Const para controle de atualização do ano.
const currentYear = new Date().getFullYear()

//Const principal do rodapé.
const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <img src={efoodLogo} alt="Efood" />
        <Links>
          <li>
            <Link>
              <img src={instagramIcon} alt="Icone instagram" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={facebookIcon} alt="Icone facebook" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={twitterIcon} alt="Icone twitter" />
            </Link>
          </li>
        </Links>
        <Copyright>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
          {currentYear} - &copy; efood Todos os direitos reservados, página
          criada para fins de estudo. Criado por{' '}
          <a href="https://www.linkedin.com/in/andre-soares88/">André Soares</a>
          , veja mais projetos no meu{' '}
          <a href="https://github.com/AndreDG88">Github</a>.
        </Copyright>
      </FooterSection>
    </div>
  </Container>
)

//Exportações.
export default Footer
