---
# Required
title: "Example dashboard, replace me"
excerpt: "Short one-line pitch of what this dashboard or piece of work actually shows. Delete this file once you add real entries."
date: 2026-01-01

# Optional — classification
kind: "dashboard"          # dashboard | research | infra
client: "Client name"
chain: "Ethereum"

# Optional — links. Each one renders as a button on the detail page.
# Leave out the ones you don't have and the button just disappears.
link:     "https://dune.com/your-handle/your-dashboard"   # primary CTA
project:  "https://theproject.xyz"                        # project website
twitter:  "https://x.com/theproject"                      # project's X
telegram: "https://t.me/theproject"                       # project's Telegram
discord:  "https://discord.gg/theproject"                 # project's Discord

# Optional — mini banner at the top of the detail page.
# File lives in public/work-covers/. Recommended 1600x640 WebP (2.5:1 ratio).
cover:    "/work-covers/example.webp"
coverAlt: "Example dashboard preview"

# Hide an entry without deleting it. This example is draft so it never deploys.
draft: true
---

Optional long-form body. Explain what you measured, why it matters, the
tricky queries, and link out to the live dashboard.

## Embedding Dune charts

You can paste a Dune embed iframe directly into the markdown. The embed
URL shape is `https://dune.com/embeds/<QUERY_ID>/<VIZ_ID>`, which you get
from the "Embed" button in any Dune chart.

<figure class="dune-embed">
  <iframe
    src="https://dune.com/embeds/1234567/7654321"
    title="Daily active wallets"
    loading="lazy"
    allowfullscreen>
  </iframe>
  <figcaption>Daily active wallets, last 90 days</figcaption>
</figure>

You can embed as many as you want. Each `<iframe>` auto-sizes to the full
content width with a 16:9 aspect ratio on the detail page.

## Regular markdown still works

Headings, **bold**, *italic*, [links](https://giedi.xyz), lists, code
blocks — everything renders normally:

- One
- Two
- Three

```sql
select count(*) from ethereum.transactions
```
