---
title: "Glossary"
description: "The terms tickerlog uses on its screens, and exactly what each figure counts."
---

# Glossary

Terms as they appear in the app, in alphabetical order within each group.

## Accounts and scope

| Term | Meaning |
|---|---|
| **Account** | One broker or prop-firm account. Every trade belongs to one. |
| **All Accounts** | Every *real*, unarchived account in one currency, viewed together. Demo accounts are never included. |
| **Account switcher** | The control at the top of the sidebar that decides which account every screen shows. Remembered between visits. |
| **Archive** | Hides an account and its whole history from every screen and figure. Reversible with **Restore**, and archived accounts do not count towards your plan's account limit. |
| **Demo** | An account marked as practice money. Viewed only on its own, because adding a demo balance to real ones describes no account that exists. Demo accounts still count towards your plan's limit. |
| **Real** | An account trading real money. |
| **Starting capital** | The balance an account began with, as entered when the account was added. |

## Trades

| Term | Meaning |
|---|---|
| **Closed** | A trade with an exit. It has a result and counts in every figure. |
| **Commissions** | Costs recorded on the trade. For Indian brokers shown beside the P&L rather than subtracted from it. |
| **Direction** | **Buy** (long) or **Sell** (short). |
| **Duration** | Time from entry to exit. An open trade shows a dash. |
| **Lots** | The size of a MetaTrader or forex trade. |
| **Open** | A trade with no exit price yet. Counted in trade totals, but contributes no P&L, win or loss. |
| **P&L** | The trade's profit or loss as your broker reports it — tickerlog records it rather than working it out. |
| **P&L (gross)** | P&L before charges, as shown for Indian broker accounts. See [P&L and charges](/india/pnl-and-charges). |
| **Pips** | Price movement in pips, shown for forex accounts only. |
| **Product** | An Indian broker's product code, such as CNC, MIS or NRML. Positions are only closed against the same product. |
| **Qty** | The size of a trade as a quantity of units or shares. For F&O it is the total quantity on the contract note, not the number of lots. |
| **R multiple** | The result expressed in units of the risk taken. Optional, under **Advanced**. |
| **Strategy** | The setup you were following. Renaming a strategy keeps every trade attached to it. |
| **Symbol** | The instrument traded. For Indian F&O, the underlying — `NIFTY` — with the contract on the trade. |

## F&O contracts

| Term | Meaning |
|---|---|
| **Expiry** | The date a futures or options contract ends. |
| **Settled at expiry** | A contract that expired without a closing fill. The exchange settled it, and tickerlog closes it at its settlement value. |
| **Strike** | An option's strike price. |
| **Option type** | Call or put (CE / PE). |
| **Underlying** | The index or share a contract is written on. |

## Figures

| Term | How it is calculated |
|---|---|
| **Win rate** | Winning trades ÷ closed trades, to one decimal place. Breakeven trades count in the total but not as wins; open trades are left out. Shows a dash when nothing has closed. |
| **Profit factor** | Total of winning trades ÷ total of losing trades (as a positive number). Above 1 means you made more than you lost. Shows a dash when there are no losses to divide by. |
| **Expectancy** | Total P&L ÷ closed trades — what an average trade made. |
| **Max drawdown** | The largest fall in equity from a previous high, drawn as a dashed high-water line on the equity curve. |
| **Equity curve** | Your cumulative P&L over time. On the Dashboard it is all-time; in Reports it follows the period. |
| **Total trades** | Every trade in the period, open ones included. |
| **Breakeven** | A closed trade whose P&L is exactly zero. |

## Sync

| Term | Meaning |
|---|---|
| **Auto-sync** | tickerlog reading your trades from your broker, read-only. Part of Pro and Max. |
| **EA** | Expert Advisor — the tickerlog add-on for MetaTrader 5 that sends your history from your own terminal. |
| **EA key** | The key you paste into the add-on. Shown once when generated; one key covers every terminal. |
| **Fill** | A single execution reported by a broker. tickerlog pairs buys and sells into trades. |
| **Sync now** | Asks for an immediate sync of a polled broker account, with a 10-minute cooldown. |
| **Session ended** | The broker's login for this connection has expired — ordinary every morning for Zerodha. Reconnect to resume. |
| **Sign-in failed** | The broker refused the credential outright. Reconnect with a working one. |
| **Behind schedule** | Several sync cycles have been missed. |
| **Not syncing** | The connection is intact but your plan no longer includes sync. |

See [Sync troubleshooting](/sync/troubleshooting) for every state.

Related: [Markets](/reference/markets) · [Plan limits](/reference/plan-limits)
