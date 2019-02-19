import { VALIDATE_MATCH, FLIP_CARD, GET_DECK, GET_ONLINE_DECK } from '../data/types';
import cards from '../data/deckCards';
let count = 0;

export const getDeck = () => dispatch => {
  return dispatch({ type: GET_DECK, payload: { deck: cards } })
}

export const getOnlineDeck = () => dispatch => {
  return dispatch({ type: GET_ONLINE_DECK, payload: cards })
}

export const flipCard = (card, prevState) => dispatch => {
  if (card.match || prevState.flipped.indx === card.indx || count > 2) return;
  count++;
  if (count <= 2) {
    return dispatch({
      type: FLIP_CARD,
      payload: flipCards(prevState, card,
        {
          faceUp: true,
          match: false,
          flipped: !prevState.flipped.indx ? { ...card } : {}
        })
    })
  }
}

export const isAMatch = (card, prevState) => dispatch => {
  if (count != 2) return;
  const match = card.icon === prevState.flipped.icon;
  setTimeout(() => {
    count = 0;
    return dispatch({
      type: VALIDATE_MATCH,
      payload: validateMatch(prevState, card,
        {
          match,
          flipped: {},
          faceUp: match
        }, true)
    })
  }, match ? 200 : 400); //delay to see 
}









// 
const flipCards = (prevState, card, { faceUp, match, flipped }) => {
  return {
    deck: prevState.deck.map((crd, i) => {
      if (i === card.indx) {
        return { ...crd, faceUp, match }
      }
      return crd
    }),
    flipped,
    match: false
  }
}

const validateMatch = (prevState, card, { faceUp, match, flipped }) => {
  const pairs = match ? prevState.pairs + 1 : prevState.pairs;
  const winner = pairs === prevState.deck.length / 2;
  console.log("RED", prevState);
  const turns = prevState.turns + 1;
  return {
    deck: prevState.deck.map((crd, i) => {
      if (i === card.indx || prevState.flipped.indx === i) {
        return { ...crd, faceUp, match }
      }
      return crd
    }),
    flipped,
    turns,
    match,
    pairs,
    winner
  }
}