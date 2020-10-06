---
title: Rates V2 Poll - October 12, 2020
summary: Signal your support to execute the Rates V2 plan.
discussion_link: https://forum.makerdao.com/t/signal-request-rates-v2/4481
vote_type: Plurality Voting
options:
   0: Abstain
   1: Yes
   2: No
---
# Poll: Rates V2 Poll - October 12, 2020

The Governance Facilitators have placed a governance poll into the [voting system](https://vote.makerdao.com/polling) which gives Maker Governance the chance to signal their support for the implementation of Rates V2 plan.

This non-standard weekly Governance Poll ([FAQ](https://community-development.makerdao.com/makerdao-mcd-faqs/faqs#governance)) will be active for 3 days beginning on Monday, October 12 at 16:00 UTC.

## Review

The rates working group would like to present the results of our discussion over the past 3 weeks into a formal proposal. We originally had a large document explaining how to adapt the formula from the current system, but as mentioned in [this post](https://forum.makerdao.com/t/informal-poll-guidance-on-rates-v2/4444) we kept running into edge cases. Based on the results of the informal poll we have stripped down the proposal to the points below.

Current Issues:

* Smart Contracts team finds it hard to follow how Base Rate change affects final Stability Fee for all assets
* Governance shouldn’t be directly changing Risk Premiums or should stop calling it Risk Premium.
* Base Rate change is affecting all assets instead of only few that have similar profile
* Risk premium should be ideally measured and reported continuously. However we may not necessarily want to equal it to the final markup used on top of Base Rate.
* No mechanism for taking competition into account.
* Farming assets do not fit into our current rate setting paradigm at all. They should be set based on the yield they generate.

Goals:

* Formation of a new Rates Working Group which sits between Risk, Governance and the Smart Contracts Teams.
* Grant more rate setting autonomy for the Rates Working Group to allow them to more flexibly update Stability Fees.
* Add market competition-based rate setting methodology.
* Minimize governance overhead.
* Continual transparency of how rates are set.
* Governance provides higher-level, plain-English business directives such as “set the stability fees on stablecoins to 0%” or “we want to focus on growth over profit”. These directives will follow the signal request format until a more formal MIP is created.

Plan:

* Scrap the current Stability Fee formula involving the Base Rate. The Base Rate will no longer be voted on after this proposal passes, and a MIP18 vote will be added to deprecate it formally.
* Formation of the Rates Working Group. A somewhat loosely defined group consisting of Domain Team Facilitators and community members. Initial members being @hexonaut, @Primoz, @LongForWisdom, @monet-supply, @SebVentures and @Akiva.
* Introduction of the Competitive Rate: A rate which is based on the competitive landscape. For example if our competition is offering borrowing at 5% for a particular asset, we may decide to offer that same asset for 4%.
* The Rates Working Group will keep track of governance directives, risk premiums and competitive rates to produce a set of stability fees for each vault type. Mostly this will involve setting the rates by competitive analysis coming from risk.
* The Risk Team will start producing Risk Premium / Competitive Rates on a monthly basis which get handed off to the Rates Working Group who will propose the Stability Fee rate changes.
* Dai Savings Rate will remain at 0% until governance signals otherwise.
* Development of a more formal MIP as this process is smoothed out.

Responsibilities for the Rate Setting Group

* Weekly meeting to determine adjustments.
* Produce a rate adjustment proposal based on input from governance (in the form of signals or feedback), the Risk Team (Risk analysis), and from observation of the wider DeFi environment.
* Forum post whenever adjustments are proposed including rationale and inviting discussion. Forum posts will be made 1 week in advance of the on-chain poll unless the changes are considered an “emergency”.
* Bundled on-chain poll containing any proposed rate-changes for the week.
* MIP to be produced within 6 months, group ceases to operate if MIP is not passed within 6 months. Deadline is April 1st, 2021.

## Next Steps

Upon a successful conclusion of this poll, the Base Rate vote will be halted for the week of October 19th. The Risk Domain Team to begin producing Risk Premium / Competitive Rates starting from the week of October 19th. It may take a bit to ramp up to all assets, but the team will do their best. The Rates Working Group would then propose an initial set of changes which will be voted on October 26th and added to the October 30th executive. After that we will move onto a monthly cycle of rate setting as outlined in the plan with the possibility of skipping November due to the closeness of the October vote.

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voter onboarding guide](https://community-development.makerdao.com/onboarding/voter-onboarding) to learn how to use this dashboard and setup your wallet to vote.

Additional information about the Governance process can be found in the [Governance Risk Framework: Governing MakerDAO](https://community-development.makerdao.com/governance/governance-risk-framework)

To participate in future Governance calls, please [join us](https://community-development.makerdao.com/governance/governance-and-risk-meetings) every Thursday at 16:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=America%2FLos_Angeles).

