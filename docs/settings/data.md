---
title: "Data"
description: "Settings → Data: import trades from a CSV, connect a broker, and export all your trades or one account's."
---

# Data

**Settings → Data** is where history comes in and goes out. It has two cards, **Import** and **Export**. A CSV export is also your backup: it can be imported straight back in.

## Import

### Import from CSV

*A broker statement, or a file this app exported.* Press **Choose file** to open the import dialog. Columns are matched by name, and you see exactly what will be imported before anything is saved; overlapping rows you already have are skipped rather than doubled.

The full walkthrough is in [Import a CSV](/trades/import), and the columns it recognises are in [CSV format](/reference/csv-format).

### Connect a broker

Press **Accounts** to go to [Settings → Accounts](/settings/accounts) and add a connected account. Fills then arrive on their own — hourly for a broker API, seconds after a close for MetaTrader. Connecting a broker needs a paid plan; importing does not.

## Export

Both exports download a CSV in the same format Reports exports. Contract details for options and futures (expiry, strike, option type) are separate columns, so the file round-trips — what comes out can be imported back in.

| Row | Button | What you get |
|---|---|---|
| **Export all trades** | **Export CSV** | Every trade across all your accounts. The row shows the count, e.g. *412 trades as CSV*. |
| **Export this account** | **Export CSV** | Only what the account switcher currently has in scope — one account, or All Accounts in one currency (real accounts only). |

Exporting is available on every plan, including Free, and keeps working if a paid plan ends.

::: tip Taking a backup
There is no automatic backup. **Export all trades** is the way to keep your own copy — and the thing to do before [deleting your account](/settings/security).
:::

To export a hand-picked set of trades instead, tick them on the [Trades screen](/trades/trades-screen) and use the bulk bar; to export a filtered period, use **Export** on [Reports](/review/reports).

Next: [Plans & billing](/settings/billing)
