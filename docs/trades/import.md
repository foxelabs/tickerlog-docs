---
title: "Importing from CSV"
description: "Importing a broker statement — the preview step, how duplicates are skipped, and what happens to symbols the catalogue has never seen."
---

# Importing from CSV

**App → Data → Import from CSV** takes a statement from MT4, MT5 or cTrader, or
a file TickerLog exported earlier.

<CardGroup :cols="4">
  <Card title="Formats">MT4 · MT5 · cTrader</Card>
  <Card title="Duplicates">Skipped automatically</Card>
  <Card title="Bad rows">Reported by line number</Card>
  <Card title="File kept">Never stored</Card>
</CardGroup>

## Every import previews first

Nothing is saved until you agree with what came back.

Drop the file in and TickerLog runs the whole import **without saving**, then
shows you exactly what would happen: how many trades would be created, how many
would be skipped as duplicates, which symbols and strategies would be created,
and every row it could not read.

Press Import and the same code runs again, this time committing. The preview is
not a separate estimate that could be wrong about the importer — it *is* the
importer, run once with the saving switched off.

## Re-importing is safe

A row matching an existing trade on **symbol, entry time, direction and lots**
is treated as a duplicate and skipped. It is counted and reported, never
silently dropped.

Deliberately *not* matched on:

- **P&L**, because brokers restate it — a swap posted overnight changes the
  number without changing the trade.
- **The exit**, because a position closed in two parts is genuinely two trades.

So downloading an overlapping statement and importing it again adds only what is
new. You do not have to trim the file to the rows since last time.

::: info
**Broker spellings**

Duplicate matching uses the **canonical** symbol on both sides. If your broker
writes `XAUUSD.ecn` and your existing trades are stored as `XAUUSD`, they still
match — otherwise re-importing would duplicate an entire statement.
:::

## Symbols the catalogue has not seen

They are **created, not refused**. A broker statement names instruments you have
never added, and being made to enter them by hand first is a step nobody
completes.

The review step distinguishes two cases, because only one is worth checking:

- **Recognised** — matched against the shared instrument catalogue, so the name,
  market and decimal places are right. If your broker's spelling differs from
  the canonical one, the review names both, because a silent rename is the wrong
  kind of quiet.
- **Guessed** — nothing matched, so the market is inferred from the ticker. Worth
  a look. Correct it on **Trading → Symbols** afterwards and every trade using it
  follows.

Strategies work the same way: named in the file, created if new.

## Bad rows

A row that cannot be read is **skipped, not fatal** — and every one is reported
with its line number, so you can fix the spreadsheet and import again.

The commonest cause is a closed trade with no P&L, which TickerLog will not
accept because it [records P&L rather than recomputing it](/trades/logging).

## Column names

Headers are matched by name, through an alias table covering MT4, MT5, cTrader
and TickerLog's own export — so an exported file round-trips. See
[CSV format](/reference/csv-format) for the full list.

## What is not stored

**The file itself is never kept.** TickerLog records the counts and the rejected
lines so there is a record of what happened, and discards the statement. A
database of everybody's broker statements would be a copy of the most sensitive
thing this product touches, in a place nobody thinks about.
