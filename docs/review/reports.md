---
title: "Reports"
description: "Performance broken down by strategy, instrument, market and day of week — and how to export a period."
---

# Reports

Reports is where the journal pays for itself: the same trades, grouped four
different ways, so you can see which of your setups is carrying the others.

## The breakdowns

| Grouped by | Answers |
|---|---|
| **Strategy** | Which setup actually makes money. |
| **Instrument** | Whether you are good at what you trade most. |
| **Market** | Whether one asset class is subsidising another. |
| **Day of week** | Whether a particular session is costing you. |

Each row carries net P&L, trade count, win rate and average result.

## Reading them honestly

Two things worth keeping in mind:

- **Small samples lie.** A strategy with four trades and a 75% win rate is not a
  75% strategy; it is four trades. The trade count is next to the win rate for
  exactly this reason.
- **Untagged trades group together.** Trades with no strategy set are their own
  row. A large one means the strategy breakdown is describing a minority of your
  trading.

## Grouping and renaming

Breakdowns group by the **label as it is today**. Rename a strategy and its
history follows into the new name rather than splitting in two — see
[Strategies](/trades/strategies).

## Exported Reports

Exporting a whole period lives here, in three cards that each name exactly what
the file contains. This is the counterpart to the Trades screen's bulk export,
which exports the rows you ticked.

Both produce CSV that TickerLog can read back — see
[CSV format](/reference/csv-format).
