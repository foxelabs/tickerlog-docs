---
title: "The Trades screen"
description: "Searching, filtering, sorting and selecting trades, and what the three different empty states are telling you."
---

# The Trades screen

Trades is the full history for whichever account the switcher is on — one row
per trade, newest first.

## Finding a trade

- **Search** matches the symbol and the strategy.
- **Filter** opens a popover with facets for direction, status, market and
  strategy.
- **The date range** at the top of the page narrows everything to a period.

Filtering always resets you to page one, and the page index is clamped, so
deleting the last row on the last page cannot strand you on an empty one.

## Sorting

The **DATE/TIME** and **P&L** column headers sort for real — click to sort,
click again to reverse.

Open trades sort to the *end* of a P&L sort rather than counting as zero.
Treating a position with no result yet as a breakeven trade would file it among
your genuine scratches.

## Selecting rows

Tick-boxes on the left. Selection is by trade, so it **survives paging and
filtering** — select five, page forward, page back, they are still selected.

The header tick-box only ever covers the rows currently on screen, never the
four hundred you cannot see.

Selecting anything opens the bulk bar above the table, which carries:

- **Export CSV** — exports exactly the ticked rows.
- **Delete** — with a confirmation naming the count.

::: info
**Export lives here, and only here**

There is no Export button in the page header. Exporting the ticked rows is this
bar; exporting a whole filtered period is **Reports → Exported Reports**, where
three cards name exactly what each file contains. Two buttons doing the same job
at different scopes is what made it ambiguous.
:::

## The row menu

The kebab on each row carries bare verbs — **View**, **Edit**, **Delete**. The
row already says which trade it acts on.

**Deleting a trade takes its journal entry with it.** The confirmation says so.

## Paging

Every list in TickerLog opens on **25 rows**, and the pager carries a rows-per-page
select and a count line.

## The three empty states

An empty Trades screen says one of three different things, because there are
three different reasons to have no rows:

| What you see | What it means |
|---|---|
| "Log your first trade" | You have no trades at all, on any account. |
| "This account hasn't traded" | You switched to an account with no history — switch back, or log one here. |
| "No trades match" | Your filter or search matched nothing. Clear it to widen. |

A single "no results" message for all three is how a filtering mistake gets read
as data loss.

## What Trades will not do

There are no card-style layouts and no Grid/List toggle. One list, one layout —
a control whose only effect is how the screen looks is a control that has to be
explained.
