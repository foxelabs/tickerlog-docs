---
title: "Reports"
description: "Six headline figures, three charts and two performance tables for any period — how each figure is calculated, and how to export the period."
---

# Reports

Reports is your record. Where the [Dashboard](/review/dashboard) shows how this month is going, Reports answers the longer questions — am I up, when do I trade well, and what do I trade well — for **any period you choose**, narrowed however you like.

Everything on it follows the account switcher in the sidebar. **All Accounts** means all of your real accounts; demo accounts are only reported on their own, because adding a practice balance to a real one produces figures that describe no account that exists.

## The page header

| Control | What it does |
|---|---|
| **Date range** (shows the current range, e.g. **Last 30 Days**) | Chooses the period. Opens on **Last 30 Days**. |
| **Filters** | Shows or hides the filter panel. A number beside it counts the filters in use, so you can tell the figures are narrowed even with the panel closed. |
| **Export** | Downloads the trades in the current period and filters as a CSV. |

### Choosing a period

Open the date range and either press a preset or pick your own dates.

| Preset | Covers |
|---|---|
| **Last 7 Days** | The 7 days up to and including the day of your most recent trade. |
| **Last 30 Days** | The 30 days up to your most recent trade. |
| **Last 90 Days** | The 90 days up to your most recent trade. |
| **Year to Date** | From 1 January of the year of your most recent trade. |
| **All Time** | Everything on record. |

::: info Why presets count back from your last trade
The presets are measured from your **most recent trade** in the selected account, not from today. If you have not traded for a few weeks, **Last 30 Days** still shows your last 30 days of activity instead of an empty screen. With no trades at all, today is used.
:::

For a custom range:

1. Press **From**, then pick a day on the calendar.
2. Press **To**, then pick a day.
3. The footer shows how many days that is — or **End is before the start** if the dates are the wrong way round, in which case **Done** is disabled.
4. Press **Done**.

Both ends are included, so choosing the same day for **From** and **To** gives you that one day. Dates are in UTC, and a trade belongs to the day it was **entered**.

### Filters

The filter panel has four fields. Each accepts several values; within a field any value matches, and across fields all must match. An empty field means "all".

| Field | Narrows to |
|---|---|
| **Symbol** (**Underlying** for Indian accounts) | One or more symbols. Searchable. |
| **Market** | One or more asset classes — see [Markets](/reference/markets). |
| **Strategy** | One or more strategies, including **Unlabelled** for trades with no strategy. Searchable. |
| **Outcome** | **Winners**, **Losers** and/or **Break even**. |

**Clear** removes every filter. The choices offered come from the trades in the selected account, so nothing listed will narrow to an empty screen.

There is no account filter here: the account switcher in the sidebar already decides which account you are looking at.

## The six figures

Each tile compares the period with **the period before it** — an equally long stretch immediately preceding it. For **Last 30 Days**, that is the 30 days before those. **All Time** has nothing before it, so its comparisons are against zero.

| Tile | Shows | Comparison |
|---|---|---|
| **Total P&L** | Realised profit or loss over the period. | The change in money, e.g. **+$412.50 vs the period before**. |
| **Win rate** | Share of closed trades that made money. | The change in percentage **points** (e.g. **+3.1 pts**). |
| **Profit factor** | Gross profit ÷ gross loss. | The change in the ratio. |
| **Total trades** | Every trade entered in the period, including open ones. | The change in count. |
| **Expectancy** | Average result per closed trade. | The change in money. |
| **Max drawdown** | The deepest fall from a high point, shown as a negative amount. | **$120.00 less** or **$120.00 more** than the period before, or **unchanged**. Less is the good direction, so it is coloured green. |

A dash (**—**) means a figure has no meaningful value for the period — see below.

## How the figures are calculated

These rules are the same everywhere a figure appears: the Dashboard, the Calendar and Reports.

**Open trades never count towards a result.** A position that has not closed has no P&L yet, so it is left out of every sum and ratio below. It is still counted in **Total trades**. An Indian option that expired and could not be priced is treated the same way — see [P&L and charges](/india/pnl-and-charges).

### Total P&L

The sum of the P&L of every closed trade in the period.

### Win rate

> **Win rate = winning trades ÷ closed trades × 100**

A winning trade is one with a P&L above zero. Break-even trades (exactly zero) count as closed but not as wins, so they pull the rate down slightly. It is shown to one decimal place. With no closed trades it is **—** rather than 0%, because 0% would mean every trade lost.

### Profit factor

> **Profit factor = total of all winning trades ÷ total of all losing trades (as a positive number)**

For example, $3,000 won and $2,000 lost is a profit factor of **1.50**. Above 1.00 you made more than you lost; below 1.00 you lost more. With no losing trades there is nothing to divide by, so it shows **—**.

### Expectancy

> **Expectancy = total P&L ÷ number of closed trades**

What an average trade earned or lost over the period. $1,200 across 40 closed trades is an expectancy of **+$30.00**.

### Max drawdown

tickerlog adds up your closed trades' P&L day by day into a running total (the equity curve), keeping track of the highest point it has reached — the **high-water mark**, which starts at zero at the beginning of the period. On each day it measures how far the running total sits below that high point. **Max drawdown** is the largest of those gaps.

For example, over four days: +$500, then −$200, then −$150, then +$600. The total peaks at $500, falls to $150 (a gap of $350), then recovers to $750. Max drawdown is **$350**.

It is measured in money, not as a percentage, because a percentage would need your account balance at every point. Because the high-water mark starts at zero, a period that opens with losses counts those losses as drawdown too.

## Charts

| Chart | What it shows |
|---|---|
| **Equity curve** — *Cumulative P&L over the period* | The running total of closed-trade P&L, one point per day. A **dashed line** traces the high-water mark; the gap between that line and the curve is your drawdown at that moment, and the widest gap is the **Max drawdown** tile. |
| **P&L distribution** — *Outcome of closed trades* | A ring splitting closed trades into **Winners**, **Break even** and **Losers**. Open trades are left out rather than counted as break-even. |
| **P&L by day of week** — *Which days earn and which bleed* | Total P&L for each weekday, Monday to Sunday, by the day each trade was entered. |

Hover or tap a chart for exact values. Each chart also carries a text version for screen readers.

## Performance tables

### Performance by symbol

Your symbols ranked **best P&L first**; the top ten are shown.

| Column | Shows |
|---|---|
| **Symbol** / **Underlying** | The symbol. For Indian F&O, every contract on one underlying is grouped under it, with a line such as **312 contracts** underneath. |
| **Trades** | Trades in the period, including open ones. |
| **Win rate** | As defined above, for this symbol. |
| **P&L** | Total P&L for this symbol. |

### Performance by strategy

Your strategies ranked by **number of trades**, most first; the top ten are shown. Trades with no strategy are grouped as **Unlabelled**. The columns are **Strategy**, **Trades**, **Win rate** and **P&L**.

Renaming a strategy keeps its history: trades point at the strategy itself, not at its name.

## Exporting a period

**Export** downloads `tickerlog-trades.csv` containing every trade in the selected account, period and filters, newest first. The columns are:

**Date**, **Symbol**, **Asset Class**, **Expiry**, **Strike**, **Option Type**, **Direction**, **Entry**, **Exit**, **Lots**, **P&L**, **Currency**, **Pips**, **Duration (min)**, **Strategy**, **Status**.

The file can be imported back into tickerlog — see [CSV format](/reference/csv-format). To export everything across all accounts regardless of period, use [Settings → Data](/settings/data).

Next: [Journal](/review/journal) · [Calendar](/review/calendar)
