# Lesson 12: Refinement

Polish your work's audio quality, create captions for exhibition, and prepare surveys for evaluating the audience experience.

## Goals for This Lesson

- Refine your sound art piece based on previous feedback
- Create a caption (exhibition description) for your work
- Prepare survey forms for evaluating your piece (SD method and UEQ-S)

---

## Audio Polishing

### Reviewing Feedback

Start by revisiting the Think-Aloud Protocol results from Lesson 10 and your improvement plan. Focus on the **high-priority issues** first.

Common areas for improvement:

| Area | What to Look For | Pd Techniques |
|------|-----------------|---------------|
| Volume balance | Are all sounds at appropriate levels? | Adjust `[*~]` values throughout the patch |
| Noise and clicks | Are there unwanted pops or clicks? | Use `[line~]` or `[vline~]` for smooth transitions |
| Responsiveness | Does the sound react quickly enough to sensor input? | Reduce smoothing values; adjust `[else/lowpass]` |
| Dynamic range | Is there enough contrast between quiet and loud? | Expand mapping ranges with `[cyclone/scale]` |
| Spatial quality | Does the sound fill the space appropriately? | Add reverb, adjust delay times, use multichannel output |

### Sound Design Checklist

- [ ] No unwanted silence when the piece starts
- [ ] Smooth transitions between different states
- [ ] No distortion (all signals stay below 1.0)
- [ ] Audio is comfortable at exhibition volume levels
- [ ] The piece works reliably over extended periods

::: tip Testing for Extended Use
Your work will be running for an extended period during the exhibition. Test it for at least 5--10 minutes continuously to catch any issues with memory, stability, or gradual drift in sound quality.
:::

---

## Caption Creation

### What Is a Caption?

A **caption** is the text panel displayed alongside your work at the exhibition. It gives visitors the essential context to understand and appreciate the piece.

### Caption Structure

A good caption includes:

1. **Title** -- The name of your work
2. **Artist name** -- Your name
3. **Concept statement** (2--3 sentences) -- What you are expressing and why
4. **How to interact** -- Brief instructions on how to use the work
5. **Technical credits** (optional) -- Tools and materials used

### Writing Tips

- **Keep it concise**: Visitors read captions quickly. Aim for 50--100 words.
- **Lead with the experience**: Describe what the audience will feel or discover, not the technology.
- **Include interaction cues**: Use clear, action-oriented language. "Tilt the device to explore the underwater world" is better than "the accelerometer controls frequency."
- **Avoid jargon**: Do not mention "OSC," "Pd," or "osc~" in the caption.

### Caption Template

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Title of Your Work]
[Your Name]

[Concept: 2--3 sentences describing what the piece
 expresses and what experience it offers]

How to interact:
- [Action 1]: [What happens]
- [Action 2]: [What happens]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Example

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Deep Sea Walk
Taro Yamada

Dive into an imaginary ocean where sound changes
with depth. Tilt the device to descend into the
deep sea, where low, resonant tones surround you.
Cover the sensor to hear the bubbles rise.

How to interact:
- Tilt forward/backward: Change your depth
- Cover the sensor with your hand: Trigger bubbles

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Survey Preparation

### Overview of Surveys

You will prepare three types of surveys for the exhibition in Lesson 13:

1. **SD Method survey** -- Measures impressions using adjective pairs
2. **UEQ-S survey** -- Measures user experience quality
3. **Free-text survey** -- Collects open-ended feedback

### Creating the Google Forms

Refer to the detailed instructions on the [SD Method](../evaluation/sd-method) and [UEQ-S](../evaluation/ueq-s) pages for step-by-step form creation guides.

### Survey Design Tips

- **Put all three surveys in a single Google Form** with clearly labeled sections
- Add a **section header** before each survey part explaining what the respondent should do
- Include a **"Which work did you experience?"** question at the top if multiple works are being evaluated
- Set all rating questions as **required**
- Add a **free-text question** at the end: "Please share any other thoughts, suggestions, or comments about this work."
- Test your form by filling it out yourself before the exhibition

::: warning Timing
Make sure your surveys are ready **before** Lesson 13 (the exhibition). You will not have time to create them during the exhibition itself.
:::

---

## Checklist

- [ ] Addressed high-priority issues from the Think-Aloud feedback
- [ ] Audio plays smoothly without clicks, pops, or distortion
- [ ] Work runs stably for extended periods
- [ ] Caption is written and formatted
- [ ] SD Method survey is created in Google Forms
- [ ] UEQ-S survey is created in Google Forms
- [ ] Free-text question is included
- [ ] Survey form has been tested
