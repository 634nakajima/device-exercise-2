# UEQ-S (User Experience Questionnaire - Short Version)

## What Is UEQ-S?

**UEQ-S** is a questionnaire method for conveniently measuring the **quality of user experience (UX)** of a product or service. With just **8 questions**, you can objectively quantify how good or bad the experience was.

::: tip Difference from the SD Method
- **SD method** → Measures the "impression" of a work (bright, flashy, natural, etc.)
- **UEQ-S** → Measures the "quality of the experience" of a work (easy to use, interesting, novel, etc.)

The SD method asks "what does it feel like?" while UEQ-S asks "how was it to use?"
:::

## What Is UX (User Experience)?

UX is the overall quality of a user's experience with a product or service. Consider a smartphone app as an example:

**Usability (Pragmatic Quality)**
- Menus are easy to understand
- You do not get lost navigating
- You can accomplish what you want quickly

**Enjoyment and Appeal (Hedonic Quality)**
- The design is attractive
- Using it is fun
- It offers an experience you cannot get elsewhere

Good UX means these two dimensions are well balanced.

## The 8 Question Items

UEQ-S asks respondents to rate 8 adjective pairs on a 7-point scale.

### Pragmatic Quality Items (Items 1--4)

| # | Left | Right | What It Measures |
|---|------|-------|-----------------|
| 1 | Obstructive | Supportive | Whether the work helps the user's actions |
| 2 | Complicated | Easy | Difficulty of operation and understanding |
| 3 | Inefficient | Efficient | Effort required to achieve the goal |
| 4 | Confusing | Clear | Clarity of controls and responses |

### Hedonic Quality Items (Items 5--8)

| # | Left | Right | What It Measures |
|---|------|-------|-----------------|
| 5 | Boring | Exciting | How engaging and thrilling the experience is |
| 6 | Not interesting | Interesting | Whether it sparks curiosity |
| 7 | Conventional | Inventive | Novelty and originality |
| 8 | Usual | Leading edge | Sense of innovation |

::: details How Respondents Answer
```
Obstructive  o---o---o---o---o---o---o  Supportive
              1   2   3   4   5   6   7
```
For each item, select 1 if it feels close to the left adjective, 7 if close to the right.
:::

## Creating a Survey with Google Forms

### Step 1: Create the Form

1. Open [Google Forms](https://forms.google.com)
2. Select "Blank form"
3. Title: "UX Evaluation Survey for [Work Title]"
4. Add a description:

```
Please rate your experience with this work on each of the following items.
For each adjective pair, select the point closest to your experience.
Please respond intuitively -- do not overthink.
```

### Step 2: Create the Questions

For each of the 8 adjective pairs:

1. Click the "Add question" (+) button
2. Change the question type to **"Linear scale"**
3. Set the scale from 1 to 7
4. Set the labels:
   - Label for 1: Left-side adjective
   - Label for 7: Right-side adjective
5. Turn on "Required"

::: warning Order Matters
Keep the UEQ-S questions in the order listed above. This format has been validated through research, and changing the order may affect the validity of the results.
:::

## Data Analysis Steps

### Step 1: Download the Data

1. Open the "Responses" tab in Google Forms
2. Click the spreadsheet icon
3. Go to **File → Download → Microsoft Excel (.xlsx)**

### Step 2: Convert Scores

Convert the response values (1--7) to UEQ-S analysis scores (-3 to +3).

**Conversion formula:** response value - 4 = score

| Response | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|----------|---|---|---|---|---|---|---|
| Score | -3 | -2 | -1 | 0 | +1 | +2 | +3 |

::: warning About Negative-Left Items
Items 1--4 (pragmatic quality) have the negative adjective on the left, so the conversion works straightforwardly. Items 5--8 (hedonic quality) follow the same pattern.

However, if you use the **official analysis sheet**, the conversion is handled automatically, so you can skip this step.
:::

### Step 3: Use the Analysis Sheet (Recommended)

An official Excel analysis sheet is available for UEQ-S.

1. Open the analysis sheet (distributed in class or download from the [UEQ website](https://www.ueq-online.org/))
2. **Duplicate** the sheet before use
3. Paste the response data (1--7 values) into the "Data" sheet
4. The "Results" sheet will automatically generate graphs

### Step 4: Interpreting the Results

The analysis sheet generates graphs that include:

#### Average Score Graph

```
              -3   -2   -1    0   +1   +2   +3
              |    |    |    |    |    |    |
Pragmatic PQ  ─────────────────────■■■■■─────
Hedonic   HQ  ──────────────────────────■■■■■
Overall       ───────────────────────■■■■──
```

- **+1.0 or above**: Positive evaluation
- **-1.0 to +1.0**: Neutral
- **-1.0 or below**: Negative evaluation

#### Benchmark Comparison

The analysis sheet includes benchmark data from other products' UEQ-S results, allowing you to compare your work.

| Benchmark Category | Meaning |
|-------------------|---------|
| Excellent | Top 10% |
| Good | Top 25% |
| Above Average | Top 50% |
| Below Average | Bottom 50% |
| Bad | Bottom 25% |

## Interpreting the Results

### High Pragmatic Quality (PQ)
→ Operation was intuitive and easy to understand

### Low Pragmatic Quality (PQ)
→ Operation was confusing; responses did not match expectations
→ **Improvements**: Add operating instructions to the caption, adjust sensor sensitivity

### High Hedonic Quality (HQ)
→ The experience was novel, interesting, and exciting

### Low Hedonic Quality (HQ)
→ The experience felt generic or unremarkable
→ **Improvements**: Add surprise to the interaction, enhance the audio design

### PQ and HQ Balance

| Pattern | Interpretation | Improvement Direction |
|---------|---------------|----------------------|
| PQ high, HQ high | Ideal experience | Maintain and polish further |
| PQ high, HQ low | Easy to use but boring | Add creative elements and surprise |
| PQ low, HQ high | Interesting but hard to use | Improve usability, add guidance |
| PQ low, HQ low | Needs major improvement | Reconsider the core concept |

## Summarizing in Slides

Summarize your analysis on 1--2 slides:

**Slide 1: UEQ-S Results Graph**
- Pragmatic quality and hedonic quality score graph
- Benchmark comparison (if available)
- Number of respondents

**Slide 2: Discussion**
- PQ/HQ balance interpretation
- Notably high or low items
- Improvement ideas
