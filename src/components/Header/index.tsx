import { HeaderBar, LinkCart, LinkIten, Links } from './style'

import logo from '../../static/images/logo.svg'
import carrinho from '../../static/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="EPLAY" />
      <nav>
        <Links>
          <LinkIten>
            <a href="#">Categorias</a>
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
