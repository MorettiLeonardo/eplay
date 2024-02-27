import { Link } from 'react-router-dom'

import { HeaderBar, CartButton, LinkIten, Links } from './styles'
import logo from '../../static/images/logo.svg'
import carrinho from '../../static/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

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
        {items.length} - Produto(s) <img src={carrinho} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
