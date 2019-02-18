export function shuffle (array) {
  var m = array.length,
      t, i;
  while (m) {
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
  }
  return array;
}