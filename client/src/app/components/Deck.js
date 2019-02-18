import React, { Component } from 'react'
import Card from './Card'
// import { shuffle } from '../utils/utils'
import cards from './deckCards'

class Deck extends Component {
  constructor() {
    super()
    this.count = 0;
    this.state = {
      deck: cards,
      flipped: {}
    }
  }

  flipCards = (card, card2, { faceUp, matched, flipped  }) => {
    this.setState((prevState) => ({
      deck: prevState.deck.map((crd, i) => {
        if (i === card.indx || card2 && card2.indx === i)
          return { ...crd, faceUp, matched }
        return crd
      }),
      flipped
    }))
  }

  validate = (card,flipped) => {
    if (this.count < 2) return;
    const match = card.icon === flipped.icon;
    setTimeout(() => {
      this.count = 0;
     this.flipCards(card, flipped, {
        faceUp: match,
        matched: match,
        flipped: {}
      });
    }, match ? 100 : 400);
  }

  onClick(card) {
    const { flipped } = this.state
    if (card.matched ||
      flipped.indx === card.indx
      || this.count++ >= 2) return;

    if (this.count < 3) {
      this.validate(card,flipped);
      return this.flipCards(card, false, {
        faceUp: true,
        matched: false,
        flipped: !flipped.indx
        ? { ...card } : {}
      });
    }
  }

  render() {
    const { deck } = this.state;
    console.log(this.state);
    return (
      <div className='mPad'>
        {
          deck.map((crd, i, r) => {
            return <Card key={i} card={crd}
              onClick={this.onClick.bind(this, crd)} />
          })
        }
      </div>
    )
  }
}

export default Deck;