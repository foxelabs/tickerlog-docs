---
title: "CSV format"
description: "The column names TickerLog recognises when importing, how headers are matched, and what each field requires."
---

# CSV format

TickerLog matches CSV columns **by name**, not by position, so you can import a
broker statement without rearranging it.

## How headers are matched

Each header is lowercased and stripped of everything that is not a letter or a
digit before it is compared. So `P&L (USD)`, `pnl_usd` and `PnL` all reduce to
the same thing, and you do not need to worry about spacing, case or punctuation.

If a file carries two columns that both match the same field — `Open Time` and
`Time`, say — **the first one wins**. The leftmost is almost always the more
specific.

## Recognised columns

| Field | Accepted header names |
|---|---|
| **Entry time** | `Date`, `Entry Time`, `Open Time`, `Opening Time`, `Time`, `Datetime`, `Entry Date` |
| **Exit time** | `Exit Time`, `Close Time`, `Closing Time`, `Exit Date` |
| **Duration** | `Duration`, `Duration (min)`, `Duration Minutes`, `Time in Trade` |
| **Symbol** | `Symbol`, `Instrument`, `Ticker`, `Item`, `Market` |
| **Direction** | `Direction`, `Side`, `Type`, `Action`, `Buy/Sell` |
| **Entry price** | `Entry`, `Entry Price`, `Open Price`, `Price`, `Open` |
| **Exit price** | `Exit`, `Exit Price`, `Close Price`, `Close` |
| **Lots** | `Lots`, `Lot`, `Volume`, `Size`, `Quantity`, `Qty` |
| **P&L** | `P&L (USD)`, `P/L`, `PnL`, `PnL USD`, `Profit`, `Profit/Loss`, `Net P&L`, `Net`, `Result` |
| **Pips** | `Pips`, `Points` |
| **Commissions** | `Commission`, `Commissions` |
| **Fees** | `Fees`, `Fee`, `Swap` |
| **Strategy** | `Strategy`, `Setup`, `System` |
| **Status** | `Status`, `State` |
| **Notes** | `Notes`, `Comment`, `Comments`, `Remark` |

## Duration instead of an exit time

TickerLog's own export writes a **duration in minutes** rather than an exit
timestamp. On import, a duration is turned back into the exit time it was
measured from.

This is what makes an export round-trip — exporting your trades and importing
the file again is the first thing most people try, and it works.

## What is required

- **Entry time**, **symbol**, **direction**, **entry price** and **lots** on
  every row.
- **P&L** on any row that is closed. TickerLog
  [records P&L rather than recomputing it](/trades/logging), so a closed trade
  without one cannot be imported.
- **Exit price and exit time** (or a duration) for a closed trade. A row with
  neither is imported as an open position.

Rows that fail these are skipped and reported with their line number. The rest of
the file still imports.

## Symbols and strategies

Named in the file, and **created if they are new** — see
[Importing from CSV](/trades/import). You do not have to set them up first.

## Duplicates

A row matching an existing trade on **symbol, entry time, direction and lots** is
skipped and counted. Re-importing an overlapping statement adds only what is new.
