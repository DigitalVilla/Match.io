import { VALIDATE_MATCH, FLIP_CARD, GET_DECK, GET_ONLINE_DECK } from '../data/types';

const initialState = {
  deck: [],
  flipped: {},
  pairs: 0,
  turns: 0,
  winner: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FLIP_CARD:
      return {
        ...state,
        flipped: action.payload.flipped,
        deck: action.payload.deck
      };

    case VALIDATE_MATCH:
      return {
        ...state,
        turns: action.payload.turns,
        flipped: action.payload.flipped,
        deck: action.payload.deck,
        pairs: action.payload.pairs,
        winner: action.payload.winner
      };

    case GET_DECK:
    case GET_ONLINE_DECK:
      return {
        ...state,
        deck: action.payload.deck,
        flipped: {},
        pairs: 0,
        turns: 0,
        winner: false
      };

    default:
      return state;
  }
}