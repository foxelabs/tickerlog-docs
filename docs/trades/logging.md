---
title: "Logging a trade"
description: "Editing and closing trades, why P&L is recorded rather than calculated, and how a renamed strategy keeps its history."
---

# Logging a trade

The Log Trade dialog is covered in [Log your first trade](/start/first-trade).
This page is about the rules behind it.

## P&L is recorded, not calculated

TickerLog stores the profit or loss **your broker settled**, and never works it
out from entry, exit and lots.

That is deliberate. A calculated figure ignores spread, swap, commission,
partial fills and the contract size your broker actually used — so it would
disagree with your statement, and the statement is the one that is true. A
journal whose totals do not reconcile with your account is a journal you stop
trusting.

This is why **a closed trade must have a P&L** and an open one must not.

## Closing an open trade

Edit it and fill in the exit price, the exit time and the P&L. It moves from
Open to Closed and starts counting toward every settled figure — win rate,
profit factor, the calendar, the equity curve.

## Editing

Edit changes the trade in place. Everything derived from it follows on the next
read: the account's balance, the symbol's usage count, the strategy's stats, the
calendar day.

Nothing is cached in the page, so what you see is what is stored. A write that
fails leaves the row exactly as it was and tells you it failed, rather than
showing you a change that did not happen.

## Renaming things keeps history

A trade stores a **reference** to its symbol and its strategy, not their names.

So renaming "Breakout" to "Breakout v2" keeps every trade that used it — the
label updates everywhere, and the reports do not suddenly show two strategies
where you have one. The same is true of symbols: reclassify `XAUUSD` from one
market to another and its whole history reclassifies with it.

This is why the [Symbols](/trades/symbols) and
[Strategies](/trades/strategies) screens can be edited freely.

## Deleting

**Deleting a trade deletes its journal entry too.** They are one record from the
app's point of view — the trade is the thing the entry is about, and an orphan
entry about a trade you can no longer see is not worth keeping.

Whether you are asked to confirm is up to **App → General → Confirm before
deleting**. Turn it off and deletes happen immediately, on every screen, which
is the point of it being one setting rather than a per-screen one.
