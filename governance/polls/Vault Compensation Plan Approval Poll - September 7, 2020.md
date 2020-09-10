---
title: Vault Compensation Plan Approval Poll - September 7, 2020
summary: Signal your support or opposition to compensating vaults impacted by Black Thursday losses
discussion link: https://forum.makerdao.com/t/vault-compensation-plan-v2/3584/97
vote type: Ranked Choice IRV
options: 
   0: Abstain
   1: 24.67% (theoretical maximum auction yield) - up to 25,925 MKR and 50,000 DAI 
   2: 21% - up to 21,627 MKR and 50,000 DAI
   3: 18% - up to 18,216 MKR and 50,000 DAI
   4: 15% - up to 14,871 MKR and 50,000 DAI
   5: 12% - up to 11,691 MKR and 50,000 DAI
   6: 9% - up to 5,592 MKR and 50,000 DAI
   7: 6% - up to 2,748 MKR and 50,000 DAI
   8: 3% - up to 917 MKR and 50,000 DAI
   9: 0% (oppose vault compensation) - 0 MKR and 0 DAI
   10: Oppose current compensation plan (support vault compensation) 0 MKR and 0 DAI
---
# Vault Compensation Plan Approval Poll - September 7, 2020

The MakerDAO Governance Facilitator has placed a Governance Poll into the [voting system](https://vote.makerdao.com/polling) on behalf of the community, which the community can use to signal support for compensating vaults affected by liquidations during the March 12 market crash. This poll will run for two weeks, from Monday, September 7 at 16:00 UTC to Monday, September 21 at 16:00 UTC.

Note: This poll started slightly later than described above due to the need to redeploy it to fix the [incorrect vote type](https://forum.makerdao.com/t/error-in-vault-compensation-poll/4024) in the initial version.

## Review

The Vault Compensation Plan was discussed in the [Forums](https://forum.makerdao.com/t/vault-compensation-plan-v2/3584/97) and presented on the [August 13 Maker Governance and Risk Call](https://forum.makerdao.com/t/agenda-discussion-scientific-governance-and-risk-105-thursday-august-13-4-00-pm-utc/3570). Voters are encouraged to review the plan document and discussion to inform their position before voting.

This poll uses ranked choice voting. Details about ranked choice voting can be found [here](https://forum.makerdao.com/t/signal-request-add-ranked-choice-voting-as-an-option-for-governance-polls/1274). The community is encouraged to select multiple options in their order of preference, while withholding their vote for any options they consider unacceptable. 

Claim amounts will be calculated based upon the compensation percentage decided in this poll, using the “tab change in relation to collateral change” calculation method described in the plan document, paid out in MKR tokens at a rate of 1 MKR per 250 DAI. Individual vault compensation will be determined by the formulae below:

`MKR compensation amount = (collateral deficit percent * collateral value in DAI) / 250`
`collateral deficit percent = compensation percentage (determined by this poll) - percent of vault collateral already received from liquidation`
`collateral value in DAI = debt tab at time of liquidation * liquidation ratio`

The MKR amounts shown for each percentage represent the sum of calculated compensation for ETH vaults, multiplied by 1.5. The additional 50% buffer is intended to cover claims from BAT vaults as well as from vaults that self-liquidated their position. It is considered highly unlikely that 100% of eligible vaults will claim compensation, so any residual unclaimed MKR can be retrieved and disposed of by MKR governance once the compensation process has been completed. 

In addition to the MKR required for paying compensation claims, each poll option except for “0% (oppose vault compensation)” or “Oppose current compensation plan (support vault compensation)” also authorize 50,000 DAI to be released to the compensation working group to cover operating expenses such as working group labor and smart contract development. Any unused DAI funds will be returned to the Maker surplus account upon project completion. 

## Next Steps

If this poll resolves with a majority of votes in favor of 3% through 24.67% compensation, the compensation working group will proceed with development and voting steps outlined in phase 2 of the vault compensation plan.

If this poll resolves with a majority of votes in favor of “0% (oppose vault compensation)”, this matter will be considered closed by governance and no further action will be taken regarding vault compensation.

If this poll resolves with a majority of votes in favor of “Oppose current compensation plan (support vault compensation)”, or if this poll resolves with no option receiving at least 50% support, this will be considered a vote of no confidence in the current vault compensation working group. While working group members will remain available for consultation, other members of the community will be empowered to take leadership over the vault compensation process.

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voter onboarding guide](https://community-development.makerdao.com/onboarding/voter-onboarding) to learn how to use this dashboard and set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance Risk Framework: Governing MakerDAO](https://community-development.makerdao.com/governance/governance-risk-framework).

To participate in future Governance calls, please [join us](https://community-development.makerdao.com/governance/governance-and-risk-meetings) every Thursday at 16:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk@group.calendar.google.com&ctz=America/Los_Angeles&pli=1).
