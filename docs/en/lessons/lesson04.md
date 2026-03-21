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

## Practice Exercises

### Exercise 1: Light-Controlled Sine Wave

Receive the micro:bit light sensor value in Pd and use it to control the frequency of a sine wave (mapping 0--255 to 200--2000 Hz). Apply smoothing so the pitch changes gradually.

::: details Hint
Use `cyclone/scale 0 255 200 2000` to map the value, then `else/lowpass 10` to smooth it, and connect to `osc~`.
:::

### Exercise 2: Acceleration Threshold Trigger

Receive the accelerometer's strength value and play a drum sample only when the value exceeds a threshold (e.g., 600). Use `moses` for the threshold detection.

::: details Hint
Connect the acceleration strength value to `moses 600`. The right outlet triggers a bang that plays a sound with `else/play.file~`.
:::

### Exercise 3: Multi-Sensor Instrument

Create a patch that uses at least two different sensor values simultaneously: one for pitch and one for volume (or filter cutoff). Normalize, clip, and smooth all values.

::: details Hint
For example, use light level for pitch (mapped to frequency) and acceleration Y for volume (mapped to 0--1). Use `clip 0 1` on the volume value and `else/lowpass` on both values.
:::
