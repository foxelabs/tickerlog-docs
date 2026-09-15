---
title: "F&O contracts"
description: "How options and futures are recorded in tickerlog — an underlying plus expiry, strike and side — how they are named on screen, and how they get into your journal."
---

# F&O contracts

In tickerlog an options or futures trade is recorded as **the underlying it is written on, plus the contract's terms**: an expiry date, a strike, and a side (call or put). There is one symbol for **NIFTY**, and every NIFTY option and future you trade sits under it.

This keeps your symbol list short and your reports meaningful. A month of index options can touch hundreds of different strikes and expiries; treating each as a separate symbol would bury the one question you usually want answered — how did I do on NIFTY?

## The three terms

| Term | What it is | Present on |
|---|---|---|
| **Expiry** | The date the contract expires. | Every option and future. |
| **Strike** | The strike price. | Options only. |
| **Side** | **Call** (CE) or **Put** (PE). | Options only. |

Together the terms decide what kind of trade it is:

| Terms present | The trade is | Asset class |
|---|---|---|
| Expiry, strike and side | An option | **Options** |
| Expiry only | A future | **Futures** |
| None | A cash trade in the underlying itself | **Stocks**, **Indices**, and so on |

A cash holding in RELIANCE and an option on RELIANCE share the same symbol, but they are never mixed up: the terms keep them apart everywhere, including when positions are matched up and when duplicates are detected.

## How a contract is shown

### The name

On the Trades table, the Dashboard, the Calendar and the Journal, a contract is named from its terms:

| Contract | Shown as |
|---|---|
| NIFTY 24600 put | **NIFTY 24600 PE** |
| BANKNIFTY 52000 call | **BANKNIFTY 52000 CE** |
| NIFTY future | **NIFTY FUT** |
| A RELIANCE share | **RELIANCE** |

The broker's own trading symbol (for example `NIFTY25AUG24600PE`) is never shown. The name is built from the stored terms, so it is the same whichever broker the trade came from.

### The line underneath

The line under the name gives the exchange, the asset class and the expiry:

> **NSE · Options · 28 Aug**

The year is added once the expiry is not in the current year (**28 Aug 25**). The expiry sits on this line rather than in the name so the strike and side — what tells two contracts on the same expiry apart — are never cut off in a narrow column. The line is also what distinguishes an August future from a September one, which would otherwise both read **NIFTY FUT**.

Options are listed on NSE's derivatives segment but shown under **NSE**, so an option and a cash trade on the same stock show the same exchange.

### In Reports

**Performance by underlying** groups every contract under its underlying. A row for NIFTY adds up every NIFTY option and future in the period, and a line underneath counts how many different contracts that was, for example **312 contracts**. The **Underlying** filter works the same way. See [Reports](/review/reports).

## How contracts get into tickerlog

::: warning Contracts cannot be typed in by hand
The **Log trade** dialog has no fields for expiry, strike or side, so a trade you log by hand is always a cash trade in the symbol you pick. Options and futures come in from a broker connection or a CSV file.
:::

| Source | How the terms arrive |
|---|---|
| **[Dhan](/sync/dhan)** | Read from each fill your broker reports. |
| **[Upstox](/sync/upstox)** | Read from each fill your broker reports. |
| **[Zerodha](/sync/zerodha)** | Read from the trading symbol on each fill. Zerodha's **Console tradebook** export, used to backfill history, carries the expiry date as its own column, which is the more reliable of the two for weekly contracts. |
| **CSV import** | From the **Expiry**, **Strike** and **Option Type** columns. See [CSV format — contract columns](/reference/csv-format#contract-columns). |

tickerlog's own CSV export writes these three columns, so an exported file imports back with its contracts intact.

### Editing a contract trade

You can open an F&O trade in **Edit trade** and change its prices, quantity, times, strategy and notes. Its expiry, strike and side are kept exactly as they are — they are not on the form, and saving does not remove them.

::: warning Editing a synced trade
Positions from a broker are matched up by symbol, contract and product. If you change the symbol or **Product** of a synced trade that is still open, the broker's closing fill may no longer find it, and a second position can open instead. Prefer leaving synced trades' identifying fields alone.
:::

### Import first, or connect first?

If you plan to bring in F&O history from a broker statement **and** connect the same broker, **connect the broker first**. A generic broker statement usually names a contract only by its trading symbol, without separate expiry, strike and side columns; those positions will not line up with what the connection later reports, and can be left open. Zerodha's Console tradebook is the exception — it is read as fills, with the expiry — so it is safe to import before or after connecting. Cash equity is unaffected either way.

## Expired contracts

An option or future that expires has no closing trade in your broker's records: the exchange settles it and nothing is executed. tickerlog closes those positions for you once the expiry date has passed, and works out their result where it can. See [P&L and charges — expiry settlement](/india/pnl-and-charges#expiry-settlement).

Next: [P&L and charges](/india/pnl-and-charges)
