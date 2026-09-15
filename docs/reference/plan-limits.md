---
title: "Plan limits"
description: "What Free, Pro and Max allow, what counts toward the account limit, the notices you see near a limit, and what happens when a plan ends."
---

# Plan limits

Each plan has exactly two limits: **how many active accounts you can keep**, and **whether accounts can sync automatically**. Nothing else is metered — every plan has every screen, CSV import and full export.

## What each plan allows

| | Free | Pro | Max |
|---|---|---|---|
| Active trading accounts | 2 | 10 | Unlimited |
| Auto-sync (broker APIs and MetaTrader) | No | Yes | Yes |
| Sync frequency | — | Hourly, plus **Sync now** | Hourly, plus **Sync now** |
| Log trades by hand, import CSV, export | Yes | Yes | Yes |

Prices and the launch offer are on [Plans & billing](/settings/billing).

## What counts toward the account limit

- **Every account that is not archived counts** — manual or connected, real or demo.
- **Demo accounts count.** A prop-firm challenge or funded account usually runs on a server the platform reports as demo, and syncing it is no different from syncing a live one.
- **Archived accounts do not count.** Archiving is reversible and keeps the whole history readable and exportable, so archiving a finished challenge is the free way to make room. See [Accounts](/settings/accounts#archive).

## Where limits apply

| Action | Account limit | Sync |
|---|---|---|
| Adding an account (by hand, by import, or by connecting) | Checked | Connecting needs it |
| Restoring an archived account | Checked | — |
| Connecting a broker or setting up MetaTrader | — | Checked |
| **Resume** and **Sync now** on a connected account | — | Checked |
| Editing, archiving, deleting, importing into, exporting | Never | Never |

## The notices you will see

tickerlog tells you about a limit before you hit it, not only after. Notices appear in the **Add account** flow, the connect dialogs and on [Settings → Accounts](/settings/accounts), each with a **See plans** button.

| When | Example |
|---|---|
| One slot left (on a plan with more than two) | *You have one account left of 10.* |
| At the limit | *You're using all 2 of your accounts.* |
| Over the limit after a downgrade | *Your plan covers 2 accounts and you have 5.* |
| Refused adding | *Your plan covers 2 accounts. Archive one you have finished with, or upgrade for more.* |
| Refused restoring | *Your plan covers 2 accounts and you have 2. Archive another, or upgrade, before bringing this one back.* |
| Sync on Free | *Automatic sync is part of a paid plan.* / *Connecting a broker is part of a paid plan. Your trades can still be imported from a CSV or entered by hand.* |

Account notices remind you that archiving frees a slot. Sync notices do not, because no number of archived accounts turns sync on.

On Free, the sidebar also carries a permanent **Upgrade to Pro** card showing how many of your accounts you are using, with **Upgrade now**. It does not appear on a paid plan.

## When a plan ends or you downgrade

Nothing is deleted and no account is removed.

- **You keep every account**, even above the new limit. Their trades stay readable, editable and exportable.
- **The limit only affects adding.** While you are over it, you cannot add or restore an account until you are back under — by archiving, or upgrading.
- **Syncing stops.** Connected accounts show **Not syncing**; no further polls happen, and a MetaTrader terminal's pushes are refused. The connection itself is kept, so nothing needs reconnecting — when you subscribe again, syncing starts on its own. Meanwhile you can still log trades by hand or import a CSV.
- **A cancelled plan keeps working until its paid period ends.** The change happens at the end of that period, not when you press **Cancel plan**.

If your plan was sold to you with particular limits and those limits later change for new customers, your subscription keeps the limits it was sold with.

Related: [Plans & billing](/settings/billing) · [Sync troubleshooting](/sync/troubleshooting)
