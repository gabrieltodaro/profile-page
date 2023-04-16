import gabzPicture from '../assets/gabz-picture.jpg'
import '../styles/profile.css'

function ProfileComponent() {
  return (
    <div className="Profile-Page">
      <h1>Gabriel "Gabz" Todaro</h1>
      <div className="">
        <img className="Profile-Picture" src={gabzPicture} alt="Profile picture" />
      </div>
      <div className="About-Me">
        <h2>Olá, eu sou o Gabz!</h2>
        <p>Sou um desenvolvedor iOS há quase 10 anos e estou aprendendo novas coisas atualmente.</p>
        <p>
          Moro em Campinas há 5 anos, sou casado e estou à beira de ser pai pela primeira vez. A ansiedade está a mil!<br/>
          Nascido e criado no interior de São Paulo, a tecnologia móvel é a minha paixão e um dos motivos por eu batalhar e conseguir mudar de vida.
        </p>
        <p>
          Atualmente trabalho em uma empresa estadunidense chamada <a href='https://www.podium.com/' target="_blank">Podium</a>.<br/>
          Esta empresa é focada em ajudar as pequenas e médias empresas com problemas impactantes de seu negócio, como manter contato com seus clientes, receber seus pagamentos e manter salvo as informações dos mesmos.
        </p>
        <p>
          Também estou montando uma empresa para desenvolvimento de aplicativos e sites, chamada <a href='https://gapps.tech' target='_blank'>Gapps.Tech</a>.<br/>
          A intenção é entregar soluções que ajudem as pessoas a desfrutarem melhor de sua vida, gastando menos tempo em computadores e afins... ou somente sendo mais produtivo no tempo que necessitar.
        </p>
      </div>
    </div>
  )
}

export default ProfileComponent
