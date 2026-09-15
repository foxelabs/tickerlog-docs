---
title: "Logging a trade"
description: "The Log trade and Edit trade dialog — every field, the Advanced section, how open and closed trades differ, and why P&L is entered rather than calculated."
---

# Logging a trade

Press **Log trade** in the header of the [Trades screen](/trades/trades-screen) to record a trade by hand. The same dialog, titled **Edit trade**, opens when you choose **Edit** on a trade.

You don't need to set anything up first. Pick a symbol from the catalogue (or type your own) and it's added to your [Symbols](/trades/symbols) when you save.

## Fields

Only the symbol, direction, entry price, size and entry time are needed; **Log trade** stays disabled until the symbol, entry price and size are filled in.

| Field | Required | Notes |
|---|---|---|
| **Account** | Yes | Starts on the account you're viewing, or the first one when viewing All Accounts. |
| **Symbol / Pair** (**Symbol** on non-forex accounts) | Yes | A searchable picker — see [Picking a symbol](#picking-a-symbol). |
| **Direction** | Yes | **Buy** or **Sell**. Starts on Buy. |
| **Lots** / **Qty** | Yes | Must be greater than zero. Lots step by 0.01; Qty steps by whole units. |
| **Entry price** | Yes | |
| **Exit price** | No | *Leave empty while the position is open.* |
| **Entry time** | Yes | Starts at the current time. |
| **Exit time** | No | *Leave empty while open.* |
| **P&L** | When closed | Disabled until an exit price is entered. As you type, the signed figure appears underneath in green or red. |
| **Strategy** | No | **No strategy**, or one of your active [strategies](/trades/strategies). Retired strategies aren't offered. |
| **Notes** | No | Free text. Shown on the trade detail. |

### Open or closed

There is no Open/Closed switch. **The exit price decides**: leave it empty and the trade is saved as open; enter one and it's saved as closed.

A closed trade also needs an **Exit time**; without one the save is refused and you'll see **Couldn't log that trade** (or **Couldn't save that trade** when editing). Fill in the **P&L** too — a closed trade saved with it empty is recorded as a zero result. To close an open trade later, edit it and fill in all three.

### Why you enter the P&L

tickerlog records your P&L rather than working it out from the prices. Your broker's figure already includes swap, commission and the exact fills, and brokers restate figures after the fact; a number calculated here would disagree with the statement you're reconciling against.

## Advanced

Press **Advanced** under the notes to show these fields, and **Hide advanced** to fold them away again:

| Field | Notes |
|---|---|
| **Commissions** (**Charges** on Indian accounts) | Enter as a positive amount. |
| **Fees** | Swap and other fees. Not shown on Indian accounts. |
| **Order type** | Free text, e.g. *Market, Limit…* |
| **R multiple** | Your result in units of risk. When set, the trade detail also shows the **Risk** it implies. |
| **Product** | Indian accounts only. The broker's product code, e.g. *CNC, MIS, NRML…* |

::: info Product codes should match your broker's
On Indian accounts, a buy and the sell that closes it are matched on the product. Use the same code your broker uses (for example `CNC` for delivery, `MIS` for intraday) so hand-entered trades line up with synced ones.
:::

On forex and other accounts, **Net result** on the trade detail is the P&L less the commissions and fees you enter here.

## Picking a symbol

Open the picker and type. The list shows up to three groups:

- **Your symbols** — symbols you already trade (retired ones are hidden).
- **Add from catalogue** — matches from tickerlog's shared catalogue, with the exchange or market beside each. Picking one brings its name, market and decimal places with it.
- **Not in the catalogue** — only when nothing at all matched, a **Use "…"** option adds exactly what you typed. You need at least two characters (**Type at least two characters.**).

A symbol you already hold isn't offered again as a catalogue suggestion, and a catalogue match is always offered instead of a near-miss of your own typing — so `GOLD` beside an XAUUSD you already hold won't create a second symbol.

## Saving

- **Log trade** — saves and closes; you'll see, for example, **XAUUSD logged**.
- **Save changes** (editing) — saves and closes with **XAUUSD updated**.
- **Cancel** closes without saving.

The decimal places of a symbol widen automatically if you enter a price with more of them — see [Symbols](/trades/symbols#decimal-places).

## Editing a trade

**Edit** opens the dialog filled with the trade as it is stored, and saving replaces it. A few things to know:

- **Options and futures** — the dialog has no fields for a contract's expiry, strike or side, but editing a trade that carries them keeps them. See [F&O contracts](/india/fo-contracts).
- **Synced trades can be edited.** Nothing locks a trade that arrived from a broker. Be careful changing a synced trade's symbol, contract or product: those are how a later closing fill finds the position, so changing them can leave the next sync opening a second position instead of closing this one.
## Deleting

Delete a trade from its row menu on the Trades screen. It takes its journal entry with it — see [Deleting](/trades/trades-screen#deleting).

Next: [Import trades from a CSV](/trades/import)
