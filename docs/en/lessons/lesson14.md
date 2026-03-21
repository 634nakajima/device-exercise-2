# Lesson 14: Survey Analysis

Analyze the survey data collected during the exhibition to evaluate your work objectively and identify areas for future improvement.

## Goals for This Lesson

- Analyze SD method survey results and create a profile graph
- Analyze UEQ-S survey results and interpret pragmatic and hedonic quality scores
- Review free-text responses for themes and insights
- Formulate discussion points and improvement directions

---

## SD Method Analysis

### Step 1: Download the Data

1. Open your Google Form → "Responses" tab
2. Click the green spreadsheet icon to open responses in Google Sheets
3. Download as Excel (.xlsx): **File → Download → Microsoft Excel**

### Step 2: Calculate Averages

In Excel or Google Sheets:

1. In a row below the response data, type "Average"
2. For each adjective pair column, calculate the mean using `=AVERAGE(B2:B11)` (adjust the range to match your number of responses)

### Step 3: Create a Profile Graph

1. Select the adjective pair labels and their average values
2. Insert a **line chart**:
   - X-axis: Adjective pairs (show the left-side adjective)
   - Y-axis: Average value (1--7)
   - Add a reference line at 4.0 (the neutral midpoint) for easier reading

::: details What the Graph Looks Like
```
     1    2    3    4    5    6    7
Bright ─────────●─────────────────── Dark
Harmonious ────────────●──────────── Disjointed
Spacious ──────●───────────────────── Cramped
Unique ────●─────────────────────── Common
     ...
```
Each item's average is plotted as a point and connected with a line. This is called an **SD profile graph**.
:::

### Step 4: Interpretation

Examine the graph and consider:

- **Did the intended impressions come through?**
  - If you aimed for a "dreamy atmosphere," check the "fantastical vs. realistic" score
- **Which impressions were strongest or weakest?**
  - Look for items where the average is far from the center
- **Were there unexpected results?**
  - If an unintended impression scored high, consider why

---

## UEQ-S Analysis

### Step 1: Download the Data

Same as the SD method -- download the response data from Google Sheets as an Excel file.

### Step 2: Convert Scores

Convert the raw responses (1--7) to UEQ-S analysis scores (-3 to +3):

**Conversion: response value - 4 = score**

| Response | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|----------|---|---|---|---|---|---|---|
| Score | -3 | -2 | -1 | 0 | +1 | +2 | +3 |

::: tip Using the Official Analysis Sheet
If you use the official UEQ-S Excel analysis sheet (available from the [UEQ website](https://www.ueq-online.org/)), the conversion is done automatically. Just paste the raw 1--7 values into the "Data" sheet.
:::

### Step 3: Calculate Dimension Scores

- **Pragmatic Quality (PQ)**: Average of items 1--4
- **Hedonic Quality (HQ)**: Average of items 5--8
- **Overall**: Average of all 8 items

### Step 4: Interpret the Results

| Score Range | Interpretation |
|-------------|---------------|
| +1.0 or above | Positive evaluation |
| -1.0 to +1.0 | Neutral (neither positive nor negative) |
| -1.0 or below | Negative evaluation |

### Understanding PQ and HQ Balance

| Pattern | Interpretation | Improvement Direction |
|---------|---------------|----------------------|
| PQ high, HQ high | Ideal experience | Maintain and refine |
| PQ high, HQ low | Easy to use but boring | Add surprise, variety, or novelty |
| PQ low, HQ high | Interesting but hard to use | Improve usability, add guidance |
| PQ low, HQ low | Needs significant improvement | Reconsider the core concept |

### Benchmark Comparison

The official UEQ-S analysis sheet includes benchmark data from other products. Compare your scores:

| Benchmark Category | Meaning |
|-------------------|---------|
| Excellent | Top 10% |
| Good | Top 25% |
| Above Average | Top 50% |
| Below Average | Bottom 50% |
| Bad | Bottom 25% |

---

## Free-Text Analysis

### Organizing Comments

1. Read through all free-text responses
2. Group similar comments into themes (e.g., "sound quality," "interaction clarity," "emotional response")
3. Count how many respondents mentioned each theme
4. Highlight any particularly insightful or surprising comments

### Common Themes to Look For

| Theme | Example Comments |
|-------|-----------------|
| Interaction clarity | "I didn't know what to do at first" / "Very intuitive" |
| Sound quality | "The sound was beautiful" / "A bit harsh" |
| Emotional impact | "It felt calming" / "Made me curious" |
| Novelty | "Never experienced anything like this" |
| Suggestions | "Would be cool if it also responded to voice" |

---

## Discussion Points

Use your analysis to address the following questions. These will form the basis of your final presentation.

### 1. Did Your Concept Come Through?

Compare your intended motif and impressions with the actual SD method results. Where did they align? Where did they diverge?

### 2. How Was the User Experience?

Look at the UEQ-S scores. Was the work easy to use? Was it engaging and novel? What does the PQ/HQ balance tell you?

### 3. What Would You Change?

Based on all three data sources (SD, UEQ-S, free text), identify the top 2--3 improvements you would make if you had more time.

### 4. What Did You Learn?

Reflect on what you discovered about designing interactive experiences. What surprised you most about how people experienced your work?

---

## Preparing Slides

Summarize your analysis on 3--4 slides for the final presentation:

**Slide 1: SD Method Results**
- Profile graph
- Number of respondents
- Key findings (strongest/weakest impressions)

**Slide 2: UEQ-S Results**
- PQ and HQ scores with graph
- Benchmark comparison (if available)
- Key findings

**Slide 3: Free-Text Highlights**
- 2--3 representative quotes (with permission)
- Common themes

**Slide 4: Discussion and Reflection**
- Concept alignment
- Improvement ideas
- What you learned

---

## Checklist

- [ ] Calculated SD method averages and created a profile graph
- [ ] Calculated UEQ-S PQ and HQ scores
- [ ] Interpreted the PQ/HQ balance
- [ ] Read and organized free-text responses
- [ ] Identified discussion points
- [ ] Started preparing presentation slides
