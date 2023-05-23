---
title: Onboard GNO to Spark Protocol - May 15, 2023
summary: Onboard GNO (Gnosis) to Spark Protocol with included parameters. Reduce Maker GNO-A debt ceiling to zero.
discussion_link: https://forum.makerdao.com/t/onboarding-of-gno-to-spark/20831
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
start_date: 2023-05-15T16:00:00
end_date: 2023-05-18T16:00:00
---
# Poll: Onboard GNO to Spark Protocol - May 15, 2023

The Arbitration Facilitators have placed a Governance Poll into the voting system on behalf of Spark Protocol. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, May 15 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

This poll allows the MakerDAO governance community to signal their support or opposition to adding GNO (Gnosis) to Spark Protocol.

### Spark Onboarding Parameters

**Token:** GNO  
**Token Address:** [0x6810e776880C02933D47DB1b9fc05908e5386b96](https://etherscan.io/address/0x6810e776880C02933D47DB1b9fc05908e5386b96)  
**Oracle:** Maker Medianizer via adaptor  
**Oracle Provider:** Chronicle  
**Borrow Enabled:** No  
**Collateral Enabled:** Yes  
**[Isolation Mode](https://docs.sparkprotocol.io/developers/features/isolation-mode) Enabled:** Yes  
**Isolation Mode Debt Ceiling:** 5 million USD  
**Loan To Value:** 20%  
**Liquidation Threshold:** 25%  
**Liquidation Bonus:** 10%  

Please review the proposal [thread](https://forum.makerdao.com/t/onboarding-of-gno-to-spark/20831) for more information about this proposed onboarding.

An updated risk evaluation has been provided by BA Labs and can be found [here](https://forum.makerdao.com/t/onboarding-of-gno-to-spark/20831/9). 

### Activate Isolation Mode for DAI Market On Spark Protocol

This setting change will allow DAI to be borrowed using isolation mode enabled assets on Spark Protocol. It is a one-off change that is required given the onboarding of GNO as the first isolation mode enabled asset on Spark.

### Reduce GNO-A Debt Ceiling to Zero

In order to manage maximum total exposure to GNO (Gnosis), the GNO-A vault in the Maker Protocol will have its Debt Ceiling reduced to zero if this proposal passes. Rationale is provided [here](https://forum.makerdao.com/t/onboarding-of-gno-to-spark/20831/9) by the Decentralized Collateral Scope Facilitators.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* These changes will be actioned in a future executive vote as the technical resource schedule allows.
* It is expected that this executive vote will take place within 30 days of this poll passing, absent external factors.
* If the executive vote passes, then these changes will become active in Spark Protocol and the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

Further information about Spark Protocol can be found at its [Documentation Hub](https://docs.sparkprotocol.io/hub/).

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
