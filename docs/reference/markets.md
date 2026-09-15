---
title: "Markets"
description: "The nine asset classes, how a symbol gets one, and why changing a symbol's market changes its whole history."
---

# Markets

Every symbol belongs to exactly one **market** (asset class), and every trade
takes its market from its symbol. It is what the **Market** filter on Trades,
the market badges on Symbols and on your accounts, and the by-market figures
group by.

## The nine markets

| Market | What belongs in it | Examples |
|---|---|---|
| **Forex** | Currency pairs. | `EURUSD`, `GBPJPY` |
| **Metals** | Gold, silver, platinum, palladium. | `XAUUSD`, `XAGUSD` |
| **Energies** | Oil and natural gas. | `USOIL`, `UKOIL`, `NGAS` |
| **Indices** | Index CFDs and cash indices. | `US100`, `GER40`, `NIFTY` |
| **Stocks** | Individual shares, including Indian cash equity. | `RELIANCE` |
| **Crypto** | Cryptocurrencies. | `BTCUSD`, `ETHUSD` |
| **Futures** | A futures contract. | `NIFTY FUT` |
| **Options** | An option contract. | `NIFTY 24600 PE` |
| **Other** | Anything tickerlog could not identify. | |

## How a symbol gets its market

You are never asked to pick a market when you trade something new. When a
symbol first appears — logged, imported or synced — tickerlog decides it in
this order:

1. **Your broker's own description**, when a broker sync reports what the
   instrument is.
2. **tickerlog's shared catalogue** of commonly traded instruments, which also
   knows brokers' alternative spellings (`GOLD` is XAUUSD, `USTEC` is US100,
   and suffixes like `XAUUSD.ecn` are recognised).
3. **A guess from the name**, for anything not in the catalogue.
4. **Other**, when none of those works.

A symbol that lands in **Other** is worth checking. If a later broker sync
describes it properly, it moves out of Other on its own; a symbol already in a
real market is never moved by a sync.

## Futures and options are decided by the trade

For Indian F&O, a symbol is the **underlying** — `NIFTY`, `RELIANCE` — and the
expiry, strike and side live on each trade. So a trade with an expiry and a
strike is **Options**, one with an expiry only is **Futures**, and a trade with
neither takes the underlying's market. A cash holding and an option on the same
scrip share one symbol. See [F&O contracts](/india/fo-contracts).

## Changing a symbol's market

Open the symbol in [Symbols](/trades/symbols), press **Edit**, and change
**Market**. Because trades read their market from the symbol, **every past
trade on that symbol moves with it**, in every filter and figure.

Accounts have no market field. The markets shown on an account are counted from
the symbols it has actually traded, so an account that trades three markets
shows three.

Related: [Symbols](/trades/symbols) · [Glossary](/reference/glossary)
