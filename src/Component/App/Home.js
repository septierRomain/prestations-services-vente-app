import React from 'react';
import { Link } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'
import Arrow from '../../Assets/arrow.svg'

import Banner from '../App/Banner';
import ModalAssujetti from '../Modal/assujetti';
import ModalElectronic from '../Modal/electronic';

function Home() {
  return(
    <div id="welcome" className='wrap'>
      <Banner />

      <div id="welcome_banner">
        <h1>Bonjour et bienvenue sur notre simulateur de TVA pour les prestations de services</h1> <hr />
        <div id="side">
          <div id="dev" className='aside'>
            <h4>Vous êtes developpeurs et vous fournissez :</h4>
            <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Vous fournissez et hébergez des sites informatiques, la maintenance à distance de programmes et d'équipement</ul>
            <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Vous fournissez des logiciels et la mise à jour de ceux-ci</ul>
            <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Vous fournissez des images, des textes et des informations</ul>
            <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Vous fournissez du téléchargement de musique, des films et des jeux dématérialisés</ul>
          </div>

          <div id="vertical"> </div>

          <div id="learning" className='aside'>
            <h4>Vous faites de l'enseignement à distance :</h4>
            <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Vous diffusez en ligne des vidéos de cours (peinture, langue, sport, marketing...).
            Ces vidéos sont préenregistrées et diffusées de manière uniforme à vos acheteurs via des services Internet (votre site ou des plateformes).</ul>
            <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />A l'exclusion des prestations d'enseignements expressément exonérées de TVA</ul>
            <p>Si vous ne dispensez pas vos cours de manière automatisée, mais de manière individualisée, ce simulateur de TVA ne correspond pas à votre activité. Retrouvez parmi nos simulateurs, celui correspondant à votre activité : <a href="https://simulateur-prestations-services.netlify.app/">C'est par ici !</a></p>
          </div>
        </div>
        <hr />
        <h5>Vos prestations s'inscrivent donc dans les prestations de services fournies par voie électronique <ModalElectronic /></h5>
        
        <p>C’est parti !</p>
      </div>

      <div id="assujetti">
        <h2>Le preneur est il assujetti à la TVA ? <ModalAssujetti /></h2>
        <div className="select_container">
          <Link to='Assujetti' ><button className='select'>Oui</button></Link>
          <Link to='non_assujetti' ><button className='select'>Non</button></Link>
        </div>
      </div>

    </div>
  )
}

export default Home