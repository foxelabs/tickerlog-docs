---
title: "Indian markets"
description: "How tickerlog adapts to NSE, BSE and MCX accounts — Qty instead of lots, no pips, product codes, underlyings — and how it decides an account is Indian."
---

# Indian markets

tickerlog is one app for every market. When the account you are looking at trades on an Indian exchange, the screens speak that market's language: **Qty** rather than lots, no pips column, the broker's product codes, and contracts named the way a contract note names them.

Nothing about your figures changes. The same trade has the same P&L either way — only the labels around it, and which columns are shown, follow the market.

## How tickerlog knows an account is Indian

There is no setting for it. tickerlog works it out from the account, checking these in order and stopping at the first that applies:

1. **The account syncs from an Indian broker** — Dhan, Upstox or Zerodha.
2. **The account has traded on an Indian exchange** — NSE, BSE, MCX, or their derivative and currency segments.
3. **The account's currency is INR.** This is what makes an account you fill in by hand, or from a CSV, read as Indian before any trades carry an exchange.

If none of these apply, the account uses the forex layout (for MetaTrader) or a plain, neutral one.

The screens follow the account switcher. With a single account selected, its market decides. With **All Accounts** selected, the accounts in that group decide — so an INR group reads as Indian, a USD MetaTrader group as forex.

::: tip Filters never relabel the screen
Only the accounts in scope decide the market. Narrowing Trades or Reports to one symbol never changes a column heading.
:::

## What changes

| Where | Forex account | Indian account |
|---|---|---|
| Size column and field | **Lots** | **Qty** |
| Size steps by | 0.01 | 1 — quantity is a whole number |
| Symbol column | **Pair** | **Symbol** |
| Symbol field in **Log trade** | **Symbol / Pair** | **Symbol** |
| Pips column | Shown | **Hidden** |
| Costs field in **Log trade** → **Advanced** | **Commissions**, plus **Fees** | **Charges** (no separate Fees) |
| **Product** field and detail row | Not shown | Shown |
| P&L column | Net of the costs on the trade | **Gross** — before charges, with an ⓘ explaining why |
| **Net result** in the trade detail | Shown when there are costs | Not shown |
| Grouping in Reports | **Performance by symbol** | **Performance by underlying** |
| Contract names | — | **NIFTY 24600 PE**, with the exchange, contract type and expiry underneath |

### Qty is the broker's own number

Quantity is always the number your broker reports — the number on your contract note and on the broker's own positions screen. A two-lot NIFTY position is **130**, not "2 lots".

tickerlog never converts quantity into lots. Brokers do not report a lot size with each fill, and exchanges change lot sizes over time (NIFTY has been 25, 50, 65 and 75), so a converted figure would eventually be wrong about your older trades.

### Why pips are hidden

A pip is a forex unit. On a share or an index option it has no meaning, so rather than filling a column with dashes, the column is removed.

### Product codes

Indian brokers mark each position with a product — for example **CNC** (delivery), **MIS** (intraday) or **NRML** (carry-forward derivatives). tickerlog stores the broker's code exactly as sent, and shows it as **Product** in the trade detail.

The product matters because it keeps positions apart: an intraday sell never closes a delivery holding in the same stock, just as your broker treats them. When you log a trade by hand, the **Product** field is under **Advanced** in the Log trade dialog; type the same code your broker uses (the field suggests *CNC, MIS, NRML…*) so that trade lines up with synced ones.

If a trade arrives with no product at all — a CSV statement usually has none — tickerlog lets a later fill from your broker close it, whatever product that fill carries. A trade that *does* have a product is only ever closed by a fill with the same product.

## Markets and asset classes

Every trade is filed under an asset class, which is what the **Market** filter and the market line under a symbol use.

| Trade | Asset class |
|---|---|
| An option (any contract with a strike and a call or put side) | **Options** |
| A future (a contract with an expiry and no strike) | **Futures** |
| A share on NSE or BSE | **Stocks** |
| An index itself (for example NIFTY as an underlying) | **Indices** |

The six index underlyings **NIFTY**, **BANKNIFTY**, **FINNIFTY**, **MIDCPNIFTY**, **SENSEX** and **BANKEX** are already in tickerlog's shared catalogue, so they are recognised without any setup. Shares are recognised from what your broker reports about them when they arrive.

See [Markets](/reference/markets) for the full list.

## What is the same

- Every figure — P&L, win rate, profit factor, expectancy, drawdown — is calculated the same way for every market. See [Reports](/review/reports#how-the-figures-are-calculated).
- Your currency is the account's own, so an INR account shows **₹**.
- An account holding forex in USD and another holding NSE options in INR can live side by side; switch between them with the account switcher.

## In this section

- [F&O contracts](/india/fo-contracts) — how options and futures are stored, named and brought in.
- [P&L and charges](/india/pnl-and-charges) — why Indian P&L is gross, where charges appear, and how expired contracts are settled.

To connect a broker, see [Dhan](/sync/dhan), [Upstox](/sync/upstox) or [Zerodha](/sync/zerodha).
