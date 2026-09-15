---
title: "Plans & billing"
description: "Settings → Billing: the Free, Pro and Max plans, the launch price, currencies, changing or cancelling a plan, slow payments, granted plans and your payment history."
---

# Plans & billing

**Settings → Billing** shows the plan you are on, the plans you can move to, and every payment. Plans differ in two things: **how many accounts you can keep**, and **whether they sync from your broker**. Every plan has every screen, CSV import and full export.

::: info Billing is not switched on yet
The plans and prices below are what tickerlog will charge, but paid plans cannot be bought today — the Free plan is the whole product until billing opens, and prices may still move before then. A plan that cannot be bought yet shows **Not available yet** on its button.
:::

## The plans

| | **Free** | **Pro** | **Max** |
|---|---|---|---|
| Price | Free | $12 a month or $120 a year | $28 a month or $280 a year |
| Launch price | — | $9 a month or $90 a year | $21 a month or $210 a year |
| Trading accounts | 2 | 10 | Unlimited |
| Auto-sync from your broker | No — by hand or CSV | Yes — hourly, plus **Sync now** | Yes — hourly, plus **Sync now** |

Free is not a trial. It is a plan you can stay on, and it is where you are whenever you have no paid plan. Max is intended for prop-firm traders running several challenge accounts at once. Exactly what counts toward a limit, and what happens over one, is in [Plan limits](/reference/plan-limits).

Prices are catalogue prices in US dollars, before tax.

## The billing screen

### Current plan

The top strip reads **Current plan — {name}**. Underneath it shows the price and when the plan **renews** (or **ends**, with an **Ending** badge, if you have cancelled). On Free it reads *Two accounts, filled in by hand or from a CSV.*

A paid subscription adds:

- **Cancel plan**, or **Keep my plan** once a cancellation is scheduled.
- **Manage payment method**, which opens the payment provider's own page for your card, invoices and payment details.

### Monthly or yearly

The **Monthly** / **Yearly** switch above the cards changes which prices the cards show. Yearly is priced at ten months — *2 months free*.

### Plan cards

Each card shows the plan name, its price per month or year, and a one-line description. Your current plan is ringed and labelled **Current plan**. The button reads:

| Button | When |
|---|---|
| **Your plan** | The plan you are on. |
| **Upgrade to {plan}** | A higher plan. |
| **Downgrade** | A lower plan. |
| **Not available yet** | The plan cannot be bought yet. |

### Preview currency

A currency select to the right of the switch shows the cards in another currency. It only changes what is **displayed**: the exact amount, and the tax on it, are confirmed at checkout in the currency your card is charged in. Prices in other currencies are set individually rather than converted from the dollar figure — a rupee price is not a conversion of a dollar one.

Once you are subscribed, the select is locked to the currency you first paid in, with a tooltip explaining why: a later plan change is charged to the same card in the same currency.

## The launch price

While the launch offer runs, a paid card shows the launch price with the list price struck through beside it, and a line such as *Launch price for your first 12 months, then $12.* (or *…for your first year…* on yearly). The renewal price is always on the card before you choose.

The launch price applies for your first twelve months, then the plan renews at its list price. The struck-through pair is shown in the preview currency too.

On other screens, if you are on Free, a green **Launch offer** banner may appear at the top of the app naming the cheapest offer and linking to **See plans**. Press its **×** to dismiss it; it stays dismissed in that browser. It never appears for a paying account or on the billing screen itself.

## Choosing a plan

### From Free

Choosing a paid plan sends you to the payment provider's checkout page, which states the amount, the tax and the payment method before anything is taken — so tickerlog does not ask you to confirm first.

When you come back, a notice **Confirming your payment** may show while tickerlog waits to hear from the provider. The page updates on its own; returning from checkout does not by itself grant the plan.

### Changing plan while subscribed

Moving between paid plans does **not** go through a checkout page, so it always asks first:

1. Press **Upgrade to {plan}** or **Downgrade**.
2. The dialog **Change to {plan}?** explains that this charges the card on file straight away, prorated against what you have already paid.
3. Press **Change plan**, or **Keep my current plan** to back out.

You see *You're on {plan}* on success. If you had cancelled, choosing a plan withdraws the cancellation — picking a plan is a decision to keep paying.

## Cancelling and keeping your plan

1. Press **Cancel plan**.
2. The dialog **Cancel your plan?** explains that you keep everything until the end of the period you have paid for; after that, syncing stops and the account cap applies again. Nothing is deleted.
3. Press **Cancel plan** to confirm, or **Keep it**.

You see *Your plan will end at the period end*, and the strip shows **Ending**.

Changed your mind before the period runs out? Press **Keep my plan**, then **Keep my plan** in the **Keep your plan?** dialog (or **Leave it ending**). You see *Your plan will renew*. Once the period has actually ended this is no longer possible — you see *That period has already ended — start a new plan instead.*

Cancelling stops the next charge; it does not refund the period already started. Paid periods are non-refundable, except where the law where you live gives you a right to one.

## Slow and failed payments

Some payment methods, such as UPI, can take **up to 48 hours** to confirm.

- While a payment is settling, a notice **A payment is still settling** names the amount and the date. Plan buttons, **Cancel plan** and **Keep my plan** are disabled until it lands, so you cannot pay twice. **Manage payment method** stays available. The page updates when the payment confirms.
- If a payment is refused, a notice **A payment didn't go through** names the amount and the date. Nothing changes on your plan; use **Manage payment method** to fix the card.

If a renewal payment fails, the provider retries it and emails you, and you keep your plan meanwhile. If it keeps failing, the subscription ends and you move to Free. Nothing is deleted.

## Granted plans

A plan can be granted to you at no charge. A green notice then reads **This plan was granted to you**, naming the plan and its end date (or *with no end date*): nothing renews and nothing is charged.

On a granted plan you can only buy a **higher** plan — the cards for your plan and below are disabled, since paying for what you already hold helps nobody. Buying a higher plan ends the granted one the moment the paid one starts, and its remaining days are not reinstated.

## Payments

The **Payments** table lists every charge. Before the first it reads *Nothing has been charged yet.*

| Column | Meaning |
|---|---|
| **Invoice** | The payment's reference. |
| **Date** | When it was paid, or when it started if still pending. |
| **Amount** | In the currency charged. |
| **Status** | **paid**, **pending** or **failed**. |
| — | A **PDF** link to the receipt, where available. |

Next: [Plan limits](/reference/plan-limits)
