import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Banner from '../App/Banner';

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'

const NonAssujetti = () => {
  let history = useHistory()
  return ( 
    <div className="wrap">
      <Banner />
      <div>
      <Link to='/'>
        <button onClick={() =>history.goBack()} className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>
      </Link>

        <div className="breadcrumbs">
          <p><img src={Check} alt="fleche grise"/>Le preneur n'est pas assujetti à la TVA</p>
        </div>

        <h4>Le preneur est il établi en France ou dans un autre état de l'Union Européenne ?</h4>

        <div className="select_container">
          <Link to='/France_non_assujetti'><button className='select'>Oui</button></Link>
          <Link to='/hors_France_non_assujetti'><button className='select'>Non</button></Link>
        </div>

      </div>
    </div>
);
}

export default NonAssujetti;