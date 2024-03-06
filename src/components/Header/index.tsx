import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import * as S from './styles'
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
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to={'/'}>
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <S.Links>
              <S.LinkIten>
                <Link
                  title="Clique aqui para acessar a página de Categorias"
                  to={'/categorias'}
                >
                  Categorias
                </Link>
              </S.LinkIten>
              <S.LinkIten>
                <HashLink
                  title="Clique aqui para acessar a seção de Em breve"
                  to={'/#comming-soon'}
                >
                  Em breve
                </HashLink>
              </S.LinkIten>
              <S.LinkIten>
                <HashLink
                  title="Clique aqui para acessar a seção de Promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </S.LinkIten>
            </S.Links>
          </nav>
        </div>
        <S.CartButton onClick={openCart}>
          {items.length} <span>- Produto(s)</span>
          <img src={carrinho} alt="Carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkIten>
            <Link
              title="Clique aqui para acessar a página de Categorias"
              to={'/categorias'}
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.LinkIten>
          <S.LinkIten>
            <HashLink
              title="Clique aqui para acessar a seção de Em breve"
              to={'/#comming-soon'}
              onClick={() => setIsMenuOpen(false)}
            >
              Em breve
            </HashLink>
          </S.LinkIten>
          <S.LinkIten>
            <HashLink
              title="Clique aqui para acessar a seção de Promoções"
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </S.LinkIten>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
