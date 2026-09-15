---
title: Sync troubleshooting
description: Every auto-sync status in tickerlog, what it means, and how to fix it — session ended, sign-in failed, behind schedule, terminal quiet, paused and not syncing.
---

# Sync troubleshooting

Every connected account shows a status in the **Sync status** column of **Settings → Accounts**. Open the account (click its row) to read the full sentence behind the badge.

## Statuses at a glance

| Status | Badge | Is something wrong? | What to do |
|---|---|---|---|
| **Synced** | Green | No | Nothing |
| **Waiting for first sync** | Grey | No | Wait for the first cycle |
| **Session ended** | Grey | No — the broker's rule | **Reconnect** |
| **Paused** | Grey | No — you paused it | **Resume** |
| **Not syncing** | Grey | No — your plan | Upgrade to Pro or Max |
| **Behind schedule** | Amber | Maybe | Wait; it catches up |
| **Terminal quiet** | Amber | Usually not | Open MetaTrader |
| **Sign-in failed** | Red | Yes | **Reconnect** with a fresh credential |

## Waiting for first sync

> Connected. Your trades will appear after the first sync.

For MetaTrader the sentence is *Connected. Your trades will appear once the EA sends them.*

A broker's first sync runs within about an hour of connecting. If you want it sooner, choose **Sync now** from the row menu. For MetaTrader, check the terminal is open with the EA on a chart — see [MetaTrader 5](/sync/metatrader).

## Session ended

> *Broker* sessions end overnight, which is their rule rather than ours. Reconnect and anything you have traded since will come in.

Indian brokers' sessions expire on a schedule set by regulation. For **Zerodha** this happens every night, so seeing it each morning means the connection is healthy.

**Fix:** open the row's **⋯** menu and choose **Reconnect**.

- **Zerodha** — press **Continue at Zerodha** and sign in. Your key and secret are kept. See [Zerodha](/sync/zerodha).
- **Dhan** — paste a fresh access token. See [Dhan](/sync/dhan).
- **Upstox** — generate a new Analytics token and paste it. If you changed your static IP whitelist, that is what ended the token. See [Upstox](/sync/upstox).

::: tip Missed a Zerodha day?
Zerodha only serves today's trades, so a day you didn't reconnect on will not come through sync. Import it from a Console tradebook CSV — see [Backfilling from a Console tradebook](/sync/zerodha#backfilling-from-a-console-tradebook).
:::

## Sign-in failed

The broker refused the credential outright. The sentence shows the broker's own reason where it gave one, or otherwise:

> *Broker* would not accept this connection. Reconnect to give it a fresh one.

Polling stops straight away rather than retrying, so tickerlog never spends repeated failed sign-ins against your broker account.

**Fix:** choose **Reconnect** and enter a fresh credential — a new token for Dhan or Upstox, or check the API key and secret on your Kite Connect app for Zerodha. For Upstox, also check the address is whitelisted.

## Behind schedule

> This account normally syncs every 60 minutes and last synced *3 hours ago*. It will catch up on its own.

A polled account has missed three cycles in a row, usually because the broker was unavailable or slow. tickerlog retries on its own.

**Fix:** usually nothing. If it stays behind for a long time, try **Sync now**, and check whether your broker's API is having problems.

## Terminal quiet (MetaTrader)

> Your terminal normally sends every 15 minutes and last did *2 hours ago*. Check that MetaTrader is running with the tickerlog EA on a chart — nothing is lost while it is closed, and it catches up when it opens.

**Fix:**

1. Open MetaTrader 5 and check it is signed in.
2. Check the tickerlog EA is on a chart. If it is not, attach it again.
3. Look in the terminal's **Experts** tab for an alert. A WebRequest alert means the URL is not allowed in **Tools → Options → Expert Advisors**; a refused-key alert means you need a new key.

If you close the terminal at night, this status is expected until you open it.

## Paused

> Syncing is paused. Your trades and this account are untouched.

For MetaTrader: *Syncing is paused. Your terminal is still sending, and we are not recording it.*

**Fix:** choose **Resume** from the row menu. **Sync now** is disabled while paused.

## Not syncing

> Automatic sync is part of a paid plan. This connection is kept as it is — upgrade and it picks up where it left off, with nothing to reconnect.

Your plan does not include auto-sync — for example a paid plan ended. Nothing is lost: the connection, the account and its trades all stay. Polling stops, a MetaTrader terminal's sends are not accepted, and **Sync now** and **Resume** are unavailable.

**Fix:** move to **Pro** or **Max** in [Plans & billing](/settings/billing). The schedule starts again on its own. Until then you can still add trades by hand or import a CSV. See [Plan limits](/reference/plan-limits).

## Messages you may meet

| Where | Message | Meaning |
|---|---|---|
| **Sync now** | *That account was synced recently — try again shortly.* | One manual sync per account every 10 minutes. The menu item shows the wait. |
| Connect dialog | *Couldn't connect* followed by the broker name | The connection failed without a specific reason. Try again. |
| **Generate my key** | *Couldn't generate a key* | Try again. On a plan without sync, the dialog shows the plan instead. |
| Any connect path | A plan notice beside the button | Your plan does not include sync, or you are at your account limit. |

## Trades look wrong

- **P&L from Dhan, Upstox or Zerodha doesn't match the broker's net figure.** It is gross by design. See [Gross P&L and charges](/india/pnl-and-charges).
- **An expired option shows a blank P&L.** tickerlog closed the position at expiry but could not read the settlement price through your broker. See [Gross P&L and charges](/india/pnl-and-charges).
- **The same position appears open twice after importing and then connecting.** For Indian F&O, connect the broker before importing an F&O statement. See [F&O contracts](/india/fo-contracts).
- **Deposits or swap charges are missing from MetaTrader trades.** They move the balance but are not trades, so they are not listed. See [MetaTrader 5](/sync/metatrader).

Next: [How auto-sync works](/sync/overview)
