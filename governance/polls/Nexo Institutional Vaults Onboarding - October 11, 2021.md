---
title: Nexo Institutional Vault Onboarding - October 11, 2021
summary: Signal your support or opposition to Nexo Institutional Vault Onboarding.
discussion_link: https://forum.makerdao.com/t/signal-request-nexo-institutional-vault/10046
vote_type: Plurality Voting
categories:
   - Collateral
   - Risk Variable
options:
   0: Abstain
   1: Yes
   2: No
start_date: 2021-10-11T16:00:00
end_date: 2021-10-14T16:00:00
---
# Poll: Nexo Institutional Vault Onboarding - October 11, 2021

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Growth Core Unit. This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on Monday, October 11 at 16:00 UTC.

**This is a binary vote.** 
- **You may vote for a single option.** 
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

This proposal covers onboarding two new vault types. For each vault type there is a set of initial parameters. Additionally, there are a set of conditions under which both [Nexo](https://nexo.io/) and MakerDAO agree to operate in relation to these vaults if this vote passes successfully. 

### INST-ETH-A - Starting Parameters
Starting [Stability Fee](https://makerdao.world/en/learn/governance/param-stability-fee): 1.5%  
Origination Fee (nib): 0%  
[Liquidation Ratio](https://makerdao.world/en/learn/governance/param-liquidation-ratio): 120%  
Minimum Active CR (peace): 150%  
[Debt Ceiling](https://makerdao.world/en/learn/governance/param-debt-ceiling): 900m  
[cut](https://makerdao.world/en/learn/governance/param-auction-price-function): 0.99  
[step](https://makerdao.world/en/learn/governance/param-auction-price-function): 90 seconds  
[Auction Price Multiplier (buf)](https://makerdao.world/en/learn/governance/param-auction-price-multiplier): 1.20  
[Maximum Auction Drawdown (cusp)](https://makerdao.world/en/learn/governance/param-max-auction-drawdown): 0.4  
[Maximum Auction Duration (tail)](https://makerdao.world/en/learn/governance/param-max-auction-duration): 140 minutes  
[Proportional Kick Incentive (chip)](https://makerdao.world/en/learn/governance/param-proportional-kick-incentive): 0.1%  
[Flat Kick Incentive (tip)](https://makerdao.world/en/learn/governance/param-flat-kick-incentive): 300 DAI  
[Liquidation Penalty (chop)](https://makerdao.world/en/learn/governance/param-liquidation-penalty): 20%  
[Breaker Price Tolerance](https://makerdao.world/en/learn/governance/param-breaker-price-tolerance): 0.5  
[Local Liquidation Limit (Ilk.hole)](https://makerdao.world/en/learn/governance/param-local-liquidation-limit): 50m DAI  
[Debt Floor (dust)](https://makerdao.world/en/learn/governance/param-debt-floor): 10,000 DAI  

### INST-WBTC-A - Starting Parameters
Starting [Stability Fee](https://makerdao.world/en/learn/governance/param-stability-fee): 1.5%  
Origination Fee (nib): 0%  
[Liquidation Ratio](https://makerdao.world/en/learn/governance/param-liquidation-ratio): 120%  
Minimum Active CR (peace): 150%  
[Debt Ceiling](https://makerdao.world/en/learn/governance/param-debt-ceiling): 600m  
[cut](https://makerdao.world/en/learn/governance/param-auction-price-function): 0.99  
[step](https://makerdao.world/en/learn/governance/param-auction-price-function): 90 seconds  
[Auction Price Multiplier (buf)](https://makerdao.world/en/learn/governance/param-auction-price-multiplier): 1.20  
[Maximum Auction Drawdown (cusp)](https://makerdao.world/en/learn/governance/param-max-auction-drawdown): 0.4  
[Maximum Auction Duration (tail)](https://makerdao.world/en/learn/governance/param-max-auction-duration): 140 minutes  
[Proportional Kick Incentive (chip)](https://makerdao.world/en/learn/governance/param-proportional-kick-incentive): 0.1%  
[Flat Kick Incentive (tip)](https://makerdao.world/en/learn/governance/param-flat-kick-incentive): 300 DAI  
[Liquidation Penalty (chop)](https://makerdao.world/en/learn/governance/param-liquidation-penalty): 20%  
[Breaker Price Tolerance](https://makerdao.world/en/learn/governance/param-breaker-price-tolerance): 0.5  
[Local Liquidation Limit (Ilk.hole)](https://makerdao.world/en/learn/governance/param-local-liquidation-limit): 30m DAI  
[Debt Floor (dust)](https://makerdao.world/en/learn/governance/param-debt-floor): 10,000 DAI  

### Operating Conditions

#### Migration
* MakerDAO will facilitate Nexo in migrating their existing positions in the ETH-A and WBTC-A vault types to these two new vault types.
* Nexo will be unable to utilize either of these vault types until they have migrated a total of 400M DAI worth of debt across both vaults.
* A 1% origination fee will be charged on the migrated amount above 400M DAI.
* Once migration has been completed, the following parameters will be set for each vault. These parameters may be freely changed in the future by MakerDAO.
	* Origination Fee: 1%
	* [DC-IAM](https://makerdao.world/en/learn/governance/module-dciam) gap: 50m
	* [DC-IAM](https://makerdao.world/en/learn/governance/module-dciam) ttl: 8h
	* [DC-IAM](https://makerdao.world/en/learn/governance/module-dciam) line: Equal to initial [Debt Ceiling](https://makerdao.world/en/learn/governance/param-debt-ceiling)

#### First Six Months
* Every additional 100m DAI minted in each vault will reduce the [Stability Fee](https://makerdao.world/en/learn/governance/param-stability-fee) by 10 basis points for that vault down to a minimum of 0.5%. The starting point for this calculation is the amount of DAI initially migrated by MakerDAO on behalf of Nexo.
* Failure to maintain 200% CR over the majority of any 7 day period will result in increasing the SF to 5% and increasing the LR to 150%. The 7 day period would be calculated by ensuring that 95% of the OSM updates show that the CR is equal to or greater than 200%.
* The [Stability Fee](https://makerdao.world/en/learn/governance/param-stability-fee) will not change in the initial six months with the exception of changes under the previous two points.
* Reductions in [Stability Fee](https://makerdao.world/en/learn/governance/param-stability-fee) are not automatic, and must be voted through by Maker Governance. The Growth Core Unit is responsible for initiating reduction proposals on behalf of Nexo.

#### Subsequent Six Months
* The Growth Core Unit will facilitate discussions to determine parameters and terms for the subsequent six months prior to the end of the first six months.
* If the first six month ends without a decision, the previous risk parameters and operating conditions will persist until a decision is made.
* The [Stability Fee](https://makerdao.world/en/learn/governance/param-stability-fee) will only increase by a maximum of 1% over each six months period so long as **none** of the 'Exceptional Conditions' listed below are met.

#### Exceptional Conditions
* The total amount of fixed rate debt is more than 50% of MakerDAO's debt backed by stablecoin collateral (including stablecoin LP positions.)

### Links and Comments
* This poll text has been reviewed and agreed on by the GovAlpha Core Unit, the Growth Core Unit, the Risk Core Unit, the Protocol Engineering Core Unit, and [Nexo](https://nexo.io/).
* This agreement represents our best attempt at setting mutually agreeable conditions for both parties. However, changes may be proposed if both Nexo and the involved Core Units agree that these conditions are in some way unsuitable.
* Please review the discussion [thread](https://forum.makerdao.com/t/signal-request-nexo-institutional-vault/10046) to help inform your position before voting. 
* For further details on the contract mechanisms used to implement this vault type, check [MIP59](https://mips.makerdao.com/mips/details/MIP59).
* A Risk evaluation is available [here](https://forum.makerdao.com/t/nexo-institutional-vault-collateral-onboarding-risk-evaluation/10524).
* A revenue impact assessment is available [here](https://forum.makerdao.com/t/institutional-vaults-economics-terms/9989).

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* These vaults will be onboarded and migration of Nexo's positions will take place in a future executive vote as the Protocol Engineering Core Unit's schedule allows. 
* It is expected that this executive vote will take place within 30 days of this poll passing, absent external factors.
* If the executive vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
