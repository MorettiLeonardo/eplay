import { Link } from 'react-router-dom'

import {
  HeaderBar,
  CartButton,
  LinkIten,
  Links,
  Hamburguer,
  HeaderRow,
  NavMobile
} from './styles'
import logo from '../../static/images/logo.svg'
import carrinho from '../../static/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
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
                <Link to="/#on-sale">Promoções</Link>
              </LinkIten>
            </Links>
          </nav>
        </div>
        <CartButton onClick={openCart}>
          {items.length} <span>- Produto(s)</span>
          <img src={carrinho} alt="Carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkIten>
            <Link to={'/categorias'}>Categorias</Link>
          </LinkIten>
          <LinkIten>
            <a href="#">Novidades</a>
          </LinkIten>
          <LinkIten>
            <Link to="/#on-sale">Promoções</Link>
          </LinkIten>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
