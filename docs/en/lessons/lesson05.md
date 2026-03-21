# Lesson 5: Signal Processing & Audio File Handling

## Goals for This Lesson

Learn how to work with audio files and control them using micro:bit sensors.

Specifically, this lesson covers:

- Playing, stopping, and looping audio files
- Pitch shifting and time stretching
- Fade-in, fade-out, and crossfade
- Recording audio

---

## Playing, Stopping, and Looping Audio Files

In Pd, you can play audio files using the `else/play.file~` object. It supports WAV, AIFF, and other audio formats, and lets you control playback, stopping, and looping.

### How to Use

1. Create an `else/play.file~` object
2. Place the audio file in the **same directory** as your Pd patch
3. Use message objects to send the following commands

::: tip Basic Commands
| Message | Action |
|---------|--------|
| `open filename` | Open an audio file |
| `start` | Start playback |
| `stop` | Stop playback |
| `loop 1` | Enable loop playback |
| `loop 0` | Disable loop playback |
:::

::: warning Important
Audio files must be in the same folder as the Pd patch. If they are in a different folder, Pd will not find them and will produce an error.
:::

### Patch Example

![Audio playback](/images/pd/25-play-file.png)

Send the `start` message to begin playback and `stop` to stop it. Send `loop 1` before `start` to loop the audio continuously.

---

## Pitch Shifting and Time Stretching

The `else/stretch.shift~` object lets you change the pitch or tempo of an audio file in real time.

### Inlet Description

`else/stretch.shift~` has multiple inlets, each controlling a different parameter.

| Inlet | Parameter | Description |
|-------|-----------|-------------|
| 1st inlet | Buffer size | Size of the processing buffer |
| 2nd inlet | Pitch | Pitch change amount (in cents) |
| 3rd inlet | Tempo | Playback speed (in percent) |

### Pitch Settings

Pitch is specified in cents.

- **0**: Original pitch (no change)
- **1200**: One octave up
- **-1200**: One octave down
- **700**: A perfect fifth up

::: tip Pitch Reference
100 cents = 1 semitone. 1200 cents = 12 semitones = 1 octave.
:::

### Tempo Settings

Tempo is specified as a percentage.

- **100**: Original speed (no change)
- **200**: Double speed
- **50**: Half speed

### Patch Example

![Pitch shift](/images/pd/26-stretch-shift.png)

---

## Fade-In, Fade-Out, and Crossfade

To smoothly switch between audio sources or gradually change volume, use fade-related objects.

### Objects Used

| Object | Function |
|--------|----------|
| `else/xselect~` | Select one from multiple inputs for output |
| `else/xfade~` | Crossfade between two audio sources |
| `else/xgate~` | Gate that passes or blocks audio |

### How Crossfade Works

A crossfade gradually lowers the volume of one source while raising the volume of another, creating a smooth transition.

With `else/xfade~`, a value from 0 to 1 controls the mix ratio between two sources.

- **0**: Only input 1 is heard
- **0.5**: Both inputs are mixed equally
- **1**: Only input 2 is heard

### Patch Example

![Crossfade](/images/pd/27-crossfade.png)

---

## Recording

Pd can also record audio from a microphone input and save it to a file.

### Objects Used

| Object | Function |
|--------|----------|
| `adc~` | Receive audio signal from the microphone input |
| `else/rec.file~` | Record an audio signal to a file |

### Steps

1. Use `adc~` to capture the microphone signal
2. Connect it to `else/rec.file~`
3. Send an `open filename` message to specify the file name
4. Send `start` to begin recording
5. Send `stop` to stop recording

::: warning File Save Location
Recorded files are saved in the same directory as the Pd patch. If the patch has not been saved, the file location will be undefined.
:::

### Patch Example

![Recording](/images/pd/28-recording.png)

---

## Practice Exercises

Try the following exercises. Use what you have learned about micro:bit integration from previous lessons.

### Exercise 1: Drum Loop Play/Stop

Create a patch that uses the micro:bit's A and B buttons to control playback and stopping of a drum loop.

::: details Hint
- Use `else/play.file~` to load a drum loop audio file
- Send `start` when the A button is pressed
- Send `stop` when the B button is pressed
- Set `loop 1` for continuous looping
- Use the `select` object to route button values to the appropriate messages
:::

### Exercise 2: Tilt-Controlled Tempo

Add a feature to the Exercise 1 patch where tilting the micro:bit (accelerometer) changes the playback tempo.

::: details Hint
- Use `else/stretch.shift~` to control playback speed
- Map the micro:bit's tilt value to a tempo percentage (e.g., 50--200) using `scale` or similar
- Check the tilt value range first, then convert it to an appropriate range
:::

### Exercise 3: Light Sensor Crossfade

Create a patch that switches audio sources based on the light sensor value:

| Light Sensor Value | Behavior |
|-------------------|----------|
| 70 or above | Silence (no sound) |
| 30--70 | Play source 1 |
| Below 30 | Play source 2 |

::: details Hint
- Use `else/xfade~` or `else/xselect~` for crossfading
- Use `moses` to branch based on the light sensor value
- Map the value range to the crossfade parameter (0--1)
- You can also use `else/xgate~` to mute the sound when the value is above 70
:::

### Exercise 4: Light-Controlled Recording, A Button Playback

Create a patch that starts/stops recording based on the light sensor value and plays back the recording when the A button is pressed.

::: details Hint
- Use `adc~` and `else/rec.file~` for the recording function
- Start recording when the light value drops below a threshold, stop when it goes above
- Use `else/play.file~` to play back the recorded file
- When the A button is pressed, send `open filename` followed by `start`
- Use the same file name for both recording and playback
:::
