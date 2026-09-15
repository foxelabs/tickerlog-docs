---
title: "The Trades screen"
description: "Every column, control and action on the Trades screen — period, filters, search, sorting, selection, bulk export and delete, and the trade detail."
---

# The Trades screen

**Trades** is your whole history in one table, for whichever account is selected in the account switcher at the top of the sidebar. Everything you narrow here — the period, the filters, the search — is applied to your full history, so the count and the pages always describe every matching trade, not just what happens to be on screen.

## The page header

| Control | What it does |
|---|---|
| **Period** button (shows the current range, e.g. **All Time**) | Opens the period picker. See [Choosing a period](#choosing-a-period). |
| **Filters** | Opens or closes the filter panel under the header. When any filter is set, the button carries a small count of the values selected, so you can see the list is narrowed even with the panel shut. |
| **Log trade** | Opens the [Log trade dialog](/trades/logging). |

### Choosing a period

The period picker has two parts.

**Presets** — **Last 7 Days**, **Last 30 Days**, **Last 90 Days**, **Year to Date** and **All Time**. Pressing one applies it straight away.

::: info Presets count back from your newest trade
A preset is anchored to the newest trade in the current account, not to today's date. If an account stopped trading in June, **Last 30 Days** shows its last 30 days of activity rather than an empty table.
:::

**A custom range** — below the presets are **From** and **To** buttons over a calendar:

1. **From** is selected when the picker opens. Pick the first day; the picker moves on to **To** by itself.
2. Pick the last day. If you pick a start later than the current end, the end moves with it.
3. Check the day count at the bottom. Both ends are included, so a single day reads **1 day**. If the end is before the start it reads **End is before the start** and **Done** is disabled.
4. Press **Done**. The button now shows the two dates.

A custom range means exactly the days in it.

## The filter panel

Press **Filters** to open the panel. It has four fields, and each lets you pick several values:

| Field | Choices | Notes |
|---|---|---|
| **Pair** / **Symbol** | Every symbol in this account's trades | Searchable. Forex accounts say Pair, others Symbol. |
| **Market** | The asset classes present (Forex, Metals, Indices…) | See [Markets](/reference/markets). |
| **Strategy** | Every strategy used on these trades | Searchable. |
| **Outcome** | **Winners**, **Losers**, **Break even** | |

Values within one field are combined with *or* (NIFTY **or** BANKNIFTY); different fields are combined with *and*. An empty field means "all", which is why nothing is pre-selected. **Clear** empties every field at once.

There is no account filter here on purpose: the account switcher in the sidebar is the one place you choose which account you're looking at, and two controls for the same thing could disagree.

## The table card

### Direction, status and search

Along the top of the card:

- **Direction** — **All**, **Buy**, **Sell**.
- **Status** — **All**, **Open**, **Closed**.
- **Search by symbol or strategy…**

Changing any of these, the period, a filter or the sort takes you back to page one.

### Columns

| Column | What it shows |
|---|---|
| Tick box | Selects the row. The box in the header selects every row on the current page. |
| **Date / time** | When the trade opened — the day, with the time beneath. Sortable. |
| **Pair** / **Symbol** | The symbol, with the market underneath. For an option or future the name includes the contract (e.g. `NIFTY 24600 PE`) and the expiry appears in the line underneath. |
| **Direction** | A **Buy** or **Sell** badge. |
| **Entry** | Entry price, to the symbol's own number of decimals. |
| **Exit** | Exit price, or a dash while the trade is open. |
| **Lots** / **Qty** | Position size. Forex and CFD accounts say Lots; Indian and other accounts say Qty. |
| **P&L** | The recorded result, green for a profit and red for a loss; a dash while open. Sortable. On Indian accounts an **ⓘ** beside the header explains that the figure is before charges — see [Gross P&L and charges](/india/pnl-and-charges). |
| **Pips** | Pips, when recorded. Hidden on Indian accounts. |
| **Duration** | How long the trade was held. An open trade shows a dash, because its duration is still running. |
| **Strategy** | The strategy tag, or a dash. |
| **Status** | **Open** or **Closed**. |
| **⋯** | The [row menu](#the-row-menu). |

Dates and times follow the timezone and formats you set in [Settings → General](/settings/general).

### Sorting

Press **Date / time** or **P&L** to sort by that column, newest or largest first; press it again to reverse. An arrow marks the active column. The table opens sorted by date, newest first.

When sorting by P&L, open trades go to the end rather than being counted as zero — otherwise they would sit among your break-even trades.

### Pages

The bar under the table shows the count, the page buttons and a rows-per-page select. The table starts at 25 rows per page.

### On a phone

Below tablet width the table becomes a list of cards: symbol and direction, the date and strategy, and the P&L with the duration (or **Open**). Tap a card to open its detail; the **⋯** menu is still there. Tick-box selection and bulk actions are only available on wider screens.

## Opening a trade

Click a row (or focus it with the keyboard and press Enter or Space), or choose **View** from its menu. The trade detail shows:

- The symbol as the title, with the market beneath it.
- The P&L in large type, with **Buy**/**Sell** and **Open**/**Closed** badges. On Indian accounts it is labelled **P&L (gross) ⓘ**.
- A grid of facts. A fact with no value is left out, so a trade logged by hand doesn't show a wall of dashes:

| Fact | Shown when |
|---|---|
| **Account**, **Entry**, **Opened**, **Lots** / **Qty** | Always |
| **Exit**, **Closed** | The trade is closed. For a same-day trade **Closed** shows only the time. For an option that expired rather than being closed it reads **Settled at expiry**. |
| **Pips** | Recorded, and not an Indian account |
| **Held** | The trade is closed |
| **Strategy**, **Order type** | Set |
| **Product** | Set, on Indian accounts (e.g. CNC, MIS) |
| **Commissions** (**Charges** on Indian accounts) | Recorded — a recorded zero is shown |
| **Fees / swap** | Recorded, and not an Indian account |
| **Net result** | P&L less commissions and fees, when that differs from the P&L. Never shown on Indian accounts. |
| **Risk**, **R multiple** | An R multiple was recorded. Risk is worked out from the P&L and the R multiple. |

- A **Charges** breakdown — Brokerage, STT, Exchange, GST, Stamp duty, SEBI — when the broker itemised them.
- The first lines of your **Journal** entry, if you've written one, and the trade's notes.

At the foot, **Write journal** (or **Open journal** when an entry exists) takes you to that trade in the [Journal](/review/journal), and **Edit** opens the [edit dialog](/trades/logging).

## The row menu

| Item | Does |
|---|---|
| **View** | Opens the trade detail. |
| **Edit** | Opens the trade in the edit dialog. |
| **Journal** | Opens the trade detail, from which you can write or open its journal entry. |
| **Delete** | Deletes the trade — see [Deleting](#deleting). |

## Selecting trades and bulk actions

Tick one or more rows and a bar appears above the table reading, for example, **3 trades selected**. The selection is kept while you change page, filter or search, so you can gather trades from several pages. The header tick box only ever affects the rows on the current page. Untick the box on the bar to clear the selection.

| Button | Does |
|---|---|
| **Export CSV** | Downloads every selected trade — including ones on other pages — as `tickerlog-trades.csv`. The file is built in your browser. Its columns are listed in [CSV format](/reference/csv-format#tickerlog-s-own-export). |
| **Delete** | Deletes the selected trades, after a confirmation. |

To export a whole period rather than a selection, use **Export** on [Reports](/review/reports), or [Settings → Data](/settings/data) for everything.

## Deleting

::: warning A trade's journal entry goes with it
Deleting a trade deletes its journal entry too, and neither can be restored.
:::

- **One trade** — if **Confirm before deleting** is on in [Settings → General](/settings/general), you're asked, for example, **Delete XAUUSD?** — *This deletes the trade and its journal entry. It can't be undone.* Press **Delete**, or **Keep it** to back out. With the setting off, the trade is deleted straight away.
- **Several trades** — always asks, for example, **Delete 3 trades?** — *Their journal entries go with them. This can't be undone.*

If a delete fails you'll see **Couldn't delete that trade** or **Couldn't delete those trades**, and nothing is removed.

## Empty states

The table says which of two situations you're in:

- **No trades here yet** — this account has no trades. **Log your first trade** opens the Log trade dialog; you can also [import a statement](/trades/import).
- **No trades match** — you have trades, but the period, filters, search, direction or status exclude them all. **Clear filters** resets every one of them, including the period.

Next: [Log or edit a trade](/trades/logging)
