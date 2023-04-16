import gappsLogo from '../assets/gapps_logo.png'
import githubLogo from '../assets/github-logo.svg'
import twitterLogo from '../assets/twitter-logo.svg'
import instagramLogo from '../assets/instagram-logo.svg'
import '../styles/contact.css'

function ContactComponent() {
    return (
      <div className="Contact-Component">  
        <p className="be-in-touch">
          Veja meus projetos e entre em contato!
        </p>
        <div>
          <a href="https://gapps.tech" target="_blank">
            <img src={gappsLogo} className="logo" alt="Gapps logo" />
          </a>
          <a href="https://twitter.com/gabztodaro" target="_blank">
            <img src={twitterLogo} className="logo" alt="Twitter logo" />
          </a>
          <a href="https://instagram.com/gabztodaro" target="_blank">
            <img src={instagramLogo} className="logo" alt="Instagram logo" />
          </a>
          <a href="https://github.com/gabrieltodaro" target="_blank">
            <img src={githubLogo} className="logo" alt="GitHub Logo" />
          </a>
        </div>
      </div>
    )
  }
  
  export default ContactComponent