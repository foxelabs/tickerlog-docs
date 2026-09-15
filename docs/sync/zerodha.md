---
title: Connect Zerodha
description: Sync a Zerodha account through your own Kite Connect app, reconnect each morning, and backfill missed days from a Console tradebook CSV.
---

# Connect Zerodha

Zerodha connects through a **Kite Connect app** that you create in your own Zerodha developer account. tickerlog sends you to Zerodha's login page, you sign in there, and Zerodha sends you back.

Two things about Zerodha are different from every other broker, and both come from Zerodha's rules rather than tickerlog's:

- **The session ends every night.** You reconnect each morning — one press from the account row.
- **Only today's trades are available.** A day you did not connect on can only be recovered from a **Console tradebook CSV**.

Auto-sync needs a **Pro** or **Max** plan. See [How auto-sync works](/sync/overview).

## What you need

- A Zerodha account.
- A Kite Connect app created in your Zerodha developer account, with its **API key** and **API secret**.
- tickerlog's redirect URL, which the connect dialog shows you.

## Step 1: Open the connect dialog

1. Go to **Settings → Accounts** and press **Add account**.
2. In **Where do you trade?**, open **Connect a broker** and choose **Zerodha**. The list notes that it *reconnects each morning — your broker ends the session overnight*.
3. The **Connect Zerodha** dialog opens, with a **P&L here is before charges** notice: Zerodha doesn't report its charges on a fill, so tickerlog can't show them at all.

## Step 2: Set the redirect URL in your Kite Connect app

1. In the dialog, find **Redirect URL for your broker app** and press the copy button beside it. You see **URL copied**.
2. In your Kite Connect app's settings, paste it as the redirect URL, exactly as copied.

The dialog explains why exactly matters: your broker app accepts one redirect URL, and tickerlog's never changes.

## Step 3: Enter your key and secret

| Field | What to enter |
|---|---|
| **API key** | From the app you created at your broker. |
| **API secret** | The app's secret. Hidden as you type. |

## Step 4: Sign in at Zerodha

1. Press **Continue at Zerodha**. You leave tickerlog for Zerodha's login page.
2. Sign in to Zerodha.
3. Zerodha returns you to **Settings → Accounts**, with the account created and its status at **Waiting for first sync**.

## Reconnecting each morning

Zerodha ends every session overnight, by regulation. Each morning the account's status reads **Session ended** — a neutral badge, because this is the normal state of a healthy Zerodha connection, not a fault.

To reconnect:

1. In **Settings → Accounts**, open the account's **⋯** menu.
2. Choose **Reconnect**.
3. Press **Continue at Zerodha** and sign in.

tickerlog keeps your API key and secret, so reconnecting never asks for them again. Anything you have traded since comes in on the next sync.

tickerlog stops polling at the moment the session is due to end, so the status changes to **Session ended** in the morning rather than when somebody notices a missing day.

## Backfilling from a Console tradebook

Zerodha only gives tickerlog **today's** trades. If you do not reconnect on a trading day, that day's trades cannot come through sync at all. The same applies to your history from before you connected.

The way back is Zerodha Console's **tradebook** export, which tickerlog imports through the same engine sync uses:

1. In Zerodha Console, export your tradebook as CSV for the period you are missing. Console exports up to 365 days at a time, so for a longer history download several files.
2. In tickerlog, go to **Settings → Data** and choose **Import from CSV**.
3. Pick the file. tickerlog recognises it as a fills file — one row per execution — and pairs the fills into trades.
4. Read the preview. It is the real import run once without saving, and it takes into account the positions already open in your account.
5. Commit the import.

Overlapping files, and a file that overlaps days sync already brought in, are safe: trades tickerlog already holds are skipped rather than duplicated. Fills from the file can close positions that sync opened later, and the other way round.

Console's F&O tradebook includes each contract's expiry date, so weekly options import with their full terms and can be settled at expiry.

Full details of the importer: [Import a CSV](/trades/import).

## What comes in

- Today's fills, paired by tickerlog into trades first-in first-out, within the same instrument and product code.
- F&O contract terms read from the trading symbol. Weekly contracts coming through live sync are not parsed from the symbol, because misreading their month code would file the trade under the wrong expiry — the Console backfill does carry them.
- Expired contracts are closed on their expiry date. tickerlog cannot read settlement prices through Zerodha, so an expired contract's P&L may be left blank rather than guessed. See [Gross P&L and charges](/india/pnl-and-charges).

## If something goes wrong

| Message | What to do |
|---|---|
| *Zerodha refused the sign-in. Check the API key and secret from your Kite Connect app.* | Re-enter the key and secret, copied from your app. |
| *Zerodha refused the sign-in:* followed by Zerodha's reason | Fix what Zerodha named, then connect again. |
| *That Zerodha sign-in expired before it reached us. Connect again — it only takes a moment.* | Start the connection again. |
| *That sign-in did not come back complete. Start the Zerodha connection again.* | Start again from the dialog. Check the redirect URL in your Kite Connect app matches the one tickerlog shows. |
| Status **Session ended** | Normal each morning. **Reconnect**. |
| Status **Sign-in failed** | *Zerodha refused the connection.* Check the API key and secret on your Kite Connect app, then **Reconnect**. |

More in [Sync troubleshooting](/sync/troubleshooting).

Next: [Import a CSV](/trades/import) · [Indian markets](/india/overview)
