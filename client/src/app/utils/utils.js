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

// http://stackoverflow.com/questions/7279567/how-do-i-pause-a-window-setinterval-in-javascript

export function RecurringTimer(callback, delay) {
  var timerId, start, remaining = delay;

  this.pause = function() {
      window.clearTimeout(timerId);
      remaining -= new Date() - start;
  };

  var resume = function() {
      start = new Date();
      timerId = window.setTimeout(function() {
          remaining = delay;
          resume();
          callback();
      }, remaining);
  };

  this.resume = resume;

  this.resume();
}


export function Timer(callback, delay) {
  var timerId, start, remaining = delay;

  this.pause = function() {
      window.clearTimeout(timerId);
      remaining -= new Date() - start;
  };

  this.resume = function() {
      start = new Date();
      window.clearTimeout(timerId);
      timerId = window.setTimeout(callback, remaining);
  };

  this.resume();
}

// var timer = new Timer(function() {
//   alert("Done!");
// }, 1000);

// timer.pause();
// // Do some stuff...
// timer.resume();