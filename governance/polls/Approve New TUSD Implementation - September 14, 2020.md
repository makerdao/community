---
title: Approve New TUSD Implementation with Original Risk Parameters - September 14, 2020
summary: Signal your support to approve the new TUSD implementation with the original risk parameters (outlined below).
discussion_link: https://forum.makerdao.com/t/3982
vote_type: Plurality Voting
options:
   0: Abstain
   1: Yes
   2: No
---
# Poll: Approve New TUSD Implementation with Original Risk Parameters - September 14, 2020

The Maker Foundation Smart Contracts Team has placed a Governance Poll into the voting system to approve/disapprove the new TUSD implementation. Voters are now able to signal their support to:

Approve the new TUSD [implementation](https://etherscan.io/address/0x7a9701453249e84fd0d5afe5951e9cbe9ed2e90f#code) with the following risk parameters:
- TUSD-A Ceiling (`Vat[TUSD-A].line`) 2,000,000 DAI
- Min DAI in TUSD-A Vault (`Vat[TUSD-A].dust`) 100 DAI
- TUSD-A liquidation lot size (`Cat[TUSD-A].dunk`) 50,000
- TUSD-A liquidation penalty (`Cat[TUSD-A].chop`) 13.00%
- TUSD-A stability fee (`Jug[TUSD-A].duty`) 0.00%
- TUSD-A auction min. bid increase (`Flip[TUSD-A].beg`) 3.00%
- TUSD-A auction bid duration (`Flip[TUSD-A].ttl`) 6 hrs
- TUSD-A auction duration (`Flip[TUSD-A].tau`) 3 days
- TUSD-A col. ratio (`Spot[TUSD-A].mat`) 120%

These parameters match the original risk parameters with the exception of the `dust` parameter, which has been updated to 100 DAI. Also worth noting is that a Risk Premium was never determined, instead Stability Fee was directly set to 0%.

Please note that liquidations for TUSD will be disabled.

This Governance Poll (FAQ) will be active for three days beginning on Monday, September 14 at 16:00 UTC, the results of which may inform an Executive Vote which will go live on Friday, September 18, at 16:00 UTC.

## Review

The initial proposal for approving the new TUSD implementation can be found [here](https://forum.makerdao.com/t/3982) along with the poll results. 

## Next Steps

If this poll ends with a 'Yes' majority, this change will be included in the Executive Vote on Friday, September 18.

If this poll ends with a 'No' majority, the TUSD collateral type will remain in its current state.

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voter onboarding guide](https://community-development.makerdao.com/onboarding/voter-onboarding) to learn how to use this dashboard and setup your wallet to vote.

Additional information about the Governance process can be found in the [Governance Risk Framework: Governing MakerDAO](https://community-development.makerdao.com/governance/governance-risk-framework)

To participate in future Governance calls, please [join us](https://community-development.makerdao.com/governance/governance-and-risk-meetings) every Thursday at 16:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=America%2FLos_Angeles).

---
