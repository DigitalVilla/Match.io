import React from 'react'
import { SVG } from '../components/Icon'
import logo from '../../img/villa.png'
import classnames from 'classnames'

const Card = ({card, onClick, winner}) => {
  return (
    <div onClick= {onClick}className="mCard">
      <div className={classnames("mCard__side mCard__side--back", {
          "mCard__side--back-active": card.faceUp
        })}>
        <div>
          <img width='100%' src={logo} alt="VillaLogo" />
        </div>
      </div>
      <div className={classnames("mCard__side mCard__side--front", {
          "mCard__side--front-active": card.faceUp,
          "mCard__side--front-matched": card.match,
          "mCard__side--front-winner": winner
        })}>
        <div>
          <SVG icon={card.icon} />
        </div>
      </div>
    </div >
  )
}

export default Card;