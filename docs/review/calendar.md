---
title: "Calendar"
description: "The month grid, what each day's figure counts, and why the day a trade lands on does not move with your timezone."
---

# Calendar

Calendar is a month grid, one cell per day, coloured by that day's net P&L.

It answers questions the other screens cannot: whether your losses cluster on
particular days, whether you overtrade after a win, and how much of your month
came from one session.

## What a day counts

Every **closed** trade whose exit falls on that day, for the account the switcher
is on. Each cell shows the day's net P&L and its trade count.

Open positions do not appear — there is no result to count yet.

## Which day a trade lands on

Days are bucketed in **UTC**, always.

Your display timezone (**App → General**) changes how timestamps are *printed*.
It does not change which day a trade counts on, or which week it falls in on the
[weekly review](/review/weekly-review). If it did, every figure you have would
reshuffle the first time you travelled — and last month's calendar would stop
matching the screenshot you took of it.

## Clicking a day

Opens a dialog with that day's figures.

::: info
The day dialog does not yet list the day's individual trades. To see them, use
the [Trades screen](/trades/trades-screen) with the date range set to that day.
:::

## On a narrow screen

Below about 780px the month grid scrolls sideways inside its card rather than
crushing seven columns into a phone width. The rest of the screen reflows
normally.

## Empty months

A month with no trades says so. A month where your filter matched nothing says
something different, and offers to clear the filter — the two are not the same
problem and do not get the same message.
