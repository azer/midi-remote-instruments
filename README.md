## midi-remote-instruments

MIDI instruments that you can play by sending messages remotely.

## Install

Clone the repo and run `bud` to build `dist`

## Usage

```html
<iframe src="midi-remote-instruments/dist/dist.html" />
<script type="text/javascript">
window.postMessage({ midi: true, instrument: 'piano', note: 'do', delay: 0.5, octave: 3 })
</script>
```

