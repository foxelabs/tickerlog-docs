---
title: "App preferences"
description: "Timezone, date and time formats, theme, and the settings that are visibly not switched on yet."
---

# App preferences

**App** has three sections: General, Appearance and Data.

## General

### Timezone, Date Format, Time Format

These drive how every timestamp in the app is printed. Defaults are **UTC** and
**12 hour**.

They are **display only**. Which day a trade counts on in the
[calendar](/review/calendar), and which week it falls in on the
[review](/review/weekly-review) screen, are always bucketed in UTC and do not
move. Otherwise every figure you have would reshuffle when you changed this
setting, and last month's numbers would stop matching what you remember.

### Show trade count in the sidebar

Toggles the badge on the sidebar's Trades item.

### Confirm before deleting

Decides whether deletes stop to ask. It applies everywhere — trades, journal
entries, symbols, strategies — so it means the same thing on every screen.

Two things it deliberately does **not** cover:

- **Archiving an account** always confirms. It is reversible, but its
  consequences are the surprise.
- **Billing actions** always confirm. That setting is about deletes; this is
  money.

## Appearance

**Colour theme** — light, dark, or follow your system.

## Data

- **Import from CSV** — see [Importing from CSV](/trades/import).
- **Export** — everything you have, as CSV.
- **Backup** — not switched on yet.

## Settings that are not switched on

TickerLog shows these rather than hiding them, but they are **disabled and
badged "Coming soon"**, because a preference that saves and survives a reload
while changing nothing is the worst kind of broken control — it looks completely
wired.

Currently in that state:

| Where | What |
|---|---|
| **App → General** | Default Language, and the alert toggles |
| **Trading → Defaults** | Every control on the panel — default lot size, risk, and the display currency |
| **App → Data** | Backup |
| **Account → Security** | Two-factor authentication |

Trading → Defaults is worth calling out: those four values save and persist, but
nothing reads them. The Log Trade dialog does not prefill from them.

::: info
**Notifications**

There is no Notifications section. It was three toggles with nothing behind
them — a tab that cost more to find than it saved — so what remains of it sits
in General. The old `/app/notifications` and `/app/backup` addresses redirect
rather than 404.
:::
