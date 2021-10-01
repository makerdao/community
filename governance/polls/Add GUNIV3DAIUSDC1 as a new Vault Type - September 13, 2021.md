---
title: Add GUNIV3DAIUSDC1-A as a new Vault Type - September 13, 2021
summary: This poll proposes system parameters which could be used to initialize GUNI-DAI-USDC as a new vault type.
discussion_link: https://forum.makerdao.com/t/g-uni-dai-usdc-uniswap-v3-lp-erc20-collateral-onboarding-application/9026
vote_type: Plurality Voting
categories:
   - Collateral
   - Risk Variable
options:
   0: Abstain
   1: Yes
   2: No
start_date: 2021-09-13T16:00:00
end_date: 2021-09-16T16:00:00
---
# Poll: Add GUNIV3DAIUSDC1-A as a new Vault Type - September 13, 2021

The Governance Facilitators have placed a Governance Poll into the [voting system](https://vote.makerdao.com/polling) on behalf of the MakerDAO mandated actors. This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on Monday, September 13 at 16:00 UTC.

**This is a binary vote.** 
- **You may vote for a single option.** 
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

This poll allows the MakerDAO governance community to signal their support or opposition to adding GUNIV3DAIUSDC1-A (Gelato DAI-USDC) as a new vault type in the Maker Protocol with the parameters below:

### Initial Collateral Parameters

* Underlying Collateral: GUNI-DAI/USDC
* [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee): 1%
* [Liquidation Ratio](https://community-development.makerdao.com/en/learn/governance/param-liquidation-ratio): 105%
* [Debt Ceiling (`line`)](https://community-development.makerdao.com/en/learn/governance/param-debt-ceiling): 10 million DAI
* [Debt Floor (`dust`)](https://community-development.makerdao.com/en/learn/governance/param-debt-floor): 10,000 DAI
* [Target Available Debt (`gap`)](https://makerdao.world/en/learn/governance/module-dciam): 10 million DAI
* [Ceiling Increase Cooldown (`ttl`)](https://makerdao.world/en/learn/governance/module-dciam): 8 hours


### Liquidation 2.0 Parameters

* [Auction Price Function (`calc`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): Stairstep Exponential
* [Price Change Multiplier (`cut`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 0.999
* [Price Change Interval (`step`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 120 seconds
* [Auction Price Multiplier (`buf`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-multiplier): 1.05
* [Liquidation Penalty (`chop`)](https://community-development.makerdao.com/en/learn/governance/param-liquidation-penalty): 13%

*Liquidations are disabled for this collateral type. The risk for GUNIV3DAIUSDC1-A is primarily from USDC tail risks, and so it's impossible to generate appropriate risk parameters from previous data.*

**Limits**

* [Local Liquidation Limit (`ilk.hole`)](https://community-development.makerdao.com/en/learn/governance/param-local-liquidation-limit): 5 million DAI
* [Maximum Auction Drawdown (`cusp`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-drawdown): 0.9
* [Maximum Auction Duration (`tail`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-duration): 220 minutes
* [Breaker Price Tolerance (`tolerance`)](https://community-development.makerdao.com/en/learn/governance/param-breaker-price-tolerance): 0.95

**Incentives**

* [Proportional Kick Incentive (`chip`)](https://community-development.makerdao.com/en/learn/governance/param-proportional-kick-incentive): 0.10%
* [Flat Kick Incentive (`tip`)](https://community-development.makerdao.com/en/learn/governance/param-flat-kick-incentive): 300 DAI

Please review the following forum threads containing information about GUNIV3DAIUSDC1-A (Gelato) to inform your position before voting.
* [Proposal Thread](https://forum.makerdao.com/t/g-uni-dai-usdc-uniswap-v3-lp-erc20-collateral-onboarding-application/9026)
* [Risk Core Unit Evaluation](https://forum.makerdao.com/t/g-uni-dai-usdc-collateral-onboarding-risk-evaluation/9719)
* [Protocol Engineering Core Unit Evaluation](https://forum.makerdao.com/t/guni-dai-usdc-erc20-token-smart-contract-technical-assessment/9139)
* [Oracles Team Evaluation](https://forum.makerdao.com/t/guni-dai-usdc-collateral-onboarding-oracle-assessment-mip10c3-sp41/10268)

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* GUNIV3DAIUSDC1-A (Gelato DAI-USDC) will be onboarded in a future executive vote as the Protocol Engineering Core Unit's schedule allows. 
* It is expected that this executive vote will take place within 30 days of this poll passing, absent external factors.
* If the executive vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
