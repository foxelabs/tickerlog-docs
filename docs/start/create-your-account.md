---
title: "Create your account"
description: "Signing up with an email address or with Google, confirming your address, and what to do when the confirmation email does not arrive."
---

# Create your account

TickerLog runs at **[app.tickerlog.io](https://app.tickerlog.io)**. Two ways in:

- **Email and password** — [sign up](https://app.tickerlog.io/signup) with your
  address.
- **Google** — one button, no password to remember.

## Confirming your email address

Sign up with an email address and TickerLog sends a confirmation link. Until you
follow it, the app shows a waiting room rather than the dashboard — none of your
data loads, because there is nothing to load yet.

The waiting room offers exactly three things, which are the three things that
actually help:

1. **Resend the email.**
2. **"I've confirmed it"** — press this after following the link. The link may
   open in a different browser, or on your phone, so there is nothing for the
   app to detect on its own; this re-checks.
3. **Correct your address.** Change it inline and the confirmation goes to the
   new one.

::: tip
**The email hasn't arrived**

A mistyped address is the commonest reason, which is why you can fix it from the
waiting room without being signed in properly first. After that, check spam. The
mail is sent through a queue, so it can lag a request by a few seconds — but not
by minutes.
:::
**Google accounts skip all of this.** Google has already verified the address, so
you land straight on the dashboard.

## Signing in with Google

The Google button asks for three things and nothing else: your sign-in
identifier (`openid`), your email address, and your basic profile. TickerLog
never asks for access to your Gmail, your Drive, or anything else.

If you already have a password account on the same **verified** email address,
pressing the Google button attaches Google to that account rather than creating
a second one. You end up with one account you can reach two ways.

::: warning
On the **sign-in** screen, the Google button signs you in — it will not create a
new account. That is deliberate: if you have just deleted your account, pressing
it again should tell you there is no account, not hand you a fresh empty one
carrying your own email address.
:::

## Forgetting your password

[Forgot password](https://app.tickerlog.io/forgot-password) sends a reset link.

The screen answers the same way whether or not an account exists on that
address. That is not evasiveness — telling a stranger which addresses are
registered is the one thing this flow must not do.

There is no "try another way". For an email-and-Google product there is no other
way: recovery codes and SMS belong to two-factor auth, which TickerLog does not
have.

## Setting a password on a Google account

Signed up with Google and want a password too? **Account → Security** offers
*Set a password* rather than *Change password* when your account does not have
one yet. After that, either route signs you in.

Next: [add a trading account](/start/add-an-account).
