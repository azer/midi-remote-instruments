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

