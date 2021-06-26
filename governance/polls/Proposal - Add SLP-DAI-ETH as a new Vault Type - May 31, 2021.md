---
title: Add SLP-DAI-ETH as a new Vault Type - May 31, 2021
summary: This poll proposes system parameters which could be used to initialize SLP-DAI-ETH as a new vault type.
discussion_link: https://forum.makerdao.com/t/slp-dai-eth-mip6-collateral-onboarding-application/7957
vote_type: Plurality Voting
categories:
   - Collateral
   - Risk Variable
options:
   0: Abstain
   1: Yes
   2: No
---
# Poll: Add SLP-DAI-ETH as a new Vault Type - May 31, 2021

The Governance Facilitators have placed a Governance Poll into the [voting system](https://vote.makerdao.com/polling) on behalf of the MakerDAO mandated actors. This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on Monday, May 31 at 16:00 UTC.

**This is a binary vote.** 
- **You may vote for a single option.** 
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

This poll allows the MakerDAO governance community to signal their support or opposition to adding SLP-DAI-ETH as a new vault type in the Maker Protocol with the parameters below.

### Initial Collateral Parameters

* Underlying Collateral: Sushiswap DAI-ETH LP Token
* [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee): 4.5%
* [Liquidation Ratio](https://community-development.makerdao.com/en/learn/governance/param-liquidation-ratio): 125%
* [Debt Ceiling](https://community-development.makerdao.com/en/learn/governance/param-debt-ceiling): 1 million DAI
* [Debt Floor (`dust`)](https://community-development.makerdao.com/en/learn/governance/param-debt-floor): 5000 DAI

### SushiJoin Adapter

This vault type will use the SushiJoin Adapter which will allow users to receive any Sushiswap farming rewards that are available for their SLP-DAI-ETH tokens through the `MasterChefV2` contract.

Please review the following links containing information about CropJoin to inform your position before voting.
* [SushiJoin Technical Assessment](https://forum.makerdao.com/t/technical-overview-of-the-sushiswap-variant-of-the-cropjoin-adapter-sushijoin/8122)
* [MIP30: Farmable Adapter (`CropJoin`)](https://mips.makerdao.com/mips/details/MIP30)

### Liquidation Parameters

* [Auction Price Function (`calc`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): Stairstep Exponential
* [Price Change Multiplier (`cut`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 0.995
* [Price Change Interval (`step`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 125 seconds
* [Auction Price Multiplier (`buf`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-multiplier): 1.15
* [Liquidation Penalty (`chop`)](https://community-development.makerdao.com/en/learn/governance/param-liquidation-penalty): 13%

**Limits**
* [Local Liquidation Limit (`ilk.hole`)](https://community-development.makerdao.com/en/learn/governance/param-local-liquidation-limit): 1 million DAI
* [Maximum Auction Drawdown (`cusp`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-drawdown): 0.6
* [Maximum Auction Duration (`tail`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-duration): 215 minutes
* [Breaker Price Tolerance (`tolerance`)](https://community-development.makerdao.com/en/learn/governance/param-breaker-price-tolerance): 0.7

**Incentives**
* [Proportional Kick Incentive (`chip`)](https://community-development.makerdao.com/en/learn/governance/param-proportional-kick-incentive): 0.1%
* [Flat Kick Incentive (`tip`)](https://community-development.makerdao.com/en/learn/governance/param-flat-kick-incentive): 300

Please review the following forum threads containing information about SLP-DAI-ETH (Sushiswap DAI-ETH LP Token) to inform your position before voting.
* [Proposal Thread](https://forum.makerdao.com/t/slp-dai-eth-mip6-collateral-onboarding-application/7957)
* [Risk Core Unit Evaluation](https://forum.makerdao.com/t/slp-dai-eth-collateral-onboarding-risk-evaluation/8237)
* [Protocol Engineering Core Unit Evaluation](https://forum.makerdao.com/t/slp-dai-eth-erc20-token-smart-contract-technical-assessment/7954)
* [Oracles Team Evaluation](https://forum.makerdao.com/t/slp-v2-dai-eth-collateral-onboarding-oracle-assessment-mip10c3-sp33/8405)

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* SLP-DAI-ETH (Sushiswap DAI-ETH LP Token) will be onboarded in a future executive vote as the Protocol Engineering Core Unit's schedule allows. 
* It is expected that this executive vote will take place within 30 days of this poll passing, absent external factors.
* If the executive vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
