import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import GlobalCss from './styles'

import RoutesConfig from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RoutesConfig />
      <Footer />
    </BrowserRouter>
  )
}

export default App
