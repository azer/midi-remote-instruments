## midi-remote-instruments

MIDI instruments that you can play by sending messages remotely.

## Install

```bash
$ git clone git@github.com:azer/midi-remote-instruments.git
$ cd midi-remote-instruments
$ npm install
$ bud
```

## Usage

```html
<iframe src="midi-remote-instruments/dist/dist.html" />
<script type="text/javascript">
window.postMessage({ midi: true, instrument: 'piano', note: 'do', delay: 0.5, octave: 3 })
</script>
```

## Reference

Each message consist of following parameters:

* `midi`: Set is at always true. Required.
* `instrument`: Any available instrument object. Example values: piano, guitar, drum. Required.
* `note`: Either English or Neo-Latin Note. Example values: 'do', 'mi', 'a', 'c#'. Required.
* `delay`: Delay playing the sound in given seconds. Default is `0`. 
* `octave`: The value to specify octave of the sound. Default is `3`.
* `velocity`: How hard the note hits. Default is 127.

Instruments:

* piano
* trumpet
* guitar
* electricGuitar
* drum
* after

