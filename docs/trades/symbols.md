---
title: "Symbols"
description: "Your list of traded instruments — how symbols appear on their own, adding one from the catalogue, correcting the name, market or decimal places, and retiring versus deleting."
---

# Symbols

A symbol is an instrument you trade — `XAUUSD`, `EURUSD`, `NIFTY`, `RELIANCE`. You never have to set one up: a symbol appears the first time you log, import or sync a trade on it, with its name, market and decimal places taken from tickerlog's shared catalogue.

So the Symbols screen is for two occasional jobs: **correcting** a symbol the catalogue got wrong, and **retiring** one so it stops appearing in pickers.

## Finding the screen

Symbols has no tab in Settings. Reach it:

- from the line at the foot of **Settings → Strategies** — *Looking for your instruments? **Symbols** …*
- from the command palette, by typing *Symbols* — see [Shortcuts](/reference/shortcuts)
- at `/settings/symbols`

## The list

The card is titled **Your symbols (N)** and has a **Search symbols…** box, which matches the symbol or its name.

| Column | Shows |
|---|---|
| Tick box | Selects the row for bulk actions. |
| **Symbol** | The symbol, with the exchange (if any) and full name beneath, e.g. *NSE · Nifty 50*. |
| **Market** | The asset class. See [Markets](/reference/markets). |
| **Decimals** | How many decimal places prices are shown to. |
| **Trades** | How many trades use it, for the account you're viewing. |
| **P&L** | Their combined P&L, for the account you're viewing. |
| **Status** | **Active** or **Retired**. |
| **⋯** | **Edit**, **Retire** / **Reactivate**, **Delete**. |

If you have none yet: **No symbols yet** — *A symbol appears here the first time you trade it — there is nothing to set up.* If a search matches nothing: **No symbols match**, with **Clear search**.

### Options and futures

A symbol is the **underlying**. Every NIFTY option and future you trade sits under one `NIFTY` row; the expiry, strike and side belong to each trade. See [F&O contracts](/india/fo-contracts).

## Adding a symbol

You don't need to, but you can add one ahead of time:

1. Press **Add symbol**.
2. In **Symbol**, search the catalogue and pick a match from **Add from catalogue** — its name, market and precision come with it. If nothing in the catalogue matches, **Use "…"** adds what you typed.
3. Press **Save**. You'll see **XAUUSD added**.

## Two brokers, one symbol

Brokers spell the same instrument differently — `XAUUSD`, `XAUUSD.ecn`, `GOLD`. When tickerlog recognises a spelling from the catalogue, the trade is filed under the catalogue's name, so gold from two brokers is one `XAUUSD` row with one history. Each broker's own spelling is remembered, so its next statement or sync still matches.

## Editing a symbol

Choose **Edit** from the row menu. The dialog, **Edit symbol**, notes that *Correcting a symbol here reclassifies its whole history.*

| Field | Notes |
|---|---|
| **Symbol** | 2–32 characters: letters, digits, spaces, `.`, `_` and `-`. Converted to upper case. |
| **Name** | The full name shown beneath the symbol. |
| **Market** | One of the nine [asset classes](/reference/markets). Changing it moves every trade on the symbol to the new market in reports and filters. |
| **Decimals** | 0–6. |

Press **Save** (**XAUUSD updated**). If it fails you'll see **Couldn't save that symbol**.

Because trades point at the symbol rather than storing its name, renaming or reclassifying a symbol updates every trade that uses it.

### Decimal places

You're never asked for decimals when a symbol is created. They start from the catalogue (or a sensible default for the market) and then **widen by themselves** whenever you log, import or sync a price with more places — brokers quote the same instrument to different precision, and the prices you actually enter are the best evidence.

They only ever widen. If you set **Decimals** lower, the next trade quoting more places sets it back; the dialog's hint says so: *Setting this lower is undone by the next trade that quotes more places.*

## Retiring and reactivating

**Retire** takes a symbol out of the symbol pickers — for example when logging a trade — while keeping every trade and figure that uses it. **Reactivate** brings it back. Retired symbols still show in this list with a **Retired** badge.

## Deleting

A symbol that any trade uses **can't be deleted**. Deleting it is refused with, for example, *This symbol is used by 40 trades. Retire it instead to keep the history.* Only a symbol with no trades can be deleted.

If **Confirm before deleting** is on in [Settings → General](/settings/general), you'll be asked **Delete XAUUSD?** first; press **Delete** or **Keep it**.

## Bulk actions

Tick several rows to show the bar (**3 symbols selected**) with **Retire**, **Reactivate** and **Delete**. A bulk delete is all-or-nothing: if any selected symbol is still in use, nothing is deleted and you'll see **Couldn't delete those**.

Related: [Strategies](/trades/strategies) · [Markets](/reference/markets)
