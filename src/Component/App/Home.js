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
        <h1>Bonjour et bienvenue sur notre simulateur de TVA pour les developpeurs</h1>
        <div id="side">
          <div id="dev">
            <h4>Vous êtes developpeurs et vous fournissez :</h4>
            <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Vous fournissez et hébergez des sites informatiques, la maintenance à distance de programmes et d'équipement</ul>
            <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Vous fournissez des logiciels et la mise à jour de ceux-ci</ul>
            <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Vous fournissez des images, des textes et des informations</ul>
            <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Vous fournissez du téléchargement de musique, des films et des jeux dématérialisés</ul>
          </div>
        </div>
        <h5>Vos prestations s'inscrivent donc dans les prestations de services fournies par voie électronique <ModalElectronic /></h5>
        
        <p>C’est parti !</p>
      </div>

      <div id="assujetti">
        <h2>Le preneur est il assujetti à la TVA ? <ModalAssujetti /></h2>
        <div className="select_container">
          <Link to='assujetti' ><button className='select'>Oui</button></Link>
          <Link to='non_assujetti' ><button className='select'>Non</button></Link>
        </div>
      </div>

    </div>
  )
}

export default Home