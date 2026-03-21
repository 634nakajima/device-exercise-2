# SD Method (Semantic Differential Method)

## What Is the SD Method?

The **SD method** is a technique for quantifying the "impressions" people have of something. It was proposed by Osgood in 1957.

For example, when listening to a piece of music, you might get impressions like "bright," "relaxed," or "natural." The SD method **converts these hard-to-articulate feelings into numbers so they can be analyzed objectively**.

## An Everyday Example

When recommending your favorite cafe to a friend, you might say something like:

> "That cafe has a really calm atmosphere, it's stylish but casual, not too bright and not too dark..."

The SD method does this systematically. You prepare **adjective pairs** such as "calm vs. noisy," "stylish vs. plain," and "bright vs. dark," and ask respondents to rate each on a scale.

## How It Works

### Adjective Pairs

The SD method uses pairs of adjectives with opposite meanings. These are called "adjective pairs."

```
Bright ──────────── Dark
Flashy ──────────── Subdued
Comfortable ──────────── Uneasy
```

### Rating Scale

For each adjective pair, respondents answer on a 7-point (or 5-point) scale.

```
Bright  o---o---o---o---o---o---o  Dark
         3   2   1   0  -1  -2  -3

(Neutral is 0 in the center)
```

- If the impression is closer to the left adjective, mark toward the left
- If closer to the right adjective, mark toward the right
- If neither applies, mark the center

## Adjective Pairs Used in This Course

The following 20 items serve as the default set. Add or modify items as needed for your work.

| # | Left (positive-leaning) | Right (negative-leaning) |
|---|------------------------|--------------------------|
| 1 | Bright | Dark |
| 2 | Harmonious | Disjointed |
| 3 | Spacious | Cramped |
| 4 | Unique | Common |
| 5 | Flashy | Subdued |
| 6 | Lively | Lonely |
| 7 | Beautiful | Ugly |
| 8 | Dynamic | Static |
| 9 | Complex | Simple |
| 10 | Fantastical | Realistic |
| 11 | Comfortable | Uneasy |
| 12 | Active | Passive |
| 13 | Natural | Artificial |
| 14 | Vivid | Dull |
| 15 | Energetic | Calm |
| 16 | Attractive | Boring |
| 17 | Novel | Old-fashioned |
| 18 | Memorable | Forgettable |
| 19 | Emotional | Detached |
| 20 | Powerful | Underwhelming |

::: tip Choosing Adjective Pairs
The list above is a starting point. Adding adjective pairs related to your work's concept makes the analysis more meaningful. For example, if your motif is "the ocean," consider adding pairs like "cool vs. warm" or "open vs. enclosed."
:::

## Creating a Survey with Google Forms

### Step 1: Create the Form

1. Open [Google Forms](https://forms.google.com)
2. Select "Blank form"
3. Enter a title (e.g., "Impression Survey for [Work Title]")
4. Add a description:

```
Please rate your impressions after experiencing this work.
For each adjective pair, select the point closest to your impression.
```

### Step 2: Create the Questions

For each adjective pair:

1. Click the "Add question" (+) button
2. Change the question type to **"Linear scale"**
3. Set the scale from 1 to 7
4. Set the labels:
   - Label for 1: Left-side adjective (e.g., "Bright")
   - Label for 7: Right-side adjective (e.g., "Dark")
5. Turn on "Required"

::: warning Note on Ordering
It is good practice to **randomize** the left/right placement of positive and negative adjectives. If all positive adjectives are on the same side, respondents may fall into a "response bias" of marking the same side without thinking.
:::

### Step 3: Collect Responses

1. Click the "Send" button in the top right
2. Click the link icon to get the URL
3. Share the URL with visitors and have them respond after experiencing the work

## Data Analysis Steps

### Step 1: Download the Data

1. Open the "Responses" tab in Google Forms
2. Click the spreadsheet icon (green)
3. A new spreadsheet opens
4. Go to **File → Download → Microsoft Excel (.xlsx)**

### Step 2: Calculate Averages

In Excel, calculate the mean for each adjective pair:

1. In the row below the response data, type "Average"
2. For each column (adjective pair), enter a formula like `=AVERAGE(B2:B11)`
   - Adjust B2:B11 to match your actual response range

### Step 3: Create a Profile Graph

1. Select the adjective pair names and their average values
2. Go to **Insert → Chart → Line Chart**
3. Configure the chart:
   - X-axis: Adjective pairs (display the left-side adjective)
   - Y-axis: Average value (1--7)
   - Add a reference line at 4.0 for easier reading

::: details Graph Example
```
     1    2    3    4    5    6    7
Bright ─────────●─────────────────── Dark
Harmonious ────────────●──────────── Disjointed
Spacious ──────●───────────────────── Cramped
Unique ────●─────────────────────── Common
     ...
```
Each item's average is plotted as a point and connected with a line. This is an SD method profile graph.
:::

### Step 4: Discussion

Examine the graph and consider:

- **Did your intended impressions come through?**
  - If you aimed for a "dreamy atmosphere," check the "fantastical vs. realistic" score
- **Which impressions were strongest or weakest?**
  - Focus on items with average values far from the center
- **Were there unexpected results?**
  - If an unintended impression scored high, think about why

::: tip Evaluating at Different Stages
If you expect significant impression changes during the experience, have respondents answer at multiple points (e.g., "when you first saw the work," "when you touched the device," "after the experience"). Create separate sections within the same form.
:::

## Summarizing in Slides

Summarize your analysis on 1--2 slides:

**Slide 1: Graph and Overview**
- SD method profile graph
- Number of respondents and work title

**Slide 2: Discussion**
- Notable impressions (high/low scores)
- Alignment with intent
- Improvement ideas
