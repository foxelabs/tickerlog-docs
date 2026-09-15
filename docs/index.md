---
title: "tickerlog documentation"
description: "How to use tickerlog — connecting your broker, recording trades, and reading what your journal tells you back."
---

# tickerlog documentation

tickerlog is a trading journal. Your trades arrive from your broker, from a
statement or from you; you write down why you took them; and the app works out
which of your setups, instruments and days actually make money.

<CardGroup :cols="2">
  <Card title="Getting started" icon="rocket" href="/start/what-it-is">
    What tickerlog is, creating your account, adding a trading account and
    logging your first trade.
  </Card>

  <Card title="Auto-sync" icon="refresh" href="/sync/overview">
    Connect Dhan, Upstox or Zerodha, or run the tickerlog add-on in MetaTrader 5,
    and your history arrives on its own.
  </Card>

  <Card title="Recording trades" icon="list" href="/trades/trades-screen">
    The Trades screen, the Log trade dialog, CSV import, symbols and strategies.
  </Card>

  <Card title="Reading it back" icon="chart-line" href="/review/dashboard">
    The dashboard for this month, the calendar and monthly review, reports for
    the whole record, and the journal.
  </Card>

  <Card title="Indian markets" icon="flag" href="/india/overview">
    How the app adapts to NSE and BSE accounts: quantities, F&O contracts, gross
    P&L and charges.
  </Card>

  <Card title="Settings and billing" icon="gear" href="/settings/accounts">
    Accounts, profile, security, display preferences, your data, and plans.
  </Card>
</CardGroup>

## How trades get in

There are four ways, and one account can use more than one of them.

| Way in | What it is | Plan |
|---|---|---|
| **Broker sync** | Connect Dhan, Upstox or Zerodha with a read-only credential. tickerlog reads your fills and pairs them into trades. | Pro or Max |
| **MetaTrader EA** | A small add-on runs in your own MetaTrader 5 terminal and sends its history to tickerlog. No broker password is ever handed over. | Pro or Max |
| **CSV import** | Upload a statement from MT4, MT5 or cTrader, a Zerodha Console tradebook, or a file tickerlog exported. You see a preview before anything is saved. | Every plan |
| **By hand** | Log a trade yourself from the Dashboard or the Trades screen. | Every plan |

Duplicates are skipped: re-importing an overlapping statement, or importing a
statement and then connecting the same account, does not double your history.

- [Broker sync](/sync/overview)
- [MetaTrader 5](/sync/metatrader)
- [Import a CSV](/trades/import)
- [Log a trade](/trades/logging)

## Where to start

<Card title="What tickerlog is" icon="book-open" href="/start/what-it-is" horizontal>
  A few minutes on what it records, what it works out for you, and what it
  deliberately does not do.
</Card>
