---
title: "Log your first trade"
description: "The Log Trade dialog field by field, including what happens when you leave the exit blank."
---

# Log your first trade

Open **Log Trade** from the dashboard, from the Trades screen, or from the
command palette (<kbd>⌘F</kbd> / <kbd>Ctrl F</kbd>).

## The fields

| Field | Notes |
|---|---|
| **Account** | Which account the trade belongs to. |
| **Symbol** | Pick from the catalogue, or type your broker's own spelling. See below. |
| **Direction** | Buy or Sell. |
| **Lots** | Position size, in whatever unit your broker quotes. |
| **Entry price** and **entry time** | When you got in. |
| **Exit price** and **exit time** | Leave blank for a position still open. |
| **P&L** | What the broker settled. Required once the trade is closed. |
| **Strategy** | The setup you were following. Optional, but this is what makes the reports worth reading. |

## You do not have to set up symbols first

The symbol field searches a shared catalogue of instruments, so `XAUUSD` is
there before you have ever added it. Picking one creates it in your own symbol
list when you **save** — not when the picker closes, so a cancelled dialog
leaves nothing behind.

If the catalogue has never heard of what you typed, you can use your own text.
TickerLog guesses the market from the ticker and you can correct it later on
**Trading → Symbols**, from where every trade that uses it follows.

## Leaving the trade open

Leave the exit blank and the trade is **Open**. Two consequences worth knowing:

- **P&L is not required**, because there isn't one yet.
- **Duration shows an em dash**, not a number. Time in an open position is a
  ticking value, and a figure rendered once is wrong a second later.

Open trades are excluded from anything that requires a settled result — win
rate, profit factor, the calendar's daily P&L. They sort to the *end* of a P&L
sort rather than being treated as zero, which would file them among your
breakeven trades.

Close a trade later by editing it and filling in the exit.

## Prices and decimal places

You are never asked how many decimal places an instrument quotes to. TickerLog
takes it from the catalogue, and then **learns from what you type**: enter gold
at `2412.345` and the instrument widens to three places everywhere.

It only ever widens, never narrows. Brokers quote the same instrument to
different precision, and rounding *down* would lose a digit you actually
entered, where rounding up costs a trailing zero. Six decimal places is the
ceiling.

## After you save

The trade appears on every screen at once — the trades list, the calendar day it
falls on, the equity curve, and its account's balance.

::: info
**Which day a trade counts on**

Bucketing is always **UTC** — the calendar day a trade lands on, and the week it
falls in on the review screen, do not change when you change your display
timezone. Only how timestamps are *printed* follows that setting. Your figures
would otherwise reshuffle every time you travelled.
:::
Next: [the Trades screen](/trades/trades-screen), or
[import a statement](/trades/import) if you have a history already.
