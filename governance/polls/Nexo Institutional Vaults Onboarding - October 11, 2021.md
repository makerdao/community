---
title: Nexo Institutional Vault Onboarding - October 11, 2021
summary: Signal your support or opposition to Nexo Institutional Vault Onboarding.
discussion_link: https://forum.makerdao.com/t/signal-request-nexo-institutional-vault/10046
vote_type: Plurality Voting
categories:
   - Collateral
   - Risk Variable
   - Institutional
options:
   0: Abstain
   1: Yes
   2: No
start_date: 2021-10-11T16:00:00
end_date: 2021-10-11T16:00:00
---
# Poll: Nexo Institutional Vault Onboarding - October 11, 2021

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Growth Core Unit. This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on Monday, October 11 at 16:00 UTC.

**This is a binary vote.** 
- **You may vote for a single option.** 
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

This proposal covers onboarding two new vault types. For each vault type there is a set of initial parameters. Additionally, there are a set of conditions which both Nexo and MakerDAO agree to operate in relation to these vaults if this vote passes successfully. 

### INST-ETH-A - Starting Parameters
Starting Stability Fee: 1.5%  
Origination Fee: 0%  
Liquidation Ratio: 120%  
Minimum Active CR: 150%  
Debt Ceiling: 900m  
Cut: 0.99  
Step: 90 seconds  
Buf: 1.20  
Cusp: 0.4  
Tail: 140 minutes  
Chip: 0.1%  
Tip: 300 DAI  
lk.chop: 20%  
Tolerance: 0.5  
Ilk.hole: 50m DAI  
Dust: 10,000 DAI  

### INST-WBTC-A - Starting Parameters
Starting Stability Fee: 1.5%  
Origination Fee: 0%  
Liquidation Ratio: 120%  
Minimum Active CR: 150%  
Debt Ceiling: 600m  
Cut: 0.99  
Step: 90 seconds  
Buf: 1.20  
Cusp: 0.4  
Tail: 140 minutes  
Chip: 0.1%  
Tip: 300 DAI  
Ilk.chop: 20%  
Tolerance: 0.5  
Ilk.hole: 30m DAI  
Dust: 10,000 DAI  

### Operating Conditions

#### Migration
* MakerDAO will facilitate Nexo in migrating their existing positions in the ETH-A and WBTC-A vault types to these two new vault types.
* Nexo will be unable to utilize either of these vault types until they have migrated a total of 400M DAI worth of debt across both vaults.
* A 1% origination fee will be charged on the migrated amount above 400M DAI.
* Once migration has been completed, the following parameters will be set for each vault. These parameters may be freely changed in the future by MakerDAO.
	* Origination Fee: 1%
	* DC-IAM gap: 50m
	* DC-IAM ttl: 8h
	* DC-IAM line: Equal to initial Debt Ceiling

#### First Six Months
* Every additional 100m DAI minted in each vault will reduce the stability fee by 10 basis points for that vault down to a minimum of 0.5%. The starting point for this calculation is the amount of DAI initially migrated by MakerDAO on behalf of Nexo.
* The Stability Fee will not change in the initial six months with the exception of reductions under the previous point.
* Reductions in Stability Fee are not automatic, and must be voted through by Maker Governance. The Growth Core Unit is responsible for initiating reduction proposals on behalf of Nexo.

#### Subsequent Six Months
* The Growth Core Unit will facilitate discussions to determine parameters for the subsequent six months prior to the end of the first six months.
* If the first six month ends without a decision, the previous risk parameters and operating conditions will persist until a decision is made.
* The Stability Fee will only increase by a maximum of 1% over each six months period so long as **none** of the 'Exceptional Conditions' listed below are met.

#### Exceptional Conditions
* The total amount of fixed rate debt is more than 50% of MakerDAO's debt backed by stablecoin collateral (including stablecoin LP positions.)

#### Links and Comments
This poll text has been reviewed by GovAlpha, Growth, Risk, and Nexo.

* Please review the discussion [thread](https://forum.makerdao.com/t/signal-request-nexo-institutional-vault/10046) to help inform your position before voting. 
* For further details on the contract mechanisms used to implement this vault type, check [MIP59](https://mips.makerdao.com/mips/details/MIP59).
* A Risk evaluation is available [here](https://forum.makerdao.com/t/nexo-institutional-vault-collateral-onboarding-risk-evaluation/10524).
* A revenue impact assessment is available [here](https://forum.makerdao.com/t/institutional-vaults-economics-terms/9989).

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* This change will be included in the weekly Executive Vote on the Friday following the conclusion of this poll.
* If the Friday executive passes, then this change will become active in the Maker Protocol after the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
