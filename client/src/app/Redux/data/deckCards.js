import { shuffle } from '../utils/utils'

const cards = ["npm", "css", 'reddit', 'steam', 'twitter', "html", "linkedin", "github", "apple", "android", "firefox", "git", "codepen", "stackoverflow", "chrome"];
  
// let deck = shuffle(cards.concat(cards));
let deck = cards.concat(cards);

deck = deck.map((c,i) => {
  return {icon:c,
   faceUp:false,
   matched:false,
   indx:i 
  }
})

export default deck;