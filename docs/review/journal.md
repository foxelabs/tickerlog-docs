---
title: "Journal"
description: "One entry per trade — writing, rating and linking charts, finding an entry again, and what happens to an entry when its trade is deleted."
---

# Journal

The Journal is where you write about your trades: what the idea was, how you executed it, and what you would do differently. **Each entry belongs to exactly one trade**, and each trade can have at most one entry.

The Journal follows the account switcher in the sidebar: it lists entries for trades on the selected account (or on all your real accounts, with **All Accounts** selected).

## Writing an entry

There are four ways to start one.

| From | How |
|---|---|
| **Trades** | Open a trade and press **Write journal**. If the trade already has an entry, the button reads **Open journal** and takes you to it instead. |
| **Journal** | Press **New entry** in the page header, then pick the trade (see below). |
| **Dashboard** | When closed trades this month have no notes, the banner's **Write it up** button opens the first of them. See [Dashboard](/review/dashboard#the-journal-nudge). |
| **Calendar** | **Notes from trades** links to existing entries for the month. |

### Picking a trade

**New entry** opens a dialog — *Pick the trade this note is about.* — listing your recent trades in the selected account, with symbol, date, strategy and P&L. Type in **Search recent trades…** to narrow by symbol or strategy, then click the trade.

Trades that already have an entry are left out, since a trade can only have one. If the list is empty it tells you why:

| Message | Meaning |
|---|---|
| **No trades in this scope yet.** | The selected account has no trades. |
| **No recent trade matches that.** | Nothing matches your search. |
| **Every recent trade already has notes.** | All of your recent trades have been written up. |

The picker searches your most recent 100 trades. To write about an older trade, find it on the [Trades](/trades/trades-screen) screen and press **Write journal** there.

### The entry form

The dialog is titled with the trade's symbol and reads *Write up this trade.* (or *Edit your notes on this trade.* when editing).

| Field | What goes in it |
|---|---|
| **Notes** | Free text. The placeholder suggests three questions: *What was the idea? How did you execute it? What would you do differently?* Up to 20,000 characters. |
| **Execution** | A rating from one to five stars for how well you executed the trade — not whether it made money. Optional. Press the same star again to clear the rating. |
| **Chart links** | Links to charts or screenshots, **one URL per line** — TradingView, a screenshot host, anywhere. Up to 20 links. Files cannot be uploaded; only links are stored. |

Press **Save**. You will see **Entry saved** (or **Entry updated**). If saving fails — for example because a line in **Chart links** is not a valid URL — you see **Couldn't save that entry** and the dialog stays open so nothing is lost. **Cancel** closes without saving.

Every field is optional: you can save a rating alone, or links alone, and come back to the notes later.

## The Journal screen

On a wide screen the page is split in two: the list of entries on the left, the selected entry on the right. On a narrower screen the entry appears below the list, and tapping an entry scrolls down to it.

### The list

Each row shows:

- the trade's symbol and a **Buy** / **Sell** badge,
- the date the trade was entered and its size (for example **1.2 lots** or **65 qty**),
- the trade's P&L, and
- its execution rating as stars.

The selected row is marked with a bar down its left edge. The first entry is selected automatically, so the right-hand side is never blank beside a list that has entries.

**Search journal entries…** filters the list by symbol, note text and strategy. If nothing matches you see **No entries match** with a **Clear search** button.

The list is paged. The bar at the bottom shows the entry count, the page buttons, and a rows-per-page selector; it opens on 25 per page.

### The selected entry

| Card | Shows |
|---|---|
| **Header** | Direction, symbol, rating, the trade's date, size and market, and its P&L in large figures. **View trade ↗** opens the trade on the Trades screen. |
| **Notes** | What you wrote, with **Edited *date*** and an **Edit** button that reopens the entry form. An entry with no notes says *Nothing written yet. Press Edit to add your notes.* |
| **Linked charts** | Your chart links, each opening in a new tab. Hidden when there are none. |
| **Quick stats** | The trade's **Entry price**, **Exit price**, **Result**, **R multiple**, **Duration** and **Max adverse exc.** Any figure the trade does not have is left out rather than shown as a dash. |

## An empty journal

Before you have written anything the screen says **Nothing written yet** — *Open a trade and press Journal to write your first entry.* — with a **Go to trades** button. **New entry** in the header works too.

## When a trade is deleted

**Deleting a trade deletes its journal entry with it.** An entry is about one trade, and without the trade there is nothing left to attach it to. When **Confirm before deleting** is on in [Settings → General](/settings/general), the confirmation says so. If you want to keep what you wrote, copy it somewhere first.

Editing a trade — changing its price, strategy or notes — never touches its journal entry.

## Journal notes and the monthly review

The journal is per trade. For a note about a whole month — what went well, what didn't, what to change — use the **Monthly review note** at the foot of the [Calendar](/review/calendar#monthly-review-note).

Next: [Calendar](/review/calendar) · [Trades screen](/trades/trades-screen)
