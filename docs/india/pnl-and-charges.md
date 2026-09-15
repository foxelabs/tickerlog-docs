---
title: "P&L and charges"
description: "Why P&L on Indian broker trades is gross, where brokerage, STT and the other charges appear, and how expired options and futures are closed and valued."
---

# P&L and charges

On an Indian account, the **P&L on every trade is gross** — the result before brokerage, taxes and exchange charges. This page explains why, where the charges you were billed do appear, and how tickerlog closes contracts that expired.

## P&L is before charges

For trades from Dhan, Upstox and Zerodha, a trade's P&L is exactly:

> **Buy:** quantity × (exit price − entry price)
> **Sell:** quantity × (entry price − exit price)

Nothing is subtracted. You can check any row by multiplying it out, and the total reconciles with the gross figure on your broker's own P&L report.

The screens say so:

- On the **Trades** screen, the **P&L** column heading carries an ⓘ. Hover or focus it to read: *Before charges. Brokers report charges per day, not per trade — an expiring contract has no fill to carry them.*
- In a trade's detail, the figure is labelled **P&L (gross) ⓘ**, with the same explanation.

### Why not net?

A net figure per trade would need every charge attributed to the trade it belongs to, and Indian brokers do not provide that:

- **An expiring contract produces no trade.** The exchange settles it, and the exercise or assignment charges levied on it appear on no fill in any broker's data.
- **Brokers report those charges only per day** (or not at all through their connection), never per contract.

Subtracting only the charges tickerlog *can* see would give a number that is neither gross nor net, and would disagree with your broker's statement by exactly the charges it could not see — on expiry days above all. A gross figure you can reproduce from the row is more useful than a net one that is quietly wrong.

::: tip Comparing with your broker
When a figure here is higher than your broker's **net** P&L, the difference is your charges. Compare against the broker's **gross** or "realised before charges" figure instead.
:::

### Other markets

MetaTrader includes commission, swap and fees on each deal, so P&L on MetaTrader trades is net, and the detail shows a **Net result** where there are extra costs to take off. On Indian accounts **Net result** is not shown, for the reason above.

## Where charges appear

Open a trade from the [Trades](/trades/trades-screen) screen to see its detail.

| Broker | What you see |
|---|---|
| **Dhan** | Dhan reports charges on each fill. The detail shows the total as **Charges**, and a **Charges** panel itemises it. |
| **Upstox** | Upstox reports no charges on its fills, so there is no itemisation. |
| **Zerodha** | Zerodha reports charges separately from its fills, so there is no itemisation. |

The itemisation follows the order of a contract note:

| Line | Charge |
|---|---|
| **Brokerage** | Your broker's fee. |
| **STT** | Securities Transaction Tax. |
| **Exchange** | Exchange transaction charges. |
| **GST** | Goods and Services Tax. |
| **Stamp duty** | Stamp duty. |
| **SEBI** | SEBI turnover fee. |

Any other charge the broker reports is listed after these under its own name. A line only appears when the broker reported it; tickerlog never fills in zeros for a charge it was not told about.

When a position is closed in parts, its opening charges are split between the parts in proportion, so the pieces add back up to what was charged.

The itemised charges are for reference: they are **not** subtracted from the P&L and are not totalled into any figure on the Dashboard, Calendar or Reports.

When you log a trade by hand on an Indian account, the cost field under **Advanced** is labelled **Charges**.

## Expiry settlement

An option or future that you hold to expiry never produces a closing trade: the exchange settles it, and your broker's trade records say nothing. Left alone, the position would stay open in your journal forever.

So on a **connected Dhan, Upstox or Zerodha account**, each sync looks for positions whose contract has already expired and closes them.

### What happens to an expired position

1. **It is always closed.** The contract no longer exists, whatever it was worth. The trade's status becomes closed, and in its detail the **Closed** row reads **Settled at expiry**.
2. **It is valued if the underlying's closing price on the expiry day is available.** The exit price is the contract's settlement value, and the P&L follows from it in the usual way.

| Contract | Settlement value |
|---|---|
| **Call** | Underlying close − strike, or zero if that is negative |
| **Put** | Strike − underlying close, or zero if that is negative |
| **Future** | The underlying's close |

For example, a NIFTY 24600 PE bought at ₹120 × 75, with NIFTY closing at 24,450 on expiry: the put is worth 24,600 − 24,450 = **150**, so the P&L is (150 − 120) × 75 = **+₹2,250**. Had NIFTY closed at 24,700, the put would be worth **0** and the P&L **−₹9,000**.

There are no further charges on a settled position, because nothing was traded; like every Indian trade, the result is gross.

### When a price is not available

If tickerlog cannot get the underlying's close, the position is still closed but its **P&L is left blank** (shown as **—**) rather than guessed as zero. A blank result is left out of every figure — win rate, profit factor, expectancy, the equity curve — instead of counting as a break-even trade that never happened.

tickerlog keeps trying on later syncs, and fills the result in once the price can be read.

### Which positions can be valued

Settlement prices are read for the six index underlyings: **NIFTY**, **BANKNIFTY**, **FINNIFTY**, **MIDCPNIFTY**, **SENSEX** and **BANKEX**.

| Connection | Valuing index expiries |
|---|---|
| **Upstox** | Works with your normal connection. |
| **Dhan** | Needs Dhan's **Data API** subscription on your account. Without it, expired positions are closed but may be left unpriced. |
| **Zerodha** | Zerodha's connection does not provide index history, so expired positions may be left unpriced. |

Contracts on **individual stocks** and on commodities are closed at expiry but are not valued automatically, so their P&L stays blank.

::: info Accounts without a broker connection
Settlement runs as part of a broker sync. On an account you fill in by hand or by CSV — or while a connection is paused or waiting to be reconnected — expired contracts are not closed automatically. Enter the exit price and P&L yourself with **Edit trade**.
:::

Next: [F&O contracts](/india/fo-contracts) · [Indian markets](/india/overview)
