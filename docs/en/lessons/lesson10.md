# Lesson 10: Evaluation Using the Think-Aloud Protocol

Pair up with a classmate, experience each other's work, and use the Think-Aloud Protocol to discover areas for improvement.

## Goals for This Lesson

- Understand and practice the Think-Aloud Protocol
- Have someone else experience your work and gather feedback from a user's perspective
- Develop an improvement plan based on discovered issues

## What You Need

| Item | Description |
|------|-------------|
| Your work | In a state where sound plays and can be controlled with sensors |
| Notebook and pen | For observation notes |
| Work description sheet | The one you created in the previous lesson |

---

## What Is the Think-Aloud Protocol?

### Overview

The **Think-Aloud Protocol** is a well-known usability evaluation method. You ask an evaluator to use your work while **speaking their thoughts out loud as they go**. This reveals intuitive reactions and points of confusion.

### Why Use the Think-Aloud Protocol?

| Typical Feedback | Think-Aloud Protocol |
|-----------------|---------------------|
| Ask for impressions after the experience | Listen to thoughts in real time during the experience |
| Relies on memory, which can be inaccurate | Captures honest, in-the-moment reactions |
| Tends to be vague: "it was nice" | Reveals specifics: "what is this supposed to do?" |
| Problems may be forgotten | Identifies the exact moment of confusion |

::: tip Benefits of the Think-Aloud Protocol
- Useful feedback can be gathered from just 1--2 people
- Pinpoints exactly where your work is hard to understand
- Reveals problems and qualities the creator never noticed
:::

---

## Procedure

### Roles

- **Evaluator (the person experiencing the work)**: Experience the partner's work while verbalizing thoughts
- **Observer (the creator)**: Watch the evaluator's actions, comments, and expressions, and take notes

### Steps

#### 1. Setup (2 minutes)

1. Set up the work (connect the micro:bit, launch the Pd patch)
2. Keep captions and the work description sheet **out of sight** (let the evaluator experience the work without explanation first)
3. Have the observation sheet ready

::: warning Important: Do Not Explain First
In the Think-Aloud Protocol, you do not explain how to operate the work at the start. The purpose is to see "how much is communicated without explanation." Only give minimal hints if the evaluator becomes completely stuck.
:::

#### 2. Explain the Method (1 minute)

The observer tells the evaluator:

> "I'd like you to experience my work. While you do, please **say whatever comes to mind out loud**. For example, 'What's this?', 'Oh, the sound changed when I did that', 'Let me try this next' -- just verbalize whatever you are thinking."

#### 3. Experience and Observation (5 minutes)

**What the evaluator does:**
- Freely interact with the work
- Continuously speak their thoughts aloud
- Describe "what they are trying to do," "what happened," and "how they feel"

**What the observer does:**
- Take notes on the evaluator's **comments**
- Watch the evaluator's **facial expressions** (smiles, puzzlement, surprise, etc.)
- Record moments where the evaluator **struggles with the controls**
- If silence persists, prompt with "What are you thinking right now?"
- If the evaluator is completely stuck, provide minimal hints

::: tip Prompting Phrases
- "What are you thinking right now?"
- "What are you trying to do?"
- "What just happened when you did that?"
- "Is there anything that caught your attention?"
:::

#### 4. Post-Experience Interview (3 minutes)

After the experience, ask these questions:

1. **Overall impression** -- "How was the experience?"
2. **Highlights** -- "What part did you find most interesting?"
3. **Confusing parts** -- "Was there anything where you felt lost?"
4. **Improvement ideas** -- "Is there anything you think would make it better?"

#### 5. Switch Roles

Swap evaluator and observer roles and repeat the process.

---

## Observation Record Sheet

Use the following format to record your observations.

### Template

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Think-Aloud Protocol Observation Record
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Evaluator Name]
[Work Title]
[Date]

■ During the Experience

| Time | Evaluator's Action | Evaluator's Comment | Expression / Reaction |
|------|-------------------|--------------------|-----------------------|
| 0:30 | Picked up the micro:bit | "Am I supposed to move this?" | Slightly confused |
| 1:00 | Tilted left and right | "Oh, the sound changed!" | Surprised, smiling |
| 1:30 | Covered it with hand | "When it gets dark... ah, different sound" | Interested |
| 2:00 | Looking for buttons | "Can I do anything else?" | Exploring |

■ Positive Points / Interesting Moments



■ Confusing Points / Moments of Hesitation



■ Improvement Ideas (from the evaluator)



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Organizing Your Notes

### Classify Your Findings

Sort the recorded observations into the following three categories.

#### Positive Points

- Moments where the evaluator said "This is cool!"
- Smiles or surprised reactions
- Moments of intuitive interaction

#### Confusing Points

- Moments where the evaluator said "What is this?"
- Moments when they stopped, unsure how to operate
- Actions that differed from the intended interaction
- Moments of puzzlement ("Huh?")

#### Improvement Ideas

- Suggestions from the evaluator
- Improvements you noticed from observing
- Insights like "maybe this change would communicate better"

---

## Creating an Improvement Plan

### Prioritizing Issues

Rank the discovered issues using these criteria:

| Priority | Criteria | Example |
|----------|----------|---------|
| **High** | Operation is completely unclear | Sensor usage is not intuitive |
| **High** | Concept does not come across | Cannot tell what is being expressed |
| **Medium** | Usable but could be better | Sound changes could be more dramatic |
| **Medium** | Could increase satisfaction | Adding effects would enhance the experience |
| **Low** | Minor adjustments | Fine-tuning volume balance |

### Listing Improvements

For each issue, identify a technically feasible improvement.

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Improvement Plan Sheet
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Issue 1: (e.g., Tilting produces very little sound change)
  Priority: High
  Solution: Widen the sensor value mapping range
  Pd fix: Use [* 3] to triple the sensor value

Issue 2: (e.g., Nobody could tell what the piece represents)
  Priority: High
  Solution: Add ambient sound (wave sounds) in the background
  Pd fix: Loop a wave audio file with [readsf~]

Issue 3: (e.g., Button function was unclear)
  Priority: Medium
  Solution: Change the LED display when the button is pressed
  micro:bit fix: Show a different icon when button A is pressed

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

::: tip Looking Ahead
Use this improvement plan to refine your work in Lessons 11 and 12. You do not need to fix every issue. Focus on the **high-priority** items.
:::

---

## Checklist

- [ ] Understood the Think-Aloud procedure
- [ ] Experienced a partner's work and verbalized my thoughts
- [ ] Recorded observations on the observation sheet
- [ ] Organized the positive and confusing points
- [ ] Created an improvement plan
