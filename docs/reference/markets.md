---
title: "Markets"
description: "The nine asset classes, what belongs in each, and why reclassifying a symbol reclassifies its whole history."
---

# Markets

Every symbol belongs to exactly one **market**, and every trade takes its market
from its symbol.

## The nine

| Market | What belongs in it |
|---|---|
| **Forex** | Currency pairs — `EURUSD`, `GBPJPY`. |
| **Metals** | Gold, silver, platinum, copper. |
| **Energies** | Oil, natural gas. |
| **Indices** | `US100`, `GER40`, `NIFTY`. |
| **Stocks** | Individual shares. |
| **Crypto** | `BTCUSD`, `ETHUSD`. |
| **Futures** | Exchange-traded futures contracts. |
| **Options** | Options contracts. |
| **Other** | The escape hatch. |

This list is what the dashboard's breakdown, Reports' market grouping, the
filter popover's Market facet and the Trades table's sublabel all group by.

## Why Metals and Energies rather than Commodities

Because that is the split broker instrument lists already use, and because one
combined bucket would put gold and crude oil in the same row — which defeats the
comparison the field exists for.

## Reclassifying

The market lives on the **symbol**, not on the trade. So correcting a symbol's
market reclassifies its entire history at once, and every report follows.

That is the fix when an imported symbol was guessed wrong: correct it once on
**Trading → Symbols** rather than editing trades.

## Accounts do not have a market

An account's markets are **derived** — the distinct classes of the instruments it
has actually traded. An account trading three classes says three.

There is no "primary market" to pick when you create an account, because it
would be wrong the first time you traded something else, and it could never
express an account that trades several.
