# Lessons 8--9: Creating Interactive Sound Art

Put everything you have learned to work and begin creating your original interactive sound art piece. These two sessions cover the process from selecting a motif through audio production.

## Goals for This Lesson

- Begin creating an original interactive sound art piece
- Decide on a motif and interaction design
- Integrate micro:bit sensing with Pd audio synthesis
- Write a work description sheet

## What You Need

| Item | Description |
|------|-------------|
| micro:bit V2 | Microcontroller board with built-in sensors |
| USB cable | To connect micro:bit to your PC |
| PC | Pure Data installed |
| Headphones / Earphones | For audio monitoring |
| Notebook and pen | For idea sketching |

---

## Step 1: Choosing a Motif

### What Is a Motif?

A **motif** is the **theme or subject** of your piece. It is the first step in deciding "what you want to express." In sound art, you convey the world of your motif to the audience through sound.

### Motif Examples

Use the following categories as inspiration for your own motif.

| Category | Example Motifs | Sound Ideas |
|----------|---------------|-------------|
| Natural phenomena | Rain, wind, waves, thunder, earthquake | Noise, low frequencies, trembling |
| Everyday actions | Walking, tapping, turning, gripping | Rhythm, percussion, continuous tones |
| Emotions | Joy, fear, silence, excitement | Bright chords, dissonance, stillness |
| Spaces | Cave, outer space, forest, underwater | Reverb, spaciousness, ambient sound |
| Abstract concepts | Time, color, temperature, gravity | Gradual change, gradients |

### Guiding Questions

Ask yourself:

1. **"What sounds would be interesting to hear?"** -- Imagine sounds you do not normally encounter
2. **"What movements do you want to use to produce sound?"** -- Think about how the audience will interact
3. **"What feeling do you want the audience to have?"** -- Decide what impression you want to convey

::: tip Brainstorming Tips
Start by writing down every idea that comes to mind (brainstorming). Quantity matters more than quality. Come up with at least 10 ideas, then pick the most interesting one.
:::

---

## Step 2: Designing the Interaction

### Choosing Sensors

Select sensors from the micro:bit that match your motif.

| Sensor | What It Detects | Interaction Example |
|--------|----------------|---------------------|
| Accelerometer | Tilt, shake, impact | Shake → thunder sounds, tilt → wind direction changes |
| Light sensor | Light level | Cover → enter a cave, expose to light → sunrise |
| Microphone | Volume | Speak → echo returns, clap → percussion plays |
| Touch sensor | Logo contact | Touch → heartbeat, release → silence |
| Buttons (A/B) | Press | Mode switch, timbre change |
| Magnetometer | Direction | Face north → wind sound, face south → wave sound |

### Designing the Interaction

Organize the flow as **Input → Processing → Output**.

```
[Input]             [Processing]            [Output]
micro:bit           Pd patch                Speaker
─────────           ─────────               ────────
Accel X axis  ──→   Convert to frequency ──→  Sine wave pitch
Accel Y axis  ──→   Convert to volume    ──→  Overall volume
Button A      ──→   Switch mode          ──→  Timbre changes
```

::: warning Always Draw a Design Diagram
Do not start programming right away. First, draw a design diagram on paper. Clarify "which sensor value" is "transformed how" to produce "what sound." This will make the production process much smoother.
:::

### Design Sheet Example

Fill in the following items to define your interaction:

| Item | Example |
|------|---------|
| Motif | The underwater world |
| Sensor 1 | Accelerometer (Y axis) |
| Operation 1 | Tilt the micro:bit forward and backward |
| Sound Change 1 | The pitch of the wave sound changes with depth |
| Sensor 2 | Light sensor |
| Operation 2 | Cover / uncover with hand |
| Sound Change 2 | Bubble sounds appear/disappear (dark = deep, low tone; bright = surface, high tone) |

---

## Step 3: Sensing the Interaction

### Programming the micro:bit

In MakeCode, create a program that sends sensor values over serial communication.

**Basic structure:**

```
forever:
  serial write value "acc_x" = acceleration (mg) X
  serial write value "acc_y" = acceleration (mg) Y
  serial write value "light" = light level
  pause 50ms
```

::: tip Data Transmission Rate
Setting the pause to 50ms sends approximately 20 readings per second. This is fast enough for musical applications. Setting it too low may cause data overflow.
:::

### SerialOSCConverter Setup

Convert serial data from the micro:bit into OSC messages for Pd.

1. Launch **SerialOSCConverter**
2. Select the **serial port** where the micro:bit is connected
3. Set the **baud rate** to `115200`
4. Confirm the **OSC destination port** (default: `8000`)
5. Click "Start" to begin conversion

### Receiving Data in Pd

Receive OSC messages in Pd and convert them to sound parameters.

**Basic receiver patch structure:**

```
[netreceive -u -b 8000]  ← Receive on UDP port 8000
       |
[oscparse]                ← Parse OSC messages
       |
[route /acc_x /acc_y /light]  ← Route by label
  |       |        |
[/ 1024]  [/ 1024]  [/ 255]   ← Normalize to 0--1
```

::: details Sensor Value Ranges
| Sensor | Min | Max | Normalization |
|--------|-----|-----|---------------|
| Acceleration X/Y/Z | -2048 | 2048 | `value / 2048` for -1 to 1 |
| Acceleration strength | 0 | 2048 | `value / 2048` for 0 to 1 |
| Light level | 0 | 255 | `value / 255` for 0 to 1 |
| Microphone level | 0 | 255 | `value / 255` for 0 to 1 |
| Compass heading | 0 | 360 | `value / 360` for 0 to 1 |
:::

---

## Step 4: Audio Production

### Combining Techniques from Previous Lessons

Review the Pd techniques from earlier lessons and apply them to your work.

| Technique | Pd Objects | Effect |
|-----------|-----------|--------|
| Sine wave generation | `[osc~]` | Basic pitch control |
| Noise generation | `[noise~]` | Material for wind or wave sounds |
| Audio file playback | `[readsf~]` `[tabplay~]` | Using recorded sounds |
| Filters | `[lop~]` `[hip~]` `[bp~]` | Timbre changes |
| Delay | `[delwrite~]` `[delread~]` | Reverb and echo |
| Volume control | `[*~]` `[line~]` | Smooth volume changes |
| Pitch shifting | Frequency modulation | Pitch variation |
| Automated playback | `[metro]` `[random]` | Rhythmic patterns |

### Production Workflow

Follow this order for an efficient workflow:

1. **Create one sound** -- Start by making a single sound
2. **Connect the sensor** -- Make that sound respond to a sensor value
3. **Test the behavior** -- Verify it works as intended
4. **Add more sounds** -- Layer second and third sounds
5. **Adjust the whole piece** -- Fine-tune volume balance and responsiveness

::: warning Common Troubleshooting
- **No sound**: Check that `[dac~]` is ON (turn on DSP)
- **No values received**: Verify SerialOSCConverter is running and the port number matches
- **Sound cuts out**: Use `[line~]` to smooth value changes (sending raw values directly causes clicks)
- **Sound too loud**: Reduce the output with `[*~ 0.3]` (values above 1.0 cause distortion)
:::

---

## Step 5: Work Description Sheet

At the end of the session, create and submit a work description sheet. Fill in the following items.

### Template

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Work Description Sheet
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Title]
(e.g., Deep Sea Walk -- Sound of the Deep Sea)

[Author]


[Concept]
Motif:
(e.g., Expressing the deep sea world through sound)

Interaction Relationship:
(e.g., Tilting the micro:bit changes the water depth;
 deeper produces lower sounds; light level changes bubble sounds)

[Sensors and Operation]
Sensor 1: (e.g., Accelerometer Y axis)
Operation: (e.g., Tilt the micro:bit forward/backward)
Effect: (e.g., Pitch changes with depth)

Sensor 2: (e.g., Light sensor)
Operation: (e.g., Cover/uncover with hand)
Effect: (e.g., Bubble sounds appear/disappear)

[Technical Components]
Pd objects used:
(e.g., osc~, noise~, lop~, delwrite~, delread~,
 line~, *~, metro, random)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

::: tip Looking Ahead
In Lesson 10, you will pair up and evaluate each other's work using the **Think-Aloud Protocol**. Have your piece ready to be experienced by then. It does not need to be complete, but it should at least be in a state where **sound plays and can be controlled with sensors**.
:::

---

## Checklist

Track your progress:

- [ ] Decided on a motif
- [ ] Selected the sensors to use
- [ ] Drew an input → processing → output design diagram
- [ ] Created the micro:bit program
- [ ] Successfully converted data with SerialOSCConverter
- [ ] Received sensor data in Pd
- [ ] Generated at least one sound
- [ ] Sound changes in response to sensor values
- [ ] Completed the work description sheet
