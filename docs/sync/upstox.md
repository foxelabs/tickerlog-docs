---
title: Connect Upstox
description: Sync an Upstox account — whitelist tickerlog's static IP first, then generate and paste an Analytics token.
---

# Connect Upstox

Upstox connects with an **Analytics token**, which lasts about a year and can only read. There is one step before the token, and the order matters: Upstox only answers account requests from an IP address you have whitelisted, so you add tickerlog's address **first**, then generate the token.

Auto-sync needs a **Pro** or **Max** plan. See [How auto-sync works](/sync/overview).

## What you need

- An Upstox account with access to its developer apps page.
- **Static IP** enabled on your Upstox account.
- tickerlog's address, which the connect dialog shows you.

## Step 1: Open the connect dialog

1. Go to **Settings → Accounts** and press **Add account**.
2. In **Where do you trade?**, open **Connect a broker** and choose **Upstox**.
3. The **Connect Upstox** dialog opens.

It shows two notices:

- **P&L here is before charges** — Upstox doesn't report its charges on a fill, so tickerlog can't show them at all.
- **Whitelist this address at your broker first** — tickerlog's address, with a **Copy** button.

If the dialog shows *Ask us for the address to whitelist.* instead of an address, contact support before continuing.

## Step 2: Whitelist the address at Upstox

1. Press **Copy** beside the address in the dialog. You see **Address copied**.
2. In your Upstox account, enable **Static IP** and add the address you copied.
3. Save it at Upstox.

::: warning Do this before generating the token
As the dialog says, the whitelist can only be changed once a week, and changing it invalidates any token you already generated — so set the address first, then generate the token. If you generated a token earlier, generate a new one now.
:::

## Step 3: Generate the Analytics token

1. On your Upstox developer apps page, generate an **Analytics token**.
2. Copy it.

## Step 4: Connect

1. Back in tickerlog, paste the token into **Access token**.
2. Press **Connect**.

tickerlog checks the token with Upstox before saving anything. If it is accepted you see **Upstox connected**, and the account is created and named from your Upstox details. Its status starts at **Waiting for first sync**.

| Field | What to enter |
|---|---|
| **Access token** | Your Upstox Analytics token. Hidden as you type. |

The dialog notes that this token lasts about a year.

## What comes in

- Your past fills — Upstox serves between two and three years of history, depending on the time of year, because it counts in Indian financial years.
- Upstox's history does not include the time of day of older fills, only the date. Those trades are stamped at the market open, 09:15 IST, and kept in the order Upstox reports them.
- Equity and F&O fills are paired into trades by tickerlog, and expired contracts are closed on their expiry date. See [F&O contracts](/india/fo-contracts).

## Charges and P&L

Upstox does not report charges on a fill, so tickerlog shows none, and P&L is before charges. See [Gross P&L and charges](/india/pnl-and-charges).

## If something goes wrong

| Message | What to do |
|---|---|
| *Upstox refused the request from our address. Enable Static IP on your Upstox account, add* the address *to it, then try again.* | The address is not whitelisted, or not saved yet. Do Step 2, then generate a new token (Step 3) and connect again. |
| *Paste the Analytics token from your Upstox developer apps page.* | The field was empty. |
| *Upstox did not accept that token. Generate a fresh Analytics token and paste it again.* | The token is wrong. Generate a new one. |
| *Upstox accepted that token but did not say which account it belongs to. Generate a new one and try again.* | Generate a new token and try again. |
| Status **Session ended** | The token is no longer valid — it expired, or the whitelist was changed. Generate a new Analytics token and choose **Reconnect**. |
| Status **Sign-in failed** | Upstox refused the token for this account. Generate a fresh one and **Reconnect**. |

::: tip Changed your whitelist?
Changing the whitelist at Upstox invalidates your token. Expect the status to move to **Session ended** or **Sign-in failed**, then reconnect with a new token.
:::

More in [Sync troubleshooting](/sync/troubleshooting).

Next: [Indian markets](/india/overview) · [Gross P&L and charges](/india/pnl-and-charges)
