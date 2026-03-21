# Pure Data Keyword Reference

A reference for objects and commands used in Pd patches.

## Basic Operations

| Operation | Shortcut |
|-----------|----------|
| Place an object | `Cmd (Ctrl) + 1` |
| Place a message | `Cmd (Ctrl) + 2` |
| Place a number box | `Cmd (Ctrl) + 3` |
| Place a symbol box | `Cmd (Ctrl) + 4` |
| Place a comment | `Cmd (Ctrl) + 5` |
| Toggle edit/run mode | `Cmd (Ctrl) + E` |
| Zoom in | `Cmd (Ctrl) + Shift + ;` |
| Temporary run mode | Hold `Cmd (Ctrl)` |
| Help browser | `Cmd (Ctrl) + B` |
| Place a bang | `Shift + Cmd (Ctrl) + B` |
| Place a toggle | `Shift + Cmd (Ctrl) + T` |
| Place a horizontal slider | `Shift + Cmd (Ctrl) + J` |
| Place an array | `Cmd + Shift + A` |
| Delete an object | Select → `Backspace` |
| Object help | Right-click → Help |

## Sound Generation

| Object | Description | Usage |
|--------|-------------|-------|
| `osc~` | Sine wave oscillator | `[osc~ frequency]` |
| `phasor~` | Sawtooth wave | `[phasor~ frequency]` |
| `noise~` | White noise | `[noise~]` |
| `else/tri~` | Triangle wave (ELSE library) | `[else/tri~ frequency]` |
| `else/square~` | Square wave (ELSE library) | `[else/square~ frequency]` |

## Audio I/O

| Object | Description | Usage |
|--------|-------------|-------|
| `output~` | Audio output | Set volume with `level value` message |
| `else/out~` | Audio output (with DSP on/off switch) | ELSE library |
| `dac~` | Digital-to-analog converter (audio output) | `[dac~ channel_numbers]` |
| `adc~` | Analog-to-digital converter (audio input) | `[adc~]` |

## Volume & Envelopes

| Object | Description | Usage |
|--------|-------------|-------|
| `*~` | Signal multiplication (used for volume control) | signal x signal or number |
| `line~` | Automatic value change (signal) | `[target_value time(ms)]` message |
| `vline~` | Continuous value change | `[value1 time1, value2 time2 start_time, ...]` |
| `delay` | Output a bang after a delay | `[delay time(ms)]` |
| `else/asr~` | ASR envelope | ELSE library |
| `else/adsr~` | ADSR envelope | ELSE library |
| `else/envgen~` | Custom envelope generator | `[else/envgen~ -curve]` |

## Arithmetic

| Object | Description | Usage |
|--------|-------------|-------|
| `+`, `-`, `*`, `/` | Basic arithmetic (values) | `[+ number]` |
| `expr` | Expression evaluation | `[expr $f1 * 2 + $f2]` |
| `mtof` | MIDI note → frequency (Hz) | Middle C = 60 |

## Data Routing

| Object | Description | Usage |
|--------|-------------|-------|
| `s` (send) | Send a value | `[s destination_name]` |
| `r` (receive) | Receive a value | `[r destination_name]` |
| `sel` | Route by matching values | `[sel value1 value2 ...]` |
| `route` | Route by first element | `[route address1 address2]` |
| `change` | Output only when the value changes | `[change]` |
| `t` (trigger) | Send values right-to-left | `[t f b]` (f: float, b: bang, a: symbol) |

## Filters

| Object | Description | Usage |
|--------|-------------|-------|
| `lop~` | Low-pass filter | `[lop~ cutoff_frequency]` |
| `hip~` | High-pass filter | `[hip~ cutoff_frequency]` |
| `bp~` | Band-pass filter | Center: cutoff, Right inlet: Q value |

::: warning Filter Notes
- Filters other than `lop~` cannot accept `vline~` output directly on their right inlet
- Pay attention to the difference between value (thin) and signal (thick) lines
:::

## Delay

| Object | Description | Usage |
|--------|-------------|-------|
| `delwrite~` | Write to a delay buffer | `[delwrite~ $0-delay buffer_size(ms)]` |
| `delread~` | Read from a delay buffer | `[delread~ $0-delay delay_time(ms)]` |
| `cyclone/delay~` | Delay (cyclone library) | cyclone library |

::: tip About $0
`$0` is a unique ID number assigned to each Pd patch. Using it in buffer names like `$0-delay` prevents name collisions when duplicating patches.
:::

## Signal-Value Conversion

| Object | Description | Usage |
|--------|-------------|-------|
| `sig~` | Value → signal conversion | `[sig~]` |
| `snapshot~` | Signal → value conversion | Outputs the signal value when it receives a bang |
| `metro` | Periodic bang output | `[metro period(ms)]` |
| `else/s2f~` | Signal → value (automatic) | Continuous output without needing bangs |
| `else/f2s~` | Value → signal | ELSE library |
| `else/numbox~` | Display signal values | Display GUI |

::: warning DSP Must Be On
Signal-related objects will not work unless DSP is turned on. Enable it via the checkbox in the top-right of the console, or raise the volume on `output~`.
:::

## Audio File Processing

| Object | Description | Usage |
|--------|-------------|-------|
| `else/play.file~` | Audio file playback | `[else/play.file~ filename loop(0/1) autoplay(0/1)]` |
| `else/stretch.shift~` | Pitch shift / time stretch | Pitch: 0=original, 1200=1 octave; Tempo: 100=original |
| `else/xselect~` | Crossfade selection | `[else/xselect~ num_channels fade_time(ms)]` |
| `else/xfade~` | Crossfade | ELSE library |
| `else/rec.file~` | Record to file | `[else/rec.file~ filename]` |
| `soundfiler` | Load WAV data into an array | `read filename array_name` |
| `tabplay~` | Play audio from an array | `[tabplay~ array_name]` |

## Automated Playback

| Object | Description | Usage |
|--------|-------------|-------|
| `text define` | Define text data | `[text define -k filename]` |
| `text sequence` | Sequential text output | `auto`: automatic, `bang`: one step, `line 0`: go to start |
| `else/drum.seq` | Rhythm machine GUI | `[else/drum.seq rows columns]` |
| `else/tempo` | BPM tempo output | `[else/tempo BPM -mul multiplier]` |
| `random` | Random integer output | `[random max_value]` |

## micro:bit Integration (OSC)

| Object | Description | Usage |
|--------|-------------|-------|
| `else/osc.receive` | Receive OSC data | `[else/osc.receive port_number]` |
| `else/osc.route` | Route by OSC address | `[else/osc.route /address1 /address2]` |
| `cyclone/scale` | Value mapping | `[scale input_min input_max output_min output_max]` |
| `clip` | Value clipping | `[clip lower_limit upper_limit]` |
| `else/smooth~` | Smoothing (signal) | ELSE library |

## GUI

| Object | Description | Operation |
|--------|-------------|-----------|
| bang | Trigger output | Click to send |
| toggle | 0/1 switch | Click to toggle |
| Number box | Numeric display/input | Drag to change value |
| Horizontal slider | Continuous value input | Right-click → Properties to set upper/lower limits |

## Miscellaneous

| Object | Description | Usage |
|--------|-------------|-------|
| `print` | Print to console | For debugging |
| `comport` | Serial communication | `[comport device_number baud_rate]` |
| `pd subpatch_name` | Subpatch | Create a subpatch within a patch |
| `clone patch_name` | Clone a patch | Generate multiple copies of the same patch |

## Useful Facts

### Weber-Fechner Law
Human subjective perception of intensity is proportional to the logarithm of the physical stimulus. To make volume changes feel natural, raise the volume value to the 4th power.

### Structure of Musical Tones
Instrument-like sounds consist of a fundamental frequency (the lowest tone) combined with harmonics at integer multiples. By combining multiple `osc~` objects, you can create a variety of timbres (additive synthesis).
