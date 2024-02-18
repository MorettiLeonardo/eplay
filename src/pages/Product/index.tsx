import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

import Gallery from '../../components/Gallery'

import resident from '../../static/images/resident.png'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
          autem magnam blanditiis optio, eius totam officiis labore ab earum
          neque doloremque fugiat itaque veniam suscipit reprehenderit
          aspernatur, assumenda asperiores dolorum. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Ab laboriosam quam vero sequi omnis
          quaerat expedita debitis assumenda officia reprehenderit, quas illum
          ratione voluptas? Corporis animi minima dolorum? Aperiam, praesentium.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> PlayStation 5 <br />
          <b>Desenvolvedor:</b> Avalanche Software <br />
          <b>Editora:</b> Portkey Games, subsidiária da Warner Bros Interactive
          Entertainment . <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
          inglês, espanhol, francês, alemão, italiano, português, entre outros.
          As opções de áudio e legendas podem ser ajustadas nas configurações do
          jogo.
        </p>
      </Section>
      <Gallery name="jogo teste" defaultCover={resident} />
    </>
  )
}

export default Product
