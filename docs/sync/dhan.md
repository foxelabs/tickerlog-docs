---
title: Connect Dhan
description: Sync a Dhan account by pasting an access token, what the connection reads, and how charges and P&L are shown.
---

# Connect Dhan

Dhan connects with a single paste: you generate an access token in your Dhan account and paste it into tickerlog. Trades then arrive about every hour.

Auto-sync needs a **Pro** or **Max** plan. See [How auto-sync works](/sync/overview).

## What you need

- A Dhan account.
- An **access token** generated in your Dhan account. tickerlog's messages point you to Dhan's web platform, web.dhan.co, for a fresh token.

The token is read-only as far as tickerlog is concerned: tickerlog can see your trade history and nothing else — it cannot place an order or move money.

## Connect

1. Go to **Settings → Accounts** and press **Add account**.
2. In **Where do you trade?**, open **Connect a broker** and choose **Dhan**.
3. The **Connect Dhan** dialog opens. Read the **P&L here is before charges** notice (see below).
4. In Dhan, generate an access token and copy it.
5. Paste it into **Access token**.
6. Press **Connect**.

tickerlog checks the token with Dhan before saving anything. If Dhan accepts it, you see **Dhan connected**, and the account is created and named from your Dhan client details. Its status starts at **Waiting for first sync**.

| Field | What to enter |
|---|---|
| **Access token** | The token generated in your Dhan account. Hidden as you type. |

The dialog notes that *this connection stays until you disconnect it*. tickerlog keeps the session alive for you where Dhan allows it.

## What comes in

- Your past fills, not just today's, so the first sync fills in your history.
- Equity and F&O. Dhan reports fills rather than positions, so tickerlog pairs buys and sells into trades itself, first-in first-out, within the same instrument and product code.
- Expired options and futures are closed automatically on their expiry date, because an expiry produces no closing fill. See [Gross P&L and charges](/india/pnl-and-charges).

## Charges and P&L

The notice in the dialog reads **P&L here is before charges**: your broker itemises what it took, and tickerlog shows that beside each trade — but it is not subtracted from the P&L.

Dhan is the one Indian broker that itemises charges on each fill, so a trade's detail lists them in contract-note order. The P&L figure stays gross so that quantity × (exit − entry) always adds up. Why, in full: [Gross P&L and charges](/india/pnl-and-charges).

::: info Settlement prices need Dhan's data plan
To value an expired contract, tickerlog reads the underlying index's closing price through your own Dhan connection. If your Dhan account has no Data API plan, expired positions are still closed but their P&L is left blank rather than guessed.
:::

## If something goes wrong

| Message | What to do |
|---|---|
| *Paste the access token from your Dhan account.* | The field was empty. |
| *Dhan did not accept that token. Generate a fresh one from web.dhan.co and paste it again.* | The token is wrong or expired. Generate a new one. |
| *Dhan accepted that token but did not say which account it belongs to. Generate a new one and try again.* | Generate a new token and try again. |
| Status **Session ended** | The session could not be extended. Choose **Reconnect** from the row menu and paste a fresh token. |
| Status **Sign-in failed** | Dhan refused the token for this account. **Reconnect** with a fresh one. |

More in [Sync troubleshooting](/sync/troubleshooting).

Next: [Indian markets](/india/overview) · [F&O contracts](/india/fo-contracts)
