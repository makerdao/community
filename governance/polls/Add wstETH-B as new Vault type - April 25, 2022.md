---
title: Add wstETH-B as a new Vault Type - April 25, 2022
summary: This poll proposes system parameters which could be used to initialize a low-fee, low-leverage vault type with wstETH as collateral.
discussion_link: https://forum.makerdao.com/t/introduction-risk-parameters-for-wstETH-C-vault/14669
vote_type: Plurality Voting
categories:
   - Collateral
   - Risk Variable
   - High Impact
options:
   0: Abstain
   1: Yes
   2: No
start_date: 2022-04-25T16:00:00
end_date: 2022-04-28T16:00:00
---
# Poll: Add wstETH-B as a new Vault Type - April 25, 2022

The Governance Facilitators have placed a Governance Poll into the [voting system](https://vote.makerdao.com/polling) on behalf of the MakerDAO mandated actors. This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on Monday, April 25 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

This poll allows the MakerDAO governance community to signal their support or opposition to adding wstETH-B as a new vault type in the Maker Protocol with the parameters below.

Note that this proposed vault type was previously discussed as wstETH-C, however, if it is voted to be added to the Maker Protocol it will be added under the wstETH-B ilk name to maintain sequential naming conventions as discussed [here](https://forum.makerdao.com/t/ilk-names-versus-display-names-for-vault-types/14759).

### Initial Vault Parameters

* Underlying Collateral: wstETH (Wrapped Lido Staked ETH)
* [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee): 0.75%
* [Liquidation Ratio](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio): 185%
* [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line): 150 million DAI
* [Debt Floor (`dust`)](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-floor): 5,000 DAI
* [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap): 15 million DAI
* [Ceiling Increase Cooldown (`ttl`)](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl): 8 hours

### Liquidation Parameters

* [Auction Price Function (`calc`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-function): Exponential Stair Step
* [Price Change Multiplier (`cut`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-function#exponential-stair-step): 0.99
* [Price Change Interval (`step`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-function#exponential-stair-step): 90 seconds
* [Auction Price Multiplier (`buf`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-multiplier): 1.2
* [Liquidation Penalty (`chop`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-penalty): 13%

**Limits**

* [Local Liquidation Limit (`ilk.hole`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-local-liquidation-limit): 10 million DAI
* [Maximum Auction Drawdown (`cusp`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-max-auction-drawdown): 0.4
* [Maximum Auction Duration (`tail`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-max-auction-duration): 140 minutes
* [Breaker Price Tolerance (`tolerance`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-breaker-price-tolerance): 0.5

**Incentives**

* [Proportional Kick Incentive (`chip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-proportional-kick-incentive): 0.1%
* [Flat Kick Incentive (`tip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-flat-kick-incentive): 300 DAI

Please review the following forum threads containing information about wstETH-B to inform your position before voting.
* [Proposal Thread](https://forum.makerdao.com/t/introduction-risk-parameters-for-wstETH-C-vault/14669)
* [Risk Core Unit Evaluation](https://forum.makerdao.com/t/steth-collateral-onboarding-risk-evaluation/9061)
* [Protocol Engineering Core Unit Evaluation](https://forum.makerdao.com/t/steth-erc20-token-smart-contract-technical-assessment/9284)
* [Oracles Core Unit Evaluation](https://forum.makerdao.com/t/wstETH-Bollateral-onboarding-oracle-assessment-mip10c3-sp42/10881)

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* wstETH-B will be onboarded in a future executive vote as the Protocol Engineering Core Unit's schedule allows.
* It is expected that this executive vote will take place within 30 days of this poll passing, absent external factors.
* If the executive vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
