# Lesson 13: Exhibition & Survey

Present your interactive sound art to an audience and collect evaluation data through surveys.

## Goals for This Lesson

- Set up and exhibit your work for other participants
- Guide visitors through the experience
- Collect survey responses using the SD method, UEQ-S, and free-text questions
- Gather enough data for meaningful analysis

---

## Exhibition Flow

### Before the Exhibition

1. **Set up your station** -- Connect the micro:bit, launch the Pd patch, position speakers
2. **Place the caption** -- Display your caption card next to the work
3. **Prepare survey access** -- Print or display the QR code linking to your Google Form
4. **Test everything** -- Verify sound, sensors, and the survey link all work correctly
5. **Set a comfortable volume** -- Adjust volume to a level suitable for the exhibition space

### During the Exhibition

Each visitor's experience should follow this sequence:

| Step | Duration | Description |
|------|----------|-------------|
| 1. Arrival | -- | Greet the visitor; let them read the caption |
| 2. Free exploration | 2--3 min | Let the visitor interact with the work freely |
| 3. Guided exploration | 1--2 min | If needed, point out features they may have missed |
| 4. Survey | 3--5 min | Ask them to fill out the survey on their phone or a provided device |

::: tip Guiding Visitors
- Let visitors explore on their own first before offering guidance
- Watch for signs of confusion and offer minimal hints only when needed
- Avoid over-explaining; let the work speak for itself
- Thank each visitor for their time and feedback
:::

### After the Exhibition

1. Close the survey and check the number of responses
2. Download the response data from Google Forms
3. Save your Pd patch and any configuration notes

::: warning Aim for Enough Responses
Try to collect at least **8--10 survey responses** for meaningful analysis. More responses produce more reliable results.
:::

---

## SD Method Survey

The SD method survey measures the **impressions** your work evokes using pairs of opposing adjectives. Each pair is rated on a 7-point scale.

### What the Respondent Does

For each adjective pair, the respondent selects the point that best matches their impression.

```
Bright  o---o---o---o---o---o---o  Dark
         3   2   1   0  -1  -2  -3
```

### Key Reminders

- Instruct respondents to answer **intuitively** without overthinking
- Randomize the left/right placement of positive and negative adjectives to avoid response bias
- Make sure all items are set to **required** in the form

For full details, see the [SD Method](../evaluation/sd-method) reference page.

---

## UEQ-S Survey

The UEQ-S measures **user experience quality** across two dimensions: pragmatic quality (usability) and hedonic quality (enjoyment and novelty).

### The 8 Items

Respondents rate 8 adjective pairs on a 7-point scale:

**Pragmatic Quality (items 1--4):**
1. Obstructive --- Supportive
2. Complicated --- Easy
3. Inefficient --- Efficient
4. Confusing --- Clear

**Hedonic Quality (items 5--8):**
5. Boring --- Exciting
6. Not interesting --- Interesting
7. Conventional --- Inventive
8. Usual --- Leading edge

### Key Reminders

- Keep the items in the standard order listed above
- Respondents should answer based on their **experience using the work**, not its appearance alone
- The form should include the instruction: "Please respond intuitively -- do not overthink."

For full details, see the [UEQ-S](../evaluation/ueq-s) reference page.

---

## Free-Text Survey

In addition to the rating scales, include at least one open-ended question to capture qualitative feedback.

### Suggested Questions

- "Please share any thoughts, impressions, or suggestions about this work."
- "What was the most memorable part of the experience?"
- "Is there anything you would change or add?"

### Why Free Text Matters

Rating scales tell you **how much** people liked or disliked certain aspects, but free-text responses tell you **why**. These comments often reveal insights that structured questions miss.

---

## Checklist

- [ ] Work is set up and running stably
- [ ] Caption is displayed
- [ ] Survey QR code or link is accessible to visitors
- [ ] Collected at least 8--10 survey responses
- [ ] Downloaded survey response data from Google Forms
- [ ] Saved the Pd patch and configuration
