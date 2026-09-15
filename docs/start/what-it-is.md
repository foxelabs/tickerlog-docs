---
title: "What tickerlog is"
description: "A trading journal that fills itself from your broker — what it records, what it works out for you, and what it deliberately does not do."
---

# What tickerlog is

tickerlog is a trading journal. It keeps a record of every trade on every
account you hold, lets you write down what you were thinking, and turns the
record into figures you can act on: whether you are up, when you trade well,
and which setups pay.

## What it records

- **Accounts** — each broker or prop-firm account you trade, real or demo, in
  its own currency.
- **Trades** — symbol, direction, size, entry and exit, P&L, commissions and the
  strategy you were following. For Indian F&O, the contract's expiry, strike and
  side as well.
- **Journal entries** — one note per trade, for the reasoning behind it.
- **Monthly reviews** — a written reflection on each month, under the
  calendar.
- **Symbols and strategies** — your own catalogue, created as you trade rather
  than set up in advance.

## Where trades come from

- **Your broker, automatically** — Dhan, Upstox and Zerodha connect with a
  read-only credential; MetaTrader 5 sends its history through an add-on in
  your own terminal. See [Auto-sync](/sync/overview).
- **A statement** — a CSV from MT4, MT5 or cTrader, or a Zerodha Console
  tradebook. See [Import a CSV](/trades/import).
- **You** — the **Log trade** dialog. See [Log a trade](/trades/logging).

## What it works out

- **Dashboard** — this month's P&L against last month, win rate, open
  positions, the all-time equity curve and your most recent closed trades.
- **Calendar** — each day's result on a month grid, with that month's review.
- **Reports** — total P&L, win rate, profit factor, total trades, expectancy
  and maximum drawdown for any period, with charts and breakdowns by symbol and
  strategy.

Every screen counts the same trades in the same scope, so the win rate on the
dashboard and the win rate in reports can never disagree.

## One account, or all of them

The account switcher at the top of the sidebar decides what every screen
shows: one account, or **All Accounts**. All Accounts means all your *real*
accounts in one currency. Demo accounts are only ever viewed on their own,
because a demo balance added to a live one describes no account that exists.
See [Accounts](/settings/accounts).

## What it does not do

- **It never places a trade.** Every broker connection is read-only.
- **It records the broker's P&L rather than recomputing it.** Spreads, swaps,
  commission and partial fills all move the real figure, and your statement is
  the one that counts. For Indian brokers the P&L is shown **gross** — before
  charges — for reasons explained in [P&L and charges](/india/pnl-and-charges).
- **It does not give trading advice.** It tells you what happened.

Next: [Create your account](/start/create-your-account)
