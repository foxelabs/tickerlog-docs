---
title: "Plans and billing"
description: "The plan ladder, what is metered, and the current state of billing — which is that it is not switched on yet."
---

# Plans and billing

::: warning
**Billing is not switched on yet**

Nothing can currently be bought, and nothing is being charged. Every account is
on the free plan, and **no plan limit is enforced anywhere** — you are not being
restricted while this is the case.

The plans below are the intended ladder. The page in the app states the same
thing rather than showing a buy button that would fail.
:::

## The plan ladder

| Plan | Price | Synced accounts |
|---|---|---|
| **Free** | — | None. 2 real accounts, manual and CSV. |
| **Essential** | $9 / month, $90 / year | 2, hourly |
| **Pro** | $19 / month, $190 / year | 10, five-minute, sync now |
| **Max** | $49 / month, $490 / year | Unlimited, fair use past 25 |

Prices are the USD catalogue figures. When billing is switched on, checkout
quotes your own currency, and the exact amount and any tax are confirmed there.

## What is actually metered

**Auto-sync, and only auto-sync.**

Every paid tier allows **unlimited real accounts**. They differ by how many
accounts sync automatically and how fresh that sync is. Free is the exception:
two real accounts, filled in by hand or by CSV.

The reason is what the server bill is made of. A manually-entered account is a
row in a table — refusing you an eleventh costs you something and saves nothing.
A synced account is a recurring poll of your broker, which is a real ongoing
cost. Storage is cheap, and so is never the limit.

**Demo accounts never sync, on any plan.** Practice data should not spend a
metered resource.

::: info
Auto-sync does not exist yet. Until it ships there is nothing to meter, which is
part of why paid plans are not sellable.
:::

## What happens if you stop paying

Written down now because it is the question people actually have:

- **Nothing is removed.** No account is deleted, hidden, or made read-only.
- **The polling stops.** That is the whole of the downgrade.
- **Going over a limit downward stays legal.** Cancel on Pro with eight accounts
  and all eight keep working. You are refused only when you try to add a ninth.
- **TickerLog never picks** which of your accounts keep syncing.

Any other behaviour would make cancelling a data-loss event.

## How payment will work

**Paddle is the merchant of record.** Card details never reach TickerLog's
servers — checkout runs in Paddle's own overlay, which states the amount, the
tax and the card before anything is taken.

What is stored on our side is your plan, your subscription status, and the
amounts of completed payments. Invoices are fetched from Paddle on demand.

Purchases are **non-refundable**, except where statutory rights say otherwise or
where Paddle exercises its own discretion. The full terms are on the
[marketing site](https://tickerlog.io/legal/terms).

## The Billing screen

**Account → Billing**, and it will show:

- The plan cards, with a monthly/yearly switch and a **Show prices for** country
  selector.
- Your current subscription and its renewal or end date.
- Your payment history, with an invoice link per payment.
- **Manage payment** — the hosted page for replacing your card.

The country selector only changes what is **displayed**. Paddle decides what to
charge from where you actually are and which card you use, so choosing "United
States" does not make anyone pay in dollars.

Prices shown on the cards are the **subtotal** — before tax. The full
tax-inclusive amount needs a complete address, which a page you are merely
browsing has not been given; the checkout overlay shows it, where Paddle knows
enough to be right.

## Cancelling

Cancelling leaves your subscription running until the end of the period you have
paid for. It does not cut off immediately.

While it is in that state you can **resume** and nothing further happens.
Once the period has actually ended, resuming is no longer possible — the way
back is a new checkout.

Choosing a different plan while a cancellation is scheduled withdraws the
cancellation first, then changes the plan. Picking the plan you already hold, in
that state, is simply a resume.

Cancel, resume and change-of-plan all ask you to confirm, regardless of the
*Confirm before deleting* setting. Checkout does not, because Paddle's overlay
is already that confirmation.
