# Lesson 4: Data Processing & micro:bit Integration

Learn how to process sensor data and connect the micro:bit to Pure Data for interactive sound control.

## Goals for This Lesson

- Understand threshold processing and branching logic
- Send sensor data from micro:bit via serial communication
- Convert serial data to OSC for use in Pd
- Apply mapping, clipping, and smoothing to sensor values

---

## Threshold Processing and Branching

### What Is Threshold Processing?

When working with sensor data, you often need to trigger an action only when a value crosses a certain boundary. This boundary is called a **threshold**.

For example:
- Play a sound only when the light level drops below 50
- Trigger a drum hit only when acceleration exceeds 800

### Branching with `moses`

The `moses` object in Pd splits incoming values into two streams based on a threshold.

```
[moses 50]
 |      |
left   right
(<50)  (>=50)
```

- Values **less than** the threshold exit the left outlet
- Values **greater than or equal to** the threshold exit the right outlet

### Multi-Level Branching

You can chain multiple `moses` objects for multi-level branching:

```
[moses 30]
 |       |
low    [moses 70]
        |       |
       mid     high
```

This creates three zones: low (below 30), mid (30--69), and high (70 and above).

::: tip Using `select` for Exact Values
If you need to match exact values (e.g., button states 0 and 1), use the `select` (or `sel`) object:

```
[sel 0 1]
 |    |
off  on
```
:::

---

## Data Processing Practice Exercises

### Exercise 1

Create a patch that outputs a bang when the number box value is **50 or above**.

::: details Hint
Combine `>= 50` and `sel 1`. The `>= 50` object outputs 1 when the condition is true and 0 when false.
:::

### Exercise 2

Create a patch that plays three decay sounds (220 Hz, 440 Hz, and 880 Hz for 1 second each) depending on the value of a **V. Radio** (a vertically arranged radio button that outputs 0 to (number of switches − 1) when clicked; the number of switches can be changed from Options on the right side of the screen).

::: details Hint
Connect `V. Radio` → `sel 0 1 2` and connect each outlet to messages that trigger `vline~` envelopes for the three sounds. Refer to the decay sound patch from Lesson 3 Exercise 6.
:::

### Exercise 3

Modify the patch from Exercise 2 so that the decay sounds play only **when the V. Radio value changes**.

::: details Hint
Connect `V. Radio` → `change` → `sel 0 1 2`.
:::

---

## Serial Communication with micro:bit

### Sending Sensor Data from MakeCode

In the MakeCode editor, use the serial communication blocks to send sensor values to your PC.

**Basic program structure:**

```
forever:
  serial write value "light" = light level
  serial write value "acc_x" = acceleration (mg) x
  serial write value "acc_y" = acceleration (mg) y
  pause 50ms
```

Each `serial write value` sends a labeled number over USB to the PC.

::: tip Sending Interval
Setting the pause to 50ms sends approximately 20 readings per second, which is sufficient for musical applications. Setting it too low may cause data overflow.
:::

### Understanding the Data Format

The serial output from MakeCode uses a simple label-value format:

```
light:128
acc_x:-450
acc_y:230
```

This data needs to be converted to OSC (Open Sound Control) messages for Pd to receive.

---

## OSC (Open Sound Control)

### What Is OSC?

**OSC (Open Sound Control)** is a protocol for sending structured messages over a network. It uses a URL-like address format:

```
/light 128
/acc_x -450
/acc_y 230
```

### SerialOSCConverter

To bridge between micro:bit's serial output and Pd's OSC input, use **SerialOSCConverter**:

1. Launch SerialOSCConverter
2. Select the **serial port** where micro:bit is connected
3. Set the **baud rate** to `115200`
4. Confirm the **OSC port** (default: `8000`)
5. Click "Start" to begin conversion

### Receiving OSC in Pd

Use these objects to receive and parse OSC messages in Pd:

```
[netreceive -u -b 8000]   ← Receive on UDP port 8000
       |
[oscparse]                 ← Parse OSC messages
       |
[route /light /acc_x /acc_y]  ← Route by address
  |        |         |
(light)  (acc_x)   (acc_y)
```

Alternatively, with the else library:

```
[else/osc.receive 8000]
       |
[else/osc.route /light /acc_x /acc_y]
  |        |         |
```

---

## Mapping Sensor Values

### Why Map Values?

Raw sensor values are rarely in the right range for controlling sound parameters. **Mapping** converts values from one range to another.

For example:
- Light sensor (0--255) → frequency (200--2000 Hz)
- Acceleration (-1024 to 1024) → volume (0 to 1)

### Using `scale` (cyclone library)

The `cyclone/scale` object maps values from one range to another:

```
[cyclone/scale 0 255 200 2000]
```

This converts input values in the range 0--255 to output values in the range 200--2000.

### Manual Mapping with Math

You can also map values using basic arithmetic:

```
value_normalized = (input - input_min) / (input_max - input_min)
output = output_min + value_normalized * (output_max - output_min)
```

---

## Clipping Values

### What Is Clipping?

**Clipping** restricts values to stay within a defined range. This prevents unexpected extreme values from causing problems.

### Using `clip`

```
[clip 0 1]
```

Any input value below 0 becomes 0, and any value above 1 becomes 1. Values between 0 and 1 pass through unchanged.

::: warning Why Clipping Matters
Sensor values can sometimes spike or produce outliers. Without clipping, these extreme values might cause distortion (if used for volume) or unpleasant sounds (if used for frequency). Always clip your values to a safe range.
:::

---

## Smoothing Values

### Why Smooth?

Raw sensor data is often noisy and jumpy. Feeding these values directly into audio parameters causes clicks, pops, and unpleasant artifacts. **Smoothing** (also called low-pass filtering on the control signal) makes the transitions gradual.

### Using `else/lowpass`

The `else/lowpass` object smooths value changes:

```
[else/lowpass 5]
```

The argument controls the smoothing amount (higher = smoother but slower response).

### Using `line` for Smooth Transitions

You can also use `line` to interpolate between values:

```
[pack f 50]    ← Pack value with ramp time (50ms)
    |
[line]         ← Smooth transition over 50ms
```

::: tip Choosing the Right Amount of Smoothing
- **Too little**: Sound still has clicks and jumps
- **Too much**: Response feels sluggish and unresponsive
- Start with a value around 5--20 and adjust by ear
:::

---

## Normalizing Sensor Values

Different sensors output different ranges. It is good practice to **normalize** values to a standard range (typically 0 to 1, or -1 to 1).

| Sensor | Min Value | Max Value | Normalization |
|--------|-----------|-----------|---------------|
| Acceleration X/Y/Z | -2048 | 2048 | `value / 2048` for -1 to 1 |
| Acceleration strength | 0 | 2048 | `value / 2048` for 0 to 1 |
| Light level | 0 | 255 | `value / 255` for 0 to 1 |
| Microphone level | 0 | 255 | `value / 255` for 0 to 1 |
| Compass heading | 0 | 360 | `value / 360` for 0 to 1 |

---

## Data Processing Practice Exercises

### Exercise 1

Create a patch that outputs a **bang** when the number box value is **50 or above**.

::: details Hint
Combine a `>= 50` object with `sel 1`. The `>= 50` object outputs 1 when the condition is true and 0 when false.
:::

### Exercise 2

Using a **V. Radio** (a vertical row of radio buttons; clicking outputs the selected index starting from 0; the number of buttons can be changed from Options on the right side of the screen), create a patch that plays three different decay tones (220 Hz, 440 Hz, and 880 Hz, each lasting 1 second) depending on which button is selected.

::: details Hint
Connect `V. Radio` → `sel 0 1 2`, then connect each outlet of `sel 0 1 2` to a message that triggers a `vline~`-based decay envelope for the corresponding tone. Refer to the decay sound patch from Lesson 3 Exercise 6.
:::

### Exercise 3

Modify the patch from Exercise 2 so that the three decay tones only play **when the V. Radio value changes**.

::: details Hint
Connect `V. Radio` → `change` → `sel 0 1 2`.
:::

---

## micro:bit Integration Practice Exercises

### Exercise 1

Create a MakeCode program that sends 0/1 (0: not pressed, 1: pressed) to `/buttonA` and `/buttonB` addresses when buttons A and B are pressed, and create a Pd patch to receive them.

::: details Hint
In MakeCode, use "on button A pressed" → `serial write value "buttonA" = 1`, and "on button A released" → `serial write value "buttonA" = 0`. In Pd, connect `else/osc.receive 8000` → `else/osc.route /buttonA /buttonB` → number boxes.
:::

### Exercise 2

Create a patch that plays a sine wave continuously at **500 Hz** when button A is pressed and at **1000 Hz** when button B is pressed.

::: details Hint
Connect `osc.route /buttonA /buttonB` → `sel 1` to output a bang when each button is pressed (value = 1). Send the corresponding frequency as a message to `osc~`. Combine with a toggle to hold the ON/OFF state.
:::

### Exercise 3

Using **arithmetic operations**, display a value that converts the light sensor range to approximately **0–100**.

::: details Hint
The light sensor outputs 0–255. Connect `/ 255` → `* 100` in sequence to convert to 0–100 (you can also use `expr $f1 / 255 * 100`).
:::

### Exercise 4

Using **`scale` and `clip`**, display a value that converts the light sensor range to exactly **0–100**.

::: details Hint
Use `cyclone/scale 0 255 0 100` for mapping, then `clip 0 100` to ensure the range is strictly limited.
:::

### Exercise 5

Appropriately convert the light sensor value and create a **theremin** whose frequency changes.

::: details Hint
Map the light sensor value using `cyclone/scale` to a suitable frequency range (e.g., 200–2000 Hz) and connect to the frequency inlet of `osc~`.
:::

### Exercise 6

Convert the light sensor value so that it shows **a value greater than 0** when a smartphone light is shone on the micro:bit, and **always 0** when no light is shone (mapping no-light brightness to 0, lit brightness to 100).

::: details Hint
First check the ambient brightness (value with no light). Subtract that value using `-`, apply `clip 0 255` to set the lower limit to 0, then use `cyclone/scale` to convert to 0–100.
:::

### Exercise 7

Using the function from Exercise 6, create a feature that plays a **1000 Hz sine wave with a 1-second decay** when a smartphone light is shone on the micro:bit.

::: details Hint
Convert the output of Exercise 6 to a bang using `> 0` → `sel 1`, then route bang → `vline~` envelope (e.g., `1 0, 0 1000 0`) → `*~` → `output~`. Refer to the decay sound patch from Lesson 3 Exercise 6.
:::

---

## Advanced Practice Exercises

### Advanced 1

Convert the sound sensor value so that it shows **a value greater than 0** when clapping near the micro:bit, and **always 0** when not clapping.

::: details Hint
Check the ambient sound sensor value (background noise). Subtract that value using `-`, clip below-zero results to 0 with `clip 0 255`, then map to an appropriate range using `cyclone/scale`.
:::

### Advanced 2

Using the patch from Advanced Exercise 1, create a feature that plays a **1000 Hz sine wave with a 1-second decay** when clapping.

::: details Hint
Convert the output of Advanced 1 to a bang using `> 0` → `sel 1`, then route bang → `vline~` envelope (e.g., `1 0, 0 1000 0`) → `*~` → `output~`.
:::

### Advanced 3

Add **smoothing** to the patch from Exercise 2 so that the frequency changes gradually when switching (the pitch gradually rises or falls).

::: details Hint
Process the frequency value through `sig~` → `else/smooth~` → `else/s2f~` before connecting to `osc~`. A larger argument to `else/smooth~` gives a slower, smoother transition.
:::

### Advanced 4

With white noise being generated, vary the **low-pass filter cutoff frequency** according to the sound sensor level. Add appropriate mapping and smoothing so that the sound changes naturally.

::: details Hint
Connect `noise~` → `lop~` → `output~`. Map the sound sensor value using `cyclone/scale` to a suitable frequency range (e.g., 200–5000 Hz), smooth it with `sig~` → `else/smooth~` → `else/s2f~`, and connect to the right inlet of `lop~`.
:::
