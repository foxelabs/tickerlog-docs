---
title: "Dashboard"
description: "What the dashboard shows, why it is fixed to this month, and what a brand-new account sees instead."
---

# Dashboard

The dashboard is the screen tickerlog opens on. It answers one question, read in a few seconds: **how is this month going, and is anything waiting for me?**

It follows the account switcher at the top of the sidebar, like every other screen. With **All Accounts** selected it covers all of your real accounts; demo accounts are only ever shown on their own (see [Settings → Accounts](/settings/accounts)).

## Why there is no date picker

The dashboard has no period control. Its figures are always **this calendar month**, compared with last month.

That is deliberate. The [Calendar](/review/calendar) reviews your trading month by month, and a dashboard on a period of its own would give you two different answers to "how am I doing". When you want a different period, a filter or a comparison, that is what [Reports](/review/reports) is for.

Months are calendar months in UTC, and a trade belongs to the month it was **entered** in.

## The header

| Element | What it does |
|---|---|
| **Welcome back, *first name*** | Your first name, taken from your profile. |
| **How *Month Year* is going.** | The month the figures cover. |
| **Log trade** | Opens the same **Log trade** dialog the Trades screen uses. See [Log a trade](/trades/logging). |

The dashboard reads rather than acts: apart from **Log trade** there are no menus on its cards or rows. To edit, delete or journal a trade, go to [Trades](/trades/trades-screen).

## The journal nudge

When trades that closed this month have no journal entry, a banner appears above the figures, for example:

> **3 trades are closed with no notes**
> Starting with XAUUSD (−$42.10).

**Write it up** opens the [Journal](/review/journal) with that trade ready to write about. The banner disappears once every closed trade this month has an entry, and it never counts open positions, which have not finished yet.

It is the only prompt in the app.

## The three tiles

| Tile | Figure | Line underneath |
|---|---|---|
| **This Month** | Total realised P&L of the trades entered this month, green when up and red when down. | The percentage change against last month's P&L, or **No trades last month**. |
| **Win Rate** | The share of this month's closed trades that made money, with a bar drawing the same share. | The change in points against last month (for example **+4.2 pts**), and a count such as **7 of 12 closed**, or **No closed trades this month**. |
| **Open Positions** | How many positions are open right now. | **Across this account** or **Across all accounts**, or **Nothing running**. |

**Open Positions is not limited to this month.** A position opened in March and still running in May is exactly the kind of thing the tile exists to remind you of.

Open trades have no result yet, so they never count towards P&L or the win rate. How each figure is calculated is explained on the [Reports](/review/reports#how-the-figures-are-calculated) page.

::: info Why the percentage can be missing
If last month's P&L was exactly zero there is nothing to take a percentage of, so the change is left out rather than shown as a misleading number.
:::

## Equity curve

**Equity curve — Cumulative P&L, all time.** A running total of your closed trades' P&L, one point per trading day, from your first trade to your latest.

This card is **all time**, not this month. A curve of only the current month would be empty for the first days of every month, and the shape of your whole record is more useful on a landing screen.

The curve is a running sum of trade results, not your account balance: it starts at zero rather than at your starting capital, and deposits and withdrawals do not appear on it.

## This month's calendar

A small calendar of the current month sits beside the curve.

- A day you traded is tinted **green** if its total was positive and **red** if negative. A losing day also has a **dashed** border, so the two can be told apart without relying on colour.
- Days with no trades are left plain.
- On very wide screens each day also shows its compact P&L (for example **+$1.2k**).
- Under the grid, a legend counts your **green days** and **red days**.
- **Open calendar →** takes you to the full [Calendar](/review/calendar), where you can click a day to see its trades.

## Recent trades

Your **five most recent closed trades**, newest first, whenever they happened — this card is not limited to the month either.

| Column | Shows |
|---|---|
| **Pair** / **Symbol** | The symbol (or contract), with its market underneath. The heading follows your market — see [Indian markets](/india/overview). |
| **Side** | **Buy** or **Sell**. |
| **Entry** / **Exit** | Prices, to the symbol's own precision. |
| **P&L** | The trade's result. |
| **Date** | The day the trade was entered. |

On a phone the table becomes a list: symbol and side on the left, result and date on the right.

Open positions are left out because this card is about results. If nothing has closed yet it says **No closed trades in this period.** **View all** opens the Trades screen.

## Before your first trade

If you have **no trades at all**, on any account, you get a welcome screen instead of a dashboard full of zeros:

**Welcome to tickerlog** — *Three ways in. Any one of them is enough to start.*

| Step | Button | Goes to |
|---|---|---|
| **Connect an account** | **Add an account** | [Settings → Accounts](/settings/accounts), to connect a broker or add an account by hand. On the Free plan the text reminds you that linking a broker is part of Pro. |
| **Log a trade** | **Log a trade** | The Log trade dialog. |
| **Import a statement** | **Import a CSV** | [Settings → Data](/settings/data), to [import a CSV](/trades/import). |

As soon as one trade exists anywhere, the normal dashboard takes over. Someone with trades on another account is not a first run, even if the account currently selected is empty.

Next: [Calendar](/review/calendar) · [Reports](/review/reports)
