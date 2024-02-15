import { Link } from 'react-router-dom'

import { HeaderBar, LinkCart, LinkIten, Links } from './styles'
import logo from '../../static/images/logo.svg'
import carrinho from '../../static/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to={'/'}>
        <img src={logo} alt="EPLAY" />
      </Link>
      <nav>
        <Links>
          <LinkIten>
            <Link to={'/categorias'}>Categorias</Link>
          </LinkIten>
          <LinkIten>
            <a href="#">Novidades</a>
          </LinkIten>
          <LinkIten>
            <a href="#">Promoções</a>
          </LinkIten>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - Produto(s) <img src={carrinho} alt="Carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
