import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Desenvolvedor Front-End altamente motivado e apaixonado por criar
      experiências de usuário excepcionais. <br /> Com uma sólida formação no
      desenvolvimento de web sites.
    </Paragrafo>
    <GithubSecao>
      {/* <img src="https://github-readme-stats.vercel.app/api?username=Deiveas&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" /> */}
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Deiveas&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
