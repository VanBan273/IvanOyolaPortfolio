import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'


export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Iván</span>  <span></span>
        <span>Oyola</span>
      </a>
      <div>
        <p>
        Y que reciban de mí siempre, paz, mucha paz <img src={reactIcon} alt="React" /> Pero sobre todo mucho, mucho, mucho, mucho
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/ivanoyola/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/VanBan273"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/_ivanban_/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

       
      </div>
    </Container>
  )
}
