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

We will use **Pd vanilla** in this course.

---

## Installing Pure Data

### Download

1. Go to [https://puredata.info/downloads/pure-data](https://puredata.info/downloads/pure-data)
2. Download the version for your operating system

### Mac

1. Open the `.dmg` file
2. Drag `Pd-0.xx-x.app` into the **Applications** folder
3. If you see "unidentified developer" on first launch:
   - Go to **System Settings** → **Privacy & Security** → click "Open Anyway"

### Windows

1. Run the `.exe` installer
2. Follow the installation wizard
3. Default settings are fine

### Verifying the Installation

1. Launch Pd
2. Confirm that the **Pd console** window appears
3. Go to **File** → **New** to create a new patch (program)
4. If a patch window appears, you are all set

::: tip Basic UI
- **Pd console**: Window that shows error messages and logs
- **Patch window**: Workspace where you create your program (patch)
- **Object**: Press `Ctrl+1` (Mac: `Cmd+1`) to place a new object
- **Message**: Press `Ctrl+2` (Mac: `Cmd+2`) to place a message box
:::

---

## Reference Links

- [Pure Data Official Site](https://puredata.info/)
- [MakeCode: Touch Sensor Drum](https://makecode.microbit.org/96575-21886-94153-68551)
- [MakeCode: Compass Theremin](https://makecode.microbit.org/02444-39498-61498-52498)
- [MakeCode: Handbell](https://makecode.microbit.org/50444-27498-48498-29498)
- [micro:bit Reference](https://makecode.microbit.org/reference)
