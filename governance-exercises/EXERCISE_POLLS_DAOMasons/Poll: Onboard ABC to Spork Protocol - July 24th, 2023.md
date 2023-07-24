---
title: Onboard ABC to Spork Protocol - July 24th, 2023
summary: Onboard ABC (Alpha Bravo Coin) to Spork Protocol with included parameters.
discussion_link: https://github.com/makerdao/community/blob/master/governance-exercises/poll-exercise-01.md
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
start_date: July 24th 2023 16:00:00
end_date: July 27th 2023 16:00:00
---
# Poll: Onboard ABC to Spork Protocol - July 24th, 2023

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of Spork Protocol. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on July 24th, 2023 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

This poll allows the MakerDAO governance community to signal their support or opposition to add ABC (Alpha Bravo Coin) to Spork Protocol with the parameters below:

### Spork Parameters

(Theoretical example parameters displayed here to demonstrate formatting. As per exercise notes, they are to be considered internally consistent, and complete.)

* Token: ABC
* Token Address: [0x0000000000000000000000000000000000000000](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
* Oracle: [0x0000000000000000000000000000000000000000](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
* Oracle Provider: Chainlink
* Borrow Enabled: Yes
* Collateral Enabled: Yes
* [Isolation Mode](https://docs.sparkprotocol.io/developers/features/isolation-mode) Enabled: No
* Loan To Value: 68.50%
* Liquidation Threshold: 79.50%
* Liquidation Bonus: 7%

Please review this forum [thread](https://github.com/makerdao/community/blob/master/governance-exercises/poll-exercise-01.md) for more information about this proposed onboarding.

A risk evaluation has been provided by Stability Scope Unit and can be found [here](https://github.com/makerdao/community/blob/master/governance-exercises/poll-exercise-01.md). 

To summarize, ABC has been previously onboarded to Maker Core in the past and was offboarded from Core due to limited use. However, Stability Scope Facilitators note that liquidity remains strong for the ABC token and they have few concerns about the token itself. 

More information about the previous onboarding/offboarding can be found [here](link-to-the-historic-evaluation.lfw). 

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* ABC (Alpha Bravo Coin) will be onboarded to Spork Protocol in an upcoming executive vote.
* It is expected that this executive vote will take place within 30 days of this poll passing, absent external factors.
* If the executive vote passes, then these changes will become active in Spork Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

Further information about Spork Protocol can be found at its [Documentation Hub](https://docs.sparkprotocol.io/hub/).

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).