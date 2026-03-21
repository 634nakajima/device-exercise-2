# Lesson 2: Building Simple Electronic Instruments

Explore the world of device art and sound art, build instruments with various micro:bit sensors, and get your first look at Pure Data (Pd).

## Goals for This Lesson

- Learn about real-world examples of device art and sound art
- Build a drum pad using the touch sensor
- Build a theremin-style instrument using the electronic compass
- Install Pure Data and understand its basic interface

---

## Introduction to Device Art and Sound Art

### Characteristics of Device Art

Device art treats technology not as a mere tool, but as the **expression itself**.

- **Interactivity**: The work responds to the viewer's actions and movements
- **Physicality**: Bodily movement becomes part of the artwork
- **Real-time response**: Sound and visuals change instantly in response to input

### Notable Examples

- **Theremin** (1920): The world's first electronic instrument, played by moving your hands near it
- **TENORI-ON** (Toshio Iwai, 2007): A device for creating music by touching an LED grid
- **Reactable** (2003--): An interface that generates sound by placing blocks on a table
- **Sound of Honda / Ayrton Senna 1989**: A sound installation that converted F1 driving data into audio

### Approaches to Sound Art

- **Using environmental sound**: Elevating everyday sounds into art
- **Extending the body**: Converting body movement into sound through devices
- **Sonification of data**: Representing data through sound

::: tip Think About It
If you were to convert an "everyday movement" into sound, what movement would you choose? What kind of sound would you map it to?
:::

---

## Step 1: Build a Drum Pad with Touch Sensors

Use the micro:bit V2's touch sensor (logo) and pins (P0, P1, P2) to build a drum pad.

### Using Touch Pins

The gold-colored pins at the bottom of the micro:bit can be used as touch sensors.

- **P0**: Large pin (first from left)
- **P1**: Large pin (second from left)
- **P2**: Large pin (third from left)
- **GND**: Ground pin (far right)

::: warning Note
To use the touch sensor, you need to touch **GND** with one hand while touching P0--P2 with the other hand (or finger). It helps to connect a crocodile clip to GND and attach it to aluminum foil.
:::

### How to Build It

1. Create a new project in MakeCode
2. Set up the program as follows:

**When P0 is touched → bass drum sound**

```
on pin P0 pressed:
  play sound "bass drum"
  show "X" on LED
```

**When P1 is touched → snare sound**

```
on pin P1 pressed:
  play sound "snare"
  show "+" on LED
```

**When P2 is touched → hi-hat sound**

```
on pin P2 pressed:
  play sound "hi-hat"
  show "." on LED
```

3. Assign a different drum sound to each pin
4. Use "Music" → "play sound" to select preset drum sounds

### Adding More Sounds

- Assign a cymbal sound to the V2 **logo touch**
- Assign additional sounds to button A and button B for up to 6 different sounds

---

## Step 2: Build a Theremin with the Electronic Compass

Use the micro:bit's electronic compass (magnetometer) to build an instrument whose pitch changes based on the direction you face.

### About the Compass Sensor

- Hold the micro:bit flat and rotate it to get the **heading** (bearing)
- Value range: **0--359** (degrees)
- North = 0, East = 90, South = 180, West = 270

::: warning Calibration
When you first use the compass, "TILT TO FILL SCREEN" will appear on the micro:bit display. Tilt the micro:bit until all LEDs light up to complete calibration.
:::

### Mapping Heading to Frequency

Convert the heading (0--359) to a sound frequency.

```
forever:
  heading = compass heading
  frequency = map(heading, 0, 359, 200, 2000)
  play tone at that frequency
```

1. Use the **"compass heading"** block from "Input" → "more"
2. Use **"map"** from "Math" to convert 0--359 into 200--2000 (Hz)
3. Pass the converted value to **"play tone"** from "Music"

### Extension Ideas

- Play specific notes (C D E F G A B C) based on direction
- Only play sound when facing a particular direction
- Use buttons to switch octaves

---

## Step 3: Getting Started with Pure Data

### What Is Pure Data (Pd)?

**Pure Data (Pd)** is open-source software for audio synthesis and multimedia processing through visual programming.

- **Creator**: Miller Puckette (since the 1990s)
- **Concept**: Build programs by connecting objects (boxes) with patch cords (lines)
- **Uses**: Electronic music, sound installations, interactive art
- **Free**: Open-source and available to everyone

### Pd Variants

| Name | Description |
|------|-------------|
| **Pd vanilla** | The official version by Miller Puckette (minimal feature set) |
| **Pd-extended** | An extended version bundling many libraries (no longer maintained) |
| **Plugdata** | A modern UI Pd-compatible environment (also works as a VST plugin) |

We will use **plugdata** in this course.

### About plugdata

**[plugdata](https://plugdata.org/)** is a modern visual programming environment based on Pure Data. It is fully compatible with Pd vanilla while offering a more user-friendly interface.

| Feature | Description |
|---------|-------------|
| **Modern UI** | Dark mode support, auto-complete for objects, and drag-and-drop |
| **Pd compatible** | Opens Pd vanilla patches directly. All Pd operations and objects on this site work in plugdata |
| **Built-in libraries** | Libraries used in this course (ELSE, cyclone) are pre-installed — no extra setup needed |
| **VST/AU plugin** | Also works as a plugin inside DAWs (GarageBand, Ableton Live, etc.) |
| **Cross-platform** | Mac / Windows / Linux |

::: tip Already installed on university PCs
plugdata is already installed on the university computers. If you want to install it on your own PC, download it from the [plugdata website](https://plugdata.org/).
:::

::: warning Differences from Pd vanilla
The operations and object names are the same as Pd vanilla, but keyboard shortcuts and appearance differ slightly. The screenshots on this site show Pd vanilla, but the same operations produce the same results in plugdata.
:::

---

## Pure Data Basic UI

Launch plugdata (or Pd vanilla) and familiarize yourself with the basic layout:

- **Patch window**: Workspace where you create your program (patch)
- **Object**: Press `Ctrl+1` (Mac: `Cmd+1`) to place a new object
- **Message**: Press `Ctrl+2` (Mac: `Cmd+2`) to place a message box
- **Edit/Run mode toggle**: `Ctrl+E` (Mac: `Cmd+E`)

Create a new patch and try placing some objects and messages. We will start using Pd in earnest in the next lesson.

---

## Reference Links

- [plugdata Official Site](https://plugdata.org/)
- [Pure Data Official Site](https://puredata.info/)
- [MakeCode: Touch Sensor Drum](https://makecode.microbit.org/96575-21886-94153-68551)
- [MakeCode: Compass Theremin](https://makecode.microbit.org/02444-39498-61498-52498)
- [MakeCode: Handbell](https://makecode.microbit.org/50444-27498-48498-29498)
- [micro:bit Reference](https://makecode.microbit.org/reference)
