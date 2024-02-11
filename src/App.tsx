import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import GlobalCss from './styles'

import RoutesConfig from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RoutesConfig />
    </BrowserRouter>
  )
}

export default App
