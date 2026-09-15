---
title: "Strategies"
description: "Naming your setups and writing down their rules, starting from a suggestion, how each strategy's figures are shown, and why renaming one keeps its whole history."
---

# Strategies

A strategy is a name for a setup you trade — *Breakout*, *Pullback*, *Opening range breakout* — with the rule that defines it. Tag trades with a strategy and [Reports](/review/reports) can show how each one performs, and the Trades screen can [filter](/trades/trades-screen#the-filter-panel) by it.

Strategies live in **Settings → Strategies**. Nothing is created for you: an untraded strategy would only be an extra entry in every picker and an empty row in every report.

## The list

The card is titled **Your strategies (N)** and has a **Search strategies…** box, which matches the name or the rule.

| Column | Shows |
|---|---|
| Tick box | Selects the row for bulk actions. |
| **Strategy** | The name, with the rule beneath. |
| **Trades** | How many trades are tagged with it, for the account you're viewing. |
| **Win rate** | The share of those trades that won, to one decimal place. A dash when there's nothing to measure. |
| **P&L** | Their combined P&L. |
| **Status** | **Active** or **Retired**. |
| **⋯** | **Edit**, **Retire** / **Reactivate**, **Delete**. |

With none yet you'll see **No strategies yet** — *Name the setups you trade, and every report can group by them.* — and an **Add a strategy** button. A search that matches nothing shows **No strategies match** with **Clear search**.

## Adding a strategy

1. Press **Add strategy**.
2. Enter a **Name** — it must be different from your other strategies.
3. Optionally, describe **The rule**: *What has to be true before you take this trade?*
4. Or, under **Or start from one of these**, press a suggestion to fill in both the name and a first-draft rule, then edit them to fit how you actually trade.
5. Press **Save**. You'll see **Breakout added**; if it fails, **Couldn't save that strategy**.

Writing the rule down is worth the minute: a setup you can't restate is one you can't review your trades against later.

### Suggestions

| Suggestion | Draft rule |
|---|---|
| Breakout | Price closes beyond a level that has held more than once, on rising volume. |
| Breakout Retest | Price breaks a level, returns to it, and holds it as support or resistance. |
| Trend Continuation | Enter in the direction of the higher-timeframe trend after a pause. |
| Pullback | Buy a dip to a moving average or prior structure while the trend is intact. |
| Reversal | Trend exhausts at a level and turns — divergence, or a failed new extreme. |
| Range / Mean Reversion | Fade the edges of an established range back toward its middle. |
| Supply & Demand | Enter where price previously left an area in a hurry, on the first return. |
| Order Block | Enter at the last opposing candle before an impulsive move away. |
| News | Trade the reaction to a scheduled release, not the release itself. |
| Gap Fill | Fade an opening gap back toward the previous session's close. |
| Scalp | Short hold for a fixed, small target, taken only in liquid hours. |
| Swing | Multi-day hold on a higher-timeframe signal, sized for the wider stop. |

### Other ways a strategy is created

Importing a CSV with a strategy column creates any strategy name it doesn't already know; the preview lists them under **New strategies**. See [Importing from CSV](/trades/import).

## Tagging a trade

Pick the strategy in the **Strategy** field of the [Log trade dialog](/trades/logging). Only active strategies are offered.

## Editing and renaming

Choose **Edit** from the row menu. As the dialog says, *Renaming one keeps its whole history* — trades point at the strategy rather than storing its name, so every tagged trade, figure and report follows the new name straight away.

## Retiring and reactivating

**Retire** removes a strategy from the Log trade picker while keeping every trade tagged with it and every figure. Use it for a setup you've stopped trading. **Reactivate** brings it back.

## Deleting

A strategy that trades are tagged with **can't be deleted**. The attempt is refused with, for example, *This strategy is used by 12 trades. Retire it instead to keep the history.* Only an unused strategy can be deleted.

If **Confirm before deleting** is on in [Settings → General](/settings/general), you'll be asked **Delete Breakout?** first; press **Delete** or **Keep it**.

## Bulk actions

Tick several rows to show the bar (**3 strategies selected**) with **Retire**, **Reactivate** and **Delete**. A bulk delete is all-or-nothing: if any selected strategy is still in use, nothing is deleted and you'll see **Couldn't delete those**.

At the foot of the screen, a link leads to [Symbols](/trades/symbols), where you correct or retire instruments.

Related: [Reports](/review/reports) · [Logging a trade](/trades/logging)
