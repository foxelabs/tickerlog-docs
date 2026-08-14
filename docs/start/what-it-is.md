---
title: "What TickerLog is"
description: "A trading journal for discretionary traders — what it records, what it works out for you, and what it deliberately does not do."
---

# What TickerLog is

TickerLog is a trading journal. You record the trades you took and the reasoning
behind them, and it works out which of your setups, instruments and sessions
actually make money.

It is built around one idea: **the figures should never disagree with each
other**. Every screen counts the same rows, scoped to the same account, so the
win rate on the dashboard is the win rate on the reports page.

## What it records

- **Trades** — instrument, direction, entry and exit, lots, P&L, and the
  strategy you were following.
- **Journal entries** — what you were thinking, one entry per trade.
- **Weekly reviews** — what went right, what went wrong, and what you intend to
  change.

## What it works out

- Win rate, profit factor, average win and loss, expectancy.
- Performance broken down by strategy, by instrument, by market, and by day of
  week.
- An equity curve, and a calendar showing which days you made money on.

## What it does not do

Worth saying plainly, because a journal that quietly assumes things is worse
than one that admits its limits.

- **It does not compute your P&L.** You record what your broker settled, because
  the broker's number is the real one — spreads, swaps, commission and partial
  fills all move it, and a recomputed figure would disagree with your account
  statement.
- **It does not sync with your broker yet.** Read-only sync is a later release.
  Today, trades come from you or from a CSV.
- **It does not place trades, and it never will.** There is no order entry and
  no broker credential anywhere in the product.
- **It does not give advice.** It reports what you did. What to change is your
  call.

## The vocabulary

A few words mean something specific here:

| Word | What it means |
|---|---|
| **Account** | One trading account at one broker. Real or demo. |
| **Symbol** | An instrument you trade — `XAUUSD`, `EURUSD`, `RELIANCE`. |
| **Strategy** | A named setup you follow, with rules you can write down. |
| **Market** | The asset class a symbol belongs to — Forex, Metals, Indices and so on. |
| **Open / Closed** | A trade with no exit yet, versus one that settled. |

Next: [create your account](/start/create-your-account).
