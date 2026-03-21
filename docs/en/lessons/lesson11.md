# Lesson 11: Multichannel Audio Playback

Learn how to create spatial sound experiences using multiple speakers. In preparation for your exhibition, master the basics of multichannel audio.

## Goals for This Lesson

- Learn multichannel audio output methods and achieve spatial sound design
- Understand the concepts of soundscape, spatial music, and ambient music
- Set up 4-channel audio playback in Pd
- Understand speaker placement for exhibition spaces

## What You Need

| Item | Description |
|------|-------------|
| PC | Pure Data installed |
| Multichannel audio interface | 4+ channel output support |
| Speakers x 4 | For exhibition use |
| Speaker cables | Check the required length |
| Headphones | For individual work |

---

## Soundscape, Spatial Music, and Ambient Music

### Soundscape

**Soundscape** means "landscape of sound." The concept was introduced by Canadian composer **R. Murray Schafer** and treats the sonic environment around us as an art form.

- Encompasses all environmental sounds: city noise, birdsong, flowing streams
- Includes the practice of **soundwalks**, which heighten awareness of listening
- Proposes the idea of designing the sonic environment itself

### Spatial Music

**Spatial music** takes advantage of speaker placement to express sound in physical space.

- Different sounds from multiple speakers create the experience of sound moving through space
- Creates **immersive** experiences that surround the listener with sound
- Commonly used in electronic music and sound installations

### Ambient Music

**Ambient music** is a genre that prioritizes atmosphere and environment.

- The concept was established by British musician **Brian Eno**
- Characterized as "music that can be actively listened to or ignored"
- Frequently uses slow changes, repetition, and sustained tones
- Has had a significant influence on sound art aesthetics

::: details Reference: Examples of Spatial Audio Art
- **Sound installations**: Gallery works where different sounds are heard as visitors move through the space
- **Multichannel concerts**: Performances in spaces surrounded by 4 or more speakers
- **Interactive spaces**: Sensor-linked systems where sound moves through space in response to people's movements
:::

---

## Audio Output Fundamentals

### Mono, Stereo, and Multichannel

| Format | Channels | Characteristics |
|--------|----------|-----------------|
| **Mono** | 1ch | Single speaker output. No spatial positioning |
| **Stereo** | 2ch | Left and right speakers. Left-right positioning possible |
| **Quad (4ch)** | 4ch | Front/back, left/right speakers. Spatial positioning possible |
| **Surround** | 5.1ch+ | Cinema-style immersive audio |

### Multichannel Output Settings in Pd

#### 1. Open Audio Settings

1. In the Pd menu, select **"Media" → "Audio Settings"**
2. Select your multichannel audio interface as the **output device**
3. Set the **output channels** to `4` or more
4. Click "OK" to apply

::: warning Audio Interface Required
The PC's built-in speakers typically support only 2 channels (stereo). For 4+ channel output, you need a multichannel audio interface. Check which equipment is available for the course.
:::

#### 2. Specifying Multiple Channels with dac~

Add arguments to `[dac~]` to specify which channels to output to.

```
[dac~ 1 2]      ← Output to channels 1 and 2 (standard stereo)
[dac~ 3 4]      ← Output to channels 3 and 4
[dac~ 1 2 3 4]  ← Output to all four channels
```

**Channel assignment:**

| Channel | Typical Speaker Position |
|---------|------------------------|
| 1 | Front Left |
| 2 | Front Right |
| 3 | Rear Left |
| 4 | Rear Right |

---

## 4-Channel Audio in Pd

### Basic Setup: Sending Different Sounds to Four Speakers

```
[osc~ 440]     [noise~]       [osc~ 330]     [phasor~ 220]
    |              |               |               |
[*~ 0.3]       [*~ 0.1]       [*~ 0.3]       [*~ 0.2]
    |              |               |               |
    |              |               |               |
[         dac~ 1 2 3 4          ]
```

By assigning different sound sources to each speaker, you can create spatial breadth.

### 4-Channel Panning

**Panning** is the technique of moving sound between speakers. You can use sensor values to dynamically change the position of the sound.

#### Left-Right Panning (Between Channels 1 and 2)

```
[osc~ 440]
    |
    |    [sensor value 0--1]
    |        |
    |    [sqrt~]  ← Right channel volume
    |        |
    |    [1 - ] → [sqrt~]  ← Left channel volume
    |    |           |
[*~]            [*~]
    |               |
[dac~ 1]      [dac~ 2]
```

::: tip Equal-Power Panning
Simply changing volume linearly makes the center sound quieter. Using `[sqrt~]` (square root) ensures equal perceived loudness at all positions. This is called **equal-power panning**.
:::

### Rotating Sound

You can also make sound rotate around the four speakers.

**Basic approach:**

1. Use `[phasor~]` to create a low-frequency signal cycling from 0 to 1
2. Convert that value to an angle (0--360 degrees)
3. Use `sin` and `cos` to calculate the volume for each speaker

```
[phasor~ 0.25]     ← One full rotation every 4 seconds
       |
[* 6.28318]        ← Multiply by 2pi to convert to radians
       |
   +---+---+
   |       |
[cos~]  [sin~]     ← Volume for each channel
```

::: details Details on 4-Channel Rotation
To rotate sound across four speakers, control each speaker's volume with phase-shifted sine waves.

- **Ch.1 (Front Left)**: `cos(angle)`
- **Ch.2 (Front Right)**: `sin(angle)`
- **Ch.3 (Rear Right)**: `cos(angle + pi)` (= `-cos(angle)`)
- **Ch.4 (Rear Left)**: `sin(angle + pi)` (= `-sin(angle)`)

Rotation speed is determined by the frequency of `[phasor~]`. 0.25 Hz = one rotation every 4 seconds; 0.1 Hz = every 10 seconds.
:::

---

## Preparing the Exhibition Space

### Speaker Placement Basics

For a 4-channel setup, place speakers in a square (or rectangle) around the listener.

```
     [Front]
  SP1 ─────── SP2
   |           |
   |  Listener |
   |     ●     |
   |           |
  SP3 ─────── SP4
     [Rear]
```

**Placement guidelines:**

1. **Speaker direction**: Point all speakers toward the center (the listener's position)
2. **Distance**: Place speakers at equal distances (roughly 1.5--3 m)
3. **Height**: Match the listener's ear height (adjust for seated position if applicable)
4. **Wall distance**: Keep speakers at least 30 cm from walls to avoid bass emphasis

### Cable Management

::: warning Safety
- **Tape cables to the floor** with gaffer tape to prevent tripping hazards
- **Do not bundle power cables with audio cables** (causes noise interference)
- Leave slack in cables so they do not pull out if tugged
:::

### Adjusting Volume Balance

1. Play the **same test tone** through each channel in sequence (e.g., `[osc~ 1000]`)
2. Stand at the listening position (center) and check that each speaker sounds **equally loud**
3. Reduce louder speakers using `[*~]` in the Pd patch
4. Play all channels simultaneously and verify a natural overall balance

::: tip Volume Adjustment Tip
Instead of adjusting volume on the hardware side, adjust it with **`[*~]` objects in the Pd patch**. This way, you get the same balance every time you open the patch.
:::

---

## Applying Multichannel to Your Work

Incorporate multichannel output into your own piece.

| Idea | Implementation |
|------|---------------|
| Sound rotates around the listener | Use `[phasor~]` for 4ch rotation |
| Sensor controls sound position | Accel X → L/R pan, Accel Y → front/back pan |
| Different sound from each speaker | Route four sources to separate channels |
| Ambient sound surrounds the space | Output noise or environmental sound across 4ch |

---

## Checklist

- [ ] Understood the concepts of soundscape, spatial music, and ambient music
- [ ] Understood the differences between mono, stereo, and multichannel
- [ ] Configured multichannel output in Pd's audio settings
- [ ] Understood how to specify multiple channels with `[dac~]`
- [ ] Understood how 4ch panning works
- [ ] Understood the basics of speaker placement for exhibitions
- [ ] Thought of ideas for applying multichannel to your own work
