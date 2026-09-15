---
title: "Importing from CSV"
description: "Bringing a broker statement or trade book into tickerlog — the preview, trade lists versus fills files, duplicates, new symbols and every error you may see."
---

# Importing from CSV

You can bring past trades into tickerlog from a CSV file: an MT4, MT5 or cTrader statement, a Zerodha Console trade book, or a file tickerlog exported. Nothing is saved until you've seen exactly what will happen.

## Where to start

- **Settings → Data → Import from CSV → Choose file**.
- **Settings → Accounts → Add account → Import a statement** — if you have no account yet, you create one by hand first and the importer follows. See [Add an account](/start/add-an-account).

Importing is available on every plan.

## Importing a file

1. In **Import into**, pick the account the trades belong to.
2. Press **Choose file** and select a `.csv` file. Its name appears in the drop area; **Choose another** swaps it.
3. Press **Preview**. tickerlog reads the whole file and runs the import **without saving** (the button reads **Reading…** meanwhile).
4. Read the review (below). If something's wrong, fix the file in your spreadsheet, press **Choose another** and preview again.
5. Press **Import 42 trades** (the number is how many will be created). You'll see **42 trades imported** and the dialog closes.

**Cancel** at any point closes the dialog and saves nothing.

::: tip The preview is the import
The preview isn't an estimate — it is the real import, run once with saving switched off. What it reports is what the import will do.
:::

## The review

Four figures across the top:

| Trade list | Fills file | Meaning |
|---|---|---|
| **Rows read** | **Fills read** | Data rows in the file |
| **Will import** | **Trades to create** | Trades that will be created |
| **Duplicates** | **Duplicates** | Rows that match trades already in the account, and will be skipped |
| **Skipped** | **Skipped** | Rows that couldn't be read (shown in red when there are any) |

Below them, whichever of these apply:

- **This is a trade book, not a trade list** — shown for a fills file; see [Fills files](#fills-files-zerodha-console).
- **New symbols** — each symbol that will be added, marked **recognised** (found in tickerlog's shared catalogue, so its name, market and decimal places are known) or **guessed** (worked out from the ticker alone). A guess is worth checking; you can correct it afterwards on [Symbols](/trades/symbols) and every trade follows. Hover a symbol to see how your file spells it when it's filed under a different name — for example `XAUUSD.ecn` filed as `XAUUSD`.
- **New strategies** — strategy names from the file that will be created.
- **Columns we ignored** — headers tickerlog didn't recognise. Check this if a column you expected (say, commissions) isn't being read; the accepted names are in [CSV format](/reference/csv-format).
- **8 rows skipped** — the first eight problems, each as **Line 12 · exit price: A closed trade needs an exit price.**, followed by **…and N more.** Line numbers match your spreadsheet: the header is line 1.

If the preview finds nothing importable, the import button is disabled. If the file can't be read at all you'll see **Couldn't read that file**.

## Trade lists and fills files

There are two kinds of file, and tickerlog tells them apart from the headers — you don't choose.

- **A trade list** has one row per trade: an entry, an exit and a result. MT4, MT5 and cTrader statements and tickerlog's own export are trade lists.
- **A fills file** (a trade book) has one row per execution, identified by a trade id, with no result on any row. A buy and the sell that closed it are two rows. Zerodha Console's tradebook is a fills file.

A file with a trade id column but no P&L, exit price or exit time is read as a fills file.

## Trade lists

### What each row needs

Every row needs a symbol, entry time, direction, entry price and size. A **closed** row also needs an exit price, an exit time (or a duration) and a P&L — tickerlog records your broker's P&L rather than recalculating it, because the broker's figure includes swap, commission and fills the statement may not show.

A row is closed if the file has a status column saying `closed`, or — with no status — if it has an exit price or exit time. A row with neither is imported as an open trade.

### Duplicates

Re-importing an overlapping statement is safe. A row is a duplicate when it matches a trade already in the account on **symbol, contract, entry time, direction and size**. Duplicates are counted and skipped, never silently dropped.

Two things are deliberately not part of the match:

- **P&L**, because brokers restate it.
- **The exit**, because a position closed in two parts is two trades.

The match uses the symbol's catalogue name, so a statement that spells gold `XAUUSD.ecn` still matches trades stored as `XAUUSD`.

### Times

Times without a timezone are read as **UTC**, which is how tickerlog places trades on days. If your broker's statement is in local time, trades near midnight may land on a neighbouring day.

## Fills files (Zerodha Console)

Zerodha's API only returns today's trades, so a day you didn't reconnect on can't be synced later. Console's tradebook export is how to fill that gap. See [Connect Zerodha](/sync/zerodha).

Fills are paired into trades **oldest first**, the same way a live broker connection does it:

- A buy with nothing closing it stays as an open trade.
- A sell with nothing to close opens a short.
- Re-importing a period that's already synced or imported changes nothing — matching fills are recognised as duplicates.
- Console exports one year at a time, so a longer backfill is several files. Overlapping them is safe.

Details worth knowing:

- **No product column.** Console doesn't say whether a trade was CNC, MIS or NRML, so imported fills have no product. A later fill from your live connection can still close them.
- **Expiry dates are read from the file.** Console's F&O tradebook includes the expiry, which is how weekly options are recognised correctly. An option whose strike can't be read is left as a plain trade on the underlying rather than guessed at.
- **Times** without a timezone are read as Indian time; a row with only a trade date is placed at the 09:15 market open, in file order.
- **No charges.** Console reports charges separately, so the resulting P&L is before charges — see [Gross P&L and charges](/india/pnl-and-charges).

## Errors

### Problems with the whole file

| Message | What to do |
|---|---|
| **The file has no header row.** | The first line must name the columns. |
| **The file is missing a column for: entry time, symbol…** | A trade list needs columns for entry time, symbol, direction, entry price and lots. Rename headers to a [recognised name](/reference/csv-format). |
| **This does not look like a trade book: no …column.** | A fills file needs trade id, symbol, direction, quantity and price columns. |
| **Every fill needs a date: no execution time or trade date column.** | Add or rename the date column. |
| **That file is too large to import. Split it and import the parts.** | The limit is about 2 MB. Duplicates make overlapping parts safe. |

### Problems with a row (trade lists)

| Message | Cause |
|---|---|
| **Symbol is empty.** | |
| **Entry time is empty.** / **Couldn't read "…" as a entry time.** | Use a standard date format such as `2026-03-14 09:30`. |
| **Direction is empty.** / **"…" is not a direction.** | Accepted: buy, long, b, buy limit, buy stop; sell, short, s, sell limit, sell stop. |
| **Entry price is empty.** / **Lots is empty.** / **Couldn't read "…" as a number.** | Numbers may include thousands separators, a `$`, `€` or `£`, and brackets for negatives. A comma as the decimal point (`1,25`) is not accepted. |
| **Lots must be greater than zero.** | |
| **A closed trade needs an exit price.** / **…an exit time.** / **…a P&L.** | See [What each row needs](#what-each-row-needs). |
| **The exit time is before the entry time.** | |
| A strike or option type needs an expiry beside it; an option type needs a strike beside it; unknown option type | Contract columns must be complete — see [CSV format](/reference/csv-format#contract-columns). |

### Problems with a row (fills files)

| Message |
|---|
| **No trade id, so this row cannot be told apart from a repeat of itself.** |
| **No symbol.** |
| **Trade type is neither buy nor sell.** |
| **Quantity is not a positive number.** |
| **Price is negative.** |
| **The execution time could not be read.** |

A pairing problem that isn't tied to one line is listed as **Trade** followed by the broker's trade id.

## What is kept

tickerlog doesn't store the file. It keeps the trades it created and, for a completed import, the counts and the rows it rejected.

Next: [CSV columns and aliases](/reference/csv-format)
