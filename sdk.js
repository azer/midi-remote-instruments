var sdk = require('midi-sdk')('https://midijs.azer.io', ['acoustic_grand_piano',
                                                              'trumpet',
                                                              'acoustic_guitar_steel',
                                                              'electric_guitar_clean',
                                                              'taiko_drum',
                                                              'tinkle_bell']);
                                                              
sdk(function () {
  window.parent.postMessage({ midi: true, ready: true }, '*');
})
  
var defineInstrument = require('midi-instrument');
var domquery = require('domquery');
var afterTime = require('after-time');
var pubsub = require('pubsub');
var play = require('./play');

newMidiInstrument('piano', sdk, 0,  0);
newMidiInstrument('trumpet', sdk, 1, 56);
newMidiInstrument('guitar', sdk, 2, 25);
newMidiInstrument('electricGuitar', sdk, 3, 27);
newMidiInstrument('drum', sdk, 4, 116);
newMidiInstrument('bell', sdk, 5, 112);

window.addEventListener("message", receiveMessage, false);

window.dom = domquery;
window.play = play;
window.after = afterTime;

function newMidiInstrument (name) {
  var options = Array.prototype.slice.call(arguments, 1);
  var instrument = defineInstrument.apply(undefined, options);
  instrument.name = name;
  
  window[name] = instrument;
}

function receiveMessage (event) {
  var params = [];
  var method = window[event.data.method];
  
  var i = 0;
  while (event.data.params[i] != undefined) {
    params.push(event.data.params[i]);
    i++;
  }
  
  method.apply(undefined, params);
}
