---
title: "Calendar"
description: "The month grid, the month's figures, and the monthly review note — and why a trade's day does not move with your timezone."
---

# Calendar

The Calendar shows your trading one month at a time: a grid of days, what the month came to, the trades and notes behind it, and a place to write your **monthly review**.

Like every screen it follows the account switcher in the sidebar. **All Accounts** means all of your real accounts; a demo account is only shown on its own.

::: info Where the weekly review went
Earlier versions of tickerlog had a separate Review screen that worked week by week. It has been folded into the Calendar and now works by month, so there is one place to look back on a period and one note to write about it.
:::

## Choosing a month

The Calendar opens on the current month. The control in the page header moves between months:

| Control | What it does |
|---|---|
| **‹** (Previous month) | Steps back one month. |
| ***Month Year*** | Opens a picker: step the year with **‹** and **›**, then press a month (**Jan** … **Dec**) to jump straight to it. |
| **›** (Next month) | Steps forward one month. |

## The month grid

Weeks run **Monday to Sunday**. Days from the neighbouring months fill out the first and last rows in a lighter shade; they are there for context only and never carry figures. The 1st of a month is labelled with its month name (for example **Jun 1**) so the boundary is easy to spot.

A day you traded shows:

- its **total P&L** for the day, green or red, and
- the number of trades, for example **3 trades**.

**Click a traded day** to open the [Trades](/trades/trades-screen) screen narrowed to that single day. Days with no trades are not clickable.

On narrow screens the grid keeps its seven columns and scrolls sideways, rather than squeezing each day too small to read.

### Which day a trade counts on

- A trade is counted on the day it was **entered**, not the day it closed.
- Days and months are calculated in **UTC**. Changing your display timezone in [Settings → General](/settings/general) changes how times are printed, but never moves a trade to a different day or month. That keeps your daily and monthly figures stable.
- An open trade adds to the day's trade count but not to its P&L, because it has no result yet.

## Day summary cards

| Card | Shows |
|---|---|
| **Monthly breakdown** | How your *days* split: **Winning days**, **Losing days** and **Breakeven days**, each with a count and a percentage of the days you traded, plus a bar. A month can have mostly winning days and still be down overall — this card answers a different question from the P&L. |
| **Best day** | The date and P&L of the month's best day, and how many trades it had. |
| **Worst day** | The date and P&L of the month's worst day. |
| **Most active day** | The date with the most trades, and that day's P&L. |

In a month with no trades these cards say **Nothing traded this month.**

## Month figures

Five tiles, each compared with the month before:

| Tile | Figure | Comparison |
|---|---|---|
| **Total P&L** | The month's realised P&L. | Percentage change **vs previous month**, or **Nothing to compare with** if last month's P&L was zero. |
| **Total trades** | Every trade entered in the month, open ones included. | The month's wins and losses, for example **8 wins / 4 losses**. |
| **Win rate** | Share of closed trades that made money. | Last month's win rate. |
| **Profit factor** | Gross profit divided by gross loss. | Last month's profit factor. |
| **Expectancy** | Average P&L per closed trade. | Last month's expectancy. |

A dash (**—**) means the figure cannot be calculated — for example profit factor in a month with no losing trades. How each is worked out is on the [Reports](/review/reports#how-the-figures-are-calculated) page.

## Trades this month

The month's ten most recent trades, newest first:

| Column | Shows |
|---|---|
| **Date / time** | When the trade was entered. |
| **Symbol** / **Pair** | The symbol or contract. |
| **Direction** | **Buy** or **Sell**. |
| **Lots** / **Qty** | Position size, in your market's word for it. |
| **P&L** | The result, or **—** while open. |
| **Outcome** | **Win**, **Loss**, **Break even** or **Open**. |

**View all trades** opens the Trades screen. With nothing traded, the card says **Nothing traded this month.**

## Notes from trades

If any of the month's trades have journal entries, up to five appear here, each with its symbol, the start of the note, the trade's P&L and date. Click one to open that entry in the [Journal](/review/journal); **View all notes →** opens the Journal itself. The card is hidden when there are no notes.

## Monthly review note

The last card is your review of the month on screen.

1. Choose the month with the header control.
2. Write in **Monthly review note** — *Summarise your month: what went well, what didn't, and what to improve.*
3. Press **Save review note**.

| Detail | Behaviour |
|---|---|
| Length | Up to 2,000 characters; the counter underneath shows how many you have used. |
| Saving | **Save review note** is only enabled once you have changed something. On success you see **Review saved**; if it fails, **Couldn't save that review** and your text stays in the box. |
| One per month | Each month has one note. Moving to another month shows that month's note, or an empty box. |

::: tip
The review note is saved for the month itself, not for the account currently selected, so switching accounts shows the same note for a given month.
:::

Next: [Journal](/review/journal) · [Reports](/review/reports)
