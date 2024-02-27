import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store'

import Header from './components/Header'
import GlobalCss from './styles'

import RoutesConfig from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <RoutesConfig />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
