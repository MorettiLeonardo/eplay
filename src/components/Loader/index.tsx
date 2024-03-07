import { PacmanLoader } from 'react-spinners'

import { colors } from '../../styles'

import { Container } from './styles'

const Loader = () => (
  <Container>
    <PacmanLoader color={colors.green} />
  </Container>
)

export default Loader
