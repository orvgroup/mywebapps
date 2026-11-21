# Monetization roadmap

This repository currently publishes a free, static template catalogue. It does not take payments, gate downloads, collect customer data or provide paid support.

## A responsible launch sequence

1. **Validate demand:** publish the free templates, collect feedback through GitHub Issues and identify the most-used workflows.
2. **Create a genuinely premium pack:** add tested, documented workflows, examples, version history and clear support boundaries.
3. **Choose a digital-product/payment provider:** compare India availability, payout rules, fees, tax invoices, refunds and digital delivery before choosing a provider.
4. **Connect checkout:** use the provider's hosted checkout and verified payment webhooks. Never trust a client-side “payment successful” message.
5. **Protect paid downloads:** issue short-lived or account-bound download access after server-side payment verification. Do not expose private repository tokens in browser code.
6. **Support and maintain:** publish changelogs, security notices, compatibility notes and a refund/support policy.

## Potential offers

- Starter pack: free workflows.
- Developer pack: curated templates, setup guides and examples.
- Team pack: organization-wide standards, reusable workflows and maintenance updates.
- Optional subscription: ongoing template updates and support.

## Cost and security notes

- GitHub Actions usage can consume the customer's own GitHub minutes when workflows run in their repository.
- AI-powered generation would require a backend service, API credentials, rate limits, abuse prevention and a clear usage-cost policy. Do not put an AI API key in frontend JavaScript.
- Avoid promising fully passive income. Marketing, customer support, compatibility fixes, payment disputes and security updates still require work.
- Check licenses for every third-party action and dependency before redistributing a workflow or bundling code.

## Not yet implemented

Payment checkout, customer accounts, entitlement checks, email delivery, hosted AI generation and subscription billing are intentionally not represented as live features. They require provider credentials and business decisions.
