---
title: "Your first trade"
description: "The first-run dashboard, and logging a trade by hand for the first time."
---

# Your first trade

Until you have at least one trade on any account, the Dashboard shows a short
welcome instead of a screen full of zeros.

## The first-run dashboard

It is headed **Welcome to tickerlog** — *Three ways in. Any one of them is
enough to start.* — with three steps:

| Step | Button | What it does |
|---|---|---|
| **Connect an account** | **Add an account** (or **Add another** once you have one) | Opens [Where do you trade?](/start/add-an-account). The step is ticked once an account exists. |
| **Log a trade** | **Log a trade** | Opens the Log trade dialog. *Symbol, direction, entry and exit. Everything else is optional.* |
| **Import a statement** | **Import a CSV** | Opens the importer. You see exactly what will be imported before anything is saved. |

On the Free plan, the first step says you can add an account by hand, and that
linking your broker is part of Pro.

The welcome is based on your whole history, not the account selected in the
switcher: if any account has a trade, you get the real dashboard. As soon as the
first trade lands — logged, imported or synced — the normal
[Dashboard](/review/dashboard) replaces it.

## Log a trade by hand

1. Press **Log a trade** on the first-run dashboard, or **Log trade** on the
   Dashboard or Trades screen.
2. Choose the **Account**.
3. Pick the **Symbol**. Start typing: your own symbols are listed first, then
   suggestions from tickerlog's shared catalogue (for example `GOLD` finds
   XAUUSD). You do not need to set symbols up beforehand — a new one is added
   when you save.
4. Choose the **Direction** — Buy or Sell.
5. Enter the size, the **Entry price** and the **Entry time**.
6. For a closed trade, enter the **Exit price**, **Exit time** and **P&L**. Leave
   the exit price empty to record a position that is still open.
7. Optionally pick a **Strategy** and add **Notes**.
8. Press **Log trade**.

A confirmation appears and the trade shows on the Trades screen and in every
figure.

::: tip Record the broker's P&L
tickerlog stores the P&L you enter rather than working it out from the prices,
because spreads, swaps and commission all move the real figure. Copy it from
your platform or statement.
:::

The size field is labelled for your market — **Lots** for a MetaTrader account,
**Qty** for most others. Commissions, fees, order type and R multiple are behind
**Advanced**. Every field is described in [Log a trade](/trades/logging).

## Then

- Write down why you took it in the [Journal](/review/journal).
- Bring in the rest of your history with [Import a CSV](/trades/import), or
  connect your broker with [Auto-sync](/sync/overview).

Next: [The Trades screen](/trades/trades-screen)
