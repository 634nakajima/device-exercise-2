# Lesson 6: Automated Playback

## Goals for This Lesson

Learn how to create automated music playback using text data and GUI tools.

Specifically, this lesson covers:

- Automated output using text data
- Automated audio file playback driven by text sequences
- Beat programming with a GUI (rhythm machine)
- Overview of DAW integration via MIDI

---

## Automated Output with Text Data

In Pd, you can use text data to output messages at specified timings in sequence. This makes it possible to play sounds automatically based on pre-written data.

### Objects Used

| Object | Function |
|--------|----------|
| `text define` | Define and store text data |
| `text sequence` | Output text data line by line in order |

### Text Data Format

Text data is written in the following format. Each line corresponds to one event, ending with a semicolon (`;`).

```
data c;
data d;
data e;
data f;
```

::: tip Writing Text Data
- Write one piece of data per line
- Each line must end with a semicolon (`;`)
- Write the value after `data` followed by a space
- You can include multiple values on one line separated by spaces (e.g., `data c 500;`)
:::

### Patch Example

![Text data](/images/pd/29-kaeru-text.png)

Write text data inside the `text define` object, and `text sequence` outputs it line by line.

---

## Automated Audio File Playback via Text

By connecting the output of `text sequence` to `else/play.file~`, you can automatically play audio files in the order specified by the text data.

### Key Messages

| Message | Action |
|---------|--------|
| `auto` | Enable auto-play mode (automatically outputs the next line based on timing in the text data) |
| `bang` | Output the next line manually (manual mode) |
| `line 0` | Return to the beginning |

### Steps

1. Write text data (file names, note data, etc.) inside `text define`
2. Create a `text sequence` and specify the name of the `text define` as its argument
3. Send `auto` to automatically output each line in order
4. Send `bang` to output one line at a time manually
5. Send `line 0` to return to the first line

::: tip Choosing Between auto and bang
- `auto`: Advances automatically at time intervals specified in the text data. Best for BGM and automated playback.
- `bang`: Advances one step at a time with user interaction (e.g., pressing a button). Best for interactive performance.
:::

### Patch Example

![Text auto-play](/images/pd/30-text-sequence.png)

---

## Beat Programming with a GUI

The `else/drum.seq` object provides a graphical interface for programming rhythm patterns. You can click with the mouse to intuitively build beats.

### Objects Used

| Object | Function |
|--------|----------|
| `else/drum.seq` | Rhythm pattern GUI editor |
| `else/tempo` | Set the tempo (BPM) |
| `route` | Route output data to different instruments |

### Setting the BPM

Use the `else/tempo` object to set the BPM (Beats Per Minute).

- Specify the BPM value as an argument (e.g., `else/tempo 120`)
- You can also change the BPM dynamically by sending a number message

::: tip BPM Reference
| BPM | Feel |
|-----|------|
| 60--80 | Slow (ballad) |
| 100--120 | Medium (pop) |
| 120--140 | Somewhat fast (dance music) |
| 140--180 | Fast (drum and bass) |
:::

### Building a Rhythm Machine

1. Create an `else/drum.seq` and program rhythm patterns in the GUI
2. Set the BPM with `else/tempo`
3. Use `route` to distribute each track's output (kick, snare, hi-hat, etc.)
4. Connect audio sources (`else/play.file~` or synthesizers) to each track

### Patch Example

![Rhythm machine](/images/pd/31-drum-seq.png)

---

## Automated Playback via MIDI with a DAW

::: tip Reference Information
Pd can also connect to DAW (Digital Audio Workstation) software using MIDI (Musical Instrument Digital Interface).
:::

### Overview

MIDI is a standard protocol for exchanging performance data between electronic instruments and computers. Pd can send MIDI messages to or receive them from external DAWs such as Ableton Live and GarageBand.

### Using MIDI in Pd

- **MIDI output**: Use the `noteout` object to send MIDI notes
- **MIDI input**: Use the `notein` object to receive MIDI notes from external sources
- **Virtual MIDI bus**: On macOS, you can create a virtual MIDI bus in "Audio MIDI Setup" to connect Pd and a DAW

::: warning Scope in This Course
MIDI integration is an advanced topic. We will only cover the overview in this course, but feel free to consult the instructor if you want to use it in your project.
:::

---

## Practice Exercises

### Exercise 1: Play "Frog Song" One Note at a Time with the A Button

Use `text define` and `text sequence` to prepare the melody of "Frog Song" (Kaeru no Uta), and create a patch that plays one note each time the micro:bit's A button is pressed.

::: details Hint
- Write the note data in `text define` (e.g., `data c;` `data d;` `data e;` `data f;` ...)
- Use the `bang` message on `text sequence` to output one note at a time
- Send `bang` when the A button is pressed
- Connect the output note data to `osc~` or an audio file player
- Consider using `line 0` to return to the beginning when the song ends
:::

### Exercise 2: Rhythm Machine with Tilt-Controlled Tempo

Create a rhythm machine using `else/drum.seq`, and make the BPM (tempo) change based on the micro:bit's tilt.

::: details Hint
- Create rhythm patterns with `else/drum.seq`
- Control the BPM with `else/tempo`
- Get the micro:bit's tilt (accelerometer) value
- Map the tilt value to a BPM range (e.g., 60--180)
- Use the `scale` object to convert the value range
- If the value changes too rapidly, use `else/lowpass` to smooth it out
:::
