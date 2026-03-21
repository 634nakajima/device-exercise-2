# Lesson 1: Introduction

Get hands-on with micro:bit and build simple sensor-based instruments.

## Goals for This Lesson

- Understand the basics of micro:bit
- Build a "theremin"-like instrument using the light sensor
- Build a "handbell" using the accelerometer
- Learn what device art and sound art are

## What You Need

| Item | Description |
|------|-------------|
| micro:bit V2 | Microcontroller board with built-in sensors |
| USB cable | To connect micro:bit to your PC (micro USB) |
| PC | Windows or Mac |
| Headphones / Earphones | For listening to audio output |

## What Is micro:bit?

micro:bit is a compact microcontroller board developed by the BBC (British Broadcasting Corporation) for education. It comes with the following built-in sensors and features:

- **LED display** (5x5 grid)
- **Buttons** (A and B)
- **Accelerometer** (detects tilt and vibration)
- **Light sensor** (uses the LEDs as a light detector)
- **Magnetometer (electronic compass)**
- **Touch sensor** (V2 logo)
- **Microphone and speaker** (V2)
- **Wireless communication** (Bluetooth / Radio)

You will use the **MakeCode editor** to program the micro:bit. It runs in your browser and supports block-based programming.

::: tip MakeCode Editor
Go to [https://makecode.microbit.org/](https://makecode.microbit.org/) and click "New Project" to get started.
:::

---

## Step 1: Basic micro:bit Operations

### Using the MakeCode Editor

1. Open [makecode.microbit.org](https://makecode.microbit.org/) in your browser
2. Click **"New Project"**
3. Enter a project name (e.g., "Theremin")

### Editor Layout

- **Left side**: micro:bit simulator (preview your program on screen)
- **Center**: Block categories (choose the blocks you want)
- **Right side**: Programming area (assemble blocks here)

### Transferring Your Program

1. Connect the micro:bit to your PC with a USB cable
2. Click the **"Download"** button at the bottom-left of the editor
3. Copy the downloaded `.hex` file to the micro:bit drive (it may transfer automatically)

::: tip Pairing
Click "..." next to the "Download" button in MakeCode and select "Connect device" to set up USB pairing. After pairing, you can transfer programs directly by clicking the download button.
:::

---

## Step 2: Build a Theremin with the Light Sensor

A **theremin** is an electronic instrument where you change the pitch by moving your hand closer to or farther from the device. Let's build something similar using the micro:bit's light sensor.

### How the Light Sensor Works

The micro:bit's LED display also functions as a light sensor.

- **Bright environment**: High values (up to 255)
- **Dark environment**: Low values (down to 0)
- Covering the LEDs with your hand changes the value

### How to Build It

1. Create a new project in the MakeCode editor
2. Assemble the following blocks:

**Program flow:**

```
forever:
  light level → convert to frequency
  play tone at that frequency
```

3. Use the **"light level"** block from the "Input" category
4. Use the **"play tone"** block from the "Music" category
5. Map the light value (0--255) to a frequency range (roughly 200--2000 Hz)
6. Use the **"map"** block from the "Math" category to perform the conversion

### Sending Values to the PC via Serial

To check sensor values on your PC, use serial communication.

1. Add the **"serial write value"** block from the "Serial" category
2. Set the label to "light" and the value to the "light level" block
3. Click "Show console" in MakeCode to view values in real time

::: warning Note
Serial communication sends data to your PC over USB. This will become important in later lessons when you connect to Pure Data.
:::

---

## Step 3: Build a Handbell with the Accelerometer

Let's build a **handbell** that plays a sound when you shake the micro:bit.

### How the Accelerometer Works

The accelerometer detects movement such as tilt, vibration, and impact.

- **X axis**: Left-right tilt
- **Y axis**: Forward-backward tilt
- **Z axis**: Up-down movement
- **strength**: Combined value across all axes

### How to Build It

1. Create a new project in the MakeCode editor
2. Build the following program:

**Program flow:**

```
on shake:
  play tone (e.g., middle C, 500ms)
  show music note icon on LED
```

3. Use the **"on shake"** block from the "Input" category
4. Use **"play tone"** from the "Music" category to set the note
5. Use **"show icon"** from the "Basic" category to display a music note

### Extension: Assign Multiple Notes

You can assign different notes to different gestures:

- **"on shake"** → C
- **"on logo up"** → D
- **"on logo down"** → E
- **"on screen up"** → F

::: details Challenge
Try using acceleration strength to control volume based on how hard you shake. Use "Input" → "more" → "acceleration strength".
:::

---

## What Are Device Art and Sound Art?

### Device Art

**Device art** refers to artwork created using electronic devices and sensors. A key characteristic is **interactivity**: the work changes in response to the viewer touching the device or moving their body.

### Sound Art

**Sound art** is a form of artistic expression that uses "sound" as its primary material. Unlike conventional music, it treats all kinds of sounds as subjects for expression, including environmental sounds, noise, and electronic tones.

In this course, you will combine **micro:bit sensors** with **Pure Data audio synthesis** to create your own interactive sound art.

---

## Reference Links

- [micro:bit Official Site](https://microbit.org/)
- [MakeCode Editor](https://makecode.microbit.org/)
- [micro:bit Reference](https://makecode.microbit.org/reference)
