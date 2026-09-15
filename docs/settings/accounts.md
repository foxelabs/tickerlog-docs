---
title: "Accounts"
description: "Settings → Accounts: the accounts table, the details dialog, editing, sync actions, archiving, restoring and deleting, and how the account switcher uses real and demo accounts."
---

# Accounts

**Settings → Accounts** is the list of every trading account you keep in tickerlog, with archived accounts in a second table below. Adding a new account is covered in [Add an account](/start/add-an-account); this page covers everything you do with one afterwards.

## The accounts table

The card is titled **Your accounts** with the count beside it, and carries a search box (**Search accounts…**, matching the account name or broker) and the **Add account** button. Lists open at 25 rows per page, with a pager underneath.

| Column | What it shows |
|---|---|
| **Account** | The account's name, beside a tile with its first two letters. |
| **Source** | **Auto** for an account connected to a broker or MetaTrader, **Manual** for one you keep by hand. |
| **Sync status** | For a connected account, its current state — for example **Synced**, **Waiting for first sync**, **Paused**, **Session ended**, **Sign-in failed**, **Behind schedule**, **Terminal quiet** or **Not syncing**. A dash for a manual account. See [Sync troubleshooting](/sync/troubleshooting). |
| **Type** | **Real** (green) or **Demo** (amber). |
| **Balance** | The current balance in the account's currency, green when above the starting capital and red when below. |
| **Trades** | How many trades the account holds. |
| **Last sync** | How long ago it last synced, or a dash. |

If you have no accounts yet, the table says **No accounts yet** with an **Add an account** button. A search that matches nothing says **No accounts match**, with **Clear search**.

Below the table, a short note reminds you what is stored: an account kept by hand holds no broker credentials, and a connected account stores only a read-only token you generated at your broker, which cannot trade or move money.

## The details dialog

Click a row — or focus it and press Enter or Space, or choose **View** from its menu — to open a read-only dialog named after the account. Its subtitle says either which broker it is connected to, or that it is kept by hand.

For a connected account, a panel at the top shows the sync status and a sentence explaining it. Below that, the dialog lists whichever of these have a value:

| Field | Meaning |
|---|---|
| **Broker** | The broker name. |
| **Type** | Real or Demo. |
| **Currency** | The account's currency. |
| **Starting capital** | What the account started with. |
| **Balance** | Its current balance. |
| **Trades** | Number of trades. |
| **Markets** | The asset classes this account has actually traded. |
| **Exchanges** | The exchanges its trades were on, where known. |
| **Archived** | The date it was archived, if it has been. |

**Markets** and **Exchanges** are never typed in. They are worked out from the trades on the account, so an account that trades forex, metals and indices lists all three, and the list grows as you branch out. See [Markets](/reference/markets).

The dialog is deliberately read-only. Changes go through **Edit**.

## The row menu

Each row has a **…** menu. Every account offers **View**, **Edit**, **Archive** and **Delete**. A connected account adds its sync actions between them:

| Item | What it does |
|---|---|
| **Sync now** | Asks for a sync straight away. Shown only for broker connections that tickerlog polls — not for MetaTrader, whose terminal sends on its own. Disabled for about ten minutes after a sync (the label then reads **Sync now — in …**) and on a plan without sync. Shows **Sync queued** when accepted. |
| **Reconnect** | Shown when the connection needs signing in again, for example after a broker session has ended. Opens the broker's connect dialog. |
| **Pause** / **Resume** | Stops or restarts syncing. Your trades are untouched either way. **Resume** is not offered while your plan does not include sync. |
| **Disconnect** | Removes the connection and keeps every trade already recorded. |

More on these in [How auto-sync works](/sync/overview).

## Editing an account

**Edit** opens the **Edit account** dialog.

| Field | Notes |
|---|---|
| **Account name** | Required; **Save** stays disabled while it is empty. |
| **Broker** | Free text, optional. |
| **Type** | **Real** or **Demo**. |
| **Currency** | The account's currency. |
| **Starting capital** | The balance the account started from. |

**Save** shows *{name} updated*. **Cancel** closes without saving.

## Real and demo accounts, and the account switcher

The account switcher at the top of the sidebar decides which account every screen is looking at — the Dashboard, Trades, Calendar, Reports, Journal and the rest.

- **All Accounts** means every **real** account in one currency. Demo accounts are left out, because adding a practice balance to a live one produces a figure that describes no account you actually hold. A demo account is always viewed on its own.
- If you hold accounts in more than one currency, the switcher offers one **All Accounts (USD)**, **All Accounts (INR)** and so on per currency, because balances in different currencies cannot be added together.
- Below that, your accounts are grouped under **Real** and **Demo**. A group only appears when it has something in it.

Your choice is remembered in this browser, so a reload brings you back to the same account. If the remembered account no longer exists, the switcher falls back to All Accounts.

::: info
**Type** is about how an account is grouped and totalled, not what it costs. Demo accounts count toward your plan's account limit like any other — see [Plan limits](/reference/plan-limits).
:::

## Archive

**Archive** hides an account and its whole history from every screen and every figure until you restore it. Nothing is deleted.

It asks first — **Archive {name}?** — even if **Confirm before deleting** is turned off in [General](/settings/general). That setting is about deleting rows; archiving an account moves every all-time figure in the app at once, which is the part worth a second look. On success you see *{name} archived*.

Archived accounts do not count toward your plan's account limit, so archiving a finished prop-firm challenge or an account at a broker you have left is also how you free a slot.

## Restore

Archived accounts appear in a second table, **Archived**, with columns **Account**, **Trades** and **Archived** (how long ago), and a **Restore** button on each row. Restoring brings the account and its history back into every figure and shows *{name} restored*.

If restoring would take you over your plan's account limit, it is refused and a notice at the top of the page explains why, offering **See plans**. Archive another account or upgrade, then restore.

## Delete

**Delete** is permanent. It removes the account, every trade on it and their journal entries. It always asks first — **Delete {name}?** — naming how many trades will go, and again this does not depend on **Confirm before deleting**.

If you only want an account out of your figures, archive it instead. Delete is for an account created by mistake.

## Plan limit notices

A notice may appear above the table when you are close to or at your plan's account limit — for example *You have one account left of 10.*, *You're using all 2 of your accounts.* or, after a downgrade, *Your plan covers 2 accounts and you have 5.* Each offers **See plans** and reminds you that archiving frees a slot. Details are in [Plan limits](/reference/plan-limits).

Next: [Profile](/settings/profile) · [How auto-sync works](/sync/overview)
