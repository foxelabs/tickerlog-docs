---
title: "Add a trading account"
description: "The Add account flow: connect a broker, connect MetaTrader 5, track an account by hand, or import a statement."
---

# Add a trading account

Every trade in tickerlog belongs to an account — one per broker or prop-firm
account you trade. Adding one starts with a single question, and each answer
asks only for what it needs.

Open it from **Add an account** on the first-run dashboard, or **Add account**
on [Settings → Accounts](/settings/accounts).

## Where do you trade?

The dialog is titled **Where do you trade?** and offers three ways in.

| Choice | What happens next | Plan |
|---|---|---|
| **Connect a broker** | A searchable list of brokers. Pick yours and follow its connect steps. | Pro or Max |
| **Track it by hand** | A short form for an account you fill in yourself. Nothing is connected. | Every plan |
| **Import a statement** | Opens the CSV importer. | Every plan |

### Connect a broker

Type in the **Connect a broker** field to search. The list shows each broker's
logo and a line on how it syncs:

| Entry | Line shown | Guide |
|---|---|---|
| **Dhan** | Read-only. Your fills arrive hourly. | [Connect Dhan](/sync/dhan) |
| **Upstox** | Read-only. Your fills arrive hourly. | [Connect Upstox](/sync/upstox) |
| **Zerodha** | Reconnects each morning — your broker ends the session overnight. | [Connect Zerodha](/sync/zerodha) |
| **MetaTrader 5** | IC Markets, Exness, FTMO… An add-on in your own terminal. | [MetaTrader 5](/sync/metatrader) |

MetaTrader 5 can be found by searching for the broker or prop firm you use —
Exness, IC Markets, FTMO, Pepperstone, XM — as well as by "MT5".

- **A broker connection creates nothing until it works.** There is no form to
  fill in first: tickerlog checks the credential with your broker, then creates
  the account and names it from the broker's own client id.
- **MetaTrader creates nothing here either.** The dialog gives you a key and
  three steps; the account appears the first time your terminal sends its
  history, named from its own login and server.

### Track it by hand

Opens **Track an account by hand**. No broker credentials are stored for an
account you keep yourself.

| Field | Notes |
|---|---|
| **Account name** | Required, for example *Zerodha — Main*. **Save** stays disabled until it is filled in. |
| **Broker** | Free text, for your own reference. |
| **Type** | **Real** or **Demo**. Demo accounts are left out of **All Accounts** and only viewed on their own. |
| **Currency** | The account's currency. Figures for the account are shown in it. |
| **Starting capital** | The balance the account started with. |

Press **Save** to create the account.

### Import a statement

A CSV from MT4, MT5 or cTrader (and a Zerodha Console tradebook). If you already
have an account, the importer opens straight away and asks which account to
import into. If you have none, you first fill in the **Track an account by hand**
form, and the importer opens as soon as you save. See
[Import a CSV](/trades/import).

## When your plan does not cover it

The dialog tells you before you press anything:

- On the **Free** plan, every broker in the list carries a **Pro** badge.
  Choosing a broker opens a screen saying **Automatic sync is part of Pro and
  Max.** instead of the connect steps.
- When you are at your plan's account limit, **Track it by hand** carries a
  **Limit reached** badge, and choosing it (or importing with no account) says
  **This would take you past the accounts your plan covers.**
- A notice at the top of the dialog warns when you have one account slot left.

Archived accounts do not count towards the limit, so archiving a finished
account frees a slot. Demo accounts do count. See
[Plan limits](/reference/plan-limits).

Next: [Log your first trade](/start/first-trade)
