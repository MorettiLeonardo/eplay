import { Link } from 'react-router-dom'

import { HeaderBar, CartButton, LinkIten, Links } from './styles'
import logo from '../../static/images/logo.svg'
import carrinho from '../../static/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
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
      <CartButton onClick={openCart}>
        0 - Produto(s) <img src={carrinho} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
