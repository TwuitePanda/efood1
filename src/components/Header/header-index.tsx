//Arquivo de criação e configuração do cabeçalho da página.
import { Link } from 'react-router-dom'
import { Headerbar, Slogan } from './header-styles'
import effodLogo from '../../assets/images/efood-logo.png'
import background from '../../assets/images/background.png'

//Const principal do Cabeçalho.
const Header = () => (
  <Headerbar style={{ backgroundImage: `url(${background})` }}>
    <div className="container">
      {/* logo */}
      <Link to="/">
        <img src={effodLogo} alt="Efood" />
      </Link>

      {/* links de menu */}
      <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
    </div>
  </Headerbar>
)

//Exportações
export default Header
