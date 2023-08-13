---
title: Onboard ABC Token to Spork Protocol - July 24, 2023
summary: Signal your support or opposition to onboarding the ABC token to the Spork protocol.
discussion_link: $discussion_link
parameters:
    input_format: single-choice
    victory_conditions:
        - { type : plurality }
    result_display: single-vote-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Yes
   2: No
start_date: $YYYY-MM-DDT16:00:00
end_date: $YYYY-MM-DDT16:00:00
---
# Poll: Onboard ABC Token to Spork Protocol - July 24, 2023

The Governance Facilitator has placed a Governance Poll into the [voting system](https://vote.makerdao.com/polling) on behalf of Spork Protocol Ecosystem Actor Alice. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, July 24 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

This poll allows the MakerDAO governance community to signal their support or opposition to adding ABC token to the Spork Protocol with the parameters outlined below:

### Spork Protocol Token Onboarding Parameters

* Token: ABC token
* Token Address: $token-address
* Oracle: $oracle
* Oracle Provider: $oracle-provider
* Borrow Enabled: $YesNo
* Collateral Enabled: $YesNo
* [Isolation Mode](https://docs.sparkprotocol.io/developers/features/isolation-mode) Enabled: $YesNo
* Isolation Mode Debt Ceiling: $isolation-ceiling
* Loan To Value: $loan-to-value
* Liquidation Threshold: $liquidation-threshold
* Liquidation Bonus: $liquidation-bonus

Please review the proposal [thread]($proposal_thread) and the risk evaluation provided by [risk-provider](Insert link to risk evaluation) for a comprehensive understanding of the proposal.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* ABC token will be onboarded to the Spork Protocol in a future executive vote.
* It is expected that this executive vote will take place within 30 days of this poll passing, absent external factors.
* If the executive vote passes, then these changes will become active in Spark Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

Further information about Spark Protocol can be found at its [Documentation Hub](https://docs.sparkprotocol.io/hub/).

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).
