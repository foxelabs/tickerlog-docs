---
title: "Symbols"
description: "Your instrument list — adding from the shared catalogue, decimal places, retiring versus deleting, and why two brokers' spellings are one symbol."
---

# Symbols

**Trading → Symbols** is the list of instruments you trade, with how many trades
each one carries.

You do not have to populate it before you start. A symbol is created the first
time you trade the thing — from the Log Trade dialog or from a CSV import — and
never before.

## Adding one

Add Symbol searches a **shared catalogue** of instruments rather than asking you
to type everything from memory. Pick one and you get its canonical ticker, its
proper name, its market and its decimal places.

The picker offers your own symbols first, then suggestions from the catalogue.
It offers free text **only when the catalogue matched nothing at all** — typing
`GOLD` beside an `XAUUSD` you already hold should not offer to create a second
symbol for the same metal.

## Two brokers, one symbol

If one broker writes `XAUUSD` and another writes `XAUUSD.ecn`, those are **one
symbol** in TickerLog, stored under the canonical spelling. Each broker's
spelling is remembered, so their next statement still matches.

This is the one place your own typing is overridden, and only when the
instrument is recognised. Splitting them apart is deliberately not offered — the
account switcher already separates the two brokers, which is the distinction you
actually wanted.

## Decimal places

Set from the catalogue, then **widened by what you type**. Log gold at
`2412.345` and the symbol moves to three decimal places on every screen.

It only widens. Two brokers quoting the same instrument to different precision
share one symbol, so it holds one decimal count — and rounding down would lose a
digit you entered, where rounding up costs a trailing zero. The ceiling is six.

Decimal places are not on the Add form (nothing to say yet) but are on Edit,
where a broker quoting gold to three places can say so. Be aware that editing
the value **down** is undone by the next trade that contradicts it.

## Retire, or delete

Two verbs, and usually you want the first:

- **Retire** takes the symbol out of the pickers while keeping its history
  intact. This is the answer for an instrument you have stopped trading.
- **Delete** removes it — and is **refused** if any trade points at it. You get a
  message naming the count. TickerLog does not cascade a catalogue delete into
  your trade history, because losing trades to a tidy-up is not a trade-off
  anyone would choose.

Bulk actions cover **Retire · Reactivate · Delete**, and bulk delete is
all-or-nothing for the same reason: a bulk action that half-happened is the
hardest kind to undo.

## The orphan warning

If a symbol is not in the shared catalogue, TickerLog says so — it means the
decimal places are a guess rather than a fact, and prices may print to the wrong
precision. Correcting the symbol fixes every screen at once.
