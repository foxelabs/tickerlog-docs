---
title: "CSV format"
description: "Every column name tickerlog recognises when importing a trade list or a fills file, how headers are matched, and the columns of tickerlog's own export."
---

# CSV format

This page lists every header the [CSV importer](/trades/import) understands. You rarely need it — broker statements usually match already — but it's the place to look when the preview lists a column under **Columns we ignored**.

## How headers are matched

- **Case, spaces and punctuation are ignored.** Everything except letters and digits is stripped before matching, so `Open Time`, `open_time` and `OPENTIME` are the same name, and `P&L (USD)` becomes `plusd`.
- **The first matching column wins.** If a file has both `Open Time` and `Time`, the first of them in the file is used.
- **Column order doesn't matter**, and extra columns are ignored.
- The file should have a header row first. A byte-order mark added by Excel is handled, and blank lines are skipped.

In the tables below, aliases are shown in their stripped form.

## Trade lists

One row per trade. Used for MT4, MT5 and cTrader statements and for tickerlog's own export.

### Required columns

| Field | Accepted headers |
|---|---|
| Entry time | `date`, `entrytime`, `opentime`, `openingtime`, `time`, `datetime`, `entrydate` |
| Symbol | `symbol`, `instrument`, `ticker`, `item`, `market` |
| Direction | `direction`, `side`, `type`, `action`, `buysell` |
| Entry price | `entry`, `entryprice`, `openprice`, `price`, `open` |
| Size | `lots`, `lot`, `volume`, `size`, `quantity`, `qty` |

### Optional columns

| Field | Accepted headers | Notes |
|---|---|---|
| Exit time | `exittime`, `closetime`, `closingtime`, `exitdate` | Needed for a closed trade, unless a duration is given. |
| Duration (minutes) | `durationmin`, `duration`, `durationminutes`, `timeintrade` | Used to work out the exit time when there's no exit time column. |
| Exit price | `exit`, `exitprice`, `closeprice`, `close` | Needed for a closed trade. |
| P&L | `plusd`, `pl`, `pnlusd`, `pnl`, `profit`, `profitloss`, `netpnl`, `net`, `result` | Needed for a closed trade. |
| Pips | `pips`, `points` | |
| Commissions | `commission`, `commissions` | Stored as a positive amount whatever its sign in the file. |
| Fees | `fees`, `fee`, `swap` | Stored as a positive amount whatever its sign in the file. |
| Strategy | `strategy`, `setup`, `system` | A name that doesn't exist yet is created. |
| Status | `status`, `state` | `open` or `closed`. Without it, a row with an exit price or exit time is closed. |
| Notes | `notes`, `comment`, `comments`, `remark` | |

### Contract columns

For options and futures. No broker statement has these; tickerlog's own export does, so an exported file imports back with its contracts intact.

| Field | Accepted headers | Values |
|---|---|---|
| Expiry | `expiry`, `expires`, `expireson`, `expirydate` | A date. An expiry alone means a future. |
| Strike | `strike`, `strikeprice` | Requires an expiry. |
| Option type | `optiontype`, `option`, `callput`, `right` | `CALL`, `CE` or `C`; `PUT`, `PE` or `P`. Requires a strike. |

A row with a strike or option type but no expiry, or an option type with no strike, is skipped rather than imported as the wrong trade.

### Values

| Field | Accepted |
|---|---|
| Direction | `buy`, `long`, `b`, `buy limit`, `buy stop` · `sell`, `short`, `s`, `sell limit`, `sell stop` (any case) |
| Dates | Most standard formats, e.g. `2026-03-14 09:30` or ISO 8601. Times with no timezone are read as UTC. |
| Numbers | Thousands separators, spaces, `$`, `€` and `£` are removed; `(12.50)` means −12.50. A comma decimal point such as `1,25` is **not** supported, because it can't be told apart from a thousands separator. |
| Size | Must be greater than zero. |

### Example

```csv
Open Time,Symbol,Type,Open Price,Close Time,Close Price,Volume,Commission,Swap,Profit
2026-03-14 09:30,XAUUSD,buy,2412.35,2026-03-14 11:05,2418.10,0.50,3.50,0,287.50
2026-03-15 14:10,EURUSD,sell,1.08650,,,1.00,,,
```

The first row is a closed trade; the second has no exit, so it's imported as open.

## Fills files

One row per execution, as in Zerodha Console's tradebook. tickerlog treats a file as a fills file when it has a trade id column and no P&L, exit price or exit time column.

| Field | Required | Accepted headers |
|---|---|---|
| Trade id | Yes | `tradeid`, `tradenumber`, `tradeno`, `exchangetradeid` |
| Symbol | Yes | `symbol`, `tradingsymbol`, `scrip`, `instrument`, `ticker`, `name` |
| Direction | Yes | `tradetype`, `transactiontype`, `side`, `buysell`, `type` |
| Quantity | Yes | `quantity`, `qty`, `filledqty`, `tradedqty` |
| Price | Yes | `price`, `tradeprice`, `averageprice`, `avgprice`, `rate` |
| Execution time | One of these two | `orderexecutiontime`, `tradetime`, `executiontime`, `filltimestamp`, `timestamp` |
| Trade date | One of these two | `tradedate`, `date` |
| Order id | No | `orderid`, `orderno`, `ordernumber` |
| ISIN | No | `isin` |
| Exchange | No | `exchange` |
| Segment | No | `segment` |
| Product | No | `product`, `producttype` |
| Expiry | No | `expirydate`, `expiry`, `expireson` |

| Field | Accepted values |
|---|---|
| Direction | `BUY`, `B`, `BOUGHT`, `PURCHASE` · `SELL`, `S`, `SOLD` (any case) |
| Exchange | `NSE`, `BSE`, `NFO`, `BFO`, `MCX`, `CDS`, `BCD` |
| Times | Read as Indian time when no timezone is given. A row with only a trade date is placed at 09:15. |

How fills become trades is explained in [Importing from CSV](/trades/import#fills-files-zerodha-console).

## tickerlog's own export

**Export CSV** on the Trades screen, **Export** on Reports and the export in Settings → Data write these columns, in this order:

| Column | Contents |
|---|---|
| `Date` | Entry time |
| `Symbol` | The symbol — for an option or future, the underlying (e.g. `NIFTY`) |
| `Asset Class` | The market, e.g. Forex |
| `Expiry` | Contract expiry, or empty |
| `Strike` | Option strike, or empty |
| `Option Type` | `CALL` or `PUT`, or empty |
| `Direction` | `Buy` or `Sell` |
| `Entry` | Entry price |
| `Exit` | Exit price, or empty while open |
| `Lots` | Position size |
| `P&L` | Result, or empty while open |
| `Currency` | The account's currency, per row — so a file spanning accounts in different currencies stays accurate |
| `Pips` | Pips, or empty |
| `Duration (min)` | Minutes held, or empty |
| `Strategy` | Strategy name, or empty |
| `Status` | `Open` or `Closed` |

Every column except `Asset Class` and `Currency` is read back by the importer, so an export can be imported again. Re-importing into the account it came from skips every row as a duplicate.

Related: [Importing from CSV](/trades/import) · [Settings → Data](/settings/data)
