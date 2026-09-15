---
title: How auto-sync works
description: Which brokers tickerlog can sync, what you need on your plan, how often it runs, and how to pause, resume, sync now or disconnect a connection.
---

# How auto-sync works

Auto-sync brings your trade history into tickerlog without you typing it. You connect a broker once, and closed trades arrive on their own from then on.

Every connection is **read-only**. The connect dialog says it plainly: tickerlog can see your trade history and nothing else — it cannot place an order or move money.

## Which brokers can sync

| Broker | How it connects | How often | Guide |
|---|---|---|---|
| **MetaTrader 5** (IC Markets, Exness, FTMO and any other MT5 broker) | An add-on (EA) running in your own terminal sends your history to tickerlog | Every 15 minutes by default, plus a few seconds after a deal lands | [MetaTrader 5](/sync/metatrader) |
| **Dhan** | You paste an access token generated at Dhan | Hourly | [Dhan](/sync/dhan) |
| **Upstox** | You whitelist tickerlog's address, then paste an Analytics token | Hourly | [Upstox](/sync/upstox) |
| **Zerodha** | You sign in at Zerodha with your own Kite Connect app | Hourly, until the session ends overnight | [Zerodha](/sync/zerodha) |

There are two shapes of connection, and the difference shows up in a few places below:

- **Brokers tickerlog polls** — Dhan, Upstox and Zerodha. tickerlog asks the broker for new fills roughly every hour.
- **MetaTrader, which pushes.** Nothing on our side can reach your terminal. The add-on sends your history when it runs, so a closed terminal sends nothing — that is the trade for never handing over a password.

## You need a paid plan

Auto-sync is part of **Pro** and **Max**. On **Free** you keep accounts by hand or import a CSV. See [Plan limits](/reference/plan-limits).

On a plan without sync, choosing a broker in **Where do you trade?** opens a screen about the plan instead of the connect form, so you never fill in a token the server would refuse. Every account you connect also counts towards your plan's account limit, demo and prop-firm challenge accounts included.

::: info If your plan lapses
Nothing is deleted and nothing is disconnected. The connection's status changes to **Not syncing** and polling stops. Subscribe again and it picks up where it left off, with nothing to reconnect.
:::

## Connecting an account

1. Go to **Settings → Accounts** and press **Add account** (or start from the first-run dashboard).
2. In **Where do you trade?**, open **Connect a broker** and pick your broker from the list. Type to search — MetaTrader 5 also matches broker names such as IC Markets, Exness or FTMO.
3. Follow the dialog for that broker. Each guide above walks through it field by field.

You do not create the account first. For a broker, tickerlog proves the credential with the broker before it writes anything, then names the account from the broker's own details. For MetaTrader, the account appears the first time the add-on sends history.

## Where you see a connection

Connected accounts are listed in **Settings → Accounts** with these columns:

| Column | What it shows |
|---|---|
| **Account** | The account name |
| **Source** | **Auto** for a connected account, **Manual** for one kept by hand |
| **Sync status** | The connection's state, as a coloured badge (see below) |
| **Type** | **Real** or **Demo** |
| **Balance** | The current balance |
| **Trades** | How many trades the account holds |
| **Last sync** | How long ago it last synced, for example *12 minutes ago* |

Click a row (or choose **View** from its menu) to open the account details. For a connected account the dialog says *Connected to* the broker, and shows the status badge with a sentence explaining it.

## Sync statuses

| Status | Meaning |
|---|---|
| **Waiting for first sync** | Connected. Your trades will appear after the first sync. |
| **Synced** | Working normally. The details say when it last synced. |
| **Behind schedule** | A polled account has missed several cycles. It catches up on its own. |
| **Terminal quiet** | MetaTrader has not sent anything for a while — usually the terminal is closed. |
| **Session ended** | The broker ended the session overnight. Reconnect. Normal for Zerodha every morning. |
| **Sign-in failed** | The broker refused the credential. Reconnect with a fresh one. |
| **Paused** | You paused syncing. |
| **Not syncing** | Your plan does not include auto-sync. |

What to do about each is in [Sync troubleshooting](/sync/troubleshooting).

## The row menu

Open the **⋯** menu on a connected account's row for these actions.

### Sync now

Asks for a sync straight away instead of waiting for the next hourly cycle. You see **Sync queued**, and the trades arrive shortly after.

- One press per account every **10 minutes**. While you wait, the item reads **Sync now — in** and the minutes left.
- If you press it too soon you see *That account was synced recently — try again shortly.*
- It is not offered for MetaTrader: nothing polls your terminal, so the add-on's own timer is what sends.
- It is disabled while the connection is paused, its session has ended, sign-in failed, or your plan does not include sync.

### Reconnect

Shown when the status is **Session ended** or **Sign-in failed**. It opens the broker's connect dialog again for the same account, so trades land where they were.

### Pause and Resume

**Pause** stops syncing without touching anything else — your trades and the account are untouched. **Resume** starts it again. Pause is always available; Resume is hidden on a plan without sync.

For MetaTrader, pausing means tickerlog stops recording what the terminal sends. The terminal keeps sending until you remove the add-on from its chart.

### Disconnect

Removes the connection and keeps the account and every trade already synced. You see **Disconnected**.

::: warning MetaTrader comes back
Because your terminal decides when it sends, disconnecting a MetaTrader account does not stop the add-on. Its next push connects the account again. To stop MetaTrader for good, remove the EA from the chart in your terminal.
:::

To remove an account and its history entirely, use **Archive** or **Delete** — see [Settings → Accounts](/settings/accounts).

## Duplicates

Sync and CSV import recognise the same trade, so importing a statement and then connecting the same account does not double your history. Two exceptions are worth knowing:

- For Indian F&O, connect the broker before importing an F&O statement, or those positions may not pair up. See [F&O contracts](/india/fo-contracts).
- Zerodha's Console tradebook is a special case built to overlap safely — see [Zerodha](/sync/zerodha).

## P&L from Indian brokers is before charges

Dhan, Upstox and Zerodha report fills without all of their costs, so trades synced from them show P&L **before charges**. MetaTrader puts commission, swap and fees on each deal, so its P&L is net. The reasons are in [Gross P&L and charges](/india/pnl-and-charges).

Next: [MetaTrader 5](/sync/metatrader) · [Dhan](/sync/dhan) · [Upstox](/sync/upstox) · [Zerodha](/sync/zerodha)
