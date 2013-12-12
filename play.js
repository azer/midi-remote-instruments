var playUrl = require('play-url')().play;
var stopsAt;
var stopTimer;

module.exports = play;

function play () {
  if (arguments.length == 1 && typeof arguments[0] == 'string')
    return playUrl.apply(undefined, arguments);
    
  playInstrument.apply(undefined, arguments);
}

function playInstrument (instrument, note, delay, octave, velocity) {
  if (typeof instrument == 'string') {
    instrument = window[instrument];
  }

  octave || (octave = 3);
  instrument[note + octave](delay, velocity);
  
  window.parent.postMessage({
    midi: true,
    instrument: instrument.name,
    note: note,
    octave: octave,
    velocity: velocity,
    delay: delay
  }, '*');
  
  var endsAt = +(new Date) + ( delay * 1000 );

  if (stopsAt && stopsAt >= endsAt) return;
  
  stopsAt = endsAt;
  
  if (stopTimer != undefined) {
    clearTimeout(stopTimer);
    stopTimer = undefined;
  }
  
  stopTimer = setTimeout(function () {
    window.parent.postMessage({
      midi: true,
      stop: true
    }, '*');
  }, (delay * 1000) + 500);
}