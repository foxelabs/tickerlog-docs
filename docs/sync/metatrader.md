---
title: Sync MetaTrader 5
description: Connect any MT5 account with the tickerlog EA — generate a key, allow WebRequest, compile, attach, and what to do when it stops sending.
---

# Sync MetaTrader 5

MetaTrader 5 syncs through an **Expert Advisor (EA)** that runs in your own terminal. It reads your account's deal history and sends it to tickerlog. It works with any MT5 broker or prop firm — IC Markets, Exness, FTMO and the rest.

- **No password is stored.** Your terminal is already signed in, so there is nothing to hand over.
- **It places no orders.** The EA contains no trading calls and runs with AutoTrading switched off. The only permission it needs is to send web requests to tickerlog.
- **Trades arrive quickly.** It sends every 15 minutes by default, and a few seconds after a deal lands.
- **A closed terminal sends nothing.** Nothing is lost while it is closed; it catches up when you open it again.

Auto-sync needs a **Pro** or **Max** plan. See [How auto-sync works](/sync/overview).

## Before you start

You need:

- MetaTrader 5 on a Windows machine (or wherever you run your terminal), signed in to your trading account.
- MetaEditor, which comes with MetaTrader 5.
- The EA source file, `TickerLogSync.mq5`.

## Step 1: Generate your key

1. Go to **Settings → Accounts** and press **Add account**.
2. In **Where do you trade?**, open **Connect a broker** and choose **MetaTrader 5**.
3. The **Connect MetaTrader** dialog opens. Press **Generate my key**.
4. A green **Copy this now** notice shows the key. Press the copy button and keep it somewhere safe for the next few minutes.
5. Press **Done**.

::: warning The key is shown once
It is stored as a hash, so this is the only time it can be shown. If you lose it, generate a new one — and paste the new key into every terminal, because the old key stops working.
:::

**One key covers every terminal you run** and every account in them. You do not need a key per account.

## Step 2: Allow WebRequest in MetaTrader

MetaTrader blocks web requests unless you allow the address. Skipping this is the most common reason the EA does nothing.

1. In MetaTrader 5, open **Tools → Options**.
2. Go to the **Expert Advisors** tab.
3. Tick **Allow WebRequest for listed URL**.
4. Add `https://api.tickerlog.io` to the list.
5. Press **OK**.

## Step 3: Compile the EA

1. Put `TickerLogSync.mq5` in your terminal's `MQL5/Experts` folder (**File → Open Data Folder** takes you there).
2. Open MetaEditor (press **F4** in the terminal).
3. Open `TickerLogSync.mq5` and press **F7** to compile.
4. The compiled EA appears under **Expert Advisors** in the terminal's Navigator.

## Step 4: Attach it to a chart

1. Drag the EA onto **any chart**. The chart's symbol does not matter — the EA reads the whole account's history, not the chart's.
2. In the EA's settings, paste your key into **InpEaKey**.
3. Press **OK**.

One chart per terminal is enough. A second chart is harmless but does the same work twice.

## Step 5: Check it arrived

The account appears in **Settings → Accounts** the first time the EA sends, named from your broker and login. There is no form to fill in. Its status starts at **Waiting for first sync** and changes to **Synced** once history arrives.

The first sync reads up to ten years of history and sends it in chunks. If it is interrupted, it resumes where it stopped rather than starting over.

## The EA's settings

| Setting | Default | What it does |
|---|---|---|
| **InpApiUrl** | `https://api.tickerlog.io` | Where the EA sends. Must match the address you allowed in Options. Leave it as it is. |
| **InpEaKey** | *(empty)* | Your key from tickerlog. Required. |
| **InpPushMinutes** | 15 | Minutes between scheduled sends. The minimum is 1. |
| **InpPushOnClose** | true | Also send a few seconds after a deal lands. |
| **InpHistoryDays** | 3650 | How far back the **first** sync reads, in days. |
| **EnableLogs** | true | Writes progress lines to the terminal's **Experts** tab. |

## What it sends, and what becomes a trade

The EA sends every deal in the account. tickerlog turns the buys and sells into trades and sets the rest aside:

- **Deposits and withdrawals, swap charges, daily or monthly commissions and dividends** move your balance but are not positions, so none of them becomes a trade. The opening deposit, in particular, would otherwise look like your largest ever winner.
- **Close-by** deals (two opposite positions closed against each other) are recorded as two ordinary closes.
- A **reversal** deal, which closes one position and opens the opposite one in a single deal, is not imported.

Commission, swap and fees on a deal are included, so MetaTrader P&L is net.

**Demo and contest accounts sync like any other**, and the account's type comes from what the platform reports. They count towards your plan's account limit. They are kept out of **All Accounts** in the account switcher so a practice balance is never added to a real one.

## Moving or reinstalling

tickerlog remembers how far your history has been read, not the EA. You can reinstall the EA, move it to another machine, or run it in two terminals at once, and it carries on rather than sending everything again. Trades it already holds are skipped.

## Pausing and stopping

- **Pause** in the account's row menu makes tickerlog stop recording what the terminal sends. The EA keeps running and logs that syncing is paused; **Resume** starts recording again.
- **Disconnect** does **not** stop the EA — its next send reconnects the account.
- **To stop for good**, remove the EA from the chart in MetaTrader.

**Sync now** is not offered for MetaTrader, because nothing on tickerlog's side can make your terminal send.

## When it is not syncing

### The account never appeared

- Check the terminal's **Experts** tab. If you see an alert telling you to allow the URL, go back to [Step 2](#step-2-allow-webrequest-in-metatrader), then remove the EA from the chart and attach it again.
- An alert saying there is no EA key means **InpEaKey** is empty. Paste the key and press OK.
- An alert saying the key was refused means the key is wrong or has been replaced. Generate a new one (Step 1) and paste it in.
- Check your plan includes auto-sync. Without it, tickerlog will not generate a key and does not accept what the terminal sends.

### The status says Terminal quiet

The terminal normally sends every 15 minutes and has not for a while. Check that MetaTrader is running with the tickerlog EA on a chart. Nothing is lost while it is closed.

This is expected if you shut the terminal at the end of the day. A terminal that must keep syncing needs a machine that stays on, such as a VPS.

### The status says Paused

You paused it. Choose **Resume** from the row menu.

More in [Sync troubleshooting](/sync/troubleshooting).

Next: [How auto-sync works](/sync/overview) · [Settings → Accounts](/settings/accounts)
