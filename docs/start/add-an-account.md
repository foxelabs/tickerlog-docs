---
title: "Add a trading account"
description: "Creating your first trading account, what real and demo mean, and how the account switcher scopes every screen."
---

# Add a trading account

An **account** in TickerLog is one trading account at one broker. Everything
else hangs off it: trades belong to an account, and every figure on every screen
is scoped to whichever account you are looking at.

Add one from **Trading → Accounts**, or from the first-run dashboard's first
step.

## What you enter

| Field | Notes |
|---|---|
| **Name** | Whatever you call it. "Exness Real", "FTMO Challenge #2". |
| **Broker** | Free text. |
| **Type** | Real or Demo — see below. |
| **Starting capital** | The balance you began with. The equity curve is drawn from here. |
| **Currency** | What the account is denominated in. |

No broker credentials, no API key, no account number. TickerLog cannot connect
to your broker yet, so there is nothing to connect with.

::: info
**Markets are not a field**

You do not pick which markets an account trades. TickerLog works that out from
the instruments the account has actually traded, so an account trading three
asset classes shows three — which a single "primary market" dropdown could never
express, and which stops being true the moment you branch out.
:::

## Real and demo

Marking an account **Demo** does one important thing: it keeps that account's
figures out of your combined totals.

The account switcher's **All Accounts** means *all your real accounts*. A demo
balance added to a live one produces a number that describes no account you
actually have, which is precisely what the switcher exists to prevent. A demo
account is only ever viewed on its own.

## The account switcher

It sits at the top of the sidebar, above the search box, because the account
governs everything below it — including what the search finds.

It groups into **All Accounts**, then **REAL**, then **DEMO**, and ends with
*Manage accounts*.

Change it and every screen follows: the dashboard, trades, calendar, reports,
review, journal, and the trade count badge in the sidebar.

::: tip
There is deliberately no account filter in the filter popover. One global scope
and a per-screen account filter would be two controls doing one job, with no
rule for which wins.
:::

## Archiving and deleting

Two different verbs, and the difference matters:

- **Archive** hides the account and its whole history from every screen and
  every figure. It is **reversible** — archived accounts get their own group on
  the Accounts screen, with Restore.
- **Delete** is permanent, and takes the account's trades and their journal
  entries with it.

Archive asks for confirmation even if you have turned *Confirm before deleting*
off. That setting is about deletes; archiving is the reversible verb whose
*consequences* are the surprise, because every all-time figure you have moves
the moment you press it.

Next: [log your first trade](/start/first-trade).
